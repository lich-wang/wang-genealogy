---
schema: wang-person/v1
id: p_mQHZyek2KDR5CECX2thLXN
status: active
merged_into: null
display_name: 王素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qdkhnfnPQEebDfUj2srNHb
        subject_person_id: p_mQHZyek2KDR5CECX2thLXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nya847tZWcdxWq9YZAJ1KH
          claim_id: c_qdkhnfnPQEebDfUj2srNHb
          source_id: s_NupUgWDzMRGBNYnvVHuqMy
          stance: supports
          locator: CBDB:151105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151105）
          source: &a1
            id: s_NupUgWDzMRGBNYnvVHuqMy
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 151105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151105&o=json
            external_identifier: CBDB:151105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QKBfLVx95HjN5sgeJ17FHn
        subject_person_id: p_mQHZyek2KDR5CECX2thLXN
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
        - id: cs_bjhEn7hVhPKT95Pa1fNt7w
          claim_id: c_QKBfLVx95HjN5sgeJ17FHn
          source_id: s_NupUgWDzMRGBNYnvVHuqMy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6beGpNj0XWoC_o2pcxJQYn
        subject_person_id: p_mQHZyek2KDR5CECX2thLXN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JrSpWQQQxcujXZpidoLTDH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mf_b6k_u6SjAPaZsrTWCgr
          claim_id: c_6beGpNj0XWoC_o2pcxJQYn
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 17：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mD9iDogpDAwpMmUBH5y9R5
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 140292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140292&o=json
            external_identifier: CBDB:140292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JrSpWQQQxcujXZpidoLTDH
        status: active
        display_name: 王基
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JrSpWQQQxcujXZpidoLTDH | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王基（CBDB 140292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140292&o=json)
- [中国历代人物传记资料库：王素（CBDB 151105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151105&o=json)
