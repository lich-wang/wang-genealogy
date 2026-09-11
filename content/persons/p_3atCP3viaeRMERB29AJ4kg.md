---
schema: wang-person/v1
id: p_3atCP3viaeRMERB29AJ4kg
status: active
merged_into: null
display_name: 王解公
cbdb_id: 167129
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CXbSweFsFysc3FaCjrCsFp
        subject_person_id: p_3atCP3viaeRMERB29AJ4kg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王解公，唐人物。中国历代人物传记资料库（CBDB）以人物编号 167129 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_WWZKTZo0NccC1RRjLXLnPa
          claim_id: c_CXbSweFsFysc3FaCjrCsFp
          source_id: s_gxaKvuRwE6vtRYgWC62ANH
          stance: supports
          locator: CBDB:167129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_gxaKvuRwE6vtRYgWC62ANH
            source_type: api_record
            title: 中国历代人物传记资料库：王解公（CBDB 167129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167129&o=json
            external_identifier: CBDB:167129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5JXN1kmbFUUu4m5WJ6QM7
        subject_person_id: p_3atCP3viaeRMERB29AJ4kg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王解公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BHBNy2xAc3EgrBnHE6pUq8
          claim_id: c_N5JXN1kmbFUUu4m5WJ6QM7
          source_id: s_gxaKvuRwE6vtRYgWC62ANH
          stance: supports
          locator: CBDB:167129
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_gxaKvuRwE6vtRYgWC62ANH
            source_type: api_record
            title: 中国历代人物传记资料库：王解公（CBDB 167129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167129&o=json
            external_identifier: CBDB:167129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bDGyAqinZCprj5O7-2okr5
        subject_person_id: p_hGEwt3fhrmhQ4r8AR4guSq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3atCP3viaeRMERB29AJ4kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhksL4hJp94lCzPz1kxJWX
          claim_id: c_bDGyAqinZCprj5O7-2okr5
          source_id: s_bj2xfWUspvnEgcbCR7kzNF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bj2xfWUspvnEgcbCR7kzNF
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 167128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167128&o=json
            external_identifier: CBDB:167128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hGEwt3fhrmhQ4r8AR4guSq
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children:
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
          source:
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
      object_person:
        id: p_knKt6GSBKVMAcQs6yvF5av
        status: active
        display_name: 王杲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王解公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王解公，唐人物。中国历代人物传记资料库（CBDB）以人物编号 167129 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王解公 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGEwt3fhrmhQ4r8AR4guSq | 王洪 | accepted |
| children | p_knKt6GSBKVMAcQs6yvF5av | 王杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 167130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167130&o=json)
- [中国历代人物传记资料库：王洪（CBDB 167128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167128&o=json)
- [中国历代人物传记资料库：王解公（CBDB 167129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167129&o=json)
