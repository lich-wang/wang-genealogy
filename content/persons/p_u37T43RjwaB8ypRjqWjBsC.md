---
schema: wang-person/v1
id: p_u37T43RjwaB8ypRjqWjBsC
status: active
merged_into: null
display_name: 王福慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EgWFnGnxW2PtE46VjXoJUb
        subject_person_id: p_u37T43RjwaB8ypRjqWjBsC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1D8zV29585kZmRyKGvCx6R
          claim_id: c_EgWFnGnxW2PtE46VjXoJUb
          source_id: s_dmkatAKJeGi2L9G3uy671k
          stance: supports
          locator: CBDB:639606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639606）
          source: &a1
            id: s_dmkatAKJeGi2L9G3uy671k
            source_type: api_record
            title: 中国历代人物传记资料库：王福慶（CBDB 639606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639606&o=json
            external_identifier: CBDB:639606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQ7FrSuw13Cja9L8DyA7U7
        subject_person_id: p_u37T43RjwaB8ypRjqWjBsC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福慶，清人物。籍贯甯都直隸州甯都直隸州前鋪，曾任藍翎侍衛、三等侍衛、中軍守備。（中国历代人物传记资料库 CBDB 639606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yllOLGa9Zsd7JZ7vn6_2IQ
          claim_id: c_RQ7FrSuw13Cja9L8DyA7U7
          source_id: s_dmkatAKJeGi2L9G3uy671k
          stance: supports
          locator: CBDB:639606
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

# 王福慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福慶 | accepted |
| bio.summary | 王福慶，清人物。籍贯甯都直隸州甯都直隸州前鋪，曾任藍翎侍衛、三等侍衛、中軍守備。（中国历代人物传记资料库 CBDB 639606） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福慶（CBDB 639606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639606&o=json)
