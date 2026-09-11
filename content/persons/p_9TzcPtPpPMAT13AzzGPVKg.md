---
schema: wang-person/v1
id: p_9TzcPtPpPMAT13AzzGPVKg
status: active
merged_into: null
display_name: 王延祿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77sDavrsAxPppGDAxh8Hn3
        subject_person_id: p_9TzcPtPpPMAT13AzzGPVKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ED5sQSWFAyCbkhhWSBsBt
          claim_id: c_77sDavrsAxPppGDAxh8Hn3
          source_id: s_69wemNdbKjuPmRfLXXhHY7
          stance: supports
          locator: CBDB:189365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189365）
          source: &a1
            id: s_69wemNdbKjuPmRfLXXhHY7
            source_type: api_record
            title: 中国历代人物传记资料库：王延祿（CBDB 189365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189365&o=json
            external_identifier: CBDB:189365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ewo9HemCVFsvM6Sdf86hUi
        subject_person_id: p_9TzcPtPpPMAT13AzzGPVKg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 705年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cG4AYxbBzLuPU1q4Z1tViy
          claim_id: c_Ewo9HemCVFsvM6Sdf86hUi
          source_id: s_69wemNdbKjuPmRfLXXhHY7
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
        id: c_u9GFMuXR6ZssuLmvTveCcA
        subject_person_id: p_9TzcPtPpPMAT13AzzGPVKg
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
        - id: cs_cF72V1diGFV7G37ZHkAekf
          claim_id: c_u9GFMuXR6ZssuLmvTveCcA
          source_id: s_69wemNdbKjuPmRfLXXhHY7
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
        id: c_U24pUQHzkxYv5jza695kmw
        subject_person_id: p_9TzcPtPpPMAT13AzzGPVKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3MA7AMKqXeB3G7av1khfr8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BuOqYQOpnyW1R4tSAIsgyS
          claim_id: c_U24pUQHzkxYv5jza695kmw
          source_id: s_NiNvN6xQRJfDsfCFWpfQC7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NiNvN6xQRJfDsfCFWpfQC7
            source_type: api_record
            title: 中国历代人物传记资料库：王倕（CBDB 189364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189364&o=json
            external_identifier: CBDB:189364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3MA7AMKqXeB3G7av1khfr8
        status: active
        display_name: 王倕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延祿 | accepted |
| death.date | 705年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3MA7AMKqXeB3G7av1khfr8 | 王倕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倕（CBDB 189364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189364&o=json)
- [中国历代人物传记资料库：王延祿（CBDB 189365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189365&o=json)
