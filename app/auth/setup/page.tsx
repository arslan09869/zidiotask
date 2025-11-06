"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProfileSetupForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="rose-gradient bg-background relative min-h-screen overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="from-background absolute -top-10 left-0 h-1/2 w-full rounded-b-full bg-gradient-to-b to-transparent blur"></div>
      <div className="from-rose-600/60 absolute -top-64 left-0 h-1/2 w-full rounded-full bg-gradient-to-b to-transparent blur-3xl"></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="border-border/70 bg-card/20 shadow-[0_0_25px_rgba(255,72,112,0.4)] backdrop-blur-xl dark:shadow-[0_0_25px_rgba(255,72,112,0.35)] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,72,112,0.6)]">
            <CardContent className="space-y-6 p-8">
              {/* Header */}
              <motion.div
                className="space-y-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="/zidiotask-logo.png"
                  alt="Logo"
                  className="mx-auto h-auto w-40 md:w-48 drop-shadow-[0_0_15px_rgba(255,72,112,0.4)]"
                />
                <h2 className="text-xl tracking-tight text-white">
                  Complete Your Profile
                </h2>
                <p className="text-muted-foreground text-sm">
                  Fill out the details below to personalize your workspace.
                </p>
              </motion.div>

              {/* Full Name */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="border-border bg-background/50 focus:ring-[hsl(348.97deg_71.31%_52.16%)] focus:ring-2 transition-all hover:shadow-[0_0_12px_rgba(255,72,112,0.4)]"
                />
              </motion.div>

              {/* Username */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="@john_doe"
                  className="border-border bg-background/50 focus:ring-[hsl(348.97deg_71.31%_52.16%)] focus:ring-2 transition-all hover:shadow-[0_0_12px_rgba(255,72,112,0.4)]"
                />
              </motion.div>

              {/* Country Select */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Label htmlFor="country">Country</Label>
                <select
                  id="country"
                  className="border-border bg-background text-foreground w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-[hsl(348.97deg_71.31%_52.16%)] hover:shadow-[0_0_12px_rgba(255,72,112,0.4)] transition"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  <option value="India">🇮🇳 India</option>
                  <option value="USA">🇺🇸 United States</option>
                  <option value="UK">🇬🇧 United Kingdom</option>
                  <option value="Canada">🇨🇦 Canada</option>
                  <option value="Australia">🇦🇺 Australia</option>
                  <option value="Germany">🇩🇪 Germany</option>
                  <option value="France">🇫🇷 France</option>
                  <option value="Japan">🇯🇵 Japan</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              {/* Bio */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  placeholder="Tell us something about you..."
                  className="border-border bg-background/50 text-sm text-foreground placeholder:text-muted-foreground w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-[hsl(348.97deg_71.31%_52.16%)] hover:shadow-[0_0_12px_rgba(255,72,112,0.4)] transition"
                  rows={3}
                />
              </motion.div>

              {/* Enhanced Profile Picture Input */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Label htmlFor="profilePic">Profile Picture</Label>
                <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-border bg-background/40 rounded-xl p-6 cursor-pointer hover:shadow-[0_0_20px_rgba(255,72,112,0.4)] transition-all">
                  <Input
                    id="profilePic"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-24 w-24 rounded-full object-cover shadow-[0_0_20px_rgba(255,72,112,0.4)]"
                    />
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Drag & drop or click to upload
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Save Profile Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="w-full bg-[hsl(348.97deg_71.31%_52.16%)] hover:bg-[hsl(348.97deg_71.31%_45%)] text-white shadow-[0_0_20px_rgba(255,72,112,0.5)] hover:shadow-[0_0_30px_rgba(255,72,112,0.7)] transition-all duration-300">
                  Save Profile
                </Button>
              </motion.div>

              {/* Skip Option */}
              <motion.p
                className="text-muted-foreground mt-2 text-center text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Want to skip this step?{" "}
                <Link
                  href="/dashboard"
                  className="text-rose-400 hover:text-rose-500 underline transition-colors"
                >
                  Go to Dashboard
                </Link>
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
