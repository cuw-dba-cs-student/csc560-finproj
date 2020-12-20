import { Component, OnInit, NgZone  } from '@angular/core';
import { PapyriService} from '../../services/papyri.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-papyrus-details',
  templateUrl: './papyrus-details.component.html',
  styleUrls: ['./papyrus-details.component.css']
})
export class PapyrusDetailsComponent implements OnInit {

  sign: any;  
  papyrusForm: FormGroup;
  mode: string = '';
  

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private papyriService: PapyriService
  ) { 
    
    this.papyrusForm = this.formBuilder.group({
      Name: [''],
      Sign: [''],
      Reference: [''],
      Date: [''],
      Century: [''],
      EarlyDate: [''],
      LateDate: [''] ,
      GospelOfJohnText: [''],
      PlaceOfDiscovery: [''],
      Category: [''], 
      DiscoveryLatX: [''],
      DiscoveryLongY: [''],
      id:['']
    })

//    console.log(this.activatedRoute.snapshot);
//    console.log(this.activatedRoute.snapshot.url[0].path);

    if (this.activatedRoute.snapshot.url[0].path == 'getPapyrus') {

      this.mode = 'UPDATE';
                
      this.sign = this.activatedRoute.snapshot.paramMap.get('sign');
            
//      console.log("Sign " + this.sign);
      
      this.papyriService.GetPapyrus(this.sign).subscribe(res => {                        
//        console.log('Response from GetPapyrus ENDPOINT:');
//        console.log(res);
//        console.log(this.papyrusForm);
        // Set form vals 
        this.papyrusForm.patchValue({
          Name: res['Name'],
          Sign: res['Sign'],
          Reference: res['Reference'],
          Date: res['Date'],
          Century: res['Century'],
          EarlyDate: res['EarlyDate'],
          LateDate: res['LateDate'] ,
          GospelOfJohnText: res['GospelOfJohnText'],
          PlaceOfDiscovery: res['PlaceOfDiscovery'],
          Category: res['Category'], 
          DiscoveryLatX: res['DiscoveryLatX'],
          DiscoveryLongY: res['DiscoveryLongY'],
          id: res['_id']                    
        });
      });
    } 

    if (this.activatedRoute.snapshot.url[0].path == 'addPapyrus') {
      
      this.mode = 'INSERT';

      this.papyrusForm = this.formBuilder.group({
        Name: [''],
        Sign: [''],
        Reference: [''],
        Date: [''],
        Century: [''],
        EarlyDate: [''],
        LateDate: [''],
        GospelOfJohnText: [''],
        PlaceOfDiscovery: [''],
        Category: [''],
        DiscoveryLatX: [''],
        DiscoveryLongY: ['']
      })      
    }
  } // End Constructor

  ngOnInit(): void {}

  onUpdate() {
    console.log('onUpdate()');
    console.log(this.papyrusForm.value);
    this.papyriService.UpdatePapyrus(  this.papyrusForm.get('Sign')?.value,  this.papyrusForm.value ) 
      .subscribe(()=> {
        console.log('Papyrus updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/allPapyri'))
      }, (err) => {
        console.log(err);
      });   
  }

  onSubmit(): any {
    console.log(this.papyrusForm.value);
    
    this.papyriService.AddPapyrus(this.papyrusForm.value)
    .subscribe(() => {
        console.log('Papyrus added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/allPapyri'))
      }, (err) => {
        console.log(err);
    }); 
  }

}
