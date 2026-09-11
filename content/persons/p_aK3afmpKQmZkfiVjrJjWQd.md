---
schema: wang-person/v1
id: p_aK3afmpKQmZkfiVjrJjWQd
status: active
merged_into: null
display_name: 王文義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1qUmuF7U1no4b7ZtyP7NA
        subject_person_id: p_aK3afmpKQmZkfiVjrJjWQd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ghYXZu7R4DDSRFwC1XM2DA
          claim_id: c_E1qUmuF7U1no4b7ZtyP7NA
          source_id: s_gASLVhhZQSa9S25HYepcHU
          stance: supports
          locator: CBDB:139762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139762）
          source: &a1
            id: s_gASLVhhZQSa9S25HYepcHU
            source_type: api_record
            title: 中国历代人物传记资料库：王文義（CBDB 139762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139762&o=json
            external_identifier: CBDB:139762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fd91pLfiVGT5sBCUvbDHR8
        subject_person_id: p_aK3afmpKQmZkfiVjrJjWQd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zc32aJQdHKi5UaCTnB8nGS
          claim_id: c_fd91pLfiVGT5sBCUvbDHR8
          source_id: s_gASLVhhZQSa9S25HYepcHU
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
        id: c_7s4XSMg4Lx8xhSrGLtBk2E
        subject_person_id: p_aK3afmpKQmZkfiVjrJjWQd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKgh1HiD8WX2qLvoM4ENAn
          claim_id: c_7s4XSMg4Lx8xhSrGLtBk2E
          source_id: s_gASLVhhZQSa9S25HYepcHU
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
        id: c_PK73VLFogvYhudkEX5dehp
        subject_person_id: p_aK3afmpKQmZkfiVjrJjWQd
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
        - id: cs_d8PPa7WXSq5sQR3GwKEoY7
          claim_id: c_PK73VLFogvYhudkEX5dehp
          source_id: s_gASLVhhZQSa9S25HYepcHU
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
        id: c_gNSHtY9Nja_KtE7McgxPDW
        subject_person_id: p_aK3afmpKQmZkfiVjrJjWQd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4JVegqaNhvczKZbrT2iLEP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4zNn0xYw55rpAg_QpZC1Z
          claim_id: c_gNSHtY9Nja_KtE7McgxPDW
          source_id: s_gASLVhhZQSa9S25HYepcHU
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonglong 4：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4JVegqaNhvczKZbrT2iLEP
        status: active
        display_name: 王奴子
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文義 | accepted |
| birth.date | 628年 | accepted |
| death.date | 681年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4JVegqaNhvczKZbrT2iLEP | 王奴子 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文義（CBDB 139762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139762&o=json)
