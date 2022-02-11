import React from 'react';
import Listener from 'Listener';
import { subscribe } from './subscribe';

export class Listeners extends Set<Listener> {
  private shards: Array<React.RefObject<HTMLElement> | HTMLElement>;

  private clearListeners?: () => void;

  constructor(shards: Array<React.RefObject<HTMLElement> | HTMLElement>) {
    super();
    this.shards = shards;
  }

  public add(listener: Listener): this {
    const result = super.add(listener);
    if (this.size === 1) {
      subscribe(this.shards, this);
    }
    return result;
  }

  public delete(listener: Listener): boolean {
    const result = super.delete(listener);
    if (this.size === 0 && this.clearListeners !== undefined) {
      this.clearListeners();
    }
    return result;
  }
}
