---
schema: wang-person/v1
id: p_JNmq25U675cK3wJTXb7V4f
status: active
merged_into: null
display_name: 王恩沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PhoZ4S2GDT6i2TK878cZd8
        subject_person_id: p_JNmq25U675cK3wJTXb7V4f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CA1bhd2Su23RYhXK49cR3m
          claim_id: c_PhoZ4S2GDT6i2TK878cZd8
          source_id: s_yMA93f34nEvuDyoU9CqofL
          stance: supports
          locator: CBDB:637839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637839）
          source: &a1
            id: s_yMA93f34nEvuDyoU9CqofL
            source_type: api_record
            title: 中国历代人物传记资料库：王恩沛（CBDB 637839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637839&o=json
            external_identifier: CBDB:637839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jwrhaUfkAxFpg5V4DRBV5k
        subject_person_id: p_JNmq25U675cK3wJTXb7V4f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩沛，清人物。籍贯南陽，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eBsZH_WqsJ9ItRPrcvTVec
          claim_id: c_jwrhaUfkAxFpg5V4DRBV5k
          source_id: s_yMA93f34nEvuDyoU9CqofL
          stance: supports
          locator: CBDB:637839
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

# 王恩沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩沛 | accepted |
| bio.summary | 王恩沛，清人物。籍贯南陽，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩沛（CBDB 637839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637839&o=json)
