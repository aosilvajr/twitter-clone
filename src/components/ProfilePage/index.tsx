import React from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Ailton Jr.</h1>
        <h2>@aosilvajr</h2>

        <p>Developer Web and Mobile Freelancer</p>

        <ul>
          <li>
            <LocationIcon />
            Belém, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 06 de dezembro de 1995
          </li>
        </ul>

        <Followage>
          <span>seguindo <strong>66</strong></span>
          <span><strong>99</strong> seguidores</span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;