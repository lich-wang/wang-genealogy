---
schema: wang-person/v1
id: p_ZFDH5WMNyeEyF44AbZkEYg
status: active
merged_into: null
display_name: 王自牧
cbdb_id: 558018
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zev6PDhLkTTzrKu7tm2Y1v
        subject_person_id: p_ZFDH5WMNyeEyF44AbZkEYg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自牧（卒于1405年），明人物。籍贯上饒，曾任兵部職方司郎中。（中国历代人物传记资料库 CBDB 558018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fudxhX35AX5isxUDYtaFNt
          claim_id: c_zev6PDhLkTTzrKu7tm2Y1v
          source_id: s_WbKQUodXqXX3T5GNBTfXiA
          stance: supports
          locator: CBDB:558018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WbKQUodXqXX3T5GNBTfXiA
            source_type: api_record
            title: 中国历代人物传记资料库：王自牧（CBDB 558018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558018&o=json
            external_identifier: CBDB:558018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QPCL694KnLdsC9wCdL1s82
        subject_person_id: p_ZFDH5WMNyeEyF44AbZkEYg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1405年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1405-01-01
            latest: 1405-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UPHAnrTAdpMAGwtLmdGzp8
          claim_id: c_QPCL694KnLdsC9wCdL1s82
          source_id: s_WbKQUodXqXX3T5GNBTfXiA
          stance: supports
          locator: CBDB:558018
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1405
          source:
            id: s_WbKQUodXqXX3T5GNBTfXiA
            source_type: api_record
            title: 中国历代人物传记资料库：王自牧（CBDB 558018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558018&o=json
            external_identifier: CBDB:558018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iyJ5RYss42VozaYzBLU2By
        subject_person_id: p_ZFDH5WMNyeEyF44AbZkEYg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5rxPULdcqu9dsTeLaCirYf
          claim_id: c_iyJ5RYss42VozaYzBLU2By
          source_id: s_WbKQUodXqXX3T5GNBTfXiA
          stance: supports
          locator: CBDB:558018
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1405
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

# 王自牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王自牧（卒于1405年），明人物。籍贯上饒，曾任兵部職方司郎中。（中国历代人物传记资料库 CBDB 558018） | accepted |
| death.date | 1405年 | accepted |
| name.primary | 王自牧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自牧（CBDB 558018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558018&o=json)
