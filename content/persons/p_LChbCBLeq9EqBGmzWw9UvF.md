---
schema: wang-person/v1
id: p_LChbCBLeq9EqBGmzWw9UvF
status: active
merged_into: null
display_name: 王湛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7OMgqOrJDC1GvFhOdSWJVC
        subject_person_id: p_LChbCBLeq9EqBGmzWw9UvF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uXiygkc3RGZ0ZfcuCwTc3J
          claim_id: c_7OMgqOrJDC1GvFhOdSWJVC
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
        id: c_29awFCfx8zbWZwoMLyZAjV
        subject_person_id: p_LChbCBLeq9EqBGmzWw9UvF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6qaZaSENrMB9R9J9NqMa4m
          claim_id: c_29awFCfx8zbWZwoMLyZAjV
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q15923621
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YAGST9LYB69MGZ133KZ9pJ
        subject_person_id: p_187AYgxe91pYGDLoSMKqcX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LChbCBLeq9EqBGmzWw9UvF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XVmQyRvdaWir1rVVG5bvyi
          claim_id: c_YAGST9LYB69MGZ133KZ9pJ
          source_id: s_ADr4kXZskn3NqTtSxjwC4b
          stance: supports
          locator: 卷七十五·王湛传
          quotation: 王湛，字處沖，司徒渾之弟也……其父昶獨異焉。
          interpretation_note: null
          source:
            id: s_ADr4kXZskn3NqTtSxjwC4b
            source_type: book
            title: 中文维基文库：晉書/卷075
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:49.107Z
            metadata_json: null
      object_person:
        id: p_187AYgxe91pYGDLoSMKqcX
        status: active
        display_name: 王昶
        merged_into_person_id: null
  children:
    - claim:
        id: c_gUCYUuGskWUWKfwf5kp4Nm
        subject_person_id: p_LChbCBLeq9EqBGmzWw9UvF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EZc8eia6jBCUiA6dx8URB6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BEZpc5n2wGpeJ96ex6L6tm
          claim_id: c_gUCYUuGskWUWKfwf5kp4Nm
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 湛，字處沖，汝南內史。生承，字安期，鎮東府從事中郎、藍田縣侯。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
        - id: cs_4gUFC814p2GCBn7piJAELR
          claim_id: c_gUCYUuGskWUWKfwf5kp4Nm
          source_id: s_ADr4kXZskn3NqTtSxjwC4b
          stance: supports
          locator: 卷七十五·王湛传
          quotation: 湛少仕……元康五年卒，年四十七。子承嗣。
          interpretation_note: null
          source:
            id: s_ADr4kXZskn3NqTtSxjwC4b
            source_type: book
            title: 中文维基文库：晉書/卷075
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:49.107Z
            metadata_json: null
      object_person:
        id: p_EZc8eia6jBCUiA6dx8URB6
        status: active
        display_name: 王承
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湛，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王湛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_187AYgxe91pYGDLoSMKqcX | 王昶 | accepted |
| children | p_EZc8eia6jBCUiA6dx8URB6 | 王承 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：晉書/卷075](https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
