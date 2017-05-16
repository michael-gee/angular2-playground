export class LocationService {

  selected:number;

  getLocation(){
    var locationOptions = {
      '/': () => {
        this.selected = 0;
        return '/';
      },
      '/playground': () => {
        this.selected = 1;
        return '/playground';
      },
      '/sports-demo': () => {
        this.selected = 2;
        return '/sports-demo';
      }
    }
    locationOptions[window.location.pathname]();
  }

}
