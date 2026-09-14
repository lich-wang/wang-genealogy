---
schema: wang-person/v1
id: p_EEpiY34JsRWFPzmN6wDe2r
status: active
merged_into: null
display_name: 王統
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t8jYwY91FQUCxZmcjvELmS
        subject_person_id: p_EEpiY34JsRWFPzmN6wDe2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tg1P8zchwJYTjpJQXBpk4G
          claim_id: c_t8jYwY91FQUCxZmcjvELmS
          source_id: s_YY8qZSNZ4KEkoriaQEsMwH
          stance: supports
          locator: CBDB:278798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278798）
          source: &a1
            id: s_YY8qZSNZ4KEkoriaQEsMwH
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 278798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278798&o=json
            external_identifier: CBDB:278798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JnL2rxtBE36b1qAYqqnKEN
        subject_person_id: p_EEpiY34JsRWFPzmN6wDe2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統，明人物。正德六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 278798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NKQmMWoRXZgN4sQtVWhOMZ
          claim_id: c_JnL2rxtBE36b1qAYqqnKEN
          source_id: s_YY8qZSNZ4KEkoriaQEsMwH
          stance: supports
          locator: CBDB:278798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5urQts0U_OXvq9Vqa04ZxR
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EEpiY34JsRWFPzmN6wDe2r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6stQMrRQvXrzxEnWP7swG
          claim_id: c_5urQts0U_OXvq9Vqa04ZxR
          source_id: s_lq6cGl-jCDnLMHYo3LYzTj
          stance: supports
          locator: CBDB：兄弟 王紀（126621）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王統 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王統 之父／母。
          source:
            id: s_lq6cGl-jCDnLMHYo3LYzTj
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 278798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278798&o=json
            external_identifier: CBDB:278798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KRx9f8uEzGo8ayLUHUrw9A
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vdSDc5fHTEDCMfKDMgVWFG
        subject_person_id: p_EEpiY34JsRWFPzmN6wDe2r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H12Htz8tNIRXJl9IfT498z
          claim_id: c_vdSDc5fHTEDCMfKDMgVWFG
          source_id: s_lq6cGl-jCDnLMHYo3LYzTj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126621 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lq6cGl-jCDnLMHYo3LYzTj
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 278798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278798&o=json
            external_identifier: CBDB:278798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kAYn8y3iQCatmSJGkXFLhh
        status: active
        display_name: 王紀
        merged_into_person_id: null
---

# 王統

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統 | accepted |
| bio.summary | 王統，明人物。正德六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 278798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KRx9f8uEzGo8ayLUHUrw9A | 王瓚 | accepted |
| other | p_kAYn8y3iQCatmSJGkXFLhh | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王統（CBDB 278798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278798&o=json)
