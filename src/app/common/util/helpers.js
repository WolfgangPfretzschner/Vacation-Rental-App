import moment from 'moment'

export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
  }
} 

export const createNewBooking = (user, photoURL, booking) => {
  booking.checkin_date = booking.checkout_date.start._d
  booking.checkout_date = booking.checkout_date.end._d
  return {
    ...booking,
    guestUid: user.uid,
    guestName: user.displayName,
    hostPhotoURL: photoURL || '/assets/user.png',
    created: moment(Date.now())._d,
    property:','
  }
}

