
import { Form } from 'react-bootstrap'

export default function Radio({ value,label, name, inline }) {
  return (
            <Form.Check
                inline={inline}
                label={label}
                name={name}
                value={value}
                type="radio"
                id={`radio-${name}-${label}`}
            />
        )
  }
       
          