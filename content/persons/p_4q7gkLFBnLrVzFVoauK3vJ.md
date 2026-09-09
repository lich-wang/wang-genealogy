---
schema: wang-person/v1
id: p_4q7gkLFBnLrVzFVoauK3vJ
status: active
merged_into: null
display_name: 王明華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPQZ8KJgRFHGcqzAMvT7of
        subject_person_id: p_4q7gkLFBnLrVzFVoauK3vJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AckHxV1drXXYF9J715a8M1
          claim_id: c_jPQZ8KJgRFHGcqzAMvT7of
          source_id: s_Fshw9XLuxZcEkRPKJ7ZqNk
          stance: supports
          locator: CBDB:638390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638390）
          source: &a1
            id: s_Fshw9XLuxZcEkRPKJ7ZqNk
            source_type: api_record
            title: 中国历代人物传记资料库：王明華（CBDB 638390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638390&o=json
            external_identifier: CBDB:638390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jirGvyaWLwYPgrC8HZwE29
        subject_person_id: p_4q7gkLFBnLrVzFVoauK3vJ
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
        - id: cs_SsUQ65HPVxwBbvFNpKRAcu
          claim_id: c_jirGvyaWLwYPgrC8HZwE29
          source_id: s_Fshw9XLuxZcEkRPKJ7ZqNk
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

# 王明華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明華 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明華（CBDB 638390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638390&o=json)
