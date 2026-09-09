---
schema: wang-person/v1
id: p_8RiApWW4BrjBuvrRS3Mf2D
status: active
merged_into: null
display_name: 王國瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tQFYbu5UvMx7cMHG8C3BPm
        subject_person_id: p_8RiApWW4BrjBuvrRS3Mf2D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v2SVe6dUBfNHxqb6AGp9fc
          claim_id: c_tQFYbu5UvMx7cMHG8C3BPm
          source_id: s_J5avjaMXUZzf3muQn49rkb
          stance: supports
          locator: CBDB:71756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71756）
          source: &a1
            id: s_J5avjaMXUZzf3muQn49rkb
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑞（CBDB 71756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71756&o=json
            external_identifier: CBDB:71756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9VxyGJGVzrUwFNPLANVVsF
        subject_person_id: p_8RiApWW4BrjBuvrRS3Mf2D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1838年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CoCb4KNGeCA4Rg2i91rrj9
          claim_id: c_9VxyGJGVzrUwFNPLANVVsF
          source_id: s_J5avjaMXUZzf3muQn49rkb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oUwkzN8iTHBJXwG67opPRh
        subject_person_id: p_8RiApWW4BrjBuvrRS3Mf2D
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
        - id: cs_DVFyKsKLe9Q6K8SvfJ11hh
          claim_id: c_oUwkzN8iTHBJXwG67opPRh
          source_id: s_J5avjaMXUZzf3muQn49rkb
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

# 王國瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國瑞 | accepted |
| birth.date | 1838年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國瑞（CBDB 71756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71756&o=json)
