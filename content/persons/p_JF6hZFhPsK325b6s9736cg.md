---
schema: wang-person/v1
id: p_JF6hZFhPsK325b6s9736cg
status: active
merged_into: null
display_name: 王牧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2aF8vE1Ym7D3Q7HVnDrDxf
        subject_person_id: p_JF6hZFhPsK325b6s9736cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mdkyN2xN5u7ETQH9s7o8cF
          claim_id: c_2aF8vE1Ym7D3Q7HVnDrDxf
          source_id: s_v2DME3GrD8YvdUcn76JzSx
          stance: supports
          locator: CBDB:456402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456402）
          source: &a1
            id: s_v2DME3GrD8YvdUcn76JzSx
            source_type: api_record
            title: 中国历代人物传记资料库：王牧（CBDB 456402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456402&o=json
            external_identifier: CBDB:456402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vZ2dkBC3AKC86Db6xhuZxd
        subject_person_id: p_JF6hZFhPsK325b6s9736cg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧，明人物。曾任通判。（中国历代人物传记资料库 CBDB 456402）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LzYg3P_GQNknttqCI-Uq_4
          claim_id: c_vZ2dkBC3AKC86Db6xhuZxd
          source_id: s_v2DME3GrD8YvdUcn76JzSx
          stance: supports
          locator: CBDB:456402
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

# 王牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牧 | accepted |
| bio.summary | 王牧，明人物。曾任通判。（中国历代人物传记资料库 CBDB 456402） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王牧（CBDB 456402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456402&o=json)
