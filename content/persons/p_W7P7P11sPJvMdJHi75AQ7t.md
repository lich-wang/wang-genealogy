---
schema: wang-person/v1
id: p_W7P7P11sPJvMdJHi75AQ7t
status: active
merged_into: null
display_name: 王成德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G4SLnmpeCcxYP5iXGz6V2P
        subject_person_id: p_W7P7P11sPJvMdJHi75AQ7t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bsjaLhen8KEQ8CH5BwMxYv
          claim_id: c_G4SLnmpeCcxYP5iXGz6V2P
          source_id: s_bpeuhHwpChQddnTULJcnDw
          stance: supports
          locator: CBDB:343380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343380）
          source: &a1
            id: s_bpeuhHwpChQddnTULJcnDw
            source_type: api_record
            title: 中国历代人物传记资料库：王成德（CBDB 343380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343380&o=json
            external_identifier: CBDB:343380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Po6n6NFwJfMqmA48aCHeX
        subject_person_id: p_W7P7P11sPJvMdJHi75AQ7t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成德，清人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 343380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GIyd8A6qqsfMRGxJnLnyHJ
          claim_id: c_9Po6n6NFwJfMqmA48aCHeX
          source_id: s_bpeuhHwpChQddnTULJcnDw
          stance: supports
          locator: CBDB:343380
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

# 王成德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成德 | accepted |
| bio.summary | 王成德，清人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 343380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成德（CBDB 343380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343380&o=json)
