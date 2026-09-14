---
schema: wang-person/v1
id: p_eKfSMwBRfJQQhnwYk2b6Tx
status: active
merged_into: null
display_name: 王可椅
cbdb_id: 318733
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5MPPe8qMiobijpzRSGF4rs
        subject_person_id: p_eKfSMwBRfJQQhnwYk2b6Tx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可椅，明人物。嘉靖三十二年進士，籍贯平鄉。（中国历代人物传记资料库 CBDB 318733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UbSFr1dehxbyNourNqrGX9
          claim_id: c_5MPPe8qMiobijpzRSGF4rs
          source_id: s_EPQ4X564AsyMiQh8EMZsw5
          stance: supports
          locator: CBDB:318733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EPQ4X564AsyMiQh8EMZsw5
            source_type: api_record
            title: 中国历代人物传记资料库：王可椅（CBDB 318733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318733&o=json
            external_identifier: CBDB:318733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nrSgrHTZ3RPdi5ompVE1hR
        subject_person_id: p_eKfSMwBRfJQQhnwYk2b6Tx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可椅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wHCAQptk2TV1o7Zrt4FSAq
          claim_id: c_nrSgrHTZ3RPdi5ompVE1hR
          source_id: s_EPQ4X564AsyMiQh8EMZsw5
          stance: supports
          locator: CBDB:318733
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xR1SkEsakeTeQ-zQRNeeN2
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eKfSMwBRfJQQhnwYk2b6Tx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zjAQhYXvvEjYmr24HbSN6b
          claim_id: c_xR1SkEsakeTeQ-zQRNeeN2
          source_id: s_JAWSMeHXmrcs_lv76Yewe7
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可椅 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可椅 之父／母。
          source:
            id: s_JAWSMeHXmrcs_lv76Yewe7
            source_type: api_record
            title: 中国历代人物传记资料库：王可椅（CBDB 318733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318733&o=json
            external_identifier: CBDB:318733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YaWmd84uDmuR4z7SAP4Eam
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uC5yV0VzO7lVZcKmUd8FKn
        subject_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eKfSMwBRfJQQhnwYk2b6Tx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_feSK7opKd0_nqKwB3Cq6S9
          claim_id: c_uC5yV0VzO7lVZcKmUd8FKn
          source_id: s_JAWSMeHXmrcs_lv76Yewe7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204413 王可信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JAWSMeHXmrcs_lv76Yewe7
            source_type: api_record
            title: 中国历代人物传记资料库：王可椅（CBDB 318733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318733&o=json
            external_identifier: CBDB:318733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cDtAvQGzuVZRFeJxenEh2g
        status: active
        display_name: 王可信
        merged_into_person_id: null
---

# 王可椅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可椅，明人物。嘉靖三十二年進士，籍贯平鄉。（中国历代人物传记资料库 CBDB 318733） | accepted |
| name.primary | 王可椅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YaWmd84uDmuR4z7SAP4Eam | 王崇德 | accepted |
| other | p_cDtAvQGzuVZRFeJxenEh2g | 王可信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可椅（CBDB 318733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318733&o=json)
