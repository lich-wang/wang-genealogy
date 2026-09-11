---
schema: wang-person/v1
id: p_GW7kBaaKH2e8iDxiqqt2Mr
status: active
merged_into: null
display_name: 王筠仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pmxMAruf6UWTCmqTcEtA4
        subject_person_id: p_GW7kBaaKH2e8iDxiqqt2Mr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qJzB4M7jScgsLJxpo5L4BE
          claim_id: c_7pmxMAruf6UWTCmqTcEtA4
          source_id: s_Hxz5SvptWE9Q6upD67gFME
          stance: supports
          locator: CBDB:72129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72129）
          source: &a1
            id: s_Hxz5SvptWE9Q6upD67gFME
            source_type: api_record
            title: 中国历代人物传记资料库：王筠仙（CBDB 72129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72129&o=json
            external_identifier: CBDB:72129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E5sqv5NBLBNoZEgLdPrXWP
        subject_person_id: p_GW7kBaaKH2e8iDxiqqt2Mr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1830年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rEAKZMA3kXsLUraqAokAoQ
          claim_id: c_E5sqv5NBLBNoZEgLdPrXWP
          source_id: s_Hxz5SvptWE9Q6upD67gFME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UuWoggtufYoC1zaG9BG3o1
        subject_person_id: p_GW7kBaaKH2e8iDxiqqt2Mr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9AE14hFWMi37NUnfUEECT6
          claim_id: c_UuWoggtufYoC1zaG9BG3o1
          source_id: s_Hxz5SvptWE9Q6upD67gFME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P6JCGp8wU8GBz42VYTTCXu
        subject_person_id: p_GW7kBaaKH2e8iDxiqqt2Mr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠仙（1830年—1893年），清人物。籍贯江寧。（中国历代人物传记资料库 CBDB 72129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2iSwmj_CPSRfqdBQqxq0vk
          claim_id: c_P6JCGp8wU8GBz42VYTTCXu
          source_id: s_Hxz5SvptWE9Q6upD67gFME
          stance: supports
          locator: CBDB:72129
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

# 王筠仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠仙 | accepted |
| birth.date | 1830年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | 王筠仙（1830年—1893年），清人物。籍贯江寧。（中国历代人物传记资料库 CBDB 72129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筠仙（CBDB 72129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72129&o=json)
