---
schema: wang-person/v1
id: p_hGqH395C56YfcZLKCC7BLV
status: active
merged_into: null
display_name: 王震
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_54b6kBzf6d5XP1TbBiHNwe
        subject_person_id: p_hGqH395C56YfcZLKCC7BLV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xhPkuy91W7bJeirCRquMYs
          claim_id: c_54b6kBzf6d5XP1TbBiHNwe
          source_id: s_CJkUYh6HwM9uQ9L4VtgWVk
          stance: supports
          locator: CBDB:155951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155951）
          source: &a1
            id: s_CJkUYh6HwM9uQ9L4VtgWVk
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 155951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155951&o=json
            external_identifier: CBDB:155951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k5vDSWDCAFoRREP3xRDYB4
        subject_person_id: p_hGqH395C56YfcZLKCC7BLV
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
        - id: cs_PDfj7QDACEdU19z2CAgMj5
          claim_id: c_k5vDSWDCAFoRREP3xRDYB4
          source_id: s_CJkUYh6HwM9uQ9L4VtgWVk
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
        id: c_VmI7isSyIsVPvhvkMHNks-
        subject_person_id: p_QqduQ4bBt2W7EX3AgTxcR6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hGqH395C56YfcZLKCC7BLV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mFX3jAp9mPIlZppBM0k9z
          claim_id: c_VmI7isSyIsVPvhvkMHNks-
          source_id: s_7E4LiCuAQUxBMvK1Q9nU5f
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7E4LiCuAQUxBMvK1Q9nU5f
            source_type: api_record
            title: 中国历代人物传记资料库：王忠嗣（CBDB 32662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32662&o=json
            external_identifier: CBDB:32662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QqduQ4bBt2W7EX3AgTxcR6
        status: active
        display_name: 王忠嗣
        merged_into_person_id: null
  children:
    - claim:
        id: c_yOTJh4DhyEFyh0TG7yngvN
        subject_person_id: p_hGqH395C56YfcZLKCC7BLV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WaGRLd4ZChG41FGHC1dtHU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWti7wJq3gG2ZUIrcWkipZ
          claim_id: c_yOTJh4DhyEFyh0TG7yngvN
          source_id: s_CJkUYh6HwM9uQ9L4VtgWVk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 100：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WaGRLd4ZChG41FGHC1dtHU
        status: active
        display_name: 王永
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QqduQ4bBt2W7EX3AgTxcR6 | 王忠嗣 | accepted |
| children | p_WaGRLd4ZChG41FGHC1dtHU | 王永 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 155951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155951&o=json)
- [中国历代人物传记资料库：王忠嗣（CBDB 32662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32662&o=json)
