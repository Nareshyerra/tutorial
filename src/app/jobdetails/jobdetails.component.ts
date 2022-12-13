import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {


constructor(public jobs:JobsService){}
jobsdata: any;
ismsg = false
ngOnInit(): void {
  
this.jobs.getmethod().subscribe(data=>{
  this.jobsdata = data
  console.log(data)
});



}

postjob(data:any){
  this.jobs.postmethod(data).subscribe(data=>{
    this.ismsg=true
    console.log(data)
  })
}

}

