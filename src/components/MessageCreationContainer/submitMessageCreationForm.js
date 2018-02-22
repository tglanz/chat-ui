const validation = ({
    username,
    text, setText,
    setErrorMessage
}) => {
    if (!username){
        setErrorMessage("Missing username");
        return false;
    }
    
    if (!text){
        setErrorMessage("Missing text");
        return false;
    }

    return true;
}

// Happens upon submission
export default ({
    username,
    text, setText,

    setErrorMessage, emitMessage,

    randomlyProvideAvatar,
    setAvatar, usersAvatars, setUsersAvatars
}) => {

    if (!validation({ username, text, setText, setErrorMessage })){
        return;
    }

    let avatar = usersAvatars[username] || randomlyProvideAvatar();

    if (!usersAvatars.hasOwnProperty(username)){
        setUsersAvatars({
            ...usersAvatars,
            [username]: avatar
        })
    }

    setAvatar(avatar);
    emitMessage({ username, text, avatar, timestamp: new Date().getTime() });

    setErrorMessage("");
    setText("");
}