---
schema: wang-person/v1
id: p_3j23cH7JPkMR8e1UBp6wc1
status: active
merged_into: null
display_name: 王材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BhtbYpQU5fpmErQpCyfBDf
        subject_person_id: p_3j23cH7JPkMR8e1UBp6wc1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UrdayiMTzmkhSpdm3E4KAR
          claim_id: c_BhtbYpQU5fpmErQpCyfBDf
          source_id: s_1HSPLi8ufEYetc7Ze6SW55
          stance: supports
          locator: CBDB:502405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502405）
          source: &a1
            id: s_1HSPLi8ufEYetc7Ze6SW55
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 502405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502405&o=json
            external_identifier: CBDB:502405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_si1hEXzJizjRRZo148aYE6
        subject_person_id: p_3j23cH7JPkMR8e1UBp6wc1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 502405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rjy1rQKJzhdkw_iBeItwtA
          claim_id: c_si1hEXzJizjRRZo148aYE6
          source_id: s_1HSPLi8ufEYetc7Ze6SW55
          stance: supports
          locator: CBDB:502405
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

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| bio.summary | 王材，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 502405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 502405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502405&o=json)
