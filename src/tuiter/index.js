import { Routes, Route } from "react-router";
import Nav from "../labs/nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div>
            <Nav />
            <div className="row">
                <div class="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div class="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/explore" element={<ExploreScreen />} />
                        <Route path="/bookmarks" element={<BookmarksScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                    </Routes>
                </div>
                <div class="col-4 d-none d-lg-block">
                    <WhoToFollowList />
                </div>
            </div>
        </div>
    );
}
export default Tuiter;