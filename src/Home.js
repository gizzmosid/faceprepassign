import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Navigate, useNavigate} from "react-router-dom";

const API_URL = 'https://randomuser.me/api/?results=50';

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const history = useNavigate();



  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(`${API_URL}&page=${page}`);
      setUserList(prevState => [...prevState, ...res.data.results]);
      setLoading(false);
    };
    fetchUsers();
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleLogout() {
   
    history('/');
  }
  const renderUsers = () => {
    return userList.map(user => (
        <div class="container">
        <div class="card mb-3" style={{maxWidth:"500px;"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={user.picture.large} class="img-fluid rounded-start" alt={user.name.first}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" key={user.login.uuid}>{user.name.first} {user.name.last}</h5>
              
              <p class="card-text"><small class="text-body-secondary">{user.location.city}</small></p>
              <p class="card-text"><small class="text-body-secondary">{user.location.country}</small></p>
              <p class="card-text"><small class="text-body-secondary">{user.location.postcode}</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>


    
    ));
  };

  return (
    <div className="app ">
      <nav class="navbar bg-body-tertiary sticky-top ">
  <div class="container-fluid">
    <a class="navbar-brand ">Contact list app by siddharth</a>
    <form class="d-flex" role="search">
     
      <button class="btn btn-outline-success" type="submit"onClick={handleLogout
        }>Logout</button>
    </form>
  </div>
</nav>
     
      <ul class="p-5">{renderUsers()}</ul>
      {loading && <div>
        <div class="spinner-grow text-primary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only"></span>
</div></div>}
    </div>
  );
};

export default Home;
