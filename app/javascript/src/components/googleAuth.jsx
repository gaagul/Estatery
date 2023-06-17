import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from "@mui/material";

export const GoogleAuth = (props) => {

    const navigate = useNavigate();

    const invokeGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
    
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(credential);
                console.log(token);
                console.log(user);
                navigate(props.redirectPath);
    
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode);
                console.log(errorMessage);
                console.log(email);
                console.log(credential);
            });
    }

    const invokeGoogleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
        }).catch((error) => {
            console.log("An error happened. Here's the error: " + error);
        });
    }

    return <>         
            <Button sx={{mt: 8, mb:2}} fullWidth startIcon={<GoogleIcon />} variant="outlined" onClick={invokeGoogleSignIn}>Sign In with Google</Button>        
    </>
}
