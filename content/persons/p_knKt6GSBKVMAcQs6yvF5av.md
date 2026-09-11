---
schema: wang-person/v1
id: p_knKt6GSBKVMAcQs6yvF5av
status: active
merged_into: null
display_name: 王杲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1UWfNkApFhiWDogV5JrSmT
        subject_person_id: p_knKt6GSBKVMAcQs6yvF5av
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mKXAvHhTxHRDxtDk2KC32j
          claim_id: c_1UWfNkApFhiWDogV5JrSmT
          source_id: s_PisyCsFMn6xs81iLGZ538h
          stance: supports
          locator: CBDB:167130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167130）
          source: &a1
            id: s_PisyCsFMn6xs81iLGZ538h
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 167130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167130&o=json
            external_identifier: CBDB:167130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hiogfKq2B6PQio1jYGv1bo
        subject_person_id: p_knKt6GSBKVMAcQs6yvF5av
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲，唐人物。曾任府功曹參軍。（中国历代人物传记资料库 CBDB 167130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OCfAwZgSDFlwq47spZ63vz
          claim_id: c_hiogfKq2B6PQio1jYGv1bo
          source_id: s_PisyCsFMn6xs81iLGZ538h
          stance: supports
          locator: CBDB:167130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-bousd66xlZfkeIocK5F59
        subject_person_id: p_3atCP3viaeRMERB29AJ4kg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_knKt6GSBKVMAcQs6yvF5av
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lAy524rbSpMI7AtrKocCXN
          claim_id: c_-bousd66xlZfkeIocK5F59
          source_id: s_PisyCsFMn6xs81iLGZ538h
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3atCP3viaeRMERB29AJ4kg
        status: active
        display_name: 王解公
        merged_into_person_id: null
  children:
    - claim:
        id: c_yYBViYoImOdRoTuRI2Ec_-
        subject_person_id: p_knKt6GSBKVMAcQs6yvF5av
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ew9VEMUCBzvbmrZp1s8KE9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O0rTK8jF-6R4dT9LwKDCjG
          claim_id: c_yYBViYoImOdRoTuRI2Ec_-
          source_id: s_PisyCsFMn6xs81iLGZ538h
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Huichang30：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ew9VEMUCBzvbmrZp1s8KE9
        status: active
        display_name: 王時邕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，唐人物。曾任府功曹參軍。（中国历代人物传记资料库 CBDB 167130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3atCP3viaeRMERB29AJ4kg | 王解公 | accepted |
| children | p_Ew9VEMUCBzvbmrZp1s8KE9 | 王時邕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 167130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167130&o=json)
