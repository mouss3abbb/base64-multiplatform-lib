package com.panda.base64

import kotlin.test.Test
import kotlin.test.assertEquals

class Base64Test {
    @Test
    fun testEncodeToString(){
        checkEncodeToString("Rdayab","UmRheWFi")
    }

    @Test
    fun testPaddedStrings(){
        checkEncodeToString("","")
        checkEncodeToString("1","MQ==")
        checkEncodeToString("22","MjI=")
    }

    private fun checkEncodeToString(input: String, output: String){
        assertEquals(output,Base64Factory.createEncoder().encodeToString(input.asciiToByteArray()))
    }

    private fun String.asciiToByteArray() = ByteArray(length){
        get(it).code.toByte()
    }
}