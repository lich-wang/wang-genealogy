---
schema: wang-person/v1
id: p_hYg3mBY4z5L651ejsb35ci
status: active
merged_into: null
display_name: 王仲和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujsorFqbsPaUUAfHFrY4dr
        subject_person_id: p_hYg3mBY4z5L651ejsb35ci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GtybL2rbWGuoApyKgPHzTE
          claim_id: c_ujsorFqbsPaUUAfHFrY4dr
          source_id: s_CDaGqpBRXkreiVfUeCjroX
          stance: supports
          locator: CBDB:271418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271418）
          source: &a1
            id: s_CDaGqpBRXkreiVfUeCjroX
            source_type: api_record
            title: 中国历代人物传记资料库：王仲和（CBDB 271418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271418&o=json
            external_identifier: CBDB:271418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mg1DbXZdSPB2gVdHA7HMsr
        subject_person_id: p_hYg3mBY4z5L651ejsb35ci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲和，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 271418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nm0OqFs6pOBpozWnxRjYEO
          claim_id: c_Mg1DbXZdSPB2gVdHA7HMsr
          source_id: s_CDaGqpBRXkreiVfUeCjroX
          stance: supports
          locator: CBDB:271418
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_OHynQjds4h8KydRL_S4gn4
        subject_person_id: p_hYg3mBY4z5L651ejsb35ci
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCp9KptP7IlbX0pVTasLTB
          claim_id: c_OHynQjds4h8KydRL_S4gn4
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ohc7t8WtVqFLyQtGXbDmnK
            source_type: api_record
            title: 中国历代人物传记资料库：王稽（CBDB 198434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json
            external_identifier: CBDB:198434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3vKgPJZPmMS9ZpS2a75EVV
        status: active
        display_name: 王稽
        merged_into_person_id: null
  other: []
---

# 王仲和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲和 | accepted |
| bio.summary | 王仲和，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 271418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稽（CBDB 198434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json)
- [中国历代人物传记资料库：王仲和（CBDB 271418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271418&o=json)
