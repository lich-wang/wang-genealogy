---
schema: wang-person/v1
id: p_E4nUTrRtxz7xc8SG6P3n6g
status: active
merged_into: null
display_name: 王百誦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nVjBfXuydWEQo2ZjwV6Zkn
        subject_person_id: p_E4nUTrRtxz7xc8SG6P3n6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百誦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8CrN8MFbRHP92GiRuyUq3B
          claim_id: c_nVjBfXuydWEQo2ZjwV6Zkn
          source_id: s_6mkkn6cjQtjBFGGPjKJLBK
          stance: supports
          locator: CBDB:639523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639523）
          source: &a1
            id: s_6mkkn6cjQtjBFGGPjKJLBK
            source_type: api_record
            title: 中国历代人物传记资料库：王百誦（CBDB 639523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639523&o=json
            external_identifier: CBDB:639523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9acKD9n5Jg7cMRpoRJtBY2
        subject_person_id: p_E4nUTrRtxz7xc8SG6P3n6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百誦，清人物。籍贯正陽，曾任訓導。（中国历代人物传记资料库 CBDB 639523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_je_kzaVUlFXj30Nr5l0i7j
          claim_id: c_9acKD9n5Jg7cMRpoRJtBY2
          source_id: s_6mkkn6cjQtjBFGGPjKJLBK
          stance: supports
          locator: CBDB:639523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王百誦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王百誦 | accepted |
| bio.summary | 王百誦，清人物。籍贯正陽，曾任訓導。（中国历代人物传记资料库 CBDB 639523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王百誦（CBDB 639523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639523&o=json)
