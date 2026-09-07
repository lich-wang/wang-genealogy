---
schema: wang-person/v1
id: p_5TgVFTZ3wCH9M3TBdFAhie
status: active
merged_into: null
display_name: 王淪
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vvatT6RV54tpevmA1XJcvA
        subject_person_id: p_5TgVFTZ3wCH9M3TBdFAhie
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淪，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_y8RMYqszUZTfqwQ_-coGsF
          claim_id: c_vvatT6RV54tpevmA1XJcvA
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z64M91YGfwFEi4tqLhmi4v
        subject_person_id: p_5TgVFTZ3wCH9M3TBdFAhie
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淪
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_swg8gxDCUbKHx7NRs4LtX8
          claim_id: c_z64M91YGfwFEi4tqLhmi4v
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
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
        id: c_B581B88VSjPBAdKqG9RJEv
        subject_person_id: p_187AYgxe91pYGDLoSMKqcX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5TgVFTZ3wCH9M3TBdFAhie
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CdScBEvDoUjJkFsNyy5jsz
          claim_id: c_B581B88VSjPBAdKqG9RJEv
          source_id: s_jRo6owqu14KKFsiDVeyL4j
          stance: supports
          locator: 排调第二十五·第八则刘孝标注
          quotation: 倫字太沖，司空穆侯中子，司徒渾弟也。
          interpretation_note: 文献作倫，库内依通行写法记王淪；司空穆侯即王昶。
          source:
            id: s_jRo6owqu14KKFsiDVeyL4j
            source_type: book
            title: 中文维基文库：世說新語/排調
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E4%B8%96%E8%AA%AA%E6%96%B0%E8%AA%9E/%E6%8E%92%E8%AA%BF
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:43.509Z
            metadata_json: null
      object_person:
        id: p_187AYgxe91pYGDLoSMKqcX
        status: active
        display_name: 王昶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淪，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王淪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_187AYgxe91pYGDLoSMKqcX | 王昶 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：世說新語/排調](https://zh.wikisource.org/wiki/%E4%B8%96%E8%AA%AA%E6%96%B0%E8%AA%9E/%E6%8E%92%E8%AA%BF)
