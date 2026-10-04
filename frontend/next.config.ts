import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default function config() {
  return nextConfig;
}