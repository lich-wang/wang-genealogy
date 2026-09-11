---
schema: wang-person/v1
id: p_uEBEoGitzHAkzsm1Lhs1px
status: active
merged_into: null
display_name: 王嶷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9t2Xo7VNnrDTL9FF33TTF
        subject_person_id: p_uEBEoGitzHAkzsm1Lhs1px
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TxgEd2rKvFj1UDjzuzGcpN
          claim_id: c_w9t2Xo7VNnrDTL9FF33TTF
          source_id: s_jD91Kp69RJC6vQB1gq5h23
          stance: supports
          locator: CBDB:175777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175777）
          source: &a1
            id: s_jD91Kp69RJC6vQB1gq5h23
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 175777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175777&o=json
            external_identifier: CBDB:175777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ipDmJyGYJtPVt5cB4JJRGs
        subject_person_id: p_uEBEoGitzHAkzsm1Lhs1px
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKQMi2Yvrct9rBKf83xyAr
          claim_id: c_ipDmJyGYJtPVt5cB4JJRGs
          source_id: s_jD91Kp69RJC6vQB1gq5h23
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
        id: c_EpZovpyD5u9Veciu8YPgBh
        subject_person_id: p_uEBEoGitzHAkzsm1Lhs1px
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
        - id: cs_r8NPAeeWXfZYP67v45i1UR
          claim_id: c_EpZovpyD5u9Veciu8YPgBh
          source_id: s_jD91Kp69RJC6vQB1gq5h23
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
        id: c_OFcNrA49tad7GgQkOqujcb
        subject_person_id: p_Fqf98231G66GDJtjxHT3fS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uEBEoGitzHAkzsm1Lhs1px
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1VP6EYji9bCAM_E76yPZO
          claim_id: c_OFcNrA49tad7GgQkOqujcb
          source_id: s_jD91Kp69RJC6vQB1gq5h23
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fqf98231G66GDJtjxHT3fS
        status: active
        display_name: 王孝遠
        merged_into_person_id: null
  children:
    - claim:
        id: c_qqoYwhH-24UKwBnwyXwLB7
        subject_person_id: p_uEBEoGitzHAkzsm1Lhs1px
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dPrDcxvzw77CiuihLH4sqV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gt0karteSzrOIC3lpi9JNz
          claim_id: c_qqoYwhH-24UKwBnwyXwLB7
          source_id: s_jD91Kp69RJC6vQB1gq5h23
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dPrDcxvzw77CiuihLH4sqV
        status: active
        display_name: 王旡難
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嶷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶷 | accepted |
| death.date | 680年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fqf98231G66GDJtjxHT3fS | 王孝遠 | accepted |
| children | p_dPrDcxvzw77CiuihLH4sqV | 王旡難 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嶷（CBDB 175777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175777&o=json)
