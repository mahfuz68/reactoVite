import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './component/router/Header';
import Login from './component/router/Login';
import Post from './component/router/Post';
import Posts from './component/router/Posts';
import PrivateOutlate from './component/router/PrivateOutlate';
import PrivateRoute from './component/router/PrivateRoute';
import Database from './fire/Database';

export default function rr() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/database" />} />
                <Route
                    path="/database"
                    element={(
                        <PrivateRoute>
                            <Database />
                        </PrivateRoute>
                    )}
                />
                <Route path="/header/*" element={<Header />} />
                <Route path="/" element={<PrivateOutlate />}>
                    <Route path="/posts" element={<Posts />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/post/:postId" element={<Post />} />
            </Routes>

        </div>
    );
}
