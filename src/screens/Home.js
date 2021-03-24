import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ServiceCategoryItem from "../components/ServiceCategory";
import { Button, CircularProgress, IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import {
  matchPath,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Notification from "@material-ui/icons/Notifications";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import CartIcon from "@material-ui/icons/ShoppingCartSharp";
import BottomNav, { Item } from "../components/BottomNav";
import ServiceTypeItem from "../components/ServiceType";
import AddDetails from "./AddDetails";
import NotificationPage from "./NotificationPage";
import CartPage from "./CartPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentServiceItems } from "../store/slices/serviceSubCat.slice";
import OrderConfirmedPage from "./OrderConfirmed";
import { fetchServiceCat } from "../store/slices/serviceList.slice";

// const serviceCat = [
//   {
//     name: "Laundry",
//     icon: "fa-tshirt",
//   },

//   {
//     name: "Cooking",
//     icon: "fa-utensils",
//   },

//   {
//     name: "Home Cleaning",
//     icon: "fa-broom",
//   },
// ];

// const subCat = [
//   {
//     name: "Laundry",
//     icon: "fa-tshirt",
//   },

//   {
//     name: "Cooking",
//     icon: "fa-utensils",
//   },

//   {
//     name: "Home Cleaning",
//     icon: "fa-broom",
//   },
// ];

export default function Home() {
  let user = useSelector((state) => state.user.value);
  let catState = useSelector((state) => state.serviceCategory);
  let carts = useSelector(state => state.cart.value)
  let dispatch = useDispatch()
  let history = useHistory();
  let location = useLocation();
  useEffect(() => {
    dispatch(fetchServiceCat())
    // eslint-disable-next-line
  }, [])
  let [selectedCat, setSelectedCat] = useState(0);
  let homeActive =
    matchPath(location.pathname, {
      path: "/",
    })?.isExact || false;
  let notifyActive =
    matchPath(location.pathname, {
      path: "/notifications",
    })?.isExact || false;
  let cartActive =
    matchPath(location.pathname, {
      path: "/carts",
    })?.isExact || false;
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <header className="flex justify-between">
            <section>
              <p className="text-xs text-gray-600 dark:text-gray-200 font-light">
                Welcome Back
              </p>
              <p className="text-base dark:text-gray-200">
                {user?.full_name || "Dear User"}
              </p>
            </section>
            <section>
              <IconButton
                size="small"
                onClick={(e) => {
                  history.push("/settings");
                }}
                style={{
                  color: "gray",
                }}
              >
                <SettingsIcon />
              </IconButton>
            </section>
          </header>
          <main className="p-0 mt-8">
            <header className="flex justify-between">
              <p className="text-sm font-light dark:text-gray-200">
                Select Category
              </p>
            </header>
            <section className="overflow-x-auto flex">
              {catState.status === "loading" ? (
                <div className="w-full p-2 flex justify-center items-center">
                  <CircularProgress className="w-12 h-12" color="secondary" />
                </div>
              ) : null}

              {catState.value.length > 0 && !catState.error ? (
                <>
                  {catState.value.map((v, i) => (
                    <div className="p-2">
                      <ServiceCategoryItem
                        active={i === selectedCat}
                        serviceName={v.name}
                        iconName={v.icon}
                        value={i}
                        onActivate={(v) => {
                          setSelectedCat(v);
                        }}
                      />
                    </div>
                  ))}
                </>
              ) : null}
              {catState.error ? (
                <div className="w-full p-2 flex flex-col justify-center items-center">
                  <InfoIcon color="error"/>
                  <p className="text-xs">{catState.error}</p>
                  <Button color="secondary" variant="text">
                    Retry
                  </Button>
                </div>
              ) : null}
            </section>
            <header className="flex justify-between mt-4 mb-2">
              <p className="text-sm font-light dark:text-gray-100">
                {catState.value[selectedCat]?.name || "Sub Category"}
              </p>
            </header>
            <section className="flex flex-col overflow-auto">
              {catState.status === "loading" ? (
                <div className="w-full p-2 flex justify-center items-center">
                  <CircularProgress className="w-12 h-12" color="secondary" />
                </div>
              ) : null}

              {catState.value.length > 0 && !catState.error ? (
                <>
                  {catState.value[selectedCat]?.subCategory?.map((v) => (
                    <ServiceTypeItem
                      onClick={(e) => {
                        dispatch(setCurrentServiceItems(v?.serviceItems || []))
                        history.push("/addDetails");
                      }}
                      name={v.name}
                      icon={v.icon}
                    />
                  ))}
                </>
              ) : null}
              {catState.error ? (
                <div className="w-full p-2 flex flex-col justify-center items-center">
                  <InfoIcon color="error"/>
                  <p className="text-xs">{catState.error}</p>
                  <Button color="secondary" variant="text">
                    Retry
                  </Button>
                </div>
              ) : null}
              {/* {subCat.} */}
            </section>
          </main>
        </Route>
        <Route exact path="/addDetails">
          <AddDetails />
        </Route>
        <Route exact path="/notifications">
          <NotificationPage />
        </Route>
        <Route exact path="/carts">
          <CartPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/orderConfirmed">
          <OrderConfirmedPage/>
        </Route>
      </Switch>

      <BottomNav className="fixed dark:bg-gray-800 bottom-0 left-0 right-0 bg-white p-2">
        <Item
          active={homeActive}
          icon={<HomeIcon />}
          onClick={(e) => {
            history.push("/");
          }}
          label={null}
        />
        <Item
          active={notifyActive}
          onClick={(e) => {
            history.push("/notifications");
          }}
          notify
          icon={<Notification />}
          label={null}
        />
        <Item
          onClick={(e) => {
            history.push("/carts");
          }}
          icon={<CartIcon />}
          active={cartActive}
          label={null}
          count={carts.length}
        />
        <Item
          active={
            matchPath(location.pathname, {
              path: "/profile",
            })?.isExact || false
          }
          icon={<ProfileIcon />}
          onClick={(e) => {
            history.push("/profile");
          }}
          label={null}
        />
      </BottomNav>
    </Layout>
  );
}
