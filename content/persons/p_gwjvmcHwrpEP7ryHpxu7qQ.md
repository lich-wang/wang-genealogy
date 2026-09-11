---
schema: wang-person/v1
id: p_gwjvmcHwrpEP7ryHpxu7qQ
status: active
merged_into: null
display_name: 王師德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pc3KS2Fzf7bfYyRVobZ5FD
        subject_person_id: p_gwjvmcHwrpEP7ryHpxu7qQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Po4d1wq1AxWL4UkG7y2cJ3
          claim_id: c_pc3KS2Fzf7bfYyRVobZ5FD
          source_id: s_AZyic3pTCBqiCV5mYdTsdC
          stance: supports
          locator: CBDB:157994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157994）
          source: &a1
            id: s_AZyic3pTCBqiCV5mYdTsdC
            source_type: api_record
            title: 中国历代人物传记资料库：王師德（CBDB 157994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157994&o=json
            external_identifier: CBDB:157994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jNiXY1fN7FaFEDVkDFfHLH
        subject_person_id: p_gwjvmcHwrpEP7ryHpxu7qQ
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
        - id: cs_8xvuQV46qh5G6bN7x52bLF
          claim_id: c_jNiXY1fN7FaFEDVkDFfHLH
          source_id: s_AZyic3pTCBqiCV5mYdTsdC
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
        id: c_rsxLfcEbFCrJByLxpDxGJ2
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gwjvmcHwrpEP7ryHpxu7qQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYOnnDv62yGdQljL9Vvkcg
          claim_id: c_rsxLfcEbFCrJByLxpDxGJ2
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Bi4MKHXFWwTnY4wZFRhfrS
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 141655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json
            external_identifier: CBDB:141655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3Q3HvcLsmxqfDq9R1nBQXi
        status: active
        display_name: 王振
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師德 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3Q3HvcLsmxqfDq9R1nBQXi | 王振 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師德（CBDB 157994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157994&o=json)
- [中国历代人物传记资料库：王振（CBDB 141655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json)
