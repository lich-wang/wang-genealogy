---
schema: wang-person/v1
id: p_oyxpy2WpYqPehfpN6m2VLC
status: active
merged_into: null
display_name: 王宗某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNDXBAZtZ5PY7C4GeC3xST
        subject_person_id: p_oyxpy2WpYqPehfpN6m2VLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ixJ4cp6Ut6fQz9T5oP8AZZ
          claim_id: c_yNDXBAZtZ5PY7C4GeC3xST
          source_id: s_6Mn5J1bteYQ64PsuHRZR2M
          stance: supports
          locator: CBDB:505466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505466）
          source: &a1
            id: s_6Mn5J1bteYQ64PsuHRZR2M
            source_type: api_record
            title: 中国历代人物传记资料库：王宗某（CBDB 505466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505466&o=json
            external_identifier: CBDB:505466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dYBKPfqNVL3kx9Ldh6n9NM
        subject_person_id: p_oyxpy2WpYqPehfpN6m2VLC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗某，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 505466）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a6pg9qM-8uXFeBqey3Hv_j
          claim_id: c_dYBKPfqNVL3kx9Ldh6n9NM
          source_id: s_6Mn5J1bteYQ64PsuHRZR2M
          stance: supports
          locator: CBDB:505466
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

# 王宗某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗某 | accepted |
| bio.summary | 王宗某，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 505466） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗某（CBDB 505466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505466&o=json)
