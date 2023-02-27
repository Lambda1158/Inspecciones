import React from "react"
import { Link } from "react-router-dom";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Button
} from '@chakra-ui/react'

export default function Comp1() {
    return (
        <div >
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
                right='100'
            >Probando chakra ui</Text>
            <Link to="/"><Button >take me back buddy</Button></Link>
            <NumberInput
                size='sm'
                width={500}
                defaultValue={15}
                max={500}
                keepWithinRange={false}
                clampValueOnBlur={false}
                allowMouseWheel
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </div>
    )
}