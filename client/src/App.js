import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import "antd/dist/antd.css";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ProtectedRoute path="/" exact component={Home} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/booking/:carid" exact component={BookingCar} />
        <ProtectedRoute path="/userbookings" exact component={UserBookings} />
        <ProtectedRoute path="/addcar" exact component={AddCar} />
        <ProtectedRoute path="/editcar/:carid" exact component={EditCar} />
        <ProtectedRoute path="/admin" exact component={AdminHome} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (sessionStorage.getItem("user")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/landing" />;
  }
}
