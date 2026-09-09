---
schema: wang-person/v1
id: p_TRCqLCK8o37NePikcsbtZ8
status: active
merged_into: null
display_name: 王彥超
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N35ZuDWsxj6iF9rE1LV7xe
        subject_person_id: p_TRCqLCK8o37NePikcsbtZ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vQob3nTzS9YCTw8PhShsuc
          claim_id: c_N35ZuDWsxj6iF9rE1LV7xe
          source_id: s_38f7P5s3bSFVaCRYWVdruW
          stance: supports
          locator: CBDB:37637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37637）
          source: &a1
            id: s_38f7P5s3bSFVaCRYWVdruW
            source_type: api_record
            title: 中国历代人物传记资料库：王彥超（CBDB 37637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37637&o=json
            external_identifier: CBDB:37637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y8EX6CDiUCA6B3bVLRXZYv
        subject_person_id: p_TRCqLCK8o37NePikcsbtZ8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 914年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bDv52cRZNSLCU8BaF8Xdxr
          claim_id: c_Y8EX6CDiUCA6B3bVLRXZYv
          source_id: s_38f7P5s3bSFVaCRYWVdruW
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
        id: c_QPSoifYmRgzZb9aBpDoSDS
        subject_person_id: p_TRCqLCK8o37NePikcsbtZ8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 986年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7MaDpZ6xpAWgrSGgd6ztEa
          claim_id: c_QPSoifYmRgzZb9aBpDoSDS
          source_id: s_38f7P5s3bSFVaCRYWVdruW
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
        id: c_j22FhpiVE4NW1jd42GFceh
        subject_person_id: p_TRCqLCK8o37NePikcsbtZ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Khfh5ipZK2AYzsLh8Z8hnp
          claim_id: c_j22FhpiVE4NW1jd42GFceh
          source_id: s_38f7P5s3bSFVaCRYWVdruW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王彥超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥超 | accepted |
| birth.date | 914年 | accepted |
| death.date | 986年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥超（CBDB 37637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37637&o=json)
