---
schema: wang-person/v1
id: p_5GLAuP8mfCJ5qhAzfzprTQ
status: active
merged_into: null
display_name: 王茂章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pw63iE2mUH8rrNVrsPCEFR
        subject_person_id: p_5GLAuP8mfCJ5qhAzfzprTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aB4Dd5mWRoENCdmfhG2GJq
          claim_id: c_pw63iE2mUH8rrNVrsPCEFR
          source_id: s_sjyocE5sEpVVamUeSLW4P3
          stance: supports
          locator: CBDB:169312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169312）
          source: &a1
            id: s_sjyocE5sEpVVamUeSLW4P3
            source_type: api_record
            title: 中国历代人物传记资料库：王茂章（CBDB 169312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169312&o=json
            external_identifier: CBDB:169312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QpFMBV9xbJ4piDrzvDhGQB
        subject_person_id: p_5GLAuP8mfCJ5qhAzfzprTQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 915年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8EN4tHUAKMW3256D54BBJ
          claim_id: c_QpFMBV9xbJ4piDrzvDhGQB
          source_id: s_sjyocE5sEpVVamUeSLW4P3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mAzHXDCuH8WmXdJVuNChMb
        subject_person_id: p_5GLAuP8mfCJ5qhAzfzprTQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLG9ncr4Z2jDnwZ5X3e2Dh
          claim_id: c_mAzHXDCuH8WmXdJVuNChMb
          source_id: s_sjyocE5sEpVVamUeSLW4P3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂章 | accepted |
| death.date | 915年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂章（CBDB 169312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169312&o=json)
