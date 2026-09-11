---
schema: wang-person/v1
id: p_uY8NeaQExVNe1AebbVL1wr
status: active
merged_into: null
display_name: 王覲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GE8fSRpDhAjbm6RuUaVDN
        subject_person_id: p_uY8NeaQExVNe1AebbVL1wr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NpUB6j8APG39RfUh3t1no4
          claim_id: c_3GE8fSRpDhAjbm6RuUaVDN
          source_id: s_K3SCBf67MpHYHbFaGTP78s
          stance: supports
          locator: CBDB:640234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640234）
          source: &a1
            id: s_K3SCBf67MpHYHbFaGTP78s
            source_type: api_record
            title: 中国历代人物传记资料库：王覲（CBDB 640234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640234&o=json
            external_identifier: CBDB:640234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NodJKn21mDRZxpiA7PvU8Z
        subject_person_id: p_uY8NeaQExVNe1AebbVL1wr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覲，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640234）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RoREB4j88w-4Ag9j4kfLrX
          claim_id: c_NodJKn21mDRZxpiA7PvU8Z
          source_id: s_K3SCBf67MpHYHbFaGTP78s
          stance: supports
          locator: CBDB:640234
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

# 王覲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覲 | accepted |
| bio.summary | 王覲，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王覲（CBDB 640234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640234&o=json)
