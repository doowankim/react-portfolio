import React from "react";
import * as Styled from "./styles";
import { SkillTabBox } from "../../components";

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
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Javascript" />
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="Node" />
              <SkillTabBox body="React" />
              <SkillTabBox body="Redux" />
              <SkillTabBox body="Redux-thunk" />
              <SkillTabBox body="Redux-pack" />
            </Styled.FlexBox>
            <Styled.FlexBox>
              <SkillTabBox body="Firebase" />
              <SkillTabBox body="Styled-components" />
            </Styled.FlexBox>
          </div>
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
          <Styled.DetailDescription>
            <div>
              ∙ &nbsp; 행복골프훈련소 회원 관리와 운영을 위한 관리자 웹서비스
              Front-end 개발/운영개선
            </div>
          </Styled.DetailDescription>
          <br />
          <Styled.DetailDescription>
            <div>Plate Controller</div>
            <div>∙ &nbsp; 골프스크린 프로젝터, 컴퓨터, 타석사용 제어 개발</div>
            <div>∙ &nbsp; 20.06 ~ 20.07</div>
            <div>∙ &nbsp; 하드웨어 연동 실시간 작업</div>
            <div>∙ &nbsp; 메모리 누수 개선</div>
          </Styled.DetailDescription>
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="React" />
            </Styled.FlexBox>
          </div>
          <Styled.DetailDescription>
            <div>Lesson Report</div>
            <div>∙ &nbsp; 회원 / 코치 레슨일지 개발</div>
            <div>∙ &nbsp; 20.05 ~ 20.08</div>
            <div>∙ &nbsp; 회원 후기 작성 기능 개발</div>
            <div>∙ &nbsp; 코치 영상 업로드 기능 개발</div>
          </Styled.DetailDescription>
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="React" />
            </Styled.FlexBox>
          </div>
          <Styled.DetailDescription>
            <div>Check In</div>
            <div>∙ &nbsp; 회원 체크인 개발 / 운영 개선</div>
            <div>∙ &nbsp; 20.08 ~ 20.09</div>
            <div>∙ &nbsp; 태블릿에 맞춰 반응형 적용</div>
            <div>∙ &nbsp; 레슨 및 타석 이용에 대한 체크인 기능 별도 적용</div>
          </Styled.DetailDescription>
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="React" />
            </Styled.FlexBox>
          </div>
          <Styled.DetailDescription>
            <div>Dashboard</div>
            <div>∙ &nbsp; 관리자 대시보드 페이지 개발 / 운영 개선</div>
            <div>∙ &nbsp; 20.09 ~ 20.10</div>
            <div>
              ∙ &nbsp; 하루동안의 타석, 레슨 예약에 대한 내용을 rechart를 이용해
              그래프 UI로 개발
            </div>
            <div>∙ &nbsp; FCM을 이용한 웹 푸시 notification 적용</div>
            <div>
              ∙ &nbsp; 날짜를 선택하여 해당 날짜 미확인 체크인 회원 처리 기능
              개발
            </div>
          </Styled.DetailDescription>
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="React" />
              <SkillTabBox body="Firebase" />
              <SkillTabBox body="rechart.js" />
            </Styled.FlexBox>
          </div>
          <br />
          <Styled.DetailDescription>
            <div>User Management</div>
            <div>∙ &nbsp; 회원 관리 운영 개선</div>
            <div>∙ &nbsp; 20.10 ~ 20.11</div>
            <div>∙ &nbsp; 회원 검색 기능 개발</div>
            <div>∙ &nbsp; 회원 리스트 그리드 화면 추가 적용</div>
          </Styled.DetailDescription>
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="React" />
            </Styled.FlexBox>
          </div>
          <br />
          <Styled.DetailDescription>
            <div>CSS transform</div>
            <div>
              ∙ &nbsp; 기존 SCSS에서 CSS in js인 styled-component로 전환
            </div>
            <div>∙ &nbsp; 20.09 ~ 20.11</div>
          </Styled.DetailDescription>
          <div>
            <Styled.FlexBox>
              <SkillTabBox body="Typescript" />
              <SkillTabBox body="React" />
              <SkillTabBox body="Styled-components" />
            </Styled.FlexBox>
          </div>
        </Styled.IntroBox>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default About;
