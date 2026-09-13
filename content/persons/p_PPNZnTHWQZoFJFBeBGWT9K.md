---
schema: wang-person/v1
id: p_PPNZnTHWQZoFJFBeBGWT9K
status: active
merged_into: null
display_name: 王來徵
cbdb_id: 336276
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZqvsYkPCYXc5J3gUq4UdUP
        subject_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來徵，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3HcCsCm8NU5vShl9XZEkUU
          claim_id: c_ZqvsYkPCYXc5J3gUq4UdUP
          source_id: s_R7bXdW1UmZLmNHonkP6fKA
          stance: supports
          locator: CBDB:336276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_R7bXdW1UmZLmNHonkP6fKA
            source_type: api_record
            title: 中国历代人物传记资料库：王來徵（CBDB 336276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json
            external_identifier: CBDB:336276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9uJ71LKZ9ndV1GGmULfkGT
        subject_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ry3d5Y8WfEiutPMr2dhX32
          claim_id: c_9uJ71LKZ9ndV1GGmULfkGT
          source_id: s_R7bXdW1UmZLmNHonkP6fKA
          stance: supports
          locator: CBDB:336276
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
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

# 王來徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來徵，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336276） | accepted |
| name.primary | 王來徵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來徵（CBDB 336276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json)
