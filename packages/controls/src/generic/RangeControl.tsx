import { RangeControlProps } from '../types'
import {
    ControlContainer,
    ControlHeader,
    Label,
    TextInput,
    Slider,
    XGapSpacer,
    YGapSpacer,
} from '../ui'

export const RangeControl = ({
    id,
    label,
    description,
    min,
    max,
    step = 1,
    unit,
    value,
    onChange,
    context = { path: [] },
}: RangeControlProps) => {
    return (
        <ControlContainer id={id} description={description} isSingleRow={false}>
            <ControlHeader>
                <Label id={id} label={label} inputType="range" context={context} />
                <XGapSpacer />
                <TextInput<number>
                    id={id}
                    value={value}
                    unit={unit}
                    isNumber={true}
                    onChange={onChange}
                />
            </ControlHeader>
            <YGapSpacer />
            <Slider id={id} min={min} max={max} step={step} value={value} onChange={onChange} />
        </ControlContainer>
    )
}