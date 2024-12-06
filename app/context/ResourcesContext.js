"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getPostList } from '../utils/cms-service';

const ResourcesContext = createContext({
    hasResources: false,
    isLoading: true,
});

export function ResourcesProvider({ children }) {
    const [hasResources, setHasResources] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const posts = await getPostList();
                setHasResources(posts && posts.length > 0);
            } catch (error) {
                console.error('Error fetching resources:', error);
                setHasResources(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResources();
    }, []);

    return (
        <ResourcesContext.Provider value={{ hasResources, isLoading }}>
            {children}
        </ResourcesContext.Provider>
    );
}

export function useResources() {
    const context = useContext(ResourcesContext);
    if (context === undefined) {
        throw new Error('useResources must be used within a ResourcesProvider');
    }
    return context;
} 