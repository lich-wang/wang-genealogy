---
schema: wang-person/v1
id: p_1BdwrzHXbPpt9SaMHCG8WV
status: active
merged_into: null
display_name: 王弘楚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2rX98APZR77MJ2pxpJ8er
        subject_person_id: p_1BdwrzHXbPpt9SaMHCG8WV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EN7z5GjuQf69uj4Max6ZYa
          claim_id: c_F2rX98APZR77MJ2pxpJ8er
          source_id: s_BkUdow2hQk9cGM6jLouH8c
          stance: supports
          locator: CBDB:160325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160325）
          source: &a1
            id: s_BkUdow2hQk9cGM6jLouH8c
            source_type: api_record
            title: 中国历代人物传记资料库：王弘楚（CBDB 160325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160325&o=json
            external_identifier: CBDB:160325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GiZ9XvUWEp5Z4qMd54eBy2
        subject_person_id: p_1BdwrzHXbPpt9SaMHCG8WV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_44w89WAbPECev1arkxSwkb
          claim_id: c_GiZ9XvUWEp5Z4qMd54eBy2
          source_id: s_BkUdow2hQk9cGM6jLouH8c
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

# 王弘楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘楚 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘楚（CBDB 160325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160325&o=json)
