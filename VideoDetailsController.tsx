import {Component} from 'react';
import { Dimensions } from 'react-native';

interface IProps{
    navigation?:any
    route:any
}

interface IState{
    orientation:string
}


export default class VideoDetailsController extends Component<IProps, IState> {
    constructor(props:any) {
        super(props);
    
        const isPortrait = () => {
          const dim = Dimensions.get('screen');
          return dim.height >= dim.width;
        };
    
        this.state = {
          orientation: isPortrait() ? 'portrait' : 'landscape',
        };
    
        Dimensions.addEventListener('change', () => {
          this.setState({
            orientation: isPortrait() ? 'portrait' : 'landscape',
          });
        });
      }
    
    //   render() {
    //     if (this.state.orientation === 'portrait') {
    //       return (
    //         <View style={{backgroundColor: 'red', width: 300, height: 500}}>
    //           <Text style={{color: 'white'}}>Home</Text>
    //         </View>
    //       );
    //     } else {
    //       return (
           
    //         <View style={{backgroundColor: 'red', width: 500, height: 300}}>
    //           <Text style={{color: 'white'}}>Home</Text>
    //         </View>
    //       );
    //     }
    //   }
    // }
}
