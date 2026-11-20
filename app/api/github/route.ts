import { NextResponse } from "next/server";

const USERNAME = "kbajpai06";

export const revalidate = 3600; // refresh cached data hourly

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const userRes = await fetch(`https://api.github.com/users/${USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });
    const reposRes = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0)
      : 0;

    const topRepos = Array.isArray(repos)
      ? repos
          .filter((r: any) => !r.fork)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4)
          .map((r: any) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language,
          }))
      : [];

    return NextResponse.json({
      publicRepos: user.public_repos ?? null,
      followers: user.followers ?? null,
      totalStars,
      topRepos,
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        publicRepos: null,
        followers: null,
        totalStars: null,
        topRepos: [],
        error: "Could not reach GitHub. Showing static profile instead.",
      },
      { status: 200 }
    );
  }
}
