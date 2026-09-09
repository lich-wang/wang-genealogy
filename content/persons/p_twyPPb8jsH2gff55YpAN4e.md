---
schema: wang-person/v1
id: p_twyPPb8jsH2gff55YpAN4e
status: active
merged_into: null
display_name: 王芬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CJ4ciiQYoMLy6UxCJ3jFkJ
        subject_person_id: p_twyPPb8jsH2gff55YpAN4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oNBJwsjSw9EDK2k2gGzssC
          claim_id: c_CJ4ciiQYoMLy6UxCJ3jFkJ
          source_id: s_Gp9ZdY8AV2umMmn61wT8Ci
          stance: supports
          locator: CBDB:498390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498390）
          source: &a1
            id: s_Gp9ZdY8AV2umMmn61wT8Ci
            source_type: api_record
            title: 中国历代人物传记资料库：王芬（CBDB 498390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498390&o=json
            external_identifier: CBDB:498390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_knKqCersV3VLmJ31sZ3Cn5
        subject_person_id: p_twyPPb8jsH2gff55YpAN4e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TwFAb1xQKm9nRY72F16HX2
          claim_id: c_knKqCersV3VLmJ31sZ3Cn5
          source_id: s_Gp9ZdY8AV2umMmn61wT8Ci
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

# 王芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芬 | accepted |
| bio.summary | CBDB 记载为後漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芬（CBDB 498390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498390&o=json)
