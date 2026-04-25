// Analytics utility functions for custom event tracking
declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Specific tracking functions for your portfolio
export const trackResumeDownload = () => {
    trackEvent('download', 'Resume', 'PDF Download');
};

export const trackProjectView = (projectName: string) => {
    trackEvent('view', 'Project', projectName);
};

export const trackProjectClick = (projectName: string, action: 'live_demo' | 'github' | 'source_code') => {
    trackEvent('click', 'Project', `${projectName} - ${action}`);
};

export const trackContactFormSubmit = () => {
    trackEvent('submit', 'Contact Form', 'Form Submission');
};

export const trackSocialClick = (platform: string) => {
    trackEvent('click', 'Social Media', platform);
};

export const trackSkillHover = (skillName: string) => {
    trackEvent('hover', 'Skills', skillName);
};

export const trackSectionView = (sectionName: string) => {
    trackEvent('view', 'Section', sectionName);
};

export const trackScrollDepth = (depth: number) => {
    trackEvent('scroll', 'Engagement', `Depth: ${depth}%`, depth);
};
