import { TemplateResult, render as litRender } from "lit";

import AKGlobal from "@goauthentik/common/styles/authentik.css";
import PFBase from "@patternfly/patternfly/patternfly-base.css";

import { ensureCSSStyleSheet } from "../utils/ensureCSSStyleSheet.js";

/**
 * A special version of render that ensures our style sheets will always be available
 * to all elements under test.  Ensures they look right during testing,
 * and that any CSS-based checks for visibility will return correct values.
 * @param body
 * @param container
 */
export function render(body: TemplateResult, container: HTMLElement = document.body) {
    document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        ensureCSSStyleSheet(PFBase),
        ensureCSSStyleSheet(AKGlobal),
    ];

    return litRender(body, container);
}
