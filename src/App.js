import "./App.css";
import { Fragment, useState } from "react";
import MainHeader from "./layout/MainHeader";
import EventInfo from "./components/EventInfo";
import CardLight from "./components/ui/CardLight";
import RegistratinForm from "./components/RegistrationForm";
import EventImage from "./components/EventImage";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import LivePage from "./pages/LivePage";
import RegistrationCompleted from "./components/RegistrationCompleted";

function App() {
  const [startedRegistration, setStartedRegistration] = useState(false );

  const registrationStarted = (props) => {
    setStartedRegistration(true);
  };

  return (
    <Fragment>
      <MainHeader />
      <Switch>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/live">
          <LivePage />
        </Route>
        <Route path="/completed">
          <RegistrationCompleted />
        </Route>
        <Route path="/" exact>
          <div className="container">
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
              <EventInfo />

              <CardLight>
                {!startedRegistration && (
                  <EventImage onRegistrationStarted={registrationStarted} />
                )}
                {startedRegistration && <RegistratinForm />}
              </CardLight>
            </div>
          </div>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
