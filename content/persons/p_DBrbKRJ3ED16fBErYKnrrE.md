---
schema: wang-person/v1
id: p_DBrbKRJ3ED16fBErYKnrrE
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_spGmbBVJq1y4nLVpK4TKPa
        subject_person_id: p_DBrbKRJ3ED16fBErYKnrrE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B3VyycrfA5SU5vwqmLqQ2u
          claim_id: c_spGmbBVJq1y4nLVpK4TKPa
          source_id: s_SVP68QoVdxZbjyDwSXb51R
          stance: supports
          locator: CBDB:61099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61099）
          source: &a1
            id: s_SVP68QoVdxZbjyDwSXb51R
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 61099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61099&o=json
            external_identifier: CBDB:61099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zE48sQRGtm5xAKzM7Nguwa
        subject_person_id: p_DBrbKRJ3ED16fBErYKnrrE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AC6LfiWRUuDMTXJDXNMx7M
          claim_id: c_zE48sQRGtm5xAKzM7Nguwa
          source_id: s_SVP68QoVdxZbjyDwSXb51R
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
        id: c_y48pbq8NdCQoS8WTmHeyz1
        subject_person_id: p_DBrbKRJ3ED16fBErYKnrrE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄（卒于1768年），清人物。籍贯曲阜，入仕武舉進士，曾任藍翎侍衛、鎮總兵。（中国历代人物传记资料库 CBDB 61099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jlIPBRKFdxI_gpLo2IxfIC
          claim_id: c_y48pbq8NdCQoS8WTmHeyz1
          source_id: s_SVP68QoVdxZbjyDwSXb51R
          stance: supports
          locator: CBDB:61099
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

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| death.date | 1768年 | accepted |
| bio.summary | 王澄（卒于1768年），清人物。籍贯曲阜，入仕武舉進士，曾任藍翎侍衛、鎮總兵。（中国历代人物传记资料库 CBDB 61099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 61099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61099&o=json)
