---
schema: wang-person/v1
id: p_4YYoAHWMp3Bi3iGGbeFDZQ
status: active
merged_into: null
display_name: 王倉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M5ciHWfQTMZyUEh3D5JWaz
        subject_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pzHa4cD1tKhbGHgxbhHsKJ
          claim_id: c_M5ciHWfQTMZyUEh3D5JWaz
          source_id: s_myh5kEKgZXyRw9RsbCULRP
          stance: supports
          locator: CBDB:175715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175715）
          source: &a1
            id: s_myh5kEKgZXyRw9RsbCULRP
            source_type: api_record
            title: 中国历代人物传记资料库：王倉（CBDB 175715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175715&o=json
            external_identifier: CBDB:175715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wTdr28YiEppsjFqGKF9Mfa
        subject_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nVXFhgcTNG68GWV9EEsiPK
          claim_id: c_wTdr28YiEppsjFqGKF9Mfa
          source_id: s_myh5kEKgZXyRw9RsbCULRP
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
        id: c_BsUQKGWrnt3AKLgw7Jdsb8
        subject_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
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
        - id: cs_HW9Hvs58tjpQXvBs5f8iva
          claim_id: c_BsUQKGWrnt3AKLgw7Jdsb8
          source_id: s_myh5kEKgZXyRw9RsbCULRP
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
        id: c_8hV55ec2xJLxbr43XRQOhe
        subject_person_id: p_jqkNaPM6oKD7E6QNnfSZbA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fi6Gb0T79Ohq_fEpsKjm0R
          claim_id: c_8hV55ec2xJLxbr43XRQOhe
          source_id: s_myh5kEKgZXyRw9RsbCULRP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jqkNaPM6oKD7E6QNnfSZbA
        status: active
        display_name: 王翊
        merged_into_person_id: null
  children:
    - claim:
        id: c_0QVOTJeNajLT5PMDXloW5Y
        subject_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FAZ6o2kej8gegK9CExMqrS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kv75od_mhp2HQnt0Nd5IUw
          claim_id: c_0QVOTJeNajLT5PMDXloW5Y
          source_id: s_myh5kEKgZXyRw9RsbCULRP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FAZ6o2kej8gegK9CExMqrS
        status: active
        display_name: 王叔仲
        merged_into_person_id: null
    - claim:
        id: c_trZPV886ITEXDmCijSvWja
        subject_person_id: p_4YYoAHWMp3Bi3iGGbeFDZQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OkEr4nWFt-WixWYBrfsEpX
          claim_id: c_trZPV886ITEXDmCijSvWja
          source_id: s_myh5kEKgZXyRw9RsbCULRP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yBtPvdFHB94uiBW1TdCCXp
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倉 | accepted |
| death.date | 804年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jqkNaPM6oKD7E6QNnfSZbA | 王翊 | accepted |
| children | p_FAZ6o2kej8gegK9CExMqrS | 王叔仲 | accepted |
| children | p_yBtPvdFHB94uiBW1TdCCXp | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倉（CBDB 175715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175715&o=json)
