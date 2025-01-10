import MainContainer from '@components/main-container/MainContainer';
import { Button, Layout } from '@design-system';
import WhoamiLogo from '/whoami-logo.svg';

function Intro() {
  return (
    <MainContainer>
      <Layout.FlexCol w="100%" h="100%" justifyContent="center" alignItems="center" mb={100}>
        <img src={WhoamiLogo} alt="who_am_i" />
      </Layout.FlexCol>
      <Layout.Absolute w="100%" b="0" flexDirection="column" p={24} mb={56} gap={24}>
        <Button.Primary
          status="normal"
          to="/signup/email"
          // TODO: i18n
          text="Sign Up"
          fontType="head-line"
          sizing="stretch"
        />
        <Button.Secondary
          status="normal"
          to="/signin"
          // TODO: i18n
          text="Sign In"
          fontType="head-line"
          sizing="stretch"
        />
      </Layout.Absolute>
    </MainContainer>
  );
}

export default Intro;
