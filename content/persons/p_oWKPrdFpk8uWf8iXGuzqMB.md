---
schema: wang-person/v1
id: p_oWKPrdFpk8uWf8iXGuzqMB
status: active
merged_into: null
display_name: 王原清
cbdb_id: 237457
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NAtUrK35Ub6FXFRr6DWoq6
        subject_person_id: p_oWKPrdFpk8uWf8iXGuzqMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原清，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xfvdKgyBnqt80lV9ttKMmC
          claim_id: c_NAtUrK35Ub6FXFRr6DWoq6
          source_id: s_3vCPSVKjWsJ3kJuWHyDne1
          stance: supports
          locator: CBDB:237457
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3vCPSVKjWsJ3kJuWHyDne1
            source_type: api_record
            title: 中国历代人物传记资料库：王原清（CBDB 237457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237457&o=json
            external_identifier: CBDB:237457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N9zT4wxFaBJim2ADB7oKBG
        subject_person_id: p_oWKPrdFpk8uWf8iXGuzqMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V63n8NAB3V8avynAL9L8ar
          claim_id: c_N9zT4wxFaBJim2ADB7oKBG
          source_id: s_3vCPSVKjWsJ3kJuWHyDne1
          stance: supports
          locator: CBDB:237457
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_wFqklOD0EhTgeXDkDBFiBE
        subject_person_id: p_oWKPrdFpk8uWf8iXGuzqMB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_77xZoKtiK3NRKg79yXDSya
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0FPAzByuxdSZyQmIClax_h
          claim_id: c_wFqklOD0EhTgeXDkDBFiBE
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RVFBxD1wdCHL5QQhGSeNeN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 207889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json
            external_identifier: CBDB:207889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_77xZoKtiK3NRKg79yXDSya
        status: active
        display_name: 王璟
        merged_into_person_id: null
  other: []
---

# 王原清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原清，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237457） | accepted |
| name.primary | 王原清 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_77xZoKtiK3NRKg79yXDSya | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 207889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json)
- [中国历代人物传记资料库：王原清（CBDB 237457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237457&o=json)
