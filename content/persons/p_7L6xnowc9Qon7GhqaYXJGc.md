---
schema: wang-person/v1
id: p_7L6xnowc9Qon7GhqaYXJGc
status: active
merged_into: null
display_name: 王以升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fQ625REZDJ6WHuF2H3U7j8
        subject_person_id: p_7L6xnowc9Qon7GhqaYXJGc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yhnEN3AmYp4T63JwpqWEKF
          claim_id: c_fQ625REZDJ6WHuF2H3U7j8
          source_id: s_uRmk1voQMeh37SPrEUS7oE
          stance: supports
          locator: CBDB:635915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635915）
          source: &a1
            id: s_uRmk1voQMeh37SPrEUS7oE
            source_type: api_record
            title: 中国历代人物传记资料库：王以升（CBDB 635915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635915&o=json
            external_identifier: CBDB:635915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aa6NJ5DcDELg9BjXPyWZCM
        subject_person_id: p_7L6xnowc9Qon7GhqaYXJGc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王以升，清人物。籍贯茂州直隸州直轄地方，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635915）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2tz5MW2e2Zj6EfE0GC-wzj
          claim_id: c_aa6NJ5DcDELg9BjXPyWZCM
          source_id: s_uRmk1voQMeh37SPrEUS7oE
          stance: supports
          locator: CBDB:635915
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

# 王以升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以升 | accepted |
| bio.summary | 王以升，清人物。籍贯茂州直隸州直轄地方，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以升（CBDB 635915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635915&o=json)
