import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const layout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider>{children}</SubscriptionModalProvider>
    </main>
  );
};

export default layout;
