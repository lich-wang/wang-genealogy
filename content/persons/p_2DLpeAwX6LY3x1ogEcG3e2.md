---
schema: wang-person/v1
id: p_2DLpeAwX6LY3x1ogEcG3e2
status: active
merged_into: null
display_name: 王澤敷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hk6GDnBdb349aj9NxeCu6U
        subject_person_id: p_2DLpeAwX6LY3x1ogEcG3e2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤敷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5nhY4MARV3JrWLUX6AaaLq
          claim_id: c_hk6GDnBdb349aj9NxeCu6U
          source_id: s_B7cQkvXjBZazp8Aq3a612a
          stance: supports
          locator: CBDB:639226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639226）
          source: &a1
            id: s_B7cQkvXjBZazp8Aq3a612a
            source_type: api_record
            title: 中国历代人物传记资料库：王澤敷（CBDB 639226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639226&o=json
            external_identifier: CBDB:639226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qnNofN5oZmo8JEVfebqA5M
        subject_person_id: p_2DLpeAwX6LY3x1ogEcG3e2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤敷，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h3Ecn2hajn4H7PgN8ng0QU
          claim_id: c_qnNofN5oZmo8JEVfebqA5M
          source_id: s_B7cQkvXjBZazp8Aq3a612a
          stance: supports
          locator: CBDB:639226
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

# 王澤敷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤敷 | accepted |
| bio.summary | 王澤敷，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤敷（CBDB 639226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639226&o=json)
