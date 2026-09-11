---
schema: wang-person/v1
id: p_4LwKm81HesPgBivVeco1an
status: active
merged_into: null
display_name: 王嶷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ifvkYUEbnjW36TNnWUH48R
        subject_person_id: p_4LwKm81HesPgBivVeco1an
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
        - id: cs_RHPjZauAGzrn4QG6wYFuVa
          claim_id: c_ifvkYUEbnjW36TNnWUH48R
          source_id: s_ExTojhQW1LXt57GnikkmjF
          stance: supports
          locator: CBDB:175871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175871）
          source: &a1
            id: s_ExTojhQW1LXt57GnikkmjF
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 175871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175871&o=json
            external_identifier: CBDB:175871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uVXwp4MfxWzkZJUwY4PBL5
        subject_person_id: p_4LwKm81HesPgBivVeco1an
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z559rRg1pDAwSk3ALm9cc1
          claim_id: c_uVXwp4MfxWzkZJUwY4PBL5
          source_id: s_ExTojhQW1LXt57GnikkmjF
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
        id: c_Ur6iQACT5GJjSAD3WBAYVb
        subject_person_id: p_4LwKm81HesPgBivVeco1an
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
        - id: cs_5DfXTsmrBGsKbKWYzkLM75
          claim_id: c_Ur6iQACT5GJjSAD3WBAYVb
          source_id: s_ExTojhQW1LXt57GnikkmjF
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
        id: c_Ki1LUEuIW6MWqSkg_HBZKQ
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4LwKm81HesPgBivVeco1an
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mx4A_vr2mgSANeom-Sl0vB
          claim_id: c_Ki1LUEuIW6MWqSkg_HBZKQ
          source_id: s_ExTojhQW1LXt57GnikkmjF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoFqrFneyxXNJVFsSfLURF
        status: active
        display_name: 王仁忠
        merged_into_person_id: null
  children: []
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
| death.date | 798年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoFqrFneyxXNJVFsSfLURF | 王仁忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嶷（CBDB 175871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175871&o=json)
