---
schema: wang-person/v1
id: p_v2BgMsoPBzxGsaukXuSV82
status: active
merged_into: null
display_name: 王霖龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_etS4UsBTu9e19AWuJ5BsNF
        subject_person_id: p_v2BgMsoPBzxGsaukXuSV82
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZN9Lh7MCG5StfgBR7ZQuHF
          claim_id: c_etS4UsBTu9e19AWuJ5BsNF
          source_id: s_GfZiprdPXa9F483tYWj7va
          stance: supports
          locator: CBDB:38442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38442）
          source: &a1
            id: s_GfZiprdPXa9F483tYWj7va
            source_type: api_record
            title: 中国历代人物传记资料库：王霖龍（CBDB 38442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38442&o=json
            external_identifier: CBDB:38442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vRPQXM6z4TrgYvSym5dTqN
        subject_person_id: p_v2BgMsoPBzxGsaukXuSV82
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sikNHVKYUPRAnHquzwaHk9
          claim_id: c_vRPQXM6z4TrgYvSym5dTqN
          source_id: s_GfZiprdPXa9F483tYWj7va
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

# 王霖龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖龍 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖龍（CBDB 38442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38442&o=json)
