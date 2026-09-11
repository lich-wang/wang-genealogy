---
schema: wang-person/v1
id: p_PjqL7Hpc9o4zCDe2JZjaC3
status: active
merged_into: null
display_name: 王培芬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GgdJiE3xsNGya2gSuXFkB5
        subject_person_id: p_PjqL7Hpc9o4zCDe2JZjaC3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gMBhB9TnwDxs6NXFq59sFU
          claim_id: c_GgdJiE3xsNGya2gSuXFkB5
          source_id: s_LQB4upALne4TtHJt5AGkB8
          stance: supports
          locator: CBDB:568700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568700）
          source: &a1
            id: s_LQB4upALne4TtHJt5AGkB8
            source_type: api_record
            title: 中国历代人物传记资料库：王培芬（CBDB 568700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568700&o=json
            external_identifier: CBDB:568700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7kVusFJv7ZFFDoya1QBGhp
        subject_person_id: p_PjqL7Hpc9o4zCDe2JZjaC3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培芬，清人物。籍贯江寧府。（中国历代人物传记资料库 CBDB 568700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Mmg3jksXG9nSpl7fQNhIm
          claim_id: c_7kVusFJv7ZFFDoya1QBGhp
          source_id: s_LQB4upALne4TtHJt5AGkB8
          stance: supports
          locator: CBDB:568700
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

# 王培芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培芬 | accepted |
| bio.summary | 王培芬，清人物。籍贯江寧府。（中国历代人物传记资料库 CBDB 568700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培芬（CBDB 568700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568700&o=json)
