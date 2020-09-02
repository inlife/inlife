import {format} from 'date-fns'
import image from '../../utils/image.base64'

export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'no-cache')
    res.end(/* syntax: html */`
        <svg version="1.1"
            baseProfile="full"
            width="100%" height="231"
            max-width="854"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <defs>
                <rect id="rect" x="0" y="0" width="100%" height="99%" rx="6"/>
                <clipPath id="clip">
                    <use xlink:href="#rect"/>
                </clipPath>
                <style type="text/css"><![CDATA[
                    .text { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji; }
                ]]></style>
            </defs>

            <use xlink:href="#rect" stroke-width="2" fill="#fff" stroke="#e1e4e8"/>

            <image
                id="image"
                x="0" y="0"
                height="100%"
                clip-path="url(#clip)"
                xlink:href="data:image/gif;base64,${image}"
                style="opacity: 0;"
            />

            <text class="text" x="8" y="108" font-size="32px" font-weight="bold" fill="#fff">Hi there 👋</text>
            <text id="name_d1" class="text" x="8" y="134" font-size="18px" style="opacity: 0" fill="#fff">
                My name is <tspan font-weight="bold" fill="black">Vladyslav Hrytsenko</tspan>.
                <tspan id="name_d2" style="opacity: 0">I do software engineering.</tspan>
            </text>

            <text class="text" x="8" y="220" font-size="12px" fill="#fff">${format(new Date(), "iii, MMM. do, yyy")}</text>

            <animate xlink:href="#image" attributeType="CSS" attributeName="opacity" from="0" to="0.7" dur="2s" repeatCount="1" fill="freeze" />
            <animate xlink:href="#image" attributeName="x" from="0" to="-2600" dur="40s" repeatCount="1" fill="freeze" />
            <animate xlink:href="#name_d1" attributeType="CSS" attributeName="opacity" from="0" begin="2s" to="1" dur="0.25s" repeatCount="1" fill="freeze"  />
            <animate xlink:href="#name_d2" attributeType="CSS" attributeName="opacity" from="0" begin="4s" to="1" dur="0.25s" repeatCount="1" fill="freeze"  />
        </svg>
    `)
}
