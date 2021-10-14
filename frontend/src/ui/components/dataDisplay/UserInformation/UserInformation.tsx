import React from 'react'
import { AvatarStyled, RatingStyled, UserDescription, UserInformationContainer, UserName } from './UserInformation.style';


interface UserInformationProps {
    avatarURL: string;
    fullname: string;
    rating: number;
    description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
    avatarURL, fullname, rating, description
}) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={avatarURL}>{fullname[0]}</AvatarStyled>
            <UserName>{fullname}</UserName>
            <RatingStyled readOnly value={rating} />
            <UserDescription>{description}</UserDescription>
        </UserInformationContainer>
    )
}

export default UserInformation;