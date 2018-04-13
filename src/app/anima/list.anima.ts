import { trigger, stagger, state, transition, style, animate, keyframes, group, query } from "@angular/animations";

export const listAnima = trigger('listAnima', [
    transition('* => *', [
        query(':enter', style({opacity: 0})),
        query(':enter', stagger(100, [
            animate('1s', style({opacity:1}))
        ])),
        query(':leave', style({opacity: 1})),
        query(':leave', stagger(100, [
            animate('1s', style({opacity:0}))
        ]))
    ])
])