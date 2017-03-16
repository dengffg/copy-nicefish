import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PaginationModule} from 'ng2-bootstrap';
import {SharedModule} from '../shared/shared.module';

import {PostlistComponent} from './postlist/postlist.component';
import {PostlistService} from './postlist/services/postlist.service';
import {BooleanPipe} from '../utils/boolean-pipe';

import {postRoutes} from './post.routes';

@NgModule({
    imports: [
        SharedModule,
        PaginationModule.forRoot(),
        RouterModule.forChild(postRoutes)
    ],
    declarations: [
        BooleanPipe,
        PostlistComponent
    ],
    exports: [BooleanPipe],
    providers: [
        PostlistService
    ]
})
export class PostModule {}