---
schema: wang-person/v1
id: p_MSC3M9HHC5H86PJaFybPDr
status: active
merged_into: null
display_name: 王補之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWa4ZzSSWbmWQeBtc8F7EG
        subject_person_id: p_MSC3M9HHC5H86PJaFybPDr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_asQKf2mQHK8ZJX4bmrgje3
          claim_id: c_nWa4ZzSSWbmWQeBtc8F7EG
          source_id: s_Nz9QGpWine8bM6xcG9NCu9
          stance: supports
          locator: CBDB:38254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38254）
          source: &a1
            id: s_Nz9QGpWine8bM6xcG9NCu9
            source_type: api_record
            title: 中国历代人物传记资料库：王補之（CBDB 38254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38254&o=json
            external_identifier: CBDB:38254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fuY7FnUCaN8bCAUEERh8sJ
        subject_person_id: p_MSC3M9HHC5H86PJaFybPDr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補之，宋人物。曾任朝奉大夫、朝請大夫、大理寺丞。（中国历代人物传记资料库 CBDB 38254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kDJTJGv8KFNwrRU0ZiIo8o
          claim_id: c_fuY7FnUCaN8bCAUEERh8sJ
          source_id: s_Nz9QGpWine8bM6xcG9NCu9
          stance: supports
          locator: CBDB:38254
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
  descendants: []
  other: []
---

# 王補之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王補之 | accepted |
| bio.summary | 王補之，宋人物。曾任朝奉大夫、朝請大夫、大理寺丞。（中国历代人物传记资料库 CBDB 38254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王補之（CBDB 38254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38254&o=json)
