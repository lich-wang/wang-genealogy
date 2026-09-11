---
schema: wang-person/v1
id: p_ZV6y8YpQeK6MDtUCTVGY16
status: active
merged_into: null
display_name: 王執法
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dsKGvUhJS4pM47yLz6u9Vv
        subject_person_id: p_ZV6y8YpQeK6MDtUCTVGY16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5zdt2CeYQoaaGS69d3VowJ
          claim_id: c_dsKGvUhJS4pM47yLz6u9Vv
          source_id: s_LmALJNCLqaCkvukKcChGvW
          stance: supports
          locator: CBDB:126682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126682）
          source: &a1
            id: s_LmALJNCLqaCkvukKcChGvW
            source_type: api_record
            title: 中国历代人物传记资料库：王執法（CBDB 126682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126682&o=json
            external_identifier: CBDB:126682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kDKwBgqCGtheH79YNVtAEc
        subject_person_id: p_ZV6y8YpQeK6MDtUCTVGY16
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執法，明人物。籍贯崑山，身份为拒絕出仕，曾任同知。（中国历代人物传记资料库 CBDB 126682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VNLYfvYwkRYd5ad0yDDbWy
          claim_id: c_kDKwBgqCGtheH79YNVtAEc
          source_id: s_LmALJNCLqaCkvukKcChGvW
          stance: supports
          locator: CBDB:126682
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

# 王執法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執法 | accepted |
| bio.summary | 王執法，明人物。籍贯崑山，身份为拒絕出仕，曾任同知。（中国历代人物传记资料库 CBDB 126682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王執法（CBDB 126682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126682&o=json)
