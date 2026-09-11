---
schema: wang-person/v1
id: p_dEFGwHC8Hju12C7wtkG5mA
status: active
merged_into: null
display_name: 王瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RLdxYyp4hpwNkkKrMSub6M
        subject_person_id: p_dEFGwHC8Hju12C7wtkG5mA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MXU1UnsdHwRbi383gg1XB3
          claim_id: c_RLdxYyp4hpwNkkKrMSub6M
          source_id: s_BPq8yasQ6xqGNV1ei8tq4P
          stance: supports
          locator: CBDB:341875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341875）
          source: &a1
            id: s_BPq8yasQ6xqGNV1ei8tq4P
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 341875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341875&o=json
            external_identifier: CBDB:341875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u7zjpcTS3PBtTqVSBHe4TJ
        subject_person_id: p_dEFGwHC8Hju12C7wtkG5mA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，清人物。明清進士進士，籍贯上元，入仕進士，曾任檢討、同考官。（中国历代人物传记资料库 CBDB 341875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cRbfvslNpCPaBrqvhoxcq8
          claim_id: c_u7zjpcTS3PBtTqVSBHe4TJ
          source_id: s_BPq8yasQ6xqGNV1ei8tq4P
          stance: supports
          locator: CBDB:341875
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

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，清人物。明清進士進士，籍贯上元，入仕進士，曾任檢討、同考官。（中国历代人物传记资料库 CBDB 341875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 341875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341875&o=json)
