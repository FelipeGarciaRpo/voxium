"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  OrganizationSwitcher,
  UserButton,
  useClerk,
} from "@clerk/nextjs";
import {
  type LucideIcon,
  Home,
  LayoutGrid,
  AudioLines,
  Volume2,
  Settings,
  Headphones,
} from "lucide-react";
import Link from "next/link";
//import { UsageContainer } from "@/features/billing/components/usage-container";
import { VoiceCreateDialog } from "@/features/voices/components/voice-create-dialog";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface NavSectionProps {
  label?: string;
  items: MenuItem[];
  pathname: string;
}

function NavSection({ label, items, pathname }: NavSectionProps) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild={!!item.url}
                isActive={
                  item.url
                    ? item.url === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.url)
                    : false
                }
                onClick={item.onClick}
                tooltip={item.title}
                className="
                  group/item h-10 px-3 py-2 text-[13px] font-medium tracking-tight
                  transition-all duration-200
                  hover:bg-accent/60 hover:border-border/50
                  data-[active=true]:bg-gradient-to-r data-[active=true]:from-primary/10 data-[active=true]:to-transparent
                  data-[active=true]:border-primary/30
                  data-[active=true]:text-foreground
                  data-[active=true]:shadow-[inset_0_1px_0_0_var(--color-primary)/10]
                  [&>svg]:size-[18px] [&>svg]:shrink-0
                  data-[active=true]:[&>svg]:text-primary
                "
              >
                {item.url ? (
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <>
                    <item.icon  />
                    <span>{item.title}</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const clerk = useClerk();
  const [voiceDialogOpen, setVoiceDialogOpen] = useState(false);

  const mainMenuItems: MenuItem[] = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Explore voices",
      url: "/voices",
      icon: LayoutGrid,
    },
    {
      title: "Text to speech",
      url: "/text-to-speech",
      icon: AudioLines,
    },
    {
      title: "Voice cloning",
      icon: Volume2,
      onClick: () => setVoiceDialogOpen(true),
    },
  ];

  const othersMenuItems: MenuItem[] = [
    {
      title: "Settings",
      icon: Settings,
      onClick: () => clerk.openOrganizationProfile(),
    },
    {
      title: "Help and support",
      url: "mailto:business@codewithantonio.com",
      icon: Headphones,
    },
  ];

  return (
    <>
      {/* <VoiceCreateDialog
        open={voiceDialogOpen}
        onOpenChange={setVoiceDialogOpen}
      /> */}
      <Sidebar
        collapsible="icon"
        className="
          border-r border-border/60
          bg-gradient-to-b from-sidebar via-sidebar to-sidebar/95
          backdrop-blur-xl
        "
      >
        <SidebarHeader className="flex flex-col gap-4 pt-4">
          <div className="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
<div className="relative shrink-0">
<Image
  src="/image.jpg"
  alt="Resonance"
  width={20}
  height={20}
  className="size-7 object-contain border-rounded rounded-lg"
/>
  <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
</div>
            <span className="group-data-[collapsible=icon]:hidden bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-lg font-semibold tracking-tighter text-transparent">
              Voxium Mind
            </span>
            <SidebarTrigger className="ml-auto lg:hidden" />
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <OrganizationSwitcher
  hidePersonal
  fallback={
    <Skeleton className="h-9 w-full group-data-[collapsible=icon]:size-8 rounded-lg" />
  }
  appearance={{
    elements: {
      rootBox:
        "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
      organizationSwitcherTrigger:
        "w-full! justify-between! bg-transparent! border-0! shadow-none! rounded-lg! pl-1.5! pr-2! py-1.5! gap-3! opacity-90! hover:opacity-100! hover:bg-transparent! focus:shadow-none! transition-opacity! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1!",
      organizationPreview: "gap-2!",
      organizationPreviewAvatarBox: "size-6! rounded-md!",
      organizationPreviewTextContainer:
        "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
      organizationPreviewMainIdentifier:
        "text-[13px]! text-foreground!",
      organizationSwitcherTriggerIcon:
        "size-4! text-muted-foreground! group-data-[collapsible=icon]:hidden!",
    },
  }}
/>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <div className="mx-2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <SidebarContent>
          <NavSection items={mainMenuItems} pathname={pathname} />
          <NavSection
            label="Others"
            items={othersMenuItems}
            pathname={pathname}
          />
        </SidebarContent>
        <div className="mx-2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <SidebarFooter className="gap-2 py-3">
  {/* <UsageContainer /> */}
  <SidebarMenu className="gap-2">
    <SidebarMenuItem className="flex justify-center group-data-[collapsible=icon]:justify-center">
      <ThemeToggle />
    </SidebarMenuItem>
    <SidebarMenuItem>
      <UserButton
        showName
        fallback={
          <Skeleton className="h-9 w-full group-data-[collapsible=icon]:size-8 rounded-lg" />
        }
        appearance={{
          elements: {
            rootBox:
              "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
            userButtonTrigger:
              "w-full! justify-between! bg-transparent! border-0! shadow-none! rounded-lg! pl-1.5! pr-2! py-1.5! opacity-90! hover:opacity-100! hover:bg-transparent! focus:shadow-none! transition-opacity! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden!",
            userButtonBox: "flex-row-reverse! gap-2!",
            userButtonOuterIdentifier:
              "text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
            userButtonAvatarBox: "size-7!",
          },
        }}
      />
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}