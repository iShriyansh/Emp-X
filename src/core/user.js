import React from 'react'


export function setUser(user) {
    console.log("sETINGGGGGGGGGGGG USER.........");
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
    console.log("getting user.........");
 
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return user;
}

export function removeUser() {
    console.log("removing user.........");
    localStorage.removeItem('user');
}

export function isAuthenticated(){
    console.log("checking if user is authenticated.........");
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if(user){
        return true;
    }
    return false;
}