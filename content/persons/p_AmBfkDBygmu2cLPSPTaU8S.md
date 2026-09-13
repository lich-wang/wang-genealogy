---
schema: wang-person/v1
id: p_AmBfkDBygmu2cLPSPTaU8S
status: active
merged_into: null
display_name: 王汝新
cbdb_id: 314237
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkNtuGvgpsQ11AqJXbNe51
        subject_person_id: p_AmBfkDBygmu2cLPSPTaU8S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝新，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LCpB09xUeZ4PxAQF9xKtJ_
          claim_id: c_EkNtuGvgpsQ11AqJXbNe51
          source_id: s_3N6TgvwKGFctMJFgPDNvgJ
          stance: supports
          locator: CBDB:314237
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3N6TgvwKGFctMJFgPDNvgJ
            source_type: api_record
            title: 中国历代人物传记资料库：王汝新（CBDB 314237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314237&o=json
            external_identifier: CBDB:314237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ah7xLb8yAXub8xZUARmJvC
        subject_person_id: p_AmBfkDBygmu2cLPSPTaU8S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7ariR4Mg2yLeVm2q9FJC2D
          claim_id: c_ah7xLb8yAXub8xZUARmJvC
          source_id: s_3N6TgvwKGFctMJFgPDNvgJ
          stance: supports
          locator: CBDB:314237
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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

# 王汝新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝新，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314237） | accepted |
| name.primary | 王汝新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝新（CBDB 314237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314237&o=json)
