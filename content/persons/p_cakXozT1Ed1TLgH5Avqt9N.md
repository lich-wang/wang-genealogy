---
schema: wang-person/v1
id: p_cakXozT1Ed1TLgH5Avqt9N
status: active
merged_into: null
display_name: 王汝訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEjV34AEvCJmZB1LmGCZKC
        subject_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKh6CGG8BdU5JecsxsbQPK
          claim_id: c_iEjV34AEvCJmZB1LmGCZKC
          source_id: s_eT7N64kPZxBzvttmZQ7Q2i
          stance: supports
          locator: CBDB:126501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126501）
          source: &a1
            id: s_eT7N64kPZxBzvttmZQ7Q2i
            source_type: api_record
            title: 中国历代人物传记资料库：王汝訓（CBDB 126501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126501&o=json
            external_identifier: CBDB:126501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EJzH3WHFv4ZMs5mvVDRTNm
        subject_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofvAYB3NcsiafPXWvFyW3i
          claim_id: c_EJzH3WHFv4ZMs5mvVDRTNm
          source_id: s_eT7N64kPZxBzvttmZQ7Q2i
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
        id: c_nB2Ce9Sz44cXqTB5X2e9Vs
        subject_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yaZbWPETaiP1G9nmXXEj4k
          claim_id: c_nB2Ce9Sz44cXqTB5X2e9Vs
          source_id: s_eT7N64kPZxBzvttmZQ7Q2i
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
        id: c_rLw87bqmQzPptZU82PSUf7
        subject_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8xfP37m4wDwq4Vv24Qu19a
          claim_id: c_rLw87bqmQzPptZU82PSUf7
          source_id: s_eT7N64kPZxBzvttmZQ7Q2i
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
  ancestors:
    - claim:
        id: c_niSK6Po4tqJATWz6h1ZuyM
        subject_person_id: p_9Nb2W7sDykivNDoZKNyc1R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1vqv-IvE0SPoNprUwU0UI
          claim_id: c_niSK6Po4tqJATWz6h1ZuyM
          source_id: s_hRRFPYwhsj9xKUj4cyrrjd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hRRFPYwhsj9xKUj4cyrrjd
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 209897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209897&o=json
            external_identifier: CBDB:209897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9Nb2W7sDykivNDoZKNyc1R
        status: active
        display_name: 王奎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝訓 | accepted |
| birth.date | 1551年 | accepted |
| death.date | 1610年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_9Nb2W7sDykivNDoZKNyc1R | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 209897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209897&o=json)
- [中国历代人物传记资料库：王汝訓（CBDB 126501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126501&o=json)
