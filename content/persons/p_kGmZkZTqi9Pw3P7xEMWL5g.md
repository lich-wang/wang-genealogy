---
schema: wang-person/v1
id: p_kGmZkZTqi9Pw3P7xEMWL5g
status: active
merged_into: null
display_name: 王延嗣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gurw6jQw5dLnh5hAAioiJo
        subject_person_id: p_kGmZkZTqi9Pw3P7xEMWL5g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延嗣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kNtoaiC1p2g6mbgRrA9u58
          claim_id: c_Gurw6jQw5dLnh5hAAioiJo
          source_id: s_ktLrvcyVbaNe6Z4aJbFa2b
          stance: supports
          locator: CBDB:22150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22150）
          source: &a1
            id: s_ktLrvcyVbaNe6Z4aJbFa2b
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 22150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22150&o=json
            external_identifier: CBDB:22150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i8VGXwBf31DbWdD6NnhCtC
        subject_person_id: p_kGmZkZTqi9Pw3P7xEMWL5g
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 873年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FE7K45W7LfAgBHGvh1NRbE
          claim_id: c_i8VGXwBf31DbWdD6NnhCtC
          source_id: s_ktLrvcyVbaNe6Z4aJbFa2b
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
        id: c_R1e2dAEx6dyW2otEKH565h
        subject_person_id: p_kGmZkZTqi9Pw3P7xEMWL5g
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 966年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UGmy4AAHV1wNsBTrRsfJDC
          claim_id: c_R1e2dAEx6dyW2otEKH565h
          source_id: s_ktLrvcyVbaNe6Z4aJbFa2b
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
        id: c_j5Ec2ZZgjUzmYzLD5AJSBz
        subject_person_id: p_kGmZkZTqi9Pw3P7xEMWL5g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为閩國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Muj68qMAbutWQyK8Yb4Xi
          claim_id: c_j5Ec2ZZgjUzmYzLD5AJSBz
          source_id: s_ktLrvcyVbaNe6Z4aJbFa2b
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

# 王延嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延嗣 | accepted |
| birth.date | 873年 | accepted |
| death.date | 966年 | accepted |
| bio.summary | CBDB 记载为閩國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延嗣（CBDB 22150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22150&o=json)
