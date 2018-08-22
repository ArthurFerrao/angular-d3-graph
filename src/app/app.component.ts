import { GraphComponent } from './visuals/graph/graph.component';
import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {

    /** constructing the nodes array */

    this.nodes.push(new Node(1,0,20));
    this.nodes.push(new Node(2,200,20));
    this.nodes.push(new Node(3,400, 20));


    /** connecting the nodes before starting the simulation */
    this.links.push(new Link(1, 2));
    this.links.push(new Link(3, 2));
  }
  addNodes(graph: GraphComponent) {
    this.addNodeAsync().then(() => {

      graph.ngOnInit();
    })
  }

  async addNodeAsync() {
    await this.nodes.push(new Node(4, 100, 220));
    await this.nodes.push(new Node(5, 400, 300));
  }
}
