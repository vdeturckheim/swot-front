import {Component, Input, OnInit} from '@angular/core';
import {SWOT} from "../../../../typings/swot";
import {Post} from "../../../../typings/post";
import {POSTService} from "../../../../services/swots/post.service";
import {NgForm} from '@angular/common';

@Component({
    selector: 'swot-area',
    template: require('./swotArea.component.html'),
    styles: [require('./swotArea.component.scss')],
    providers: [POSTService],
    directives: [],
    pipes: []
})
export class SWOTAreaComponent implements OnInit {
    ngOnInit(): any {

        this._postService.list(this.swot._id)
            .map((postList) => postList.filter((post) => post.category === this.area))
            .subscribe((result) => {

                this.postList = result
            });

        return undefined;
    }

    private _postService: POSTService;

    constructor(postService:POSTService) {
        this._postService = postService;
    }

    @Input() public area: String;
    @Input() public swot: SWOT;

    public postList: Array<Post>

    create(post: Post, form: NgForm): any {
        post.category = this.area;
        const sub = this._postService.create(this.swot._id, post)
            .subscribe((res) => {

                this.postList.push(res);
                // TODO: clear form
                sub.unsubscribe();
            })
    }
}
