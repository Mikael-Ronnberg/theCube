import styled from "styled-components";

const HobbyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8 rem;
  margin: 0 0.5rem;
  height: 70px;
  width: 90px;
  border-radius: 3%;
  flex: 40%;

  @media (min-width: 480px) {
    height: 90px;
    width: 110px;
    padding: 1rem;
    margin: 0.5rem;
  }
  @media (min-width: 580px) {
  }

  @media (min-width: 768px) {
    flex: 45%;
    height: 200px;
    width: 250px;
    margin: 0 0.5rem;
  }
`;

const HobbyImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 0.5rem;

  @media (min-width: 580px) {
    height: 60px;
    width: 60px;
  }

  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

const HobbyTitle = styled.h3`
  font-size: 0.8rem;

  @media (min-width: 580px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

type ServiceCardProps = {
  title: string;
  icon: string;
};

export const ServiceCard = ({ title, icon }: ServiceCardProps) => {
  return (
    <>
      <HobbyCard>
        <HobbyImage src={icon} alt={title} />
        <HobbyTitle>{title}</HobbyTitle>
      </HobbyCard>
    </>
  );
};
