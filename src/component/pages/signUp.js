import React from "react";

export const SignUp = () => {
  return (
    <div className="formDiv">
    <div className="divdiv">
      <form action="/" method="post">
        <div class="top-row">
          <div class="field-wrap">
            <label for = "Fname">First Name
            </label>
            <input type="text" id ="Fname" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label for = "Lname">
              Last Name
            </label>
            <input type="text" id="Lname" required autocomplete="off" />
          </div>

        </div>

        <div class="field-wrap">
          <label for="Email">
            Email Address
          </label>
          <input type="email" id="Email" required autocomplete="off" />
        </div>

        <div class="field-wrap">
            <label for = "gender">Gender
            </label>
            <input type="text" id ="gender" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label for = "number">Phone Number
            </label>
            <input type="number" id ="number" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label for = "city">City
            </label>
            <input type="text" id ="city" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label for = "DOB">D.O.B
            </label>
            <input type="date" id ="DOB" required autocomplete="off" />
          </div>

        <div class="field-wrap">
          <label for="passWord">
            Set A Password
          </label>
          <input type="password" id="passWord" required autocomplete="off" />
        </div>

        <div class="field-wrap">
          <label for="confirm">
            Set A Password
          </label>
          <input type="password" id="confirm" required autocomplete="off" />
        </div>


        <button type="submit" class="button button-block" />
        Sign Up
        <button />
      </form>
    </div>
    </div>
  );
};
