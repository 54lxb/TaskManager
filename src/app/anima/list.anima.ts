import { trigger, stagger, state, transition, style, animate, keyframes, group, query } from "@angular/animations";

export const listAnima = trigger('listAnima', [
    transition('* => *', [
        query(':enter', style({opacity: 0}),{optional:true}),
        query(':enter', stagger(100, [
            animate('1s', style({opacity:1}))
        ]),{optional:true}),
        query(':leave', style({opacity: 1}),{optional:true}),
        query(':leave', stagger(100, [
            animate('1s', style({opacity:0}))
        ]),{optional:true})
    ])
])

// stagger 同事添加多个元素时，控制元素按序出场，不然会所有元素听时出现；