import produce from "immer";
import { selectUser } from "../../app/selectors";
/*
-FAIT fetch post (username + password)
- vérification (bon username + password)
-FAIT prendre le token du user
- rediriger vers '/profile'
*/

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const POSTING = "postUser/posting";
const RESOLVED = "postUser/resolved";
const REJECTED = "postUser/rejected";

const userPosting = () => ({ type: POSTING });
const userResolved = (data) => ({ type: RESOLVED, payload: data });
const userRejected = (error) => ({ type: REJECTED, payload: error });

export default function postUserReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case POSTING: {
        if (draft.status === "void") {
          draft.status = "pending";
          return;
        }
        if (draft.status === "rejected") {
          draft.error = null;
          draft.status = "pending";
          return;
        }
        return;
      }
      case RESOLVED: {
        if (draft.status === "pending") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
      case REJECTED: {
        if (draft.status === "pending") {
          draft.error = action.payload;
          draft.status = null;
          draft.status = "rejected";
          return;
        }
        return;
      }
      default:
        return;
    }
  });
}

export async function PostUser(store, user) {
  const status = selectUser(store.getState()).status;
  if (status === "pending") {
    return;
  }
  store.dispatch(userPosting());
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });

    const data = await response.json();
    store.dispatch(userResolved(data));
  } catch (error) {
    store.dispatch(userRejected(error));
  }
}
