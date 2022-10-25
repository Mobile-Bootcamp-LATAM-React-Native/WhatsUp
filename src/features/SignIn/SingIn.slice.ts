type SignInProps = {
  user?: {
    name: string;
  } | undefined,
  isSignedIn: boolean,
}

const initialState: SignInProps = {
  user: {
    name: 'Gonzalo',
  },
  isSignedIn: true,
}

const reducer = (state = initialState, action): SignInProps => {
  switch (action.type) {
    case 'SIGNIN/LOGIN':
      return { isSignedIn: true, user: action.payload }
    case 'SIGNIN/LOGOUT':
      return { isSignedIn: false, user: undefined }
    default:
      return { ...state }
  }
}

export default reducer;