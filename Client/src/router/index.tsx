import ChatPage from "@/pages/Chat";
import JoinPage from "@/pages/Join";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<JoinPage />} />
        <Route path="room" element={<ChatPage />} />
      </Route>
    </>
  )
);

export default router;
