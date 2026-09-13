---
schema: wang-person/v1
id: p_gP4gLL53vLqhRYEHVzyzJb
status: active
merged_into: null
display_name: 王蘂修
cbdb_id: 343217
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RnfbJB1B7koNG21dVHUsVH
        subject_person_id: p_gP4gLL53vLqhRYEHVzyzJb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘂修，清人物。明清進士進士，籍贯英山，入仕進士。（中国历代人物传记资料库 CBDB 343217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MfPhmCLGenjzkMt8ki4byS
          claim_id: c_RnfbJB1B7koNG21dVHUsVH
          source_id: s_b84uyGLHBH3D6rhAwzmWKN
          stance: supports
          locator: CBDB:343217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_b84uyGLHBH3D6rhAwzmWKN
            source_type: api_record
            title: 中国历代人物传记资料库：王蘂修（CBDB 343217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343217&o=json
            external_identifier: CBDB:343217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:15.941Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RJcHYbrSaFoba5utceVZ5t
        subject_person_id: p_gP4gLL53vLqhRYEHVzyzJb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘂修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tgetkq5xJk8Mj7JW9zbqD8
          claim_id: c_RJcHYbrSaFoba5utceVZ5t
          source_id: s_b84uyGLHBH3D6rhAwzmWKN
          stance: supports
          locator: CBDB:343217
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4501-4600）｜历史性依据：CBDB 朝代 = 清
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

# 王蘂修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蘂修，清人物。明清進士進士，籍贯英山，入仕進士。（中国历代人物传记资料库 CBDB 343217） | accepted |
| name.primary | 王蘂修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘂修（CBDB 343217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343217&o=json)
