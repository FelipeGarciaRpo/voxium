"use client";

import { OrganizationList } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export default function OrgSelectionPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        appearance={{
          variables: {
            colorPrimary: isDark
              ? "oklch(0.98 0 0)"
              : "oklch(0.488 0.218 260)",
            colorBackground: isDark
              ? "oklch(0.14 0 0)"
              : "oklch(1 0 0)",
            colorText: isDark
              ? "oklch(0.98 0 0)"
              : "oklch(0.20 0.04 260)",
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
            rootBox: "!mx-auto !w-full !max-w-md",
            card: "!bg-card !border !border-border !shadow-xl !rounded-xl",
            headerTitle: "!text-foreground !text-2xl !font-semibold",
            headerSubtitle: "!text-muted-foreground",

            // Lista de organizaciones disponibles
            organizationListPreviewItem:
              "!bg-card hover:!bg-accent !border !border-border !rounded-md !transition-colors",
            organizationListPreviewItemActionButton:
              "!text-primary hover:!text-primary/80 !font-medium",
            organizationPreviewMainIdentifier:
              "!text-foreground !font-medium",
            organizationPreviewSecondaryIdentifier:
              "!text-muted-foreground",
            organizationPreviewAvatarBox:
              "!border !border-border !rounded-md",

            // Botón de "Crear organización"
            organizationListCreateOrganizationActionButton:
              "!bg-primary !text-primary-foreground hover:!bg-primary/90 !transition-colors !rounded-md !font-medium",

            // Form cuando creas una org nueva
            formFieldLabel: "!text-foreground !font-medium",
            formFieldInput:
              "!bg-input !border !border-border !text-foreground !rounded-md focus:!ring-2 focus:!ring-ring",
            formButtonPrimary:
              "!bg-primary !text-primary-foreground hover:!bg-primary/90 !transition-colors !rounded-md !font-medium",
            formButtonReset:
              "!text-muted-foreground hover:!text-foreground",

            dividerLine: "!bg-border",
            dividerText: "!text-muted-foreground",
            footerActionText: "!text-muted-foreground",
            footerActionLink:
              "!text-primary hover:!text-primary/80 !font-medium",
          },
        }}
      />
    </div>
  );
}