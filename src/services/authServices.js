import store from "../redux/store";
import { userLogin, userRegister } from "../redux/features/auth/authActions";
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !password || !email) {
      alert("Please Enter All Credentials");
    }
    store.dispatch(userLogin({ role, email, password }));
    console.log(e, email, password, role);
  } catch (error) {
    console.log(error.message);
  }
};
export const handleRegister = (
  e,
  role,
  name,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      role,
      name,
      email,
      password,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    );
    store.dispatch(
      userRegister({
        role,
        name,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {}
};
