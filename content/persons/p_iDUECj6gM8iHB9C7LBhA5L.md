---
schema: wang-person/v1
id: p_iDUECj6gM8iHB9C7LBhA5L
status: active
merged_into: null
display_name: 王少恆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tsEa5zGaTRGXwBM7ZDUCJe
        subject_person_id: p_iDUECj6gM8iHB9C7LBhA5L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pEi2dV6owFDwJvpSx42MRJ
          claim_id: c_tsEa5zGaTRGXwBM7ZDUCJe
          source_id: s_aHH3SHoo6f7N4dAsZe2Xjm
          stance: supports
          locator: CBDB:189936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189936）
          source: &a1
            id: s_aHH3SHoo6f7N4dAsZe2Xjm
            source_type: api_record
            title: 中国历代人物传记资料库：王少恆（CBDB 189936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189936&o=json
            external_identifier: CBDB:189936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7cnQ4wZVP2X343rV1mZBUY
        subject_person_id: p_iDUECj6gM8iHB9C7LBhA5L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 782年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Q4uTRtSQv1DdsYqtYP8Ax
          claim_id: c_7cnQ4wZVP2X343rV1mZBUY
          source_id: s_aHH3SHoo6f7N4dAsZe2Xjm
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
        id: c_iSuE7iQfNzWFtmDzzrVBwC
        subject_person_id: p_iDUECj6gM8iHB9C7LBhA5L
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
        - id: cs_6cCr68tXm7MsR4xES5CVfz
          claim_id: c_iSuE7iQfNzWFtmDzzrVBwC
          source_id: s_aHH3SHoo6f7N4dAsZe2Xjm
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
        id: c_tZnCGHpHYmjP3OhqgcUo-k
        subject_person_id: p_1KcRUCdoMYjc4pH69zF2eK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iDUECj6gM8iHB9C7LBhA5L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxJfB1IR1OCrIM7OONf1O1
          claim_id: c_tZnCGHpHYmjP3OhqgcUo-k
          source_id: s_aHH3SHoo6f7N4dAsZe2Xjm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1KcRUCdoMYjc4pH69zF2eK
        status: active
        display_name: 王志良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王少恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王少恆 | accepted |
| death.date | 782年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1KcRUCdoMYjc4pH69zF2eK | 王志良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王少恆（CBDB 189936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189936&o=json)
