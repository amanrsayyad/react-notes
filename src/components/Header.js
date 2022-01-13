import React from 'react';
// import { auth, signInwithGoogle } from './firebase';

const Header = ({ handleToggleDarkMode }) => {

	
	// const [user, setUser] = useState(null);

    // useEffect(() => {
    //     auth.onAuthStateChanged(async (user) => {
    //         setUser(user)
    //         console.log(user)
    //     })
    // }, [])

    // const signOut = () => {
    //     auth.signOut().then(() => {
    //         setUser(null)
    //     })
    // }

	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
