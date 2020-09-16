import React from 'react';
import * as Styled from './styles';

const About = () => {
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.MainTitle>
					DOOWAN KIM
					<Styled.MainSubTitle>(FRONTEND DEVELOPER)</Styled.MainSubTitle>
				</Styled.MainTitle>
				<Styled.IntroBox>
					<Styled.Intro>∙ 프론트엔드 개발자 김두완입니다.</Styled.Intro>
					<Styled.Intro>
						∙ Javascript, Typescript를 사용하여 프론트엔드 개발을 하고 있습니다.
					</Styled.Intro>
					<Styled.Intro>
						∙ 높은 질의 코드를 작성하기 위해 항상 노력하고 최선을 다합니다.
					</Styled.Intro>
					<Styled.Intro>
						∙ 현재는 아틸런(행복골프학교)에서 React로 프론트 개발을 하고
						있습니다.
					</Styled.Intro>
					<Styled.SkillBox>
						<Styled.SkillWrapper>
							<Styled.SkillStart>Javascript</Styled.SkillStart>
							<Styled.Skill>Typescript</Styled.Skill>
							<Styled.Skill>Node</Styled.Skill>
							<Styled.Skill>React</Styled.Skill>
							<Styled.Skill>Redux</Styled.Skill>
							<Styled.Skill>Redux-thunk</Styled.Skill>
							<Styled.SkillEnd>Redux-pack</Styled.SkillEnd>
						</Styled.SkillWrapper>
						<Styled.SkillWrapper>
							<Styled.Skill>Firebase</Styled.Skill>
							<Styled.Skill>Styled-components</Styled.Skill>
						</Styled.SkillWrapper>
					</Styled.SkillBox>
					<hr />
					<Styled.LinkBox>
						<Styled.SmallTitle>Github</Styled.SmallTitle>
						<a href="https://github.com/doowankim">
							<Styled.GitHubAddress>
								https://github.com/doowankim
							</Styled.GitHubAddress>
						</a>
					</Styled.LinkBox>
					<hr />
					<Styled.LinkBox>
						<Styled.SmallTitle>Email</Styled.SmallTitle>
						<a href="mailto:doowankim11@gmail.com">
							<Styled.EmailAddress>doowankim11@gmail.com</Styled.EmailAddress>
						</a>
					</Styled.LinkBox>
					<hr />
					<Styled.SecondTitle>Work Experience</Styled.SecondTitle>
					<hr />
					<Styled.CompanyName>
						아틸런 주식회사 (행복골프학교)
					</Styled.CompanyName>
					<hr />
					<div style={{ display: 'flex' }}>
						<Styled.SmallTitle>period</Styled.SmallTitle>
						<Styled.PeriodDescription>20.05 ~ current</Styled.PeriodDescription>
					</div>
					<hr />
					<div style={{ display: 'flex' }}>
						<Styled.SmallTitle>position</Styled.SmallTitle>
						<Styled.PositionDescription>
							Front-end Developer
						</Styled.PositionDescription>
					</div>
					<hr />
					<div style={{ display: 'flex' }}>
						<Styled.SmallTitle>projects</Styled.SmallTitle>
						<Styled.PositionDescription>
							골프연습장 타석제어 기능, 레슨일지, 보안핀 기능, FCM
						</Styled.PositionDescription>
					</div>
					<hr />
				</Styled.IntroBox>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default About;
