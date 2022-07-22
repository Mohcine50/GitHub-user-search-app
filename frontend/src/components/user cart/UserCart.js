import React from "react";
import "./userCart.css";
import { ImLocation2 } from "react-icons/im";
import { BsLink45Deg, BsTwitter, BsBuilding } from "react-icons/bs";
import moment from "moment";

function UserCart({ info, loading, theme }) {
  const style =
    theme == "dark"
      ? {
          fontSize: 13,
          fontWeight: 500,
          color: "white",
        }
      : {
          fontSize: 13,
          fontWeight: 500,
          color: "black",
        };
  return loading === "initail" ? (
    <div className='userCart'>
      <p id='loading'>PLEASE INSERT A GITHUB USERNAME</p>
    </div>
  ) : loading === "Loading" ? (
    <div className='userCart'>
      <p id='loading'>LOADING...</p>
    </div>
  ) : info.message === "Not Found" ? (
    <div className='userCart'>
      <p id='loading'>USER NOT FOUND</p>
    </div>
  ) : (
    <div className='userCart'>
      <div className='basic-info'>
        <img src={info.avatar_url} alt='github-pfp' />
        <div className='info'>
          <h1>{info.name}</h1>
          <p>@{info.login}</p>
          <p>joined {moment(info.created_at).from()}</p>
        </div>
      </div>

      <p id='description'>
        {info.bio === null ? "This profile has no bio" : info.bio}
      </p>
      <div className='infos'>
        <div>
          <h1>Repos</h1>
          <p>{info.public_repos}</p>
        </div>
        <div>
          <h1>Followers</h1>
          <p>{info.followers}</p>
        </div>
        <div>
          <h1>Following</h1>
          <p>{info.following}</p>
        </div>
      </div>
      <div className='more-infos'>
        <div>
          <ImLocation2 style={style} />
          <span>
            {info.location === null ? "Location not found" : info.location}
          </span>
        </div>
        <div>
          <BsTwitter style={style} />
          <span>
            {info.twitter_username === null
              ? "Twitter not found "
              : info.twitter_username}
          </span>
        </div>
        <div>
          <BsLink45Deg style={style} />
          <span>{info.blog === "" ? "Website Not Found" : info.blog}</span>
        </div>
        <div>
          <BsBuilding style={style} />
          <span>{info.email === null ? "Email Not Found" : info.email}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
