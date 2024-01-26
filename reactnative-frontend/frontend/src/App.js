import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import HealthReportList from './components/HealthReportList';
import AddHealthReport from './components/AddHealthReport';


function App() {
  return (
    <div>

      <Router> 
          <HeaderComponent/>
 
          <div className='container'>
              <Switch>
                 <Route exact path = "/" component = {HealthReportList}></Route>
                 <Route path="/healthrecords" component={HealthReportList}></Route>
                 <Route path="/add-healthrecord" component={AddHealthReport}></Route>
                 <Route path = "/edit-healthrecord/:id" component = {AddHealthReport}></Route>
              </Switch>
            
          </div>

          <FooterComponent/>
      </Router>
     
    </div>
  );
}

export default App;
