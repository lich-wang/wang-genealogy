---
schema: wang-person/v1
id: p_Syn1bDQEqJfZDwzce4g5vo
status: active
merged_into: null
display_name: 王舉賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EMqNZicJbbq3VTWyqVLkyh
        subject_person_id: p_Syn1bDQEqJfZDwzce4g5vo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uU55iWCc8VGSRmSAQuQJKQ
          claim_id: c_EMqNZicJbbq3VTWyqVLkyh
          source_id: s_WXZ8RQrinoi7ePqNGJo49q
          stance: supports
          locator: CBDB:69483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69483）
          source: &a1
            id: s_WXZ8RQrinoi7ePqNGJo49q
            source_type: api_record
            title: 中国历代人物传记资料库：王舉賢（CBDB 69483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69483&o=json
            external_identifier: CBDB:69483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZPRc3CrMtFnymWYmiEQunX
        subject_person_id: p_Syn1bDQEqJfZDwzce4g5vo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6c5xjp7wU9fBeFg4YxgSs
          claim_id: c_ZPRc3CrMtFnymWYmiEQunX
          source_id: s_WXZ8RQrinoi7ePqNGJo49q
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
        id: c_V4YaWbZ76A88G2pDW8Guo7
        subject_person_id: p_Syn1bDQEqJfZDwzce4g5vo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉賢（卒于1863年），清人物。籍贯上元，入仕募入軍伍。（中国历代人物传记资料库 CBDB 69483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mx2YHDVUuPh1YsAiOX3dyd
          claim_id: c_V4YaWbZ76A88G2pDW8Guo7
          source_id: s_WXZ8RQrinoi7ePqNGJo49q
          stance: supports
          locator: CBDB:69483
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

# 王舉賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉賢 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | 王舉賢（卒于1863年），清人物。籍贯上元，入仕募入軍伍。（中国历代人物传记资料库 CBDB 69483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舉賢（CBDB 69483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69483&o=json)
