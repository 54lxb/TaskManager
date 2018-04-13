import { trigger, state, transition, style, animate, keyframes, group } from "@angular/animations";

export const slideToRight = trigger('routerAnima', [
    state('void', style({'position':'fixed', 'width':'100%', 'height':'80%'})),
    state('*', style({'position':'fixed', 'width':'100%', 'height':'80%'})),
    transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}), 
        group([
            animate('0.5s ease-in-out', style({transform:'translateX(0)'})),
            animate('0.3s ease-in', style({opacity: 1}))
        ])
    ]),
    transition('* => void', [
        style({transform: 'translateX(0)'}), 
        group([
            animate('0.5s ease-in-out', style({transform:'translateX(100%)'})),
            animate('0.3s ease-in', style({opacity: 0}))
        ])
    ])
])

// 【void => *】 可替换为 【:enter】
// 【* => void】 可替换为 【:leave】