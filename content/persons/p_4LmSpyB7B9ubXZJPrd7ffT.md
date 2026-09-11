---
schema: wang-person/v1
id: p_4LmSpyB7B9ubXZJPrd7ffT
status: active
merged_into: null
display_name: 王寂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NxFbDypngPoi7y8QmvoFVV
        subject_person_id: p_4LmSpyB7B9ubXZJPrd7ffT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1W1QLNLEpEfuVymtQymmYZ
          claim_id: c_NxFbDypngPoi7y8QmvoFVV
          source_id: s_iXCnNR7M1h8imaHP66MtjY
          stance: supports
          locator: CBDB:185294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185294）
          source: &a1
            id: s_iXCnNR7M1h8imaHP66MtjY
            source_type: api_record
            title: 中国历代人物传记资料库：王寂（CBDB 185294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185294&o=json
            external_identifier: CBDB:185294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1UdTvHi2C6baji8WzQq18H
        subject_person_id: p_4LmSpyB7B9ubXZJPrd7ffT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ee9mV7qGxv4EpFER146LwF
          claim_id: c_1UdTvHi2C6baji8WzQq18H
          source_id: s_iXCnNR7M1h8imaHP66MtjY
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
        id: c_NSSLypxGxfU9aM5CioQuB1
        subject_person_id: p_4LmSpyB7B9ubXZJPrd7ffT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cn6bNSAGPQZSe52i5FEjTn
          claim_id: c_NSSLypxGxfU9aM5CioQuB1
          source_id: s_iXCnNR7M1h8imaHP66MtjY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vi_S0TynNxRT8AYj9RMUej
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4LmSpyB7B9ubXZJPrd7ffT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKj56wER4F5QdsnUVgVZ0o
          claim_id: c_vi_S0TynNxRT8AYj9RMUej
          source_id: s_iXCnNR7M1h8imaHP66MtjY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dy11K68D5QxkanwfNRjGMX
        status: active
        display_name: 王希庭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寂 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dy11K68D5QxkanwfNRjGMX | 王希庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寂（CBDB 185294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185294&o=json)
