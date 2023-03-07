import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './container/Home';
import DetailLoading from './container/DetailLoading';
import Footer from './components/Footer';
import LoginScreen from './container/LoginScreen';
import RegisterScreen from './container/RegisterScreen';
import ProfileScreen from './container/ProfileScreen';
import ProfileUpdateScreen from './container/ProfileUpdateScreen';
import CartScreen from './container/CartScreen';
import ShippingScreen from './container/ShippingScreen';
import ProfileAddressScreen from './container/ProfileAddressScreen';
import PaymentScreen from './container/PaymentScreen';
import PlaceOrderScreen from './container/PlaceOrderScreen';
import OrderScreen from './container/OrderScreen';
import OrdersUserListScreen from './container/OrdersUserListScreen';
import UsersListScreen from './container/UsersListScreen';
import UserEditScreen from './container/UserEditScreen';
import ProductsListScreen from './container/ProductsListScreen';
import ProductEditScreen from './container/ProductEditScreen';
import OrdersAdminListScreen from './container/OrdersAdminListScreen';
import ProductCreateReview from './container/ProductCreateReview';
import MessageCenter from './container/MessageCenter';

import './App.css';

function App() {
	return (
		<div className='app'>
			<Navbar></Navbar>
			<main>
				<Routes>
					<Route path='/Modezp-Shop-Frontend' element={<Home />}></Route>
					<Route
						path='/Modezp-Shop-Frontend/category/:category'
						element={<Home />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/category/:category/page/:pageNumber'
						element={<Home />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/category/:category/search/:keyword'
						element={<Home />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/page/:pageNumber'
						element={<Home />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/search/:keyword'
						element={<Home />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/search/:keyword/page/:pageNumber'
						element={<Home />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/userslist'
						element={<UsersListScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/productslist'
						element={<ProductsListScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/productslist/search/:keyword'
						element={<ProductsListScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/productslist/search/:keyword/page/:pageNumber'
						element={<ProductsListScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/orderslist'
						element={<OrdersAdminListScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/user/:id/edit'
						element={<UserEditScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/admin/product/:id/edit'
						element={<ProductEditScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/products/:id'
						element={<DetailLoading />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/product/review/:id'
						element={<ProductCreateReview />}
					></Route>
					<Route path='/Modezp-Shop-Frontend/cart' element={<CartScreen />} />
					<Route
						path='/Modezp-Shop-Frontend/shipping'
						element={<ShippingScreen />}
					/>
					<Route
						path='/Modezp-Shop-Frontend/payment'
						element={<PaymentScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/placeorder'
						element={<PlaceOrderScreen />}
					></Route>
					<Route
						path='/Modezp-Shop-Frontend/order/:id'
						element={<OrderScreen />}
					></Route>
					<Route path='/Modezp-Shop-Frontend/login' element={<LoginScreen />} />
					<Route
						path='/Modezp-Shop-Frontend/register'
						element={<RegisterScreen />}
					/>
					<Route
						path='/Modezp-Shop-Frontend/profile'
						element={<ProfileScreen />}
					/>
					<Route
						path='/Modezp-Shop-Frontend/profile/update'
						element={<ProfileUpdateScreen />}
					/>
					<Route
						path='/Modezp-Shop-Frontend/profile/address'
						element={<ProfileAddressScreen />}
					/>
					<Route
						path='/Modezp-Shop-Frontend/profile/orderlist'
						element={<OrdersUserListScreen />}
					/>
					<Route
						path='/Modezp-Shop-Frontend/profile/messagecenter'
						element={<MessageCenter />}
					/>
				</Routes>
			</main>
			<Footer></Footer>
			{/*  W przyszłośći dodać wyszukiwanie produktów w panelu administaratora */}
			{/* dodac mozliwość ustawienia ilości obektów na stronie */}
		</div>
	);
}

export default App;
