---
schema: wang-person/v1
id: p_nACW2ij7XgSSFZQCPannFJ
status: active
merged_into: null
display_name: 王以中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MwMAt9oMQYqcHUSWP24QzU
        subject_person_id: p_nACW2ij7XgSSFZQCPannFJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uB9uodHv7b3bmnHNsq8iTe
          claim_id: c_MwMAt9oMQYqcHUSWP24QzU
          source_id: s_PXxLB8swocPKBLb7EMeHRD
          stance: supports
          locator: CBDB:635910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635910）
          source: &a1
            id: s_PXxLB8swocPKBLb7EMeHRD
            source_type: api_record
            title: 中国历代人物传记资料库：王以中（CBDB 635910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635910&o=json
            external_identifier: CBDB:635910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yv57kPHavoRi6ZJDMSB4MK
        subject_person_id: p_nACW2ij7XgSSFZQCPannFJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以中，清人物。籍贯遵義，入仕鄉貢舉人，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 635910）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cGhNcuwsx36i8NgRsHUqLb
          claim_id: c_yv57kPHavoRi6ZJDMSB4MK
          source_id: s_PXxLB8swocPKBLb7EMeHRD
          stance: supports
          locator: CBDB:635910
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

# 王以中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以中 | accepted |
| bio.summary | 王以中，清人物。籍贯遵義，入仕鄉貢舉人，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 635910） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以中（CBDB 635910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635910&o=json)
