import React, { Component } from 'react';
import './App.scss';

class App extends Component {


      constructor(props){


              super(props);
              this.state = {

                  open : 'false',
                  submenu : 'false'

              }

      }



  openDropDown = (e) => {


          e.preventDefault();

          if(this.state.open === 'false')
          {

                  this.setState({
                    open : 'true'
                  })

          }
          if(this.state.open ==='true'){
            this.setState({

                open : 'false'
            })
          }
      

  }

  sideMenu = (e) => {

        e.preventDefault();

        if(this.state.submenu === 'true'){

          this.setState({

            submenu : 'false'

            })

        }
        if(this.state.submenu === 'false'){

              this.setState({

                  submenu : 'true'

              })

        }

}


  render() {
  
      let dropdown = 'dropdown';
      let submenu = 'none';
      if(this.state.open === 'true'){

         dropdown = 'dropdown open'
      }
      if(this.state.open === 'false'){

          dropdown = 'dropdown'
      }

      if(this.state.submenu === 'true'){

          submenu = 'block' 
      }
      if(this.state.submenu === 'false')
      {

          submenu = 'none'

      }
       
   
    return (
      <div class="container">
      <h2>Multi-Level Dropdowns</h2>
      <p>In this example, we have created a .dropdown-submenu class for multi-level dropdowns (see style section above).</p>
      <p>Note that we have added jQuery to open the multi-level dropdown on click (see script section below).</p>                                        
      <div class={dropdown}>
        <button class="btn btn-default dropdown-toggle" type="button" onClick={this.openDropDown}>Tutorials
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a tabindex="-1" href="/">HTML</a></li>
          <li><a tabindex="-1" href="/">CSS</a></li>
          <li class="job__dropdown dropdown-submenu">
            <a class="test" tabindex="-1" onClick={this.sideMenu}>New dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" style={{display:submenu}}>
              <li><a tabindex="-1" href="/">2nd level dropdown</a></li>
              <li><a tabindex="-1" href="/">2nd level dropdown</a></li>
              <li class="dropdown-submenu">
                <a class="test" href="/">Another dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/">3rd level dropdown</a></li>
                  <li><a href="/">3rd level dropdown</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
