import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BrowseDesigners from "./pages/BrowseDesigners";

createRoot(document.getElementById("root")!).render(<App />);
