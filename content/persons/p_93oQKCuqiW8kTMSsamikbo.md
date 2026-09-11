---
schema: wang-person/v1
id: p_93oQKCuqiW8kTMSsamikbo
status: active
merged_into: null
display_name: 王慥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_caK3jgHnUzcDVeSjRfhhDF
        subject_person_id: p_93oQKCuqiW8kTMSsamikbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G5cuB777azHhLKTRpwajHk
          claim_id: c_caK3jgHnUzcDVeSjRfhhDF
          source_id: s_WSoEjrFj9ddy8MgZxVMTx3
          stance: supports
          locator: CBDB:175826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175826）
          source: &a1
            id: s_WSoEjrFj9ddy8MgZxVMTx3
            source_type: api_record
            title: 中国历代人物传记资料库：王慥（CBDB 175826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175826&o=json
            external_identifier: CBDB:175826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1NK6TFuztrBVAUBnD246xP
        subject_person_id: p_93oQKCuqiW8kTMSsamikbo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 895年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bVr5Wzw2xq1WZLAszHg2LQ
          claim_id: c_1NK6TFuztrBVAUBnD246xP
          source_id: s_WSoEjrFj9ddy8MgZxVMTx3
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
        id: c_rsUQMkeyUtUdGcGcMcegQP
        subject_person_id: p_93oQKCuqiW8kTMSsamikbo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慥（卒于895年），唐人物。籍贯硤石。（中国历代人物传记资料库 CBDB 175826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_94M2WnSNIZfn5XYrqxf3EA
          claim_id: c_rsUQMkeyUtUdGcGcMcegQP
          source_id: s_WSoEjrFj9ddy8MgZxVMTx3
          stance: supports
          locator: CBDB:175826
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iJY4f1pGKmuGbp2buXkP_x
        subject_person_id: p_g2qc4piXEUaM3GmzDY5nSR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93oQKCuqiW8kTMSsamikbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2-agw7zYWMrXmZFm8V4Nl
          claim_id: c_iJY4f1pGKmuGbp2buXkP_x
          source_id: s_WSoEjrFj9ddy8MgZxVMTx3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g2qc4piXEUaM3GmzDY5nSR
        status: active
        display_name: 王鎡
        merged_into_person_id: null
  children:
    - claim:
        id: c_5P4RvokrZn1mO3baHmAq7H
        subject_person_id: p_93oQKCuqiW8kTMSsamikbo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uWPKRKaLtjXvJ5VxEWdjSy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsbP3cCc8Bh11c_ZdOtaUE
          claim_id: c_5P4RvokrZn1mO3baHmAq7H
          source_id: s_WSoEjrFj9ddy8MgZxVMTx3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uWPKRKaLtjXvJ5VxEWdjSy
        status: active
        display_name: 王滌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慥 | accepted |
| death.date | 895年 | accepted |
| bio.summary | 王慥（卒于895年），唐人物。籍贯硤石。（中国历代人物传记资料库 CBDB 175826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g2qc4piXEUaM3GmzDY5nSR | 王鎡 | accepted |
| children | p_uWPKRKaLtjXvJ5VxEWdjSy | 王滌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慥（CBDB 175826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175826&o=json)
