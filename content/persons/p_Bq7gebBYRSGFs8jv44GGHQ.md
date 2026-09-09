---
schema: wang-person/v1
id: p_Bq7gebBYRSGFs8jv44GGHQ
status: active
merged_into: null
display_name: 王尚賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJ4oW89JjpjQHbZMNp9mJJ
        subject_person_id: p_Bq7gebBYRSGFs8jv44GGHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhsqGhMjBszAcLjJ95AhvE
          claim_id: c_ZJ4oW89JjpjQHbZMNp9mJJ
          source_id: s_zwuRARrCEmZMNKGdqa6kD8
          stance: supports
          locator: CBDB:126575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126575）
          source: &a1
            id: s_zwuRARrCEmZMNKGdqa6kD8
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 126575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126575&o=json
            external_identifier: CBDB:126575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Skajxe7DdtsD89FNhuV885
        subject_person_id: p_Bq7gebBYRSGFs8jv44GGHQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gECXgiDN1gRfmmz2HN4fG
          claim_id: c_Skajxe7DdtsD89FNhuV885
          source_id: s_zwuRARrCEmZMNKGdqa6kD8
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

# 王尚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚賢（CBDB 126575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126575&o=json)
