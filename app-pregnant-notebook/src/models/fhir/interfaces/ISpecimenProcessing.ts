/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ISpecimenProcessing extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  procedure?: ICodeableConcept;

  additive?: Array<IReference>;

  timeDateTime?: IPrimitiveDateTime;
  _timeDateTime?: IElement;
  
  timePeriod?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
