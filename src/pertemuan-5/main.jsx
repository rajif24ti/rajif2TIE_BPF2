import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import "./tailwind.css";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./components/ResponsiveDesign";

createRoot(document.getElementById("root"))
  .render(
    <div>
        <FrameworkListSearchFilter/>
        <ResponsiveDesign/>
        {/* <FrameworkList/> */}
    </div>
  )
