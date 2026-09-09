---
schema: wang-person/v1
id: p_CJRyy8vG3Ln9fUrG477c1K
status: active
merged_into: null
display_name: 王奕宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JThARSWgjfhBtg4LaH9KZh
        subject_person_id: p_CJRyy8vG3Ln9fUrG477c1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_idihxaLcYQCKhmA9mr1pA2
          claim_id: c_JThARSWgjfhBtg4LaH9KZh
          source_id: s_4DhjYUEZEBGx5APjEiqgJk
          stance: supports
          locator: CBDB:472270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472270）
          source: &a1
            id: s_4DhjYUEZEBGx5APjEiqgJk
            source_type: api_record
            title: 中国历代人物传记资料库：王奕宣（CBDB 472270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472270&o=json
            external_identifier: CBDB:472270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9dxFPQESQ836K4c5XL7JEX
        subject_person_id: p_CJRyy8vG3Ln9fUrG477c1K
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
        - id: cs_qCbnFrhfPmg2MoJWJ38r5F
          claim_id: c_9dxFPQESQ836K4c5XL7JEX
          source_id: s_4DhjYUEZEBGx5APjEiqgJk
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

# 王奕宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奕宣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奕宣（CBDB 472270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472270&o=json)
