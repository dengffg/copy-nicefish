import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Directive({
    selector: 'echart'
})

export class EChartOptionDirective1 implements OnInit {
    @Input('option') option: any;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        echarts.init(this.el.nativeElement).setOption(this.option);    
    }
}