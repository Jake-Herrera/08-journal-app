import {checkingCredentials, login, logout } from ".";
import { Dispatch } from 'redux';
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export function checkingAtuthentication(email:string, password:string): ThunkAction<void, RootState, unknown, AnyAction> {
    return async(dispatch:Dispatch) => {
        dispatch(checkingCredentials());
    }
}

export function startGoogleSingIn(email:string, password:string): ThunkAction<void, RootState, unknown, AnyAction> {
    return async(dispatch:Dispatch) => {
        dispatch(checkingCredentials());
    }
}