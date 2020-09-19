// globalStates --> here

import {atom} from "recoil"

export const globaluser = atom({
    key: 'globaluser',
    default:{},
});
export const globalplaylists = atom({
    key: 'globalplaylists',
    default:[],
});
export const globalplaying = atom({
    key: 'globalplaying',
    default:false,
});
export const globalitem = atom({
    key: 'globalitem',
    default:null,
});
export const globaltoken = atom({
    key: 'globaltoken',
    default:null,
});
export const globaldiscover = atom({
    key: 'globaldiscover',
    default:null,
});