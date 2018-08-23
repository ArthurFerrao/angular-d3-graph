import { GraphComponent } from './visuals/graph/graph.component';
import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import * as d3 from 'd3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {

  }
  addNodes(graph: GraphComponent) {


    let n1 = new Node(this.nodes.length, 100, 220);
    let n2 = new Node(this.nodes.length + 1, 400, 600);

    this.connectNodesAsync(graph, n1, n2);

      graph.ngOnInit();

  }

  connectNodesAsync(graph, n1, n2) {

    this.nodes.push(n1);
    this.nodes.push(n2);
    graph.connectnodes(this.nodes.length - 2, this.nodes.length - 1);
  }

}
