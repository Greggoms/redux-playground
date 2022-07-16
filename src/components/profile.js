import React from "react"
import { useSelector } from "react-redux/es/exports"
import { selectUserAuth, selectUserDoc } from "../app/features/userSlice"
import styled from "styled-components"
import RequestPtoForm from "./RequestPtoForm"

const ProfilePage = () => {
  const user = useSelector(selectUserAuth)
  const userDoc = useSelector(selectUserDoc)

  return user ? (
    <ProfileContainer>
      <h1>{userDoc.name}'s Profile</h1>
      <div className="content">
        <div className="general">
          <h2>General</h2>
          <div className="label">
            <span>ID</span>
            <p>
              {userDoc.id} {userDoc.id <= 5 ? `(Admin)` : `(Default)`}
            </p>
          </div>
          <div className="label">
            <span>Username</span>
            <p>{userDoc.username}</p>
          </div>
          <div className="label">
            <span>Email</span>
            <p>{userDoc.email}</p>
          </div>
          <div className="label">
            <span>Phone #</span>
            <p>{userDoc.phone}</p>
          </div>
          <div className="label">
            <span>Website</span>
            <p>{userDoc.website}</p>
          </div>
        </div>
        <div className="location">
          <h2>Address</h2>
          <div className="label">
            <span>Street</span>
            <p>{userDoc.address.street}</p>
          </div>
          <div className="label">
            <span>Suite #</span>
            <p>{userDoc.address.suite}</p>
          </div>
          <div className="label">
            <span>City</span>
            <p>{userDoc.address.city}</p>
          </div>
          <div className="label">
            <span>Zipcode</span>
            <p>{userDoc.address.zipcode}</p>
          </div>
          <div className="coords">
            <h4>Geo</h4>
            <div className="label">
              <span>Latitude</span>
              <p>{userDoc.address.geo.lat}</p>
            </div>
            <div className="label">
              <span>Longitude</span>
              <p>{userDoc.address.geo.lng}</p>
            </div>
          </div>
        </div>
        <div className="company">
          <h2>Company</h2>
          <div className="label">
            <span>Name</span>
            <p>{userDoc.company.name}</p>
          </div>
          <div className="label">
            <span>Catchphrase</span>
            <p>{userDoc.company.catchphrase}</p>
          </div>
          <div className="label">
            <span>Bs?</span>
            <p>{userDoc.company.bs}</p>
          </div>
        </div>
      </div>
      <RequestPtoForm id={userDoc.id} />
      {userDoc.requests && (
        <ul className="request-list">
          <h2>Requests ({userDoc.requests.length})</h2>
          {userDoc.requests.map((request, index) => (
            <li key={index}>
              <p>
                {request.begin} to {request.end} using {request.hours} hours.
              </p>
            </li>
          ))}
        </ul>
      )}
    </ProfileContainer>
  ) : (
    <h2>Loading...</h2>
  )
}

export default ProfilePage

const ProfileContainer = styled.section`
  h1 {
    text-align: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px auto;
    width: max-content;

    @media only screen and (min-width: 46.75rem) {
      flex-direction: row;
    }
  }

  margin-top: 30px;

  .general,
  .location,
  .company {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .general {
    background: lightblue;
  }
  .location {
    background: lightsalmon;
  }
  .company {
    background: lightseagreen;
  }

  .label {
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }

  h1 {
    font-size: x-large;
    font-weight: 200;
  }
  h2 {
    font-size: large;
  }

  span {
    font-size: 10pt;
    color: #555;
  }
  p {
    color: #000;
  }

  .request-list {
    width: fit-content;
    margin: 20px auto;
  }
`
