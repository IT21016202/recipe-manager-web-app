import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouterProvider, Router } from "react-router-dom";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import AddRecipe from "./pages/AddRecipe";
import OneRecipe from "./pages/OneRecipe";
import EditRecipe from "./pages/EditRecipe";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={<OneRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
