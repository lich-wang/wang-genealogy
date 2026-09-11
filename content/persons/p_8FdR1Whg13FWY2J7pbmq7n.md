---
schema: wang-person/v1
id: p_8FdR1Whg13FWY2J7pbmq7n
status: active
merged_into: null
display_name: 王由
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rjnoBbbcRskzh27NAZb5yG
        subject_person_id: p_8FdR1Whg13FWY2J7pbmq7n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zWqPCTWYvNQnHVXePyEP65
          claim_id: c_rjnoBbbcRskzh27NAZb5yG
          source_id: s_dgfed6ANM2m5bo6TfkXcdN
          stance: supports
          locator: CBDB:117574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117574）
          source: &a1
            id: s_dgfed6ANM2m5bo6TfkXcdN
            source_type: api_record
            title: 中国历代人物传记资料库：王由（CBDB 117574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117574&o=json
            external_identifier: CBDB:117574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_23vZgysLYLzRMvdwRX89jm
        subject_person_id: p_8FdR1Whg13FWY2J7pbmq7n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1254年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JrDsxLjnHmqZD63ocJgTSS
          claim_id: c_23vZgysLYLzRMvdwRX89jm
          source_id: s_dgfed6ANM2m5bo6TfkXcdN
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
        id: c_8CD2WpnyPQHYBCB36bqiMD
        subject_person_id: p_8FdR1Whg13FWY2J7pbmq7n
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1288年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUqoiz6CQypgKrNCZhVtJZ
          claim_id: c_8CD2WpnyPQHYBCB36bqiMD
          source_id: s_dgfed6ANM2m5bo6TfkXcdN
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
        id: c_6a3FxZU3XzQ2HaoMh61ixy
        subject_person_id: p_8FdR1Whg13FWY2J7pbmq7n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由（1254年—1288年），元人物。籍贯永嘉，曾任知州。（中国历代人物传记资料库 CBDB 117574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wvlus4r3RsjCFj9tXQApgB
          claim_id: c_6a3FxZU3XzQ2HaoMh61ixy
          source_id: s_dgfed6ANM2m5bo6TfkXcdN
          stance: supports
          locator: CBDB:117574
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

# 王由

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王由 | accepted |
| birth.date | 1254年 | accepted |
| death.date | 1288年 | accepted |
| bio.summary | 王由（1254年—1288年），元人物。籍贯永嘉，曾任知州。（中国历代人物传记资料库 CBDB 117574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王由（CBDB 117574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117574&o=json)
