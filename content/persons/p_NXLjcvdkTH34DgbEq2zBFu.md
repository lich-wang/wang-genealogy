---
schema: wang-person/v1
id: p_NXLjcvdkTH34DgbEq2zBFu
status: active
merged_into: null
display_name: 王曜樑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YSwYGDuL5bciKYtjgYs6j5
        subject_person_id: p_NXLjcvdkTH34DgbEq2zBFu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜樑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BpNWBYUjd9DBT1CU4nTJgA
          claim_id: c_YSwYGDuL5bciKYtjgYs6j5
          source_id: s_c4SpcdTkbEeW4uwmd7K3TV
          stance: supports
          locator: CBDB:693512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693512）
          source: &a1
            id: s_c4SpcdTkbEeW4uwmd7K3TV
            source_type: api_record
            title: 中国历代人物传记资料库：王曜樑（CBDB 693512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693512&o=json
            external_identifier: CBDB:693512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G9XcXrfG8Hfgy5tw2d7VRn
        subject_person_id: p_NXLjcvdkTH34DgbEq2zBFu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuMtR6QzDm5UruMwFPAg4m
          claim_id: c_G9XcXrfG8Hfgy5tw2d7VRn
          source_id: s_c4SpcdTkbEeW4uwmd7K3TV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王曜樑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曜樑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曜樑（CBDB 693512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693512&o=json)
