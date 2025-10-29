"use client";

import { useState } from "react";
import { Login } from "@/components/auth/login";
import { Register } from "@/components/auth/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white">
      <div className="w-full max-w-md p-6 rounded-xl bg-gray-900 shadow-lg">
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "login" | "register")}>
          {/* tab buttons */}
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* login tab */}
          <TabsContent value="login">
            <Login onSwitchToRegister={() => setActiveTab("register")} />
          </TabsContent>

          {/* register tab */}
          <TabsContent value="register">
            <Register onSwitchToLogin={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
