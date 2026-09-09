---
schema: wang-person/v1
id: p_fxDMmjm7EmGUjbrWUJGUvp
status: active
merged_into: null
display_name: 王大千
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUHySkRTZrdGCnpJYmrxsn
        subject_person_id: p_fxDMmjm7EmGUjbrWUJGUvp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大千
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3dS63tYMi12WGSX9zHYr3B
          claim_id: c_HUHySkRTZrdGCnpJYmrxsn
          source_id: s_LJbagz39Kf7FJJJzkGMCvZ
          stance: supports
          locator: CBDB:636890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636890）
          source: &a1
            id: s_LJbagz39Kf7FJJJzkGMCvZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大千（CBDB 636890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636890&o=json
            external_identifier: CBDB:636890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qvdy5o8xM2QzdQr1TLc9Ec
        subject_person_id: p_fxDMmjm7EmGUjbrWUJGUvp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eyDGdoGmLKdonpRHLA1L4
          claim_id: c_Qvdy5o8xM2QzdQr1TLc9Ec
          source_id: s_LJbagz39Kf7FJJJzkGMCvZ
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

# 王大千

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大千 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大千（CBDB 636890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636890&o=json)
