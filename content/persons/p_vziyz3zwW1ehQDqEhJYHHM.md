---
schema: wang-person/v1
id: p_vziyz3zwW1ehQDqEhJYHHM
status: active
merged_into: null
display_name: 王廷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wWM5cAYBakuMKLaoLrGRm9
        subject_person_id: p_vziyz3zwW1ehQDqEhJYHHM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2x9QTas6bcPxPSzdXi9nt
          claim_id: c_wWM5cAYBakuMKLaoLrGRm9
          source_id: s_616GqwDJ6xuFWAv3HVgkJb
          stance: supports
          locator: CBDB:209887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209887）
          source: &a1
            id: s_616GqwDJ6xuFWAv3HVgkJb
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 209887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json
            external_identifier: CBDB:209887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SVMB1qc2QxvNDQLYwLGodM
        subject_person_id: p_vziyz3zwW1ehQDqEhJYHHM
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
        - id: cs_bKxwT8VxXMVidCYBQKwnWG
          claim_id: c_SVMB1qc2QxvNDQLYwLGodM
          source_id: s_616GqwDJ6xuFWAv3HVgkJb
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

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 209887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json)
