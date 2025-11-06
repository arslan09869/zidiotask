"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginForm2() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background rose-gradient">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-600/30 via-transparent to-background blur-3xl"></div>
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(255,72,112,0.25)_0%,transparent_70%)] blur-3xl rounded-full"></div>

      <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Side Illustration */}
        <motion.div
          className="hidden flex-1 items-center justify-center p-8 md:flex"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="https://i.postimg.cc/j5p27Zhp/roblox-logo.webp"
            alt="Illustration"
            className="mx-auto w-full max-w-sm md:max-w-md drop-shadow-[0_0_40px_rgba(255,72,112,0.5)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          className="flex flex-1 items-center justify-center p-6 md:p-10"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="relative w-full max-w-md border border-border/70 bg-card/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,72,112,0.4)] dark:shadow-[0_0_25px_rgba(255,72,112,0.3)] transition-all hover:shadow-[0_0_40px_rgba(255,72,112,0.6)]">
              <CardContent className="space-y-6 p-8">
                {/* Logo */}
                <motion.div
                  className="space-y-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img
                    src="/zidiotask-logo.png"
                    alt="Zidiotask"
                    className="mx-auto w-44 md:w-56 drop-shadow-[0_0_20px_rgba(255,72,112,0.4)]"
                  />
                  <p className="text-muted-foreground text-sm">
                    Log in or create an account to continue your productivity
                    journey with Zidiotask.
                  </p>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="border-border bg-background/50 focus:ring-[hsl(348.97deg_71.31%_52.16%)] focus:ring-2 hover:shadow-[0_0_15px_rgba(255,72,112,0.4)] transition-all"
                  />
                </motion.div>

                {/* Password Input */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="border-border bg-background/50 focus:ring-[hsl(348.97deg_71.31%_52.16%)] focus:ring-2 hover:shadow-[0_0_15px_rgba(255,72,112,0.4)] transition-all"
                  />
                </motion.div>

                {/* Continue Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-full bg-[hsl(348.97deg_71.31%_52.16%)] text-white hover:bg-[hsl(348.97deg_71.31%_45%)] shadow-[0_0_25px_rgba(255,72,112,0.6)] hover:shadow-[0_0_35px_rgba(255,72,112,0.8)] transition-all duration-300">
                    Continue
                  </Button>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="border-t border-border w-full"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-card/50 px-3 text-muted-foreground">
                      OR
                    </span>
                  </div>
                </motion.div>

                {/* Google Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    variant="secondary"
                    className="w-full bg-white/90 text-[#dc2e4e] shadow-[0_0_20px_rgba(255,72,112,0.3)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,72,112,0.5)] transition-all duration-300"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#dc2e4e">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="ml-2">Sign in with Google</span>
                  </Button>
                </motion.div>

                {/* Terms */}
                <motion.p
                  className="text-muted-foreground mt-2 text-center text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  By signing in, you agree to our{" "}
                  <Link
                    href="#"
                    className="underline hover:text-rose-400 transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="underline hover:text-rose-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
