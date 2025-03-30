// TODO: Figure out how to enforce any typing on this

// import { SiteLinkKey } from "@/types/SiteLinks";

export const SiteLinks = {
  homeTop: {
    href: "/#course-overview",
    anchor: "Course Overview",
  },

  assignmentsTop: {
    href: "/assignments/#assignments",
    anchor: "Assignments",
  },

  assignmentsContributionStatements: {
    href: "/assignments/#contribution-statements",
    anchor: "Contribution Statements",
  },

  assignmentsPaperPresentationsTop: {
    href: "/assignments/papers/#paper-presentations",
    anchor: "Paper Presentations",
  },
  assignmentsPaperPresentationsStudentPresentations: {
    href: "/assignments/papers/#student-presentations",
    anchor: "Student Presentations",
  },
  assignmentsPaperPresentationsPresentationLogistics: {
    href: "/assignments/papers/#presentation-logistics",
    anchor: "Presentation Logistics",
  },

  assignmentsTechnologyLabTop: {
    href: "/assignments/lab/#technology-lab",
    anchor: "Technology Lab",
  },
  assignmentsTechnologyLabRequirements: {
    href: "/assignments/lab/#requirements",
    anchor: "Requirements",
  },
  assignmentsTechnologyLabDeliverables: {
    href: "/assignments/lab/#deliverables",
    anchor: "Deliverables",
  },
  assignmentsTechnologyLabExample: {
    href: "/assignments/lab/#example",
    anchor: "Example",
  },
  assignmentsTechnologyLabAssessmentOfExample: {
    href: "/assignments/lab/#assessment-of-example",
    anchor: "Assessment of Example",
  },

  assignmentsProjectTop: {
    href: "/assignments/project/#project",
    anchor: "Project",
  },

  calendarTop: {
    href: "/calendar/#calendar",
    anchor: "Calendar",
  },
} as const;
