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
						∙ 현재 아틸런(행복골프학교)에서 React를 활용해 프론트 개발을 하고
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
					<Styled.SmallTitleBox>
						<Styled.SmallTitle>period</Styled.SmallTitle>
						<Styled.PeriodDescription>20.05 ~ current</Styled.PeriodDescription>
					</Styled.SmallTitleBox>
					<hr />
					<Styled.SmallTitleBox>
						<Styled.SmallTitle>position</Styled.SmallTitle>
						<Styled.PositionDescription>
							Front-end Developer
						</Styled.PositionDescription>
					</Styled.SmallTitleBox>
					<hr />
					<Styled.SmallTitleBox>
						<Styled.SmallTitle>projects</Styled.SmallTitle>
						<Styled.PositionDescription>
							골프연습장 타석제어 기능, 레슨일지, 보안핀 기능, 대시보드
						</Styled.PositionDescription>
					</Styled.SmallTitleBox>
					<hr />
					<div>
						∙ &nbsp; 행복골프훈련소 회원 관리와 운영을 위한 관리자 웹서비스
						Front-end 개발/운영개선
					</div>
					<br />
					<div>Plate Controller</div>
					<div>∙ &nbsp; 골프스크린 프로젝터, 컴퓨터, 타석사용 제어 개발</div>
					<div>∙ &nbsp; 20.06 ~ 20.07</div>
					<div>
						<Styled.SkillBox>
							<Styled.SkillWrapper>
								<Styled.SkillStart>Typescript</Styled.SkillStart>
								<Styled.Skill>React</Styled.Skill>
							</Styled.SkillWrapper>
						</Styled.SkillBox>
					</div>
					<div>Lesson Report</div>
					<div>∙ &nbsp; 회원 / 코치 레슨일지 개발</div>
					<div>∙ &nbsp; 20.05 ~ 20.08</div>
					<div>
						<Styled.SkillBox>
							<Styled.SkillWrapper>
								<Styled.SkillStart>Typescript</Styled.SkillStart>
								<Styled.Skill>React</Styled.Skill>
							</Styled.SkillWrapper>
						</Styled.SkillBox>
					</div>
					<div>Check In</div>
					<div>∙ &nbsp; 회원 체크인 개발 / 운영 개선</div>
					<div>∙ &nbsp; 20.08 ~ 20.09</div>
					<div>
						<Styled.SkillBox>
							<Styled.SkillWrapper>
								<Styled.SkillStart>Typescript</Styled.SkillStart>
								<Styled.Skill>React</Styled.Skill>
							</Styled.SkillWrapper>
						</Styled.SkillBox>
					</div>
					<div>Dashboard</div>
					<div>∙ &nbsp; 관리자 대시보드 페이지 개발 / 운영 개선</div>
					<div>∙ &nbsp; 20.09 ~ 20.10</div>
					<div>
						<Styled.SkillBox>
							<Styled.SkillWrapper>
								<Styled.SkillStart>Typescript</Styled.SkillStart>
								<Styled.Skill>React</Styled.Skill>
							</Styled.SkillWrapper>
						</Styled.SkillBox>
					</div>
				</Styled.IntroBox>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default About;
