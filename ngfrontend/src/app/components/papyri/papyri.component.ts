import { Component, OnInit, NgZone  } from '@angular/core';
import { PapyriService} from '../../services/papyri.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-roster',
  templateUrl: './papyri.component.html',
  styleUrls: ['./papyri.component.css']
})
export class PapyriComponent implements OnInit {

  Papyri:any = [];
  category: any;
  century: any;

  constructor(
    private papyriService: PapyriService,
    private activatedRoute: ActivatedRoute
  ) { 
    
    if (activatedRoute.snapshot.url[0].path == 'findByCentury') { 
      this.century = this.activatedRoute.snapshot.paramMap.get('century');      
      this.papyriService.FindByCentury(this.century).subscribe(
        res => {
          this.Papyri = res;
        });
    } else if (activatedRoute.snapshot.url[0].path == 'findByCategory') {
      this.category = this.activatedRoute.snapshot.paramMap.get('category');      
      this.papyriService.FindByCategory(this.category).subscribe(
        res => {
          this.Papyri = res;
        });
    } else {      
      this.papyriService.GetAllPapyri().subscribe(
        res => {        
          this.Papyri = res;
      }); 
    }


  }

  ngOnInit(): void {}

  deletePlayer(sign:any, i:any) {
    console.log("Deleting " + sign);
    if(window.confirm('Are you sure you want to delete this papyrus from the collection?')) {
      this.papyriService.DeletePapyrus(sign).subscribe((res) => {
        this.Papyri.splice(i, 1);
      })
    }
  }

}
