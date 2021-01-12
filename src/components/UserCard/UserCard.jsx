import React from 'react';
import styled from 'styled-components';
import User from '../../assets/user.svg';
import UserHover from '../../assets/user_hover.svg';
import Star from '../../assets/star.svg';
import * as S from '../../config/style';

const ContentContainer = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  background-color: transparent;
  position: relative;
  z-index: 10;
`;

const FollowersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${S.BLUE};
  margin-top: 16px;
`;

const Email = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: ${S.BLUE};
  margin-top: 8px;
`;

const FollowersCounter = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${S.BLUE};
  margin-right: 4px;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${S.GRAY3};
`;

const Img = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const Separator = styled.div`
  width: 208px;
  height: 1px;
  background-color: ${S.GRAY5};
  margin-top: 16px;
  margin-bottom: 21px;
`;

const Repo = styled.div`
  width: 208px;
  border: 1px solid #1D42A2;
  box-sizing: border-box;
  border-radius: 6px;
  border-left-width: 6px;
  padding: 12px 12px 12px 8px;
`;

const RepoHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RepoHeaderName = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: ${S.OCEAN_BLUE};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RepoHeaderStars = styled.div`
  display: flex;
  margin-right: 4px;
`;

const RepoDescription = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${S.GRAY2};
  margin-top: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StarsIcon = styled.img`
  margin-right: 4px;
`;

const ImgContainer = styled.img`
  width: 320px;
  height: 320px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  opacity: 0.7;
  position: absolute;
`;

const WhiteBackground = styled.div`
  width: 320px;
  height: 244px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 6px 6px;
  background-color: white;
  position: absolute;
  top: 76px;
`;

const Container = styled.div`
  position: relative;

  .user_icon_hover {
    display: none;
  }

  &:hover {
    .white_background {
      display: none;
    }

    .avatar {
      opacity: 0.85;
    }

    .content {
      p {
        color: white;
      }

      .user_icon {
        display: none;
      }

      .user_icon_hover {
        display: block;
      }

      .separator {
        display: none;
      }

      .repo {
        display: none;
      }

      .button {
        display: block;
      }
    }
  }
`;

const Button = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 23px;
  padding: 16px 24px;
  margin-top: 40px;
  margin-bottom: 19px;
  text-decoration: none;
  color: white;
  display: none;
`;

const UserCard = ({ user }) => (
  <Container>
    <ImgContainer className="avatar" src={user?.avatar_url} />
    <WhiteBackground className="white_background" />
    <ContentContainer className="content">
      <Img src={user?.avatar_url} />
      <Name>{user?.login || 'None'}</Name>
      <Email>{user?.email || 'None'}</Email>
      <FollowersContainer>
        <Icon className="user_icon" src={User} />
        <Icon className="user_icon_hover" src={UserHover} />
        <FollowersCounter>{user?.followers}</FollowersCounter>
        <Description>Followers</Description>
      </FollowersContainer>
      <Separator className="separator" />
      <Repo className="repo">
        <RepoHeaderContainer>
          <RepoHeaderName>{user?.repoName || 'None'}</RepoHeaderName>
          <RepoHeaderStars>
            <StarsIcon src={Star} />
            <RepoHeaderName>{user?.repoStars || '0'}</RepoHeaderName>
          </RepoHeaderStars>
        </RepoHeaderContainer>
        <RepoDescription>{user?.repoDescription || 'None'}</RepoDescription>
      </Repo>
      <Button className="button" href={user?.html_url}>Open Profile</Button>
    </ContentContainer>
  </Container>
);

export default UserCard;
