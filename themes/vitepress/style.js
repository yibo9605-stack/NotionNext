/* eslint-disable react/no-unknown-property */
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import CONFIG from './config'

const Style = () => (
  <style jsx global>{`
    #theme-vitepress {
      --vp-bg: #f4f4f1;
      --vp-surface: #ffffff;
      --vp-surface-soft: #fafaf9;
      --vp-text: #202321;
      --vp-muted: #68706b;
      --vp-faint: #8d9690;
      --vp-border: #e0e3df;
      --vp-primary: #3451b2;
      --vp-primary-soft: #f2f4ff;
      --vp-primary-border: #dce1ff;
      --vp-shadow: 0 24px 60px rgba(33, 38, 35, 0.08);
      --vp-serif: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
      --vp-sans:
        Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      min-height: 100vh;
      background: var(--vp-bg);
      color: var(--vp-text);
      font-family: var(--vp-sans);
    }

    .dark #theme-vitepress {
      --vp-bg: #181a19;
      --vp-surface: #222524;
      --vp-surface-soft: #282b2a;
      --vp-text: #f0f1ee;
      --vp-muted: #a7aea9;
      --vp-faint: #848b86;
      --vp-border: #383c39;
      --vp-primary: #91a7ff;
      --vp-primary-soft: rgba(107, 129, 255, 0.11);
      --vp-primary-border: rgba(145, 167, 255, 0.28);
      --vp-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
    }

    #theme-vitepress a {
      color: inherit;
    }
    #theme-vitepress ::selection {
      background: var(--vp-primary);
      color: white;
    }

    #theme-vitepress .vp-header {
      position: sticky;
      top: 0;
      z-index: 50;
      height: 64px;
      border-bottom: 1px solid var(--vp-border);
      background: color-mix(in srgb, var(--vp-surface) 92%, transparent);
      backdrop-filter: blur(14px);
    }

    #theme-vitepress .vp-header-inner {
      height: 100%;
      max-width: 1380px;
      margin: auto;
      padding: 0 32px;
      display: flex;
      align-items: center;
      gap: 18px;
    }

    #theme-vitepress .vp-brand {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      flex: none;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      white-space: nowrap;
    }

    #theme-vitepress .vp-brand-icon,
    #theme-vitepress .vp-brand-fallback {
      width: 28px;
      height: 28px;
      object-fit: cover;
      border-radius: 9px;
    }

    #theme-vitepress .vp-brand-fallback {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      background: var(--vp-primary);
      font-family: var(--vp-serif);
    }

    #theme-vitepress .vp-brand-emoji {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      font-size: 24px;
      line-height: 1;
    }

    #theme-vitepress .vp-search-trigger {
      height: 40px;
      min-width: 148px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      gap: 9px;
      color: var(--vp-muted);
      background: var(--vp-surface-soft);
      border: 1px solid transparent;
      border-radius: 10px;
      font-size: 13px;
      transition:
        border-color 0.18s ease,
        background 0.18s ease;
    }

    #theme-vitepress .vp-search-trigger:hover {
      border-color: var(--vp-border);
      background: var(--vp-surface);
    }

    #theme-vitepress .vp-search-trigger kbd {
      margin-left: auto;
      padding: 1px 5px;
      border: 1px solid var(--vp-border);
      border-radius: 4px;
      background: var(--vp-surface);
      color: var(--vp-faint);
      font-family: inherit;
      font-size: 11px;
    }

    #theme-vitepress .vp-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
      min-width: 0;
      margin-left: auto;
    }

    #theme-vitepress .vp-nav-item {
      position: relative;
    }
    #theme-vitepress .vp-nav-item > a {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 21px 11px;
      color: var(--vp-text);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      white-space: nowrap;
    }
    #theme-vitepress .vp-nav-item > a:hover {
      color: var(--vp-primary);
    }
    #theme-vitepress .vp-nav-item > a.vp-nav-active {
      color: var(--vp-primary);
    }
    #theme-vitepress .vp-nav-chevron {
      font-size: 9px;
    }
    #theme-vitepress .vp-submenu {
      position: absolute;
      top: 55px;
      right: 0;
      width: max-content;
      min-width: 160px;
      padding: 7px;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-5px);
      border: 1px solid var(--vp-border);
      border-radius: 12px;
      background: var(--vp-surface);
      box-shadow: var(--vp-shadow);
      transition: all 0.16s ease;
    }
    #theme-vitepress .vp-nav-item:hover .vp-submenu {
      visibility: visible;
      opacity: 1;
      transform: none;
    }
    #theme-vitepress .vp-submenu a {
      display: block;
      padding: 8px 11px;
      border-radius: 7px;
      color: var(--vp-muted);
      font-size: 13px;
      text-decoration: none;
    }
    #theme-vitepress .vp-submenu a:hover {
      color: var(--vp-primary);
      background: var(--vp-primary-soft);
    }

    #theme-vitepress .vp-header-actions {
      display: flex;
      align-items: center;
      gap: 9px;
      padding-left: 14px;
      border-left: 1px solid var(--vp-border);
    }
    #theme-vitepress .vp-theme-toggle {
      width: 40px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 2px 4px;
      color: var(--vp-faint);
      border: 1px solid var(--vp-border);
      border-radius: 999px;
      background: var(--vp-surface-soft);
    }
    #theme-vitepress .vp-theme-toggle i {
      width: 16px;
      height: 16px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--vp-surface);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
      font-size: 8px;
    }
    .dark #theme-vitepress .vp-theme-toggle {
      justify-content: flex-end;
    }
    #theme-vitepress .vp-github-link {
      color: var(--vp-muted);
      font-size: 21px;
    }
    #theme-vitepress .vp-github-link:hover {
      color: var(--vp-text);
    }

    #theme-vitepress .vp-main {
      width: 100%;
      min-height: calc(100vh - 180px);
      padding: 64px 28px 80px;
    }

    #theme-vitepress .vp-home-hero {
      width: min(1160px, 100%);
      min-height: calc(100vh - 270px);
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
      align-items: start;
      gap: 34px;
      margin: 0 auto;
      padding: 14px 20px 70px;
    }
    #theme-vitepress .vp-home-copy {
      position: relative;
      z-index: 2;
      padding-top: 18px;
    }
    #theme-vitepress .vp-home-brand {
      width: fit-content;
      margin-bottom: 18px;
      background: linear-gradient(100deg, #3451b2 12%, #8b5cf6 58%, #d946ef);
      background-clip: text;
      color: transparent;
      font-size: clamp(30px, 4vw, 54px);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
    }
    #theme-vitepress .vp-home-copy h1 {
      max-width: 670px;
      margin: 0;
      font-size: clamp(46px, 6.2vw, 82px);
      font-weight: 800;
      letter-spacing: -0.055em;
      line-height: 1.03;
    }
    #theme-vitepress .vp-home-copy p {
      max-width: 620px;
      margin: 28px 0 0;
      color: var(--vp-muted);
      font-size: clamp(18px, 2vw, 24px);
      line-height: 1.65;
    }
    #theme-vitepress .vp-home-actions {
      display: flex;
      gap: 14px;
      margin-top: 34px;
    }
    #theme-vitepress .vp-home-actions a {
      min-width: 104px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 22px;
      border: 1px solid var(--vp-border);
      border-radius: 999px;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease;
    }
    #theme-vitepress .vp-home-actions a:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(52, 81, 178, 0.16);
    }
    #theme-vitepress .vp-home-primary {
      color: white;
      border-color: var(--vp-primary) !important;
      background: var(--vp-primary);
    }
    #theme-vitepress .vp-home-secondary {
      background: var(--vp-surface);
    }
    #theme-vitepress .vp-home-art {
      position: relative;
      min-height: 500px;
      display: grid;
      place-items: center;
      isolation: isolate;
    }
    #theme-vitepress .vp-home-art > span {
      position: relative;
      z-index: 2;
      font-size: clamp(130px, 15vw, 210px);
      filter: drop-shadow(0 30px 22px rgba(24, 28, 55, 0.16));
      transform: rotate(-5deg);
    }
    #theme-vitepress .vp-home-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      filter: blur(42px);
      opacity: 0.72;
    }
    #theme-vitepress .vp-home-glow-blue {
      top: 80px;
      left: 22px;
      background: rgba(75, 142, 255, 0.6);
    }
    #theme-vitepress .vp-home-glow-purple {
      right: 12px;
      bottom: 70px;
      background: rgba(183, 105, 255, 0.58);
    }

    #theme-vitepress.vp-essay-mode .vp-header-inner {
      max-width: none;
      padding-left: 304px;
    }
    #theme-vitepress.vp-essay-mode .vp-header .vp-brand {
      display: none;
    }
    #theme-vitepress.vp-essay-mode .vp-main {
      padding: 0 0 88px 272px;
    }
    #theme-vitepress .vp-essay-page {
      width: min(1080px, 100%);
      display: grid;
      grid-template-columns: minmax(0, 760px) 170px;
      align-items: start;
      gap: 72px;
      margin: 0 auto;
      padding: 78px 32px 60px;
    }
    #theme-vitepress .vp-essay-sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 55;
      width: 272px;
      padding: 20px 24px;
      border-right: 1px solid var(--vp-border);
      background: var(--vp-surface-soft);
    }
    #theme-vitepress .vp-essay-side-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
    }
    #theme-vitepress .vp-essay-side-brand span {
      font-size: 25px;
    }
    #theme-vitepress .vp-essay-side-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 60px;
      font-size: 14px;
    }
    #theme-vitepress .vp-essay-side-group strong {
      margin-bottom: 4px;
      color: var(--vp-muted);
      font-size: 13px;
    }
    #theme-vitepress .vp-essay-side-group a {
      padding: 8px 12px;
      border-radius: 7px;
      color: var(--vp-primary);
      background: var(--vp-primary-soft);
      font-weight: 600;
      text-decoration: none;
    }
    #theme-vitepress .vp-essay-content {
      min-width: 0;
    }
    #theme-vitepress .vp-essay-lead {
      margin: 0;
      color: var(--vp-muted);
      font-size: 16px;
    }
    #theme-vitepress .vp-essay-rule {
      width: 100%;
      height: 1px;
      margin: 20px 0 18px;
      background: var(--vp-border);
    }
    #theme-vitepress .vp-essay-content h1 {
      margin: 0 0 64px;
      font-family: var(--vp-serif);
      font-size: clamp(48px, 5.6vw, 72px);
      font-weight: 700;
      letter-spacing: -0.045em;
      line-height: 1.1;
    }
    #theme-vitepress .vp-essay-content section {
      scroll-margin-top: 92px;
    }
    #theme-vitepress .vp-essay-content h2 {
      margin: 60px 0 24px;
      font-family: var(--vp-serif);
      font-size: 28px;
      letter-spacing: -0.02em;
    }
    #theme-vitepress .vp-essay-content p:not(.vp-essay-lead) {
      margin: 0 0 24px;
      color: color-mix(in srgb, var(--vp-text) 88%, var(--vp-muted));
      font-size: 17px;
      line-height: 2;
      text-align: justify;
    }
    #theme-vitepress .vp-essay-toc {
      position: sticky;
      top: 104px;
      display: flex;
      flex-direction: column;
      gap: 11px;
      padding-left: 18px;
      border-left: 1px solid var(--vp-border);
      color: var(--vp-muted);
      font-size: 13px;
    }
    #theme-vitepress .vp-essay-toc strong {
      margin-bottom: 4px;
      color: var(--vp-text);
      font-size: 12px;
      letter-spacing: 0.14em;
    }
    #theme-vitepress .vp-essay-toc a {
      text-decoration: none;
    }
    #theme-vitepress .vp-essay-toc a:hover {
      color: var(--vp-primary);
    }
    #theme-vitepress.vp-essay-mode .vp-footer {
      max-width: calc(1070px + 272px);
      padding-left: 300px;
    }

    #theme-vitepress .vp-list-panel,
    #theme-vitepress .vp-generic-panel {
      width: min(1070px, 100%);
      margin: 0 auto;
      padding: 78px 64px 58px;
      border: 1px solid var(--vp-border);
      border-radius: 34px;
      background: var(--vp-surface);
      box-shadow: var(--vp-shadow);
    }

    #theme-vitepress .vp-page-heading,
    #theme-vitepress .vp-article-hero {
      text-align: center;
    }
    #theme-vitepress .vp-eyebrow {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: var(--vp-faint);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.24em;
    }
    #theme-vitepress .vp-eyebrow span {
      width: 30px;
      height: 1px;
      background: var(--vp-primary-border);
    }
    #theme-vitepress .vp-page-heading h1 {
      margin: 88px 0 14px;
      color: var(--vp-text);
      font-family: var(--vp-serif);
      font-size: 25px;
      font-weight: 700;
    }
    #theme-vitepress .vp-page-heading p {
      margin: 0;
      color: var(--vp-muted);
      font-size: 16px;
      line-height: 1.7;
    }
    #theme-vitepress .vp-heading-rule {
      width: 112px;
      height: 1px;
      margin: 43px auto;
      background: var(--vp-primary-border);
    }

    #theme-vitepress .vp-post-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
    #theme-vitepress .vp-post-card {
      min-height: 470px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      border: 1px solid var(--vp-border);
      border-radius: 24px;
      background: linear-gradient(
        145deg,
        var(--vp-surface),
        var(--vp-surface-soft)
      );
      box-shadow: 0 12px 26px rgba(33, 38, 35, 0.055);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
    }
    #theme-vitepress .vp-post-card:hover {
      transform: translateY(-4px);
      border-color: var(--vp-primary-border);
      box-shadow: 0 18px 34px rgba(33, 38, 35, 0.1);
    }
    #theme-vitepress .vp-post-card-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    #theme-vitepress .vp-post-card-meta time,
    #theme-vitepress .vp-relative-date {
      color: var(--vp-faint);
      font-size: 11px;
      letter-spacing: 0.17em;
      text-transform: uppercase;
    }
    #theme-vitepress .vp-category-pill {
      width: fit-content;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 13px;
      border: 1px solid var(--vp-primary-border);
      border-radius: 999px;
      color: var(--vp-primary);
      background: var(--vp-primary-soft);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-decoration: none;
      text-transform: uppercase;
    }
    #theme-vitepress .vp-relative-date {
      margin-top: 13px;
    }
    #theme-vitepress .vp-post-card-copy {
      margin: 53px 0 32px;
    }
    #theme-vitepress .vp-post-card-copy h2 {
      margin: 0 0 18px;
      font-family: var(--vp-serif);
      font-size: 24px;
      line-height: 1.32;
      font-weight: 500;
    }
    #theme-vitepress .vp-post-card-copy h2 a {
      color: var(--vp-primary);
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
    }
    #theme-vitepress .vp-post-card-copy p {
      margin: 0;
      color: var(--vp-muted);
      font-size: 14px;
      line-height: 1.8;
    }
    #theme-vitepress .vp-post-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid var(--vp-border);
      color: var(--vp-primary);
      font-size: 14px;
    }
    #theme-vitepress .vp-author {
      display: flex;
      align-items: center;
      gap: 9px;
    }
    #theme-vitepress .vp-author img,
    #theme-vitepress .vp-author-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }
    #theme-vitepress .vp-author-avatar {
      display: grid;
      place-items: center;
      background: #fff1c7;
      font-size: 21px;
    }
    #theme-vitepress .vp-read-more {
      display: inline-flex;
      align-items: center;
      gap: 13px;
      white-space: nowrap;
    }
    #theme-vitepress .vp-read-more:hover {
      text-decoration: underline;
    }

    #theme-vitepress .vp-pagination {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 16px;
      margin-top: 38px;
      color: var(--vp-faint);
      font-size: 13px;
    }
    #theme-vitepress .vp-pagination > :last-child {
      justify-self: end;
    }
    #theme-vitepress .vp-pagination a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--vp-primary);
      text-decoration: none;
    }
    #theme-vitepress .vp-empty {
      padding: 80px 0;
      color: var(--vp-muted);
      text-align: center;
    }

    #theme-vitepress .vp-article-page {
      width: min(1040px, 100%);
      margin: 0 auto;
    }
    #theme-vitepress .vp-article-hero {
      max-width: 830px;
      margin: 25px auto 42px;
    }
    #theme-vitepress .vp-article-hero time {
      display: block;
      margin-top: 20px;
      color: var(--vp-muted);
      font-family: var(--vp-serif);
      font-size: 14px;
    }
    #theme-vitepress .vp-article-hero h1 {
      margin: 10px 0 0;
      font-family: var(--vp-serif);
      font-size: clamp(38px, 5.1vw, 64px);
      line-height: 1.06;
      letter-spacing: -0.035em;
    }
    #theme-vitepress .vp-article-hero .vp-heading-rule {
      margin-top: 30px;
    }
    #theme-vitepress .vp-article-layout {
      display: grid;
      grid-template-columns: 225px minmax(0, 720px);
      gap: 80px;
      align-items: start;
    }
    #theme-vitepress .vp-article-sidebar {
      position: sticky;
      top: 90px;
    }
    #theme-vitepress .vp-category-wide {
      width: 100%;
      justify-content: flex-start;
    }
    #theme-vitepress .vp-sidebar-card {
      margin-top: 16px;
      padding: 18px;
      border: 1px solid var(--vp-border);
      border-radius: 22px;
      background: var(--vp-surface);
      box-shadow: 0 10px 24px rgba(33, 38, 35, 0.05);
    }
    #theme-vitepress .vp-sidebar-card h2,
    #theme-vitepress .vp-toc-block h2 {
      margin: 0 0 13px;
      color: var(--vp-muted);
      font-size: 11px;
      letter-spacing: 0.2em;
    }
    #theme-vitepress .vp-tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    #theme-vitepress .vp-tag-list a {
      padding: 6px 10px;
      border: 1px solid var(--vp-border);
      border-radius: 999px;
      color: var(--vp-muted);
      font-size: 12px;
      text-decoration: none;
    }
    #theme-vitepress .vp-tag-list a:hover {
      color: var(--vp-primary);
      border-color: var(--vp-primary-border);
    }
    #theme-vitepress .vp-toc-block {
      margin-top: 72px;
      padding-left: 16px;
      border-left: 1px solid var(--vp-border);
    }
    #theme-vitepress .vp-catalog {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    #theme-vitepress .vp-catalog a {
      overflow: hidden;
      color: var(--vp-muted);
      font-size: 13px;
      line-height: 1.35;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    #theme-vitepress .vp-catalog a:hover {
      color: var(--vp-primary);
    }
    #theme-vitepress .vp-article-category-mobile {
      display: none;
      margin-bottom: 22px;
    }
    #theme-vitepress .vp-article-column {
      min-width: 0;
    }
    #theme-vitepress .vp-prose {
      color: var(--vp-text);
      font-size: 16px;
      line-height: 1.9;
    }
    #theme-vitepress .vp-prose .notion {
      color: inherit;
      background: transparent;
    }
    #theme-vitepress .vp-prose .notion-page {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
    #theme-vitepress .vp-prose .notion-title {
      display: none;
    }
    #theme-vitepress .vp-prose h1,
    #theme-vitepress .vp-prose h2,
    #theme-vitepress .vp-prose h3 {
      color: var(--vp-text);
      font-family: var(--vp-serif);
      letter-spacing: -0.02em;
    }
    #theme-vitepress .vp-prose h2 {
      margin-top: 2.4em;
      font-size: 27px;
    }
    #theme-vitepress .vp-prose h3 {
      margin-top: 2em;
      font-size: 21px;
    }
    #theme-vitepress .vp-prose a {
      color: var(--vp-primary);
      text-underline-offset: 3px;
    }
    #theme-vitepress .vp-prose blockquote {
      margin: 1.6em 0;
      padding: 4px 0 4px 18px;
      border-left: 2px solid var(--vp-primary-border);
      color: var(--vp-muted);
    }
    #theme-vitepress .vp-prose pre {
      border: 1px solid var(--vp-border);
      border-radius: 18px;
      background: var(--vp-surface-soft) !important;
      box-shadow: 0 12px 24px rgba(33, 38, 35, 0.05);
    }
    #theme-vitepress .vp-prose code:not(pre code) {
      padding: 2px 7px;
      border: 1px solid var(--vp-primary-border);
      border-radius: 999px;
      color: var(--vp-primary);
      background: var(--vp-primary-soft);
    }
    #theme-vitepress .vp-prose img {
      border-radius: 4px;
    }
    #theme-vitepress .vp-prose .notion-callout,
    #theme-vitepress .vp-prose .notion-bookmark {
      border-color: var(--vp-border);
      border-radius: 16px;
      background: var(--vp-surface);
    }
    #theme-vitepress .vp-article-around {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
      margin: 56px 0 28px;
    }
    #theme-vitepress .vp-article-around a {
      padding: 18px;
      border: 1px solid var(--vp-border);
      border-radius: 16px;
      color: var(--vp-primary);
      text-decoration: none;
    }
    #theme-vitepress .vp-article-around a:last-child {
      text-align: right;
    }
    #theme-vitepress .vp-article-around small {
      display: block;
      margin-bottom: 8px;
      color: var(--vp-faint);
      font-size: 9px;
      letter-spacing: 0.15em;
    }
    #theme-vitepress .vp-comments {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px solid var(--vp-border);
    }

    #theme-vitepress .vp-search-box {
      max-width: 650px;
      height: 52px;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 auto 46px;
      padding-left: 17px;
      border: 1px solid var(--vp-border);
      border-radius: 14px;
      color: var(--vp-faint);
      background: var(--vp-surface-soft);
    }
    #theme-vitepress .vp-search-box input {
      min-width: 0;
      flex: 1;
      height: 100%;
      border: 0;
      outline: 0;
      color: var(--vp-text);
      background: transparent;
    }
    #theme-vitepress .vp-search-box button {
      align-self: stretch;
      padding: 0 20px;
      border-left: 1px solid var(--vp-border);
      color: white;
      background: var(--vp-primary);
      border-radius: 0 13px 13px 0;
    }
    #theme-vitepress .vp-search-highlight {
      color: var(--vp-primary);
      background: var(--vp-primary-soft);
    }
    #theme-vitepress .vp-archive {
      max-width: 720px;
      margin: auto;
    }
    #theme-vitepress .vp-archive section {
      margin-bottom: 40px;
    }
    #theme-vitepress .vp-archive h2 {
      font-family: var(--vp-serif);
      font-size: 24px;
    }
    #theme-vitepress .vp-archive-row {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      padding: 15px 0;
      border-bottom: 1px solid var(--vp-border);
      color: var(--vp-text);
      text-decoration: none;
    }
    #theme-vitepress .vp-archive-row:hover {
      color: var(--vp-primary);
    }
    #theme-vitepress .vp-archive-row time {
      flex: none;
      color: var(--vp-faint);
      font-size: 12px;
    }
    #theme-vitepress .vp-taxonomy-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    #theme-vitepress .vp-taxonomy-grid a {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 7px 12px;
      padding: 22px;
      border: 1px solid var(--vp-border);
      border-radius: 18px;
      text-decoration: none;
    }
    #theme-vitepress .vp-taxonomy-grid a:hover {
      border-color: var(--vp-primary-border);
      color: var(--vp-primary);
    }
    #theme-vitepress .vp-taxonomy-grid i {
      grid-row: span 2;
      color: var(--vp-primary);
    }
    #theme-vitepress .vp-taxonomy-grid small {
      color: var(--vp-faint);
    }
    #theme-vitepress .vp-tag-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    #theme-vitepress .vp-tag-cloud a {
      padding: 10px 15px;
      border: 1px solid var(--vp-primary-border);
      border-radius: 999px;
      color: var(--vp-primary);
      background: var(--vp-primary-soft);
      text-decoration: none;
    }
    #theme-vitepress .vp-tag-cloud span {
      margin-left: 8px;
      color: var(--vp-faint);
    }
    #theme-vitepress .vp-lock-panel {
      max-width: 620px;
      text-align: center;
    }
    #theme-vitepress .vp-lock-panel > i {
      color: var(--vp-primary);
      font-size: 28px;
    }
    #theme-vitepress .vp-lock-panel h1 {
      margin: 18px 0 26px;
      font-family: var(--vp-serif);
      font-size: 25px;
    }
    #theme-vitepress .vp-lock-form {
      display: flex;
      overflow: hidden;
      border: 1px solid var(--vp-border);
      border-radius: 12px;
    }
    #theme-vitepress .vp-lock-form input {
      min-width: 0;
      flex: 1;
      padding: 12px;
      border: 0;
      outline: 0;
      background: var(--vp-surface-soft);
    }
    #theme-vitepress .vp-lock-form button {
      padding: 0 18px;
      color: white;
      background: var(--vp-primary);
    }
    #theme-vitepress #vp-lock-tips {
      color: #dc2626;
    }
    #theme-vitepress .vp-not-found {
      min-height: 570px;
      text-align: center;
    }
    #theme-vitepress .vp-not-found strong {
      display: block;
      font-size: 64px;
    }
    #theme-vitepress .vp-not-found h1 {
      margin: 0;
      letter-spacing: 0.12em;
      font-size: 20px;
    }
    #theme-vitepress .vp-not-found p {
      margin: 42px 0 22px;
      color: var(--vp-muted);
    }
    #theme-vitepress .vp-not-found a {
      display: inline-flex;
      padding: 8px 18px;
      border: 1px solid var(--vp-primary);
      border-radius: 999px;
      color: var(--vp-primary);
      text-decoration: none;
    }

    #theme-vitepress .vp-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      max-width: 1070px;
      margin: 0 auto;
      padding: 30px 28px 42px;
      color: var(--vp-muted);
      font-size: 12px;
      line-height: 1.8;
      text-align: center;
    }
    #theme-vitepress .vp-license {
      display: flex;
      flex-direction: column;
    }
    #theme-vitepress .vp-filing {
      display: flex;
      gap: 12px;
    }
    #theme-vitepress .vp-back-top {
      position: fixed;
      right: 22px;
      bottom: 22px;
      width: 40px;
      height: 40px;
      border: 1px solid var(--vp-border);
      border-radius: 50%;
      color: var(--vp-muted);
      background: var(--vp-surface);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
    #theme-vitepress .vp-back-top:hover {
      color: var(--vp-primary);
      border-color: var(--vp-primary-border);
    }

    @media (max-width: 900px) {
      #theme-vitepress .vp-home-hero {
        grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
      }
      #theme-vitepress .vp-home-art {
        min-height: 390px;
      }
      #theme-vitepress.vp-essay-mode .vp-header-inner {
        padding-left: 32px;
      }
      #theme-vitepress.vp-essay-mode .vp-header .vp-brand {
        display: inline-flex;
      }
      #theme-vitepress.vp-essay-mode .vp-main {
        padding: 48px 28px 80px;
      }
      #theme-vitepress .vp-essay-page {
        grid-template-columns: minmax(0, 720px);
        justify-content: center;
        padding: 10px 0 50px;
      }
      #theme-vitepress .vp-essay-sidebar,
      #theme-vitepress .vp-essay-toc {
        display: none;
      }
      #theme-vitepress.vp-essay-mode .vp-footer {
        max-width: 1070px;
        padding-left: 28px;
      }
      #theme-vitepress .vp-search-trigger {
        min-width: 42px;
        width: 42px;
        justify-content: center;
      }
      #theme-vitepress .vp-search-trigger span,
      #theme-vitepress .vp-search-trigger kbd {
        display: none;
      }
      #theme-vitepress .vp-nav {
        overflow-x: auto;
        justify-content: flex-start;
      }
      #theme-vitepress .vp-list-panel,
      #theme-vitepress .vp-generic-panel {
        padding: 58px 34px 40px;
        border-radius: 26px;
      }
      #theme-vitepress .vp-article-layout {
        grid-template-columns: 1fr;
        gap: 0;
      }
      #theme-vitepress .vp-article-sidebar {
        display: none;
      }
      #theme-vitepress .vp-article-category-mobile {
        display: block;
      }
      #theme-vitepress .vp-article-column {
        max-width: 720px;
        margin: auto;
      }
    }

    @media (max-width: 680px) {
      #theme-vitepress .vp-header-inner {
        padding: 0 16px;
        gap: 10px;
      }
      #theme-vitepress .vp-brand span:last-child {
        display: none;
      }
      #theme-vitepress .vp-search-trigger {
        display: none;
      }
      #theme-vitepress .vp-nav {
        margin-left: 0;
      }
      #theme-vitepress .vp-nav-item > a {
        padding-left: 7px;
        padding-right: 7px;
        font-size: 13px;
      }
      #theme-vitepress .vp-header-actions {
        margin-left: auto;
        padding-left: 9px;
      }
      #theme-vitepress .vp-github-link {
        display: none;
      }
      #theme-vitepress .vp-main {
        padding: 28px 12px 54px;
      }
      #theme-vitepress .vp-home-hero {
        min-height: auto;
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 38px 8px 20px;
      }
      #theme-vitepress .vp-home-copy h1 {
        font-size: 46px;
      }
      #theme-vitepress .vp-home-copy p {
        margin-top: 20px;
        font-size: 17px;
      }
      #theme-vitepress .vp-home-art {
        min-height: 300px;
      }
      #theme-vitepress .vp-home-glow {
        width: 190px;
        height: 190px;
      }
      #theme-vitepress.vp-essay-mode .vp-header-inner {
        padding-left: 16px;
      }
      #theme-vitepress.vp-essay-mode .vp-main {
        padding: 36px 18px 60px;
      }
      #theme-vitepress .vp-essay-page {
        padding-bottom: 20px;
      }
      #theme-vitepress .vp-essay-content h1 {
        margin-bottom: 50px;
        font-size: 42px;
      }
      #theme-vitepress .vp-essay-content h2 {
        margin-top: 48px;
        font-size: 25px;
      }
      #theme-vitepress .vp-essay-content p:not(.vp-essay-lead) {
        font-size: 16px;
        line-height: 1.9;
      }
      #theme-vitepress.vp-essay-mode .vp-footer {
        padding-left: 28px;
      }
      #theme-vitepress .vp-list-panel,
      #theme-vitepress .vp-generic-panel {
        padding: 44px 16px 30px;
        border-radius: 22px;
      }
      #theme-vitepress .vp-page-heading h1 {
        margin-top: 55px;
      }
      #theme-vitepress .vp-heading-rule {
        margin: 30px auto;
      }
      #theme-vitepress .vp-post-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      #theme-vitepress .vp-post-card {
        min-height: 390px;
        padding: 18px;
        border-radius: 20px;
      }
      #theme-vitepress .vp-post-card-copy {
        margin-top: 40px;
      }
      #theme-vitepress .vp-post-card-footer {
        font-size: 13px;
      }
      #theme-vitepress .vp-author img,
      #theme-vitepress .vp-author-avatar {
        width: 30px;
        height: 30px;
      }
      #theme-vitepress .vp-article-hero {
        margin-top: 10px;
      }
      #theme-vitepress .vp-article-hero h1 {
        font-size: 36px;
      }
      #theme-vitepress .vp-article-around {
        grid-template-columns: 1fr;
      }
      #theme-vitepress .vp-taxonomy-grid {
        grid-template-columns: 1fr;
      }
      #theme-vitepress .vp-footer {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
      #theme-vitepress .vp-filing {
        flex-direction: column;
      }
    }

    ${themeConsoleStyle('vitepress', CONFIG)}
  `}</style>
)

export { Style }
