---
schema: wang-person/v1
id: p_V3Yh8GKnb2x9mr5M9Hf847
status: active
merged_into: null
display_name: 王嵩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDvR8f4B1AxVQHFUZqN6Sx
        subject_person_id: p_V3Yh8GKnb2x9mr5M9Hf847
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ENFghnFbCtNGniTXoxuUv6
          claim_id: c_SDvR8f4B1AxVQHFUZqN6Sx
          source_id: s_QmFEPyeK91uFNLHL45Pw8Z
          stance: supports
          locator: CBDB:496948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496948）
          source: &a1
            id: s_QmFEPyeK91uFNLHL45Pw8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 496948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496948&o=json
            external_identifier: CBDB:496948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nA1VNGmKMAyLKFu3KvFkbA
        subject_person_id: p_V3Yh8GKnb2x9mr5M9Hf847
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩，明人物。曾任典史。（中国历代人物传记资料库 CBDB 496948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ybd4UKhbPevcbYu77eVb5e
          claim_id: c_nA1VNGmKMAyLKFu3KvFkbA
          source_id: s_QmFEPyeK91uFNLHL45Pw8Z
          stance: supports
          locator: CBDB:496948
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

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | 王嵩，明人物。曾任典史。（中国历代人物传记资料库 CBDB 496948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 496948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496948&o=json)
