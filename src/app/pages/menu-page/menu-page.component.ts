import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MENU_SECTIONS, MenuSection } from '../../data/menu-data';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  readonly sections = signal<MenuSection[]>(
    MENU_SECTIONS.map((section) => ({
      ...section,
      items: section.items.map((item) => ({ ...item }))
    }))
  );

  readonly activeSectionId = signal<string>(this.sections()[0]?.id ?? '');

  readonly activeSection = computed(() =>
    this.sections().find((section) => section.id === this.activeSectionId())
  );

  readonly selectedCount = computed(() => {
    const section = this.activeSection();

    return section ? section.items.filter((item) => item.checked).length : 0;
  });

  readonly selectedTotal = computed(() => {
    const section = this.activeSection();

    return section
      ? section.items.reduce((sum, item) => (item.checked ? sum + item.value : sum), 0)
      : 0;
  });

  setActiveSection(sectionId: string): void {
    this.activeSectionId.set(sectionId);
  }

  onItemToggle(itemId: number, event: Event): void {
    const target = event.target as HTMLInputElement | null;

    if (!target) {
      return;
    }

    const { checked } = target;

    this.sections.update((sections) =>
      sections.map((section) => {
        if (section.id !== this.activeSectionId()) {
          return section;
        }

        return {
          ...section,
          items: section.items.map((item) =>
            item.id === itemId ? { ...item, checked } : item
          )
        };
      })
    );
  }
}
