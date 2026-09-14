---
schema: wang-person/v1
id: p_whi7BPRQ5A3rQiSFxSpdGY
status: active
merged_into: null
display_name: 王玘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X3ka3SFQbqc4Y2E61nE6tF
        subject_person_id: p_whi7BPRQ5A3rQiSFxSpdGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LB6bsWBamEddCgi34eHDoR
          claim_id: c_X3ka3SFQbqc4Y2E61nE6tF
          source_id: s_65i7L7LZTwh5tsz1uyVJGk
          stance: supports
          locator: CBDB:309140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309140）
          source: &a1
            id: s_65i7L7LZTwh5tsz1uyVJGk
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 309140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json
            external_identifier: CBDB:309140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ATJeQPjbe4ztJTQtSJASY
        subject_person_id: p_whi7BPRQ5A3rQiSFxSpdGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。天順元年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 309140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7UFR96XnD1PsKNzX-AB63N
          claim_id: c_8ATJeQPjbe4ztJTQtSJASY
          source_id: s_65i7L7LZTwh5tsz1uyVJGk
          stance: supports
          locator: CBDB:309140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zZm9uUIVkXslIqgWX-dAtB
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_whi7BPRQ5A3rQiSFxSpdGY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWkckFq7vvWvM4gL8bs7RZ
          claim_id: c_zZm9uUIVkXslIqgWX-dAtB
          source_id: s_QMW3qY025nuB0PJ2FmTHG_
          stance: supports
          locator: CBDB：兄弟 王雯（198731）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王雯 为同胞（CBDB 记「弟」），王雯 之父／母即 王玘 之父／母。
          source:
            id: s_QMW3qY025nuB0PJ2FmTHG_
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 309140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json
            external_identifier: CBDB:309140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RGZcAsK4gvBLjAnNq7jieH
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__Q-pqOAbbi-5V6IgwqW9Gw
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_whi7BPRQ5A3rQiSFxSpdGY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_alOYFmTwL_9IPmyhbphnCf
          claim_id: c__Q-pqOAbbi-5V6IgwqW9Gw
          source_id: s_QMW3qY025nuB0PJ2FmTHG_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198731 王雯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QMW3qY025nuB0PJ2FmTHG_
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 309140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json
            external_identifier: CBDB:309140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qADtxjrVEChTrGk5M7bGg2
        status: active
        display_name: 王雯
        merged_into_person_id: null
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。天順元年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 309140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RGZcAsK4gvBLjAnNq7jieH | 王貴 | accepted |
| other | p_qADtxjrVEChTrGk5M7bGg2 | 王雯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 309140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json)
