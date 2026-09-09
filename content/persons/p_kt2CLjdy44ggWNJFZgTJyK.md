---
schema: wang-person/v1
id: p_kt2CLjdy44ggWNJFZgTJyK
status: active
merged_into: null
display_name: 王之藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFNG43jKG1xE2ryXfQkf8n
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1cF4XGPJudtrgSw242ZVoA
          claim_id: c_CFNG43jKG1xE2ryXfQkf8n
          source_id: s_6rhFB6NwmDJF6rKTWorpen
          stance: supports
          locator: CBDB:557455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557455）
          source: &a1
            id: s_6rhFB6NwmDJF6rKTWorpen
            source_type: api_record
            title: 中国历代人物传记资料库：王之藩（CBDB 557455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557455&o=json
            external_identifier: CBDB:557455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39EJ65VXNBp71tzo68fKCX
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
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
        - id: cs_YCyGSorJ4pC3AxPMU3dkdF
          claim_id: c_39EJ65VXNBp71tzo68fKCX
          source_id: s_6rhFB6NwmDJF6rKTWorpen
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

# 王之藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之藩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之藩（CBDB 557455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557455&o=json)
