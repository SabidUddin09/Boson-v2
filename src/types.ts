/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Department = 
  | 'Content Writing'
  | 'Editorial'
  | 'Technical'
  | 'Graphic Design'
  | 'Social Media'
  | 'Marketing'
  | 'Coordination'
  | 'Event Management'
  | 'Video Editing'
  | 'Executive Management';

export type UserRole = 
  | 'Writer'
  | 'Editor'
  | 'Tech'
  | 'Designer'
  | 'Social'
  | 'Marketing'
  | 'Coordinator'
  | 'Event'
  | 'Video'
  | 'Manager';

export type TaskStatus = 'Not Started' | 'In Progress' | 'Review' | 'Done';

export interface Task {
  id: string;
  topicName: string;
  department: Department;
  writerId?: string;
  editorId?: string;
  designerId?: string;
  videoEditorId?: string;
  contentLink?: string;
  rating?: number;
  status: TaskStatus;
  createdAt: number;
  updatedAt: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  type: 'Olympiad' | 'Workshop' | 'Competition' | 'Internal';
  department: Department;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  category: 'Brand Assets' | 'Style Guide' | 'Common Link';
}
