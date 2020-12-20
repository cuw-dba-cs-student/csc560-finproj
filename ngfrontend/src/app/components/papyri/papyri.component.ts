import { Component, OnInit, NgZone  } from '@angular/core';
import { PapyriService} from '../../services/papyri.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-roster',
  templateUrl: './papyri.component.html',
  styleUrls: ['./papyri.component.css']
})
export class PapyriComponent implements OnInit {

  Papyri:any = [];
  mode: string = '';
  category: any;
  century: any;
  queryForm: FormGroup;


  constructor(    
    private papyriService: PapyriService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    
    this.queryForm = this.formBuilder.group({
      lookUpVal:['']
    })

    if (activatedRoute.snapshot.url[0].path == 'findByCentury') { 
      this.mode = 'DISPLIST';
      this.century = this.activatedRoute.snapshot.paramMap.get('century');      
      this.papyriService.FindByCentury(this.century).subscribe(
        res => {
          console.log('FindByCentury response:');
          console.log(res);
          this.Papyri = res;
        });
    } else if (activatedRoute.snapshot.url[0].path == 'findByCategory') {
      this.mode = 'DISPLIST';
      this.category = this.activatedRoute.snapshot.paramMap.get('category'); 
      this.papyriService.FindByCategory(this.category).subscribe(
        res => {
          this.Papyri = res;
        });
    } else if (activatedRoute.snapshot.url[0].path == 'allPapyri') {      
      this.mode = 'DISPLIST';
      this.papyriService.GetAllPapyri().subscribe(
        res => {        
          this.Papyri = res;
      }); 
    } else if (activatedRoute.snapshot.url[0].path == 'papyriByCentury') {      
      this.mode = 'CENTURYQUERY';
    } else if (activatedRoute.snapshot.url[0].path == 'papyriByCategory') {  
      this.mode = 'CATEGORYQUERY';
    }


  }

  ngOnInit(): void {}

  deletePapyrus(sign:any, i:any) {
    console.log("Deleting " + sign);
    if(window.confirm('Are you sure you want to delete this papyrus from the collection?')) {
      this.papyriService.DeletePapyrus(sign).subscribe((res) => {
        this.Papyri.splice(i, 1);
      })
    }
  }

  categoryQuery(): any {
    console.log(this.queryForm.value);
    const category = this.queryForm.get('lookUpVal')?.value;
    this.ngZone.run(() => this.router.navigateByUrl(`/findByCategory/${category}`));
    //this.queryForm.get('lookUpVal')?.value
  }

  centuryQuery(): any {
    console.log(this.queryForm.value);
    const centruy = this.queryForm.get('lookUpVal')?.value;
    this.ngZone.run(() => this.router.navigateByUrl(`/findByCentury/${centruy}`));
  }

}
