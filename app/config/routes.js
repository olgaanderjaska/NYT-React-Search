var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hasHistory;
var app = require('../app');
var main = require('../app/Components/main');

var routes = (

	<Router history={hasHistory}>
		<Route path='/' component={app}>
			<IndexRoute component={main} />
		</Route>
	</Router>

);

module.exports = routes;