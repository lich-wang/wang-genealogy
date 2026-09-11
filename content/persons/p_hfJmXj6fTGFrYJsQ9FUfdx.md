---
schema: wang-person/v1
id: p_hfJmXj6fTGFrYJsQ9FUfdx
status: active
merged_into: null
display_name: 王繼志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tc2LwbV3pNmYvEUfXoroZQ
        subject_person_id: p_hfJmXj6fTGFrYJsQ9FUfdx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KnDQmxL3AZbU9ycidkDhqL
          claim_id: c_tc2LwbV3pNmYvEUfXoroZQ
          source_id: s_DdsG1PMpsUSNbDKGuAYxyk
          stance: supports
          locator: CBDB:639799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639799）
          source: &a1
            id: s_DdsG1PMpsUSNbDKGuAYxyk
            source_type: api_record
            title: 中国历代人物传记资料库：王繼志（CBDB 639799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639799&o=json
            external_identifier: CBDB:639799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFKxLJTSBCrwFMZ56BLfiD
        subject_person_id: p_hfJmXj6fTGFrYJsQ9FUfdx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼志，清人物。籍贯華亭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n9cQRY71IqIUOgb3SZWMdj
          claim_id: c_KFKxLJTSBCrwFMZ56BLfiD
          source_id: s_DdsG1PMpsUSNbDKGuAYxyk
          stance: supports
          locator: CBDB:639799
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

# 王繼志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼志 | accepted |
| bio.summary | 王繼志，清人物。籍贯華亭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼志（CBDB 639799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639799&o=json)
