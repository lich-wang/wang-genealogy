---
schema: wang-person/v1
id: p_HhTc3PddZJyLNtDVGWeQeD
status: active
merged_into: null
display_name: 王羽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZmURqQ6V6MLWmHM1yBqgu
        subject_person_id: p_HhTc3PddZJyLNtDVGWeQeD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8G3XYMkqARBhRRDnMRMEVD
          claim_id: c_sZmURqQ6V6MLWmHM1yBqgu
          source_id: s_6w7TMT5JYGQPsTSvic8aCz
          stance: supports
          locator: CBDB:342021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342021）
          source: &a1
            id: s_6w7TMT5JYGQPsTSvic8aCz
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 342021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342021&o=json
            external_identifier: CBDB:342021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3nQF4vBfGXYz1wFvLvx4Zf
        subject_person_id: p_HhTc3PddZJyLNtDVGWeQeD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽，清人物。明清進士進士，籍贯海寧州，入仕進士。（中国历代人物传记资料库 CBDB 342021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5wy8yeWRjV1pL4Fb6ekvm4
          claim_id: c_3nQF4vBfGXYz1wFvLvx4Zf
          source_id: s_6w7TMT5JYGQPsTSvic8aCz
          stance: supports
          locator: CBDB:342021
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

# 王羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羽 | accepted |
| bio.summary | 王羽，清人物。明清進士進士，籍贯海寧州，入仕進士。（中国历代人物传记资料库 CBDB 342021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羽（CBDB 342021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342021&o=json)
