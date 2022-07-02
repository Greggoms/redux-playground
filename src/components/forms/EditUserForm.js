import React from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { modifyUser, selectUsers } from "../../app/features/usersSlice"

export default function EditUserForm(props) {
  const users = useSelector(selectUsers)
  const user = users.find(person => person.id === props.id)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()

  const onSubmit = data => {
    try {
      dispatch(modifyUser(data))
      props.handleEditFunction()
    } catch (e) {
      console.error("ERROR: ", e.message)
    }
  }

  return (
    props.editing && (
      <EditUserContainer className="draft" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <div className="main">
            <div className="info-general">
              <input {...register("id")} defaultValue={user.id} type="hidden" />
              <label>
                <span>Name</span>
                <input
                  {...register("name")}
                  placeholder="Brand New"
                  defaultValue={user ? user.name : ""}
                  type="text"
                />
              </label>
              <label>
                <span>Username</span>
                <input
                  {...register("username")}
                  placeholder="Br4ndN3w123"
                  defaultValue={user.username}
                  type="text"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  {...register("email")}
                  placeholder="your@email.com"
                  defaultValue={user.email}
                  type="email"
                />
              </label>
              <label>
                <span>Phone Number</span>
                <input
                  {...register("phone")}
                  placeholder="5551231234"
                  defaultValue={user.phone}
                  type="tel"
                />
              </label>
              <label>
                <span>Website</span>
                <input
                  {...register("website")}
                  placeholder="https://mywebsite.com"
                  defaultValue={user.website}
                  type="text"
                />
              </label>
            </div>
            <div className="info-location">
              <label>
                <span>Street Address</span>
                <input
                  {...register("address.street")}
                  placeholder={user.name}
                  defaultValue={user.address.street}
                />
              </label>
              <label>
                <span>Suite #</span>
                <input
                  {...register("address.suite")}
                  placeholder="Suite 847, Apt 405, etc..."
                  defaultValue={user.address.suite}
                />
              </label>
              <label>
                <span>City</span>
                <input
                  {...register("address.city")}
                  placeholder={user.name}
                  defaultValue={user.address.city}
                />
              </label>
              <label>
                <span>Zipcode</span>
                <input
                  {...register("address.zipcode")}
                  placeholder="12223"
                  defaultValue={user.address.zipcode}
                />
              </label>
              <label>
                <span>Latitude</span>
                <input
                  {...register("address.geo.lat")}
                  placeholder="-37.3159"
                  defaultValue={user.address.geo.lat}
                />
              </label>
              <label>
                <span>Longitude</span>
                <input
                  {...register("address.geo.lng")}
                  placeholder="81.1496"
                  defaultValue={user.address.geo.lng}
                />
              </label>
            </div>
            <div className="info-company">
              <label>
                <span>Company Name</span>
                <input
                  {...register("company.name")}
                  placeholder="ACME Inc LLC"
                  defaultValue={user.company.name}
                />
              </label>
              <label>
                <span>Catchphrase</span>
                <input
                  {...register("company.catchphrase")}
                  placeholder="We are the best!"
                  defaultValue={user.company.catchphrase}
                />
              </label>
              <label>
                <span>Slogan?</span>
                <input
                  {...register("company.bs")}
                  placeholder="Don't hate. Appreciate."
                  defaultValue={user.company.bs}
                />
              </label>
            </div>
            <input type="submit" value="Save Changes" />
          </div>
          {/* eslint-disable-next-line */}
          <div className="overlay" onClick={() => props.handleEditFunction()} />
        </div>
      </EditUserContainer>
    )
  )
}

const EditUserContainer = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  overflow-y: scroll;

  .grid {
    display: grid;
    width: 100%;
    height: 100vh;
  }

  .main {
    z-index: 1;
    grid-column: 1;
    grid-row: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .overlay {
    grid-column: 1;
    grid-row: 1;

    width: 100%;
    height: 100%;
    background: rgba(33, 33, 33, 0.6);
  }

  .info {
    &-general,
    &-location,
    &-company {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 10pt;
  }

  input[type="submit"] {
    cursor: pointer;
    border: none;
    border-top: white;
    padding: 7px;
    background: mediumslateblue;
    color: white;

    font-size: 16pt;
    margin-top: 10px;
  }
`
