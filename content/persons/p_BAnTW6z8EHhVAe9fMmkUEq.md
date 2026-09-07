---
schema: wang-person/v1
id: p_BAnTW6z8EHhVAe9fMmkUEq
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wxKRJRic6gNo9n2MUxzY8t
        subject_person_id: p_BAnTW6z8EHhVAe9fMmkUEq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，史料所见人物。本项目依据《東海大學圖書館館刊第15期：王弼家世考辨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pHIpDUUC3h01DSGZCZ3QsE
          claim_id: c_wxKRJRic6gNo9n2MUxzY8t
          source_id: s_Th4mxe62wMJ85VN4URfY1j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Th4mxe62wMJ85VN4URfY1j
            source_type: website
            title: 東海大學圖書館館刊第15期：王弼家世考辨
            creator: null
            publisher: 東海大學圖書館
            published_at_text: null
            canonical_url: https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:44.746Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fj65yY3vTqp9SXZnasTphs
        subject_person_id: p_BAnTW6z8EHhVAe9fMmkUEq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Zxkftcr3cw27VvvVbwG9UF
          claim_id: c_fj65yY3vTqp9SXZnasTphs
          source_id: s_Th4mxe62wMJ85VN4URfY1j
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yy45LLLJRcyXfw6XDbNiDy
        subject_person_id: p_oNkHTMoDGV5D9gHmvCAx7L
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_BAnTW6z8EHhVAe9fMmkUEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RhA471ZFJeExNHza72mEV9
          claim_id: c_Yy45LLLJRcyXfw6XDbNiDy
          source_id: s_Th4mxe62wMJ85VN4URfY1j
          stance: supports
          locator: 王弼家世辨析
          quotation: 凱生業……子宏，字正宗，司隸校尉。宏，弼之兄也。
          interpretation_note: null
          source:
            id: s_Th4mxe62wMJ85VN4URfY1j
            source_type: website
            title: 東海大學圖書館館刊第15期：王弼家世考辨
            creator: null
            publisher: 東海大學圖書館
            published_at_text: null
            canonical_url: https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:44.746Z
            metadata_json: null
      object_person:
        id: p_oNkHTMoDGV5D9gHmvCAx7L
        status: active
        display_name: 王業
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宏，史料所见人物。本项目依据《東海大學圖書館館刊第15期：王弼家世考辨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王宏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oNkHTMoDGV5D9gHmvCAx7L | 王業 | accepted |

## 外部来源

- [東海大學圖書館館刊第15期：王弼家世考辨](https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf)
