"use client";

import React from "react";
import { useRole } from "@/context/RoleContext";
import { home, about, person } from "@/resources/content";
import { Column, Row, Text, Media, Tag, Heading, Button, Background, RevealFx } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

export const DynamicHeadline = () => {
  const { role } = useRole();
  return <>{role === "Full Stack" ? home.headline : home.headlineData}</>;
};

export const DynamicRoleTitle = () => {
  const { role } = useRole();
  return <>{role === "Full Stack" ? person.role : "Data Analyst"}</>;
};

export const DynamicSubline = () => {
  const { role } = useRole();
  return (
    <>
      {role === "Full Stack" ? home.sublineText : home.sublineDataText}
    </>
  );
};

export const DynamicAboutIntro = () => {
  const { role } = useRole();
  return <>{role === "Full Stack" ? about.intro.description : about.intro.descriptionData}</>;
};

export const DynamicProjects = ({ allProjects, range }: { allProjects: any[], range?: [number, number?] }) => {
  const { role } = useRole();
  const filteredProjects = allProjects.filter((post) => post.metadata.category === role || !post.metadata.category);
  
  const sortedProjects = filteredProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          hostedUrl={post.metadata.hostedUrl || ""}
          stack={post.metadata.stack || []}
        />
      ))}
    </Column>
  );
};

export const DynamicWorkExperiences = () => {
  const { role } = useRole();
  const experiences = role === "Full Stack" ? about.work.experiences : about.work.experiencesData;

  return (
    <Column fillWidth gap="l" marginBottom="40">
      {experiences.map((experience, index) => (
        <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
          <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
            <Text id={experience.company} variant="heading-strong-l">
              {experience.company}
            </Text>
            <Text variant="heading-default-xs" onBackground="neutral-weak">
              {experience.timeframe}
            </Text>
          </Row>
          <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
            {experience.role}
          </Text>
          <Column as="ul" gap="16">
            {experience.achievements.map((achievement: React.ReactNode, i: number) => (
              <Text as="li" variant="body-default-m" key={`${experience.company}-${i}`}>
                {achievement}
              </Text>
            ))}
          </Column>
          {experience.images && experience.images.length > 0 && (
            <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
              {experience.images.map((image, i) => (
                <Row key={i} border="neutral-medium" radius="m" minWidth={image.width} height={image.height}>
                  <Media enlarge radius="m" sizes={image.width.toString()} alt={image.alt} src={image.src} />
                </Row>
              ))}
            </Row>
          )}
        </Column>
      ))}
    </Column>
  );
};

export const DynamicTechnicalSkills = () => {
  const { role } = useRole();
  const skills = role === "Full Stack" ? about.technical.skills : about.technical.skillsData;

  return (
    <Column fillWidth gap="l">
      {skills.map((skill, index) => (
        <Column key={`${skill.title}-${index}`} fillWidth gap="4">
          <Text id={skill.title} variant="heading-strong-l">
            {skill.title}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {skill.description}
          </Text>
          {skill.tags && skill.tags.length > 0 && (
            <Row wrap gap="8" paddingTop="8">
              {skill.tags.map((tag, tagIndex) => (
                <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                  {tag.name}
                </Tag>
              ))}
            </Row>
          )}
          {skill.images && skill.images.length > 0 && (
            <Row fillWidth paddingTop="m" gap="12" wrap>
              {skill.images.map((image, i) => (
                <Row key={i} border="neutral-medium" radius="m" minWidth={image.width} height={image.height}>
                  <Media enlarge radius="m" sizes={image.width.toString()} alt={image.alt} src={image.src} />
                </Row>
              ))}
            </Row>
          )}
        </Column>
      ))}
    </Column>
  );
};

export const DynamicHireMe = () => {
  const { role } = useRole();
  const resumeLink = role === "Full Stack" ? "/docs/Milind_Bansal_Full_Stack_Resume.pdf" : "/docs/Milind_Bansal_Data_Analyst_Resume.pdf";
  
  return (
    <RevealFx translateY="16" delay={0.2} fillWidth>
      <Row
        fillWidth
        padding="64"
        radius="l"
        marginBottom="m"
        background="surface"
        border="brand-alpha-strong"
        position="relative"
        overflow="hidden"
        s={{ direction: "column" }}
      >
        <Background
          top="0"
          position="absolute"
          gradient={{
            display: true,
            opacity: 60,
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            tilt: 45,
            colorStart: "brand-background-strong",
            colorEnd: "static-transparent",
          }}
          lines={{
            display: true,
            opacity: 20,
            size: "16",
            thickness: 1,
            color: "brand-alpha-strong",
            angle: 45
          }}
        />
        <Column flex={1} position="relative" gap="24">
          <Row>
            <Tag size="l" variant="brand" prefixIcon="sparkle">
              Available for Hire
            </Tag>
          </Row>
          <Heading variant="display-strong-m">
            {role === "Full Stack" ? "Ready to Collaborate" : "Open for Data Roles"}
          </Heading>
          <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
            {role === "Full Stack" 
              ? "I specialize in building scalable, user-centric web applications. Let's discuss how my expertise in React, Next.js, and backend architecture can drive your next big project." 
              : "I transform complex datasets into clear, actionable business strategies. Let's discuss how my skills in predictive modeling and data visualization can help your team."}
          </Text>
          <Row gap="16" paddingTop="16" wrap>
            <Button
              id="resume"
              href={resumeLink}
              variant="primary"
              size="l"
              weight="default"
              prefixIcon="download"
            >
              Download Resume
            </Button>
            <Button
              href={about.path}
              variant="secondary"
              size="l"
              weight="default"
              suffixIcon="arrowRight"
            >
              Learn More
            </Button>
          </Row>
        </Column>
      </Row>
    </RevealFx>
  );
};
