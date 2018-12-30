export interface FetchedBusinesses {
  restaurants : [{
    id: number,
    name: string,
    backgroundImageURL: any,
    preppedImageURL: any,
    category: string,
    contact: {
      phone: number,
      formattedPhone: string,
      twitter: string,
      facebook: number,
      facebookUsername: string, 
      facebookName: string
    },
    location: {
      address: string,
      crossStreet: string,
      lat: string,
      lng: string,
      postalCode: number,
      cc: string,
      city: string,
      state: string,
      country: string,
      formattedAddress: {
        streetNum: string,
        cityStateZip: string,
        country: string
      }
    }//location
  }];//restaurants
}
