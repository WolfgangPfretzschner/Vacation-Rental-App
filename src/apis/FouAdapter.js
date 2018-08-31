

    const baseUrl = 'https://api.foursquare.com/v2/venues/5893aa7e1e1de501d95e372e/photos?'
    const clientId = 'client_id=LYLGF2QXWMB1MZC0TLDFIKI0KSIWEQIO24LEMWJWWC4GL00L'
    const clientSec = 'client_secret=22DLY2T1NRWHMB0KN4MKALIVQXB0U13KCP4BJTMYN0FGMOF1'
    const locId = '5893aa7e1e1de501d95e372e'
    const token = 'oauth_token=OAHNAK10ZIN0UVCODPJQORTEA3IRST3ESAR5V4INZLCF04HK'
    const v ='v=20180817'
    const events = 'venues'
    const url = `https://api.foursquare.com/v2/${event}/${locID}/photos?${token}&${v}`
    
    class Adapter {
        
        
    fetchWithNewLocation = () => {
        fetch(url)

    }



}

export default Adapter;