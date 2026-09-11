---
schema: wang-person/v1
id: p_iUqW6g9gfYUYcQGaV5tWx5
status: active
merged_into: null
display_name: 王讚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kU3jPQWcPxfiJpV8yZk4Ma
        subject_person_id: p_iUqW6g9gfYUYcQGaV5tWx5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ACyRncCC71paE27h8KmKC4
          claim_id: c_kU3jPQWcPxfiJpV8yZk4Ma
          source_id: s_Nn1Utn1JPP7CcQ65RTdTQ4
          stance: supports
          locator: CBDB:497401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497401）
          source: &a1
            id: s_Nn1Utn1JPP7CcQ65RTdTQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王讚（CBDB 497401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497401&o=json
            external_identifier: CBDB:497401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZuymiAhJ9m3vZF7GisxtD8
        subject_person_id: p_iUqW6g9gfYUYcQGaV5tWx5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讚，明人物。入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 497401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6BhSRvwJnAA1-IDJOvGmLS
          claim_id: c_ZuymiAhJ9m3vZF7GisxtD8
          source_id: s_Nn1Utn1JPP7CcQ65RTdTQ4
          stance: supports
          locator: CBDB:497401
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

# 王讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讚 | accepted |
| bio.summary | 王讚，明人物。入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 497401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王讚（CBDB 497401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497401&o=json)
