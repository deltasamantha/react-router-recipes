import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoutes from "./routes/PrivateRoutes";
import Dashboard from "./screens/Dashboard";
import Home from './screens/Home';
import NotFound from "./screens/NotFound";
import Post from "./screens/Post";
import PostsList from "./screens/PostsList";
import SignIn from "./screens/SignIn";


const Router = () => {
    return (
        <BrowserRouter>
            <Link to="/post-list">Posts list</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/post-list" component={PostsList} />
                <Route exact path="/post/:id" component={Post} />
                <PrivateRoutes exact path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
