import { PatchNotes } from "../../../shared/definitions/PatchNotes";
import { L, t } from "../../../shared/utilities/i18n";
import { openUrl } from "../utilities/Platform";
import { MenuComponent } from "./MenuComponent";
import { TitleBarComponent } from "./TitleBarComponent";

export function PatchNotesPage(): React.ReactNode {
   return (
      <div className="window">
         <TitleBarComponent>{t(L.PatchNotes)}</TitleBarComponent>
         <MenuComponent />
         <div className="window-body">
            {PatchNotes.map((note) => {
               return (
                  <fieldset key={note.version}>
                     <legend className="text-strong">{note.version}</legend>
                     {note.content.map((c, i) => {
                        return (
                           <div key={i} className="mv5">
                              <b>{c[0]}:</b> {c[1]}
                           </div>
                        );
                     })}
                     {note.link ? (
                        <div className="text-link text-strong" onClick={() => openUrl(note.link!)}>
                           {t(L.ReadFullPatchNotes)}
                        </div>
                     ) : null}
                  </fieldset>
               );
            })}
         </div>
      </div>
   );
}
