---
schema: wang-person/v1
id: p_8g8Qs1D562BbS3RLayRcPg
status: active
merged_into: null
display_name: 王象
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G2H4mTZP9U8539TSVRvasd
        subject_person_id: p_8g8Qs1D562BbS3RLayRcPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tDXoxVakNPSVhxE74W3jDP
          claim_id: c_G2H4mTZP9U8539TSVRvasd
          source_id: s_MvF4DJEz3XVjUCjZnuHH2E
          stance: supports
          locator: CBDB:158213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158213）
          source: &a1
            id: s_MvF4DJEz3XVjUCjZnuHH2E
            source_type: api_record
            title: 中国历代人物传记资料库：王象（CBDB 158213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158213&o=json
            external_identifier: CBDB:158213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2K7kVwqqz9fq9KPLHHrRHM
        subject_person_id: p_8g8Qs1D562BbS3RLayRcPg
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
        - id: cs_4J7DnQCt3gL62W9hjzDCZA
          claim_id: c_2K7kVwqqz9fq9KPLHHrRHM
          source_id: s_MvF4DJEz3XVjUCjZnuHH2E
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
        id: c_L7XO-qjIRKFwIGXnp2JOVZ
        subject_person_id: p_tWvLcyqPqfcv2k5sniX1uV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8g8Qs1D562BbS3RLayRcPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-2A9tWxlZyy_ulUy5Gtad1
          claim_id: c_L7XO-qjIRKFwIGXnp2JOVZ
          source_id: s_MvF4DJEz3XVjUCjZnuHH2E
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tWvLcyqPqfcv2k5sniX1uV
        status: active
        display_name: 王玄起
        merged_into_person_id: null
  children:
    - claim:
        id: c_3HhNXuupHKLXJNVqcenttc
        subject_person_id: p_8g8Qs1D562BbS3RLayRcPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wiB79NcNQHJ368q4MoQvKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQKp1dsqgXg6Oot92C0kld
          claim_id: c_3HhNXuupHKLXJNVqcenttc
          source_id: s_MvF4DJEz3XVjUCjZnuHH2E
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wiB79NcNQHJ368q4MoQvKy
        status: active
        display_name: 王曾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_TlnLLow84lmDhzOM5lwUkb
        subject_person_id: p_8g8Qs1D562BbS3RLayRcPg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jgn8VYTBiMsG4c6hVqFPc3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jDgCCSLwO-GodsQ7ACgTx
          claim_id: c_TlnLLow84lmDhzOM5lwUkb
          source_id: s_MvF4DJEz3XVjUCjZnuHH2E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 11：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jgn8VYTBiMsG4c6hVqFPc3
        status: active
        display_name: 王修本
        merged_into_person_id: null
  other: []
---

# 王象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tWvLcyqPqfcv2k5sniX1uV | 王玄起 | accepted |
| children | p_wiB79NcNQHJ368q4MoQvKy | 王曾 | accepted |
| descendants | p_jgn8VYTBiMsG4c6hVqFPc3 | 王修本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象（CBDB 158213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158213&o=json)
