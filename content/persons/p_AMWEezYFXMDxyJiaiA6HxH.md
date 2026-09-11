---
schema: wang-person/v1
id: p_AMWEezYFXMDxyJiaiA6HxH
status: active
merged_into: null
display_name: 王延禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mxGBXcL5wJ3LndE78zWXHV
        subject_person_id: p_AMWEezYFXMDxyJiaiA6HxH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WZQJEBieKbWF1yv85o3Vzk
          claim_id: c_mxGBXcL5wJ3LndE78zWXHV
          source_id: s_zKFWUc21JqtK2EDjkHUNar
          stance: supports
          locator: CBDB:341955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341955）
          source: &a1
            id: s_zKFWUc21JqtK2EDjkHUNar
            source_type: api_record
            title: 中国历代人物传记资料库：王延禮（CBDB 341955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341955&o=json
            external_identifier: CBDB:341955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YBbwdrBikmqqeiwTbcHCtJ
        subject_person_id: p_AMWEezYFXMDxyJiaiA6HxH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延禮，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 341955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_glU2iixhQS55TSNAYi9fcd
          claim_id: c_YBbwdrBikmqqeiwTbcHCtJ
          source_id: s_zKFWUc21JqtK2EDjkHUNar
          stance: supports
          locator: CBDB:341955
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

# 王延禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延禮 | accepted |
| bio.summary | 王延禮，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 341955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延禮（CBDB 341955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341955&o=json)
