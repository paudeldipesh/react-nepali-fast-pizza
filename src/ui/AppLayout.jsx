import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="my-10 overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
