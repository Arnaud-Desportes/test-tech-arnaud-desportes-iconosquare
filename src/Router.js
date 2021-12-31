import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// VIEWS
import Index from 'views/Index';
import NotFound from 'views/NotFound';
import Postslist from 'views/PostsList';
const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="user/:userId/posts" element={<Postslist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
