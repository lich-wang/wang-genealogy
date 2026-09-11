---
schema: wang-person/v1
id: p_VFHd1HePcZxzPPEmJtTsvn
status: active
merged_into: null
display_name: 王洪簡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57H8ECkc63xdCT6Pq981M5
        subject_person_id: p_VFHd1HePcZxzPPEmJtTsvn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7RFz2dn2gVobX2ThBpRD4s
          claim_id: c_57H8ECkc63xdCT6Pq981M5
          source_id: s_G8nPmS3SX3Tq2t2o6cjXEE
          stance: supports
          locator: CBDB:192977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192977）
          source: &a1
            id: s_G8nPmS3SX3Tq2t2o6cjXEE
            source_type: api_record
            title: 中国历代人物传记资料库：王洪簡（CBDB 192977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192977&o=json
            external_identifier: CBDB:192977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xyeHiosM83v6SJC8G2Nc7h
        subject_person_id: p_VFHd1HePcZxzPPEmJtTsvn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AQ9f6n3QAT6X7wj6nwJS9B
          claim_id: c_xyeHiosM83v6SJC8G2Nc7h
          source_id: s_G8nPmS3SX3Tq2t2o6cjXEE
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
        id: c_2H4zSoh3hwVxUu1sVMU6nj
        subject_person_id: p_VFHd1HePcZxzPPEmJtTsvn
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
        - id: cs_h3aegKHvb8VVz3ohx54EBS
          claim_id: c_2H4zSoh3hwVxUu1sVMU6nj
          source_id: s_G8nPmS3SX3Tq2t2o6cjXEE
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
        id: c_6Y12giYrsZ7XA4hqqwOJx8
        subject_person_id: p_1dDUfoPDrypfyq5dfHhY4C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFHd1HePcZxzPPEmJtTsvn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1oa40zo2uv3lJS9bJWsOj
          claim_id: c_6Y12giYrsZ7XA4hqqwOJx8
          source_id: s_a9vSz1MjkqPiQmABf9Hk5s
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 32812：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a9vSz1MjkqPiQmABf9Hk5s
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 192978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192978&o=json
            external_identifier: CBDB:192978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1dDUfoPDrypfyq5dfHhY4C
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children:
    - claim:
        id: c_eenycU7S48k0z6-BQxpPoJ
        subject_person_id: p_VFHd1HePcZxzPPEmJtTsvn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wh2ANkJRUNPNHXxXs9uHvk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJljjNjKiWdPWE_nRaQDGz
          claim_id: c_eenycU7S48k0z6-BQxpPoJ
          source_id: s_eeSNcsGy8vSX6KRkPTFZvA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eeSNcsGy8vSX6KRkPTFZvA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉訓（CBDB 192976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192976&o=json
            external_identifier: CBDB:192976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wh2ANkJRUNPNHXxXs9uHvk
        status: active
        display_name: 王嘉訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洪簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪簡 | accepted |
| death.date | 727年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1dDUfoPDrypfyq5dfHhY4C | 王瓊 | accepted |
| children | p_wh2ANkJRUNPNHXxXs9uHvk | 王嘉訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪簡（CBDB 192977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192977&o=json)
- [中国历代人物传记资料库：王嘉訓（CBDB 192976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192976&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 192978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192978&o=json)
