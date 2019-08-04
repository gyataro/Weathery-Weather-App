import Layout from '../components/Layout.js';
import Icon from '../utils/DisplayIcon';

import React, { Component } from "react";
import Toggle from '../utils/Toggle';

//CSS file
import "../styles/main.scss";

class Settings extends Component {
  constructor() {
    super();
    this.state = { 
      isPersistent: false,
      isImperial: true,
      isLanguage: 'en',
      isDark: false,
      showInfo: true,
      showSunTime: true,
      showWeekly: true,
      showGraph: false,
      showUV: false,
      showLife: false
    };
  }

  settingsChangeCallback = (checked, event, id) => {
    localStorage.setItem(id, checked);
    this.setState({ 
      [id]: checked 
    });
  }

  componentDidMount() {
    // All settings except language
    const settingsArray = [
      'isPersistent', 
      'isImperial', 
      'isLanguage',
      'isDark',
      'showInfo',
      'showSunTime',
      'showWeekly',
      'showGraph',
      'showUV',
      'showLife'
    ];

    for(let i = 0; i < settingsArray.length; i++){
      let tempSetting = localStorage.getItem(settingsArray[i]);
      if(tempSetting){
        this.setState({ 
          [settingsArray[i]]: (settingsArray[i] === 'isLanguage')? tempSetting : (tempSetting === 'true')
        });
      }
    }
  }

  settingsDropdownChange = (event) => {
    localStorage.setItem('isLanguage', event.target.value);
    this.setState({isLanguage: event.target.value});
    console.log(this.state.isLanguage)
  }

  render(){
    const languages = ['en', 'es', 'zh', 'zh-tw', 'ja', 'ko', 'id'];
    const languageFull = ['English', 'Español', '简体中文', '繁體中文', '日本語', '한국어', 'Bahasa Melayu']
    const languageSelection = [];
    for(let i = 0; i < languages.length; i++){
      languageSelection.push(
        <option key={languages[i]} value={languages[i]}>{languageFull[i]}</option>
      )
    }
    return (
      <Layout>
        <div className='settings-container'>
          <h1 id='settings-title'><Icon class='' icon='settings' />&nbsp;&nbsp;Settings</h1>
          <div className='col-12'>
            <div className='card settings'>
              <h3>General</h3>
              <ul>
                <li>
                  <div className='container-70'>
                    Use imperial units (celsius)
                  </div>
                  <div className='container-30'>
                    <Toggle id='isImperial' checked={this.state.isImperial} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    Language
                  </div>
                  <div className='container-30'>
                    <select value={this.state.isLanguage} onChange={this.settingsDropdownChange}>
                      {languageSelection}
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12'>
            <div className='card settings'>
              <h3>Appearance</h3>
              <ul>
                <li>
                  <div className='container-70'>
                    Toggle dark mode
                  </div>
                  <div className='container-30'>
                    <Toggle id='isDark' checked={this.state.isDark} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12'>
            <div className='card settings'>
              <h3>Panels</h3>
              <ul>
                <li>
                  <div className='container-70'>
                    Show more weather info
                  </div>
                  <div className='container-30'>
                    <Toggle id='showInfo' checked={this.state.showInfo} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    Show sunrise / sunset time
                  </div>
                  <div className='container-30'>
                    <Toggle id='showSunTime' checked={this.state.showSunTime} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    Show weekly info
                  </div>
                  <div className='container-30'>
                    <Toggle id='showWeekly' checked={this.state.showWeekly} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    Show graphical data
                  </div>
                  <div className='container-30'>
                    <Toggle id='showGraph' checked={this.state.showGraph} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    Show UV warning
                  </div>
                  <div className='container-30'>
                    <Toggle id='showUV' checked={this.state.showUV} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
                <li>
                  <div className='container-70'>
                    Show life index
                  </div>
                  <div className='container-30'>
                    <Toggle id='showLife' checked={this.state.showLife} settingsChangeCallback={this.settingsChangeCallback} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Layout>
    );
  }
}

export default Settings;