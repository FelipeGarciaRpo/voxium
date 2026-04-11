"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider, useTheme } from "next-themes";

function ClerkWithTheme({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: isDark
            ? "oklch(0.98 0 0)"
            : "oklch(0.488 0.218 260)",
          colorBackground: isDark ? "oklch(0.14 0 0)" : "oklch(1 0 0)",
          colorText: isDark ? "oklch(0.98 0 0)" : "oklch(0.20 0.04 260)",
          colorTextSecondary: isDark
            ? "oklch(0.68 0 0)"
            : "oklch(0.52 0.03 255)",
          colorInputBackground: isDark
            ? "oklch(0.18 0 0)"
            : "oklch(0.96 0.008 250)",
          colorInputText: isDark
            ? "oklch(0.98 0 0)"
            : "oklch(0.20 0.04 260)",
          colorDanger: "oklch(0.65 0.19 25)",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-sans)",
        },
        elements: {
          // ===== Cards (SignIn, SignUp, OrgList, CreateOrg, UserProfile) =====
          card: "!bg-card !border !border-border !shadow-xl !rounded-xl",
          headerTitle: "!text-foreground !text-2xl !font-semibold",
          headerSubtitle: "!text-muted-foreground",

          // ===== Form fields (compartidos en todos los flows) =====
          formFieldLabel: "!text-foreground !font-medium",
          formFieldInput:
            "!bg-input !border !border-border !text-foreground !rounded-md focus:!ring-2 focus:!ring-ring",
          formFieldHintText: "!text-muted-foreground",
          formFieldErrorText: "!text-destructive",
          formButtonPrimary:
            "!bg-primary !text-primary-foreground hover:!bg-primary/90 !transition-colors !rounded-md !font-medium",
          formButtonReset:
            "!text-muted-foreground hover:!text-foreground",

          // ===== Social buttons (SignIn / SignUp) =====
          socialButtonsBlockButton:
            "!bg-secondary !text-secondary-foreground !border !border-border hover:!bg-accent !transition-colors",
          socialButtonsBlockButtonText:
            "!text-secondary-foreground !font-medium",

          // ===== Dividers =====
          dividerLine: "!bg-border",
          dividerText: "!text-muted-foreground",

          // ===== Footer links =====
          footerActionText: "!text-muted-foreground",
          footerActionLink:
            "!text-primary hover:!text-primary/80 !font-medium",

          // ===== OrganizationList =====
          organizationListPreviewItem:
            "!bg-card hover:!bg-accent !border !border-border !rounded-md !transition-colors",
          organizationListPreviewItemActionButton:
            "!text-primary hover:!text-primary/80 !font-medium",
          organizationPreviewMainIdentifier:
            "!text-foreground !font-medium",
          organizationPreviewSecondaryIdentifier:
            "!text-muted-foreground",
          organizationPreviewAvatarBox: "!border !border-border !rounded-md",
          organizationListCreateOrganizationActionButton:
            "!bg-primary !text-primary-foreground hover:!bg-primary/90 !transition-colors !rounded-md !font-medium",

          // ===== Avatar uploader (CreateOrganization, UserProfile) =====
          avatarImageActionsUpload:
            "!text-primary hover:!text-primary/80 !font-medium",
          avatarImageActionsRemove:
            "!text-destructive hover:!text-destructive/80 !font-medium",

          // ===== UserButton (avatar en navbar) =====
          userButtonAvatarBox: "!border !border-border !rounded-full",
          userButtonPopoverCard:
            "!bg-card !border !border-border !shadow-xl !rounded-xl",
          userButtonPopoverActionButton:
            "!text-foreground hover:!bg-accent !transition-colors",
          userButtonPopoverActionButtonText: "!text-foreground",
          userButtonPopoverActionButtonIcon: "!text-muted-foreground",
          userButtonPopoverFooter: "!bg-card !border-t !border-border",

          // ===== OrganizationSwitcher (dropdown en navbar) =====
          organizationSwitcherTrigger:
            "!bg-card !border !border-border !text-foreground hover:!bg-accent !transition-colors !rounded-md",
          organizationSwitcherTriggerIcon: "!text-muted-foreground",
          organizationSwitcherPopoverCard:
            "!bg-card !border !border-border !shadow-xl !rounded-xl",
          organizationSwitcherPopoverActionButton:
            "!text-foreground hover:!bg-accent !transition-colors",
          organizationSwitcherPopoverActionButtonText: "!text-foreground",
          organizationSwitcherPopoverActionButtonIcon:
            "!text-muted-foreground",
          organizationSwitcherPopoverFooter:
            "!bg-card !border-t !border-border",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkWithTheme>{children}</ClerkWithTheme>
    </ThemeProvider>
  );
}