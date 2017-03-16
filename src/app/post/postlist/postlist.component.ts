import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PostlistService } from './services/postlist.service';
import { Post } from '../model/post-model';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  public maxSize: number = 5;
  public itemsPerPage: number = 5;
  public totalItems: number;

  public currentPage:number = 1;

  public searchText:string;
  public searchTextStream:Subject<string> = new Subject<string>();

  public postList:Array<Post>;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postService: PostlistService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.loadData(this.searchText, this.currentPage);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText, this.currentPage)
      })
  }

  public loadData(searText:string, page:number) {
    let offset = (this.currentPage -1) * this.itemsPerPage;
    let end = (this.currentPage) *this.itemsPerPage;

    return this.postService.getPostList(searText, page).subscribe(
      resp => {
        this.totalItems = resp['total'];
        this.postList = resp['items'].slice(offset, end>this.totalItems?this.totalItems:end)
      },
      error => console.log(error),
      () => {}
    )
  }

  public pageChanged(event:any): void {
    this.router.navigateByUrl("posts/page/"+ event.page);
  }

  public searchChanged($event):void {
    this.searchTextStream.next(this.searchText);
  }
}
