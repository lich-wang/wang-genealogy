---
schema: wang-person/v1
id: p_tJ4a7bRMV9hCP3y348uRJE
status: active
merged_into: null
display_name: 王學顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6u97SPJinRMbs2CULQF2r
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LUuJzv8qHJqb2y6tLwGGa4
          claim_id: c_N6u97SPJinRMbs2CULQF2r
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
          stance: supports
          locator: CBDB:126840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126840）
          source: &a1
            id: s_R8v6toK4Sj5dQWeQrFWtQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 126840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126840&o=json
            external_identifier: CBDB:126840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HmgXs5VCBSU8umq3Dfc7u3
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQwwrVrLwX2BL6qgMA4Y9Q
          claim_id: c_HmgXs5VCBSU8umq3Dfc7u3
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
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
        id: c_bfwnUjrETnjB3aGTKwH3db
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1562年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGNUYWcm3L2Y6W2myfpq4E
          claim_id: c_bfwnUjrETnjB3aGTKwH3db
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
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
        id: c_bPmjNwisNjN5uoiwitPF23
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
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
        - id: cs_3KVUoYbFQ7sDRNmHsuzgv8
          claim_id: c_bPmjNwisNjN5uoiwitPF23
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
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

# 王學顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學顏 | accepted |
| birth.date | 1520年 | accepted |
| death.date | 1562年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學顏（CBDB 126840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126840&o=json)
