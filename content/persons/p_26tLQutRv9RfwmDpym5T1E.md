---
schema: wang-person/v1
id: p_26tLQutRv9RfwmDpym5T1E
status: active
merged_into: null
display_name: 王從
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2747hMb93LcKRHK1Dt8rZ3
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jH7aHbvNhHyaTR7Koc3E5C
          claim_id: c_2747hMb93LcKRHK1Dt8rZ3
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: CBDB:17844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17844）
          source: &a1
            id: s_NRMoGyPxVJjRUhF4g8gkDi
            source_type: api_record
            title: 中国历代人物传记资料库：王從（CBDB 17844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json
            external_identifier: CBDB:17844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YBQL4QfdVJvqc6EBX6tvH2
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1143年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAG7fmPSMoRTKmTmiTf2Y8
          claim_id: c_YBQL4QfdVJvqc6EBX6tvH2
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
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
        id: c_K1aDGLCJno22EioFDzvmud
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1203年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRAEsE6mgcHWHBzBPcVwyc
          claim_id: c_K1aDGLCJno22EioFDzvmud
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
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
        id: c_PNP5SWooyyrTBxMu3CrTvB
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LkQvc8WX5GHSR4j2rTaxuN
          claim_id: c_PNP5SWooyyrTBxMu3CrTvB
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
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
        id: c_qrWctnGxzG0CxUbngMMrRl
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26tLQutRv9RfwmDpym5T1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFAs3e61kCceQaEnCEwQr2
          claim_id: c_qrWctnGxzG0CxUbngMMrRl
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4RuP1y13HperNdMDJkN6MF
        status: active
        display_name: 王震
        merged_into_person_id: null
  children:
    - claim:
        id: c_68A-YfSWNu-hWkjqBdOX_O
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2YWxU452SrBeFmFuGZ2rMe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ploYgZC6A_D_Lk7GyQ7uZv
          claim_id: c_68A-YfSWNu-hWkjqBdOX_O
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: 宋人傳記資料索引(電子版)，868：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2YWxU452SrBeFmFuGZ2rMe
        status: active
        display_name: 王淹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從 | accepted |
| birth.date | 1143年 | accepted |
| death.date | 1203年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4RuP1y13HperNdMDJkN6MF | 王震 | accepted |
| children | p_2YWxU452SrBeFmFuGZ2rMe | 王淹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從（CBDB 17844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json)
