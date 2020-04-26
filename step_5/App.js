import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      totalCHCases: '',
      totalCHRecovered: '',
      totalCHDeaths: '',
      totalNLCases: '',
      totalNLRecovered: '',
      totalNLDeaths: '',
      totalBECases: '',
      totalBERecovered: '',
      totalBEDeaths: '',
      totalBRCases: '',
      totalBRRecovered: '',
      totalBRDeaths: '',
      totalRUCases: '',
      totalRURecovered: '',
      totalRUDeaths: '',
      totalIRCases: '',
      totalIRRecovered: '',
      totalIRDeaths: '',
      totalUKCases: '',
      totalUKRecovered: '',
      totalUKDeaths: '',
      totalGRCases: '',
      totalGRRecovered: '',
      totalGRDeaths: '',
      totalTRCases: '',
      totalTRRecovered: '',
      totalTRDeaths: '',
      totalUSCases: '',
      totalUSRecovered: '',
      totalUSDeaths: '',
      totalCNCases: '',
      totalCNRecovered: '',
      totalCNDeaths: '',
      totalCACases: '',
      totalCARecovered: '',
      totalCADeaths: '',
      totalESCases: '',
      totalESRecovered: '',
      totalESDeaths: '',
      totalFRCases: '',
      totalFRRecovered: '',
      totalFRDeaths: '',
      totalITCases: '',
      totalITRecovered: '',
      totalITDeaths: '',
      jsondata:[]
    };
}
  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          totalCHCases: json['Countries'][204]['TotalConfirmed'],
        });
        this.setState({
          totalCHRecovered: json['Countries'][204]['TotalRecovered'],
        });        
        this.setState({
          totalCHDeaths: json['Countries'][204]['TotalDeaths'],
        });
        this.setState({
          totalNLCases: json['Countries'][154]['TotalConfirmed'],
        });
        this.setState({
          totalNLRecovered: json['Countries'][155]['TotalRecovered'],
        });        
        this.setState({
          totalNLDeaths: json['Countries'][156]['TotalDeaths'],
        });
        this.setState({
          totalBECases: json['Countries'][21]['TotalConfirmed'],
        });
        this.setState({
          totalBERecovered: json['Countries'][21]['TotalRecovered'],
        });        
        this.setState({
          totalBEDeaths: json['Countries'][21]['TotalDeaths'],
        });
        this.setState({
          totalBRCases: json['Countries'][30]['TotalConfirmed'],
        });
        this.setState({
          totalBRRecovered: json['Countries'][30]['TotalRecovered'],
        });        
        this.setState({
          totalBRDeaths: json['Countries'][30]['TotalDeaths'],
        });
        this.setState({
          totalRUCases: json['Countries'][181]['TotalConfirmed'],
        });
        this.setState({
          totalRURecovered: json['Countries'][181]['TotalRecovered'],
        });        
        this.setState({
          totalRUDeaths: json['Countries'][181]['TotalDeaths'],
        });
        this.setState({
          totalIRCases: json['Countries'][103]['TotalConfirmed'],
        });
        this.setState({
          totalIRRecovered: json['Countries'][103]['TotalRecovered'],
        });        
        this.setState({
          totalIRDeaths: json['Countries'][103]['TotalDeaths'],
        });
        this.setState({
          totalUKCases: json['Countries'][234]['TotalConfirmed'],
        });
        this.setState({
          totalUKRecovered: json['Countries'][234]['TotalRecovered'],
        });        
        this.setState({
          totalUKDeaths: json['Countries'][234]['TotalDeaths'],
        });
        this.setState({
          totalGRCases: json['Countries'][81]['TotalConfirmed'],
        });
        this.setState({
          totalGRRecovered: json['Countries'][81]['TotalRecovered'],
        });        
        this.setState({
          totalGRDeaths: json['Countries'][81]['TotalDeaths'],
        });
        this.setState({
          totalTRCases: json['Countries'][226]['TotalConfirmed'],
        });
        this.setState({
          totalTRRecovered: json['Countries'][226]['TotalRecovered'],
        });        
        this.setState({
          totalTRDeaths: json['Countries'][226]['TotalDeaths'],
        });
        this.setState({
          totalUSCases: json['Countries'][235]['TotalConfirmed'],
        });
        this.setState({
          totalUSRecovered: json['Countries'][235]['TotalRecovered'],
        });        
        this.setState({
          totalUSDeaths: json['Countries'][235]['TotalDeaths'],
        });
        this.setState({
          totalCNCases: json['Countries'][45]['TotalConfirmed'],
        });
        this.setState({
          totalCNRecovered: json['Countries'][45]['TotalRecovered'],
        });        
        this.setState({
          totalCNDeaths: json['Countries'][45]['TotalDeaths'],
        });
        this.setState({
          totalCACases: json['Countries'][39]['TotalConfirmed'],
        });
        this.setState({
          totalCARecovered: json['Countries'][39]['TotalRecovered'],
        });        
        this.setState({
          totalCADeaths: json['Countries'][39]['TotalDeaths'],
        });
        this.setState({
          totalESCases: json['Countries'][207]['TotalConfirmed'],
        });
        this.setState({
          totalESRecovered: json['Countries'][207]['TotalRecovered'],
        });        
        this.setState({
          totalESDeaths: json['Countries'][207]['TotalDeaths'],
        });
        this.setState({
          totalFRCases: json['Countries'][74]['TotalConfirmed'],
        });
        this.setState({
          totalFRRecovered: json['Countries'][74]['TotalRecovered'],
        });        
        this.setState({
          totalFRDeaths: json['Countries'][74]['TotalDeaths'],
        });
        this.setState({
          totalITCases: json['Countries'][108]['TotalConfirmed'],
        });
        this.setState({
          totalITRecovered: json['Countries'][108]['TotalRecovered'],
        });        
        this.setState({
          totalITDeaths: json['Countries'][108]['TotalDeaths'],
        });
        this.setState({ 
          jsondata: json.Global,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (

      <View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            
            latitude: 37,
            longitude: 10,
            latitudeDelta: 35,
            longitudeDelta: 35,
            
          }}
        >
          <Marker
          coordinate = {{latitude: 47, longitude: 8}}
          >
            <Callout>
              <Text style = {styles.text}>Switzerland</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalCHCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalCHRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalCHDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 52, longitude: 5}}
          >
            <Callout>
              <Text style = {styles.text}>Netherlands</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalNLCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalNLRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalNLDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 50.5, longitude: 4.6}}
          >
            <Callout>
              <Text style = {styles.text}>Belgium</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalBECases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalBERecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalBEDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: -14, longitude: -51}}
          >
            <Callout>
              <Text style = {styles.text}>Brazil</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalBRCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalBRRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalBRDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 61, longitude: 105}}
          >
            <Callout>
              <Text style = {styles.text}>Russia</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalRUCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalRURecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalRUDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 32, longitude: 53}}
          >
            <Callout>
              <Text style = {styles.text}>Iran</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalIRCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalIRRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalIRDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 55, longitude: -3}}
          >
            <Callout>
              <Text style = {styles.text}>United Kingdom</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalUKCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalUKRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalUKDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 51, longitude: 10}}
          >
            <Callout>
              <Text style = {styles.text}>Germany</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalGRCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalGRRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalGRDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 38, longitude: 35}}
          >
            <Callout>
              <Text style = {styles.text}>Turkey</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalTRCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalTRRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalTRDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 40, longitude: -96}}
          >
            <Callout>
              <Text style = {styles.text}>United States of America</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalUSCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalUSRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalUSDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 35.8, longitude: 104}}
          >
            <Callout>
              <Text style = {styles.text}>China</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalCNCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalCNRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalCNDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 56, longitude: -106}}
          >
            <Callout>
              <Text style = {styles.text}>Canada</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalCACases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalCARecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalCADeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 40, longitude: -3}}
          >
            <Callout>
              <Text style = {styles.text}>Spain</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalESCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalESRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalESDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 46, longitude: 2}}
          >
            <Callout>
              <Text style = {styles.text}>France</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalFRCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalFRRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalFRDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 43, longitude: 12}}
          >
            <Callout>
              <Text style = {styles.text}>Italy</Text>
              <Text style = {styles.text}>Total Confirmed:{this.state.totalITCases}</Text>
              <Text style = {styles.text}>Total Recovered:{this.state.totalITRecovered}</Text>
              <Text style = {styles.text}>Total Deaths:{this.state.totalITDeaths}</Text>
            </Callout>
          </Marker>

        </MapView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  popup:{
    backgroundColor: '#ff0'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#ff0'
  },
  map: {
     height: '100%',
     width: '100%'
  },
    text: {
    color: '#000',
    padding: 2,
    fontSize:15,
    textAlign: 'center'
  },
});