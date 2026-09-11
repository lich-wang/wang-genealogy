---
schema: wang-person/v1
id: p_4MWNpJV5QNwazXiZmDRExJ
status: active
merged_into: null
display_name: 王公廙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t8P2cy6FNCnjxJ9aGg8rBE
        subject_person_id: p_4MWNpJV5QNwazXiZmDRExJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公廙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgVRBCfw1Mj7E2SdfDBqTW
          claim_id: c_t8P2cy6FNCnjxJ9aGg8rBE
          source_id: s_BqLaNEr2S5TqpK4qYUrtqz
          stance: supports
          locator: CBDB:535482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535482）
          source: &a1
            id: s_BqLaNEr2S5TqpK4qYUrtqz
            source_type: api_record
            title: 中国历代人物传记资料库：王公廙（CBDB 535482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535482&o=json
            external_identifier: CBDB:535482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GnAM6PH8ttpcuPu2Lw23tP
        subject_person_id: p_4MWNpJV5QNwazXiZmDRExJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公廙，宋人物。籍贯古田，入仕進士。（中国历代人物传记资料库 CBDB 535482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-fpnTuWqFPB7AD_17dm1g4
          claim_id: c_GnAM6PH8ttpcuPu2Lw23tP
          source_id: s_BqLaNEr2S5TqpK4qYUrtqz
          stance: supports
          locator: CBDB:535482
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

# 王公廙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公廙 | accepted |
| bio.summary | 王公廙，宋人物。籍贯古田，入仕進士。（中国历代人物传记资料库 CBDB 535482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公廙（CBDB 535482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535482&o=json)
