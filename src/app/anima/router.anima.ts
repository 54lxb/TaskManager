import { trigger, state, transition, style, animate, keyframes } from "@angular/animations";

export const slideToRight = trigger('routerAnima', [
    state('in', style({'border-left-width' : '0.5em'})),
    state('out', style({'border-left-width' : '1.0em'})),
    transition('hover => out', animate('100ms ease-in')),
    transition('out => hover', animate('100ms ease-out'))
])