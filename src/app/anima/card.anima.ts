import { trigger, state, transition, style, animate, keyframes } from "@angular/animations";

export const cardAnima = trigger('card', [
    state('out', style({
        transform: 'scale(1)', 
        'box-shadow' : 'none'
    })),
    state('hover', style({
        transform: 'scale(1.1)', 
        'box-shadow' : '0.3em 0.3em 0.3em 0.6em #ccc'
    })),
    transition('out => hover', animate('200ms ease-in')),
    transition('hover => out', animate('200ms ease-out'))
])