---
schema: wang-person/v1
id: p_LFFAaJeBXtkGLJ163WFSJG
status: active
merged_into: null
display_name: 王桂山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5iT3BKEPC9GUPN96jE2kXo
        subject_person_id: p_LFFAaJeBXtkGLJ163WFSJG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z1HR7D5zP6aiB28LZ9yems
          claim_id: c_5iT3BKEPC9GUPN96jE2kXo
          source_id: s_1C2fB6AVFLJPB2x2eDMxbc
          stance: supports
          locator: CBDB:638706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638706）
          source: &a1
            id: s_1C2fB6AVFLJPB2x2eDMxbc
            source_type: api_record
            title: 中国历代人物传记资料库：王桂山（CBDB 638706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638706&o=json
            external_identifier: CBDB:638706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y9vHE9L8QnF6tP9fA9QAHD
        subject_person_id: p_LFFAaJeBXtkGLJ163WFSJG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂山，清人物。籍贯順天府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 638706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sElCJbvC8t-0iIfOUaWq2a
          claim_id: c_Y9vHE9L8QnF6tP9fA9QAHD
          source_id: s_1C2fB6AVFLJPB2x2eDMxbc
          stance: supports
          locator: CBDB:638706
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

# 王桂山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂山 | accepted |
| bio.summary | 王桂山，清人物。籍贯順天府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 638706） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂山（CBDB 638706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638706&o=json)
