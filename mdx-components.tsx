import type { ComponentPropsWithoutRef } from 'react';

export function useMDXComponents(components: Record<string, React.ComponentType<ComponentPropsWithoutRef<'div'>>>) {
  return { ...components };
}
