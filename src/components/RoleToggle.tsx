"use client";

import React, { useEffect, useState } from "react";
import { Row, ToggleButton, Text } from "@once-ui-system/core";
import { useRole } from "@/context/RoleContext";

export const RoleToggle: React.FC = () => {
  const { role, setRole } = useRole();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show pulsing hint only on first visit
    const seen = localStorage.getItem("role-toggle-seen");
    if (!seen) setShowHint(true);
  }, []);

  const handleRoleChange = (newRole: "Full Stack" | "Data Analyst") => {
    setRole(newRole);
    if (showHint) {
      setShowHint(false);
      localStorage.setItem("role-toggle-seen", "true");
    }
  };

  return (
    <Row gap="8" vertical="center">
      {showHint && (
        <Text
          variant="label-default-xs"
          onBackground="brand-weak"
          style={{
            whiteSpace: "nowrap",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          Switch view →
        </Text>
      )}
      <Row
        gap="4"
        vertical="center"
        background="neutral-alpha-weak"
        padding="4"
        radius="m-4"
        title="Switch between Full Stack and Data Analyst portfolio views"
        style={{ position: "relative" }}
      >
        {showHint && (
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--brand-solid-strong)",
              animation: "pulse 1.5s ease-in-out infinite",
              zIndex: 10,
            }}
          />
        )}
        <ToggleButton
          label="Full Stack"
          selected={role === "Full Stack"}
          onClick={() => handleRoleChange("Full Stack")}
        />
        <ToggleButton
          label="Data"
          selected={role === "Data Analyst"}
          onClick={() => handleRoleChange("Data Analyst")}
        />
      </Row>
    </Row>
  );
};
