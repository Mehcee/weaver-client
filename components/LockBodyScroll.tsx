"use client";
import { useEffect, useState } from "react";

interface LockBodyScrollProps {
    lock: boolean;
}

export default function LockBodyScroll({ lock }: LockBodyScrollProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const originalOverflow = document.body.style.overflow;
            const originalHeight = document.body.style.height;

            if (lock) {
                window.scrollTo({ top: 0, behavior: "smooth" });

                document.body.style.transition = "all 0.3s ease-in-out";
                document.body.style.overflow = "hidden";
                document.body.style.height = "100vh";
            } else {
                document.body.style.transition = "all 0.3s ease-in-out";
                document.body.style.overflow = originalOverflow;
                document.body.style.height = originalHeight;
            }

            return () => {
                document.body.style.transition = "";
                document.body.style.overflow = originalOverflow;
                document.body.style.height = originalHeight;
            };
        }
    }, [mounted, lock]);

    return null;
}
