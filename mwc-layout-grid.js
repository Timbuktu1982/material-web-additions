/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { __decorate } from "tslib";
import { customElement } from 'lit-element';
import { LayoutGridBase } from './mwc-layout-grid-base.js';
import { LayoutGridCellBase } from './mwc-layout-grid-cell.js';
import { style } from './mwc-layout-grid-css.js';
let LayoutGrid = class LayoutGrid extends LayoutGridBase {
};
LayoutGrid.styles = style;
LayoutGrid = __decorate([
    customElement('mwc-layout-grid')
], LayoutGrid);
export { LayoutGrid };
let LayoutGridCell = class LayoutGridCell extends LayoutGridCellBase {
};
LayoutGridCell = __decorate([
    customElement('mwc-layout-grid-cell')
], LayoutGridCell);
export { LayoutGridCell };
//# sourceMappingURL=mwc-layout-grid.js.map