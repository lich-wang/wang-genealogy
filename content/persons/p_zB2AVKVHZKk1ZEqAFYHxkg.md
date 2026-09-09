---
schema: wang-person/v1
id: p_zB2AVKVHZKk1ZEqAFYHxkg
status: active
merged_into: null
display_name: 王效虞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kkY7HhHXfhJDHC3gLRe5Qq
        subject_person_id: p_zB2AVKVHZKk1ZEqAFYHxkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效虞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yg7JAgAF3ikZmKAKMPMADt
          claim_id: c_kkY7HhHXfhJDHC3gLRe5Qq
          source_id: s_G5544RtyfCe7KrLCtR8Na9
          stance: supports
          locator: CBDB:71966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71966）
          source: &a1
            id: s_G5544RtyfCe7KrLCtR8Na9
            source_type: api_record
            title: 中国历代人物传记资料库：王效虞（CBDB 71966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71966&o=json
            external_identifier: CBDB:71966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y45ihWJAtFZTSHLgtNw8Jx
        subject_person_id: p_zB2AVKVHZKk1ZEqAFYHxkg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1815年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BDYsSV7p6LQ3ngw7R6rW8T
          claim_id: c_y45ihWJAtFZTSHLgtNw8Jx
          source_id: s_G5544RtyfCe7KrLCtR8Na9
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
        id: c_5zETjDv9F389m6GV4F71HN
        subject_person_id: p_zB2AVKVHZKk1ZEqAFYHxkg
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
        - id: cs_cKQtYc2RtdNbqddKWDcJRU
          claim_id: c_5zETjDv9F389m6GV4F71HN
          source_id: s_G5544RtyfCe7KrLCtR8Na9
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

# 王效虞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王效虞 | accepted |
| birth.date | 1815年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王效虞（CBDB 71966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71966&o=json)
