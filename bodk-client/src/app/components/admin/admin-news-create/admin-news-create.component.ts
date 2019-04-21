import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from 'src/app/core/services/news.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-news-create',
  templateUrl: './admin-news-create.component.html',
  styleUrls: ['./admin-news-create.component.css']
})
export class AdminNewsCreateComponent implements OnInit {

  @ViewChild('f') newsForm:NgForm
  
  constructor(private newsService:NewsService, private router:Router ,private toastr:ToastrService) { }

  ngOnInit() {
  }

  createNews(){
     console.log(this.newsForm.value)
     const body = this.newsForm.value;
     body['date']= Date.now();
     this.newsService.addNews(body).subscribe(() => {
      this.toastr.success('Campaign added successfully', 'Success!');
      this.router.navigate(['/admin'])
     })
  }
 

}
