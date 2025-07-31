"use client";
import React, { useEffect, useState } from "react";
import classes from "@/styles/page.module.css";
import Image from "next/image";
import { useNotification } from "@/hooks/useNotification";
import AboutHealthcare from "@/components/home/AboutHealthcare";
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  const { NotificationHandler } = useNotification();
  useEffect(() => {
    NotificationHandler(
      "Buddybot",
      "Welcome to the Buddybot. We are here to help you.",
      "Success"
    );
  }, []);

  return (
    <div className={classes["container"]}>
      <div className={classes["box"]}>
        <div className={classes["top-image"]}>
          <Image
            src="/image/background.jpg"
            alt="background"
            width={1920}
            height={1080}
          />
          <div className={classes["image"]}></div>
          <div className={classes["about-heading"]}>
            <h1>Personalized AI Assistant </h1>
            <h2>A dedicated AI-powered app tailored exclusively for individual users, designed to enhance everyday life through intelligent, adaptive support.</h2>
          </div>
        </div>
        <AboutHealthcare />
        <ContactUs />
      </div>
    </div>
  );
}
