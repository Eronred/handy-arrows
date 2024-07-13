'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React from 'react';

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });
}

interface CSPostHogProviderProps {
    children: React.ReactNode;
}

export function CSPostHogProvider({ children }: CSPostHogProviderProps) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}