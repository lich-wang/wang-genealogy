---
schema: wang-person/v1
id: p_FJZK7j7kBnAQsDBNt9Fbyg
status: active
merged_into: null
display_name: 王希程
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GqR1PEnx2Kr4YDbzkHBUUE
        subject_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5beHydi2R2Ub87yxsX4L9X
          claim_id: c_GqR1PEnx2Kr4YDbzkHBUUE
          source_id: s_NpVqBDGLQa8E1ThWwu1TP8
          stance: supports
          locator: CBDB:315374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315374）
          source: &a1
            id: s_NpVqBDGLQa8E1ThWwu1TP8
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 315374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json
            external_identifier: CBDB:315374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9DhusQ9Un4NpoexJ3zzQK
        subject_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希程，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D2r6eDx_bV_DvXKRLzEO5_
          claim_id: c_i9DhusQ9Un4NpoexJ3zzQK
          source_id: s_NpVqBDGLQa8E1ThWwu1TP8
          stance: supports
          locator: CBDB:315374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DLf02jZiENDQD_rRFS-c6P
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6F3WCqi2Xicmz1vIPDMJrs
          claim_id: c_DLf02jZiENDQD_rRFS-c6P
          source_id: s_k2FyJUJhUty-K2ityyCaY6
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希程 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希程 之父／母。
          source:
            id: s_k2FyJUJhUty-K2ityyCaY6
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 315374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json
            external_identifier: CBDB:315374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAujjG392SPymDDHoGZN88
        status: active
        display_name: 王廷望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PZXGzZtGwAT2F_9Hh8SWAG
        subject_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSuF1cnpHurpQlJUrcSe1G
          claim_id: c_PZXGzZtGwAT2F_9Hh8SWAG
          source_id: s_k2FyJUJhUty-K2ityyCaY6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k2FyJUJhUty-K2ityyCaY6
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 315374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json
            external_identifier: CBDB:315374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
---

# 王希程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希程 | accepted |
| bio.summary | 王希程，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAujjG392SPymDDHoGZN88 | 王廷望 | accepted |
| other | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希程（CBDB 315374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json)
