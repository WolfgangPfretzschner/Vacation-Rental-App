import moment from 'moment'

export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
  }
} 

export const createNewBooking = (user, photoURL, event) => {
   // debugger
  event.checkin_date = event.checkout_date.start._d
  event.checkout_date = event.checkout_date.end._d
  return {
   
    ...event,
    guestUid: user.uid,
    guestName: user.displayName,
    hostPhotoURL: photoURL || '/assets/user.png',
    created: moment(Date.now())._d,
    property:','
   //  {
   //    [user.uid]: {
   //      going: true,
   //      joinDate: moment(Date.now())._d,
   //      photoURL: photoURL || '/assets/user.png',
   //      displayName: user.displayName,
   //      host: true
   //    }
   //  }
  }
}

export const createDataTree = dataset => {
    let hashTable = Object.create(null);
    dataset.forEach(a => hashTable[a.id] = {...a, childNodes: []});
    let dataTree = [];
    dataset.forEach(a => {
        if (a.parentId) hashTable[a.parentId].childNodes.push(hashTable[a.id]);
        else dataTree.push(hashTable[a.id])
    });
    return dataTree
};