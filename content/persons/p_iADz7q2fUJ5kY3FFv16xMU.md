---
schema: wang-person/v1
id: p_iADz7q2fUJ5kY3FFv16xMU
status: active
merged_into: null
display_name: 王鎮濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8kavhJDPkaTp5MofXVsWDV
        subject_person_id: p_iADz7q2fUJ5kY3FFv16xMU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kKadR95c9fnB1XP4w3KBUx
          claim_id: c_8kavhJDPkaTp5MofXVsWDV
          source_id: s_ksUchVtDMV9P55XVyge3yt
          stance: supports
          locator: CBDB:640696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640696）
          source: &a1
            id: s_ksUchVtDMV9P55XVyge3yt
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮濤（CBDB 640696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640696&o=json
            external_identifier: CBDB:640696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNfdyQi4aL3JPFHphKadfT
        subject_person_id: p_iADz7q2fUJ5kY3FFv16xMU
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
        - id: cs_oLQwkFjPp1H9mK5FuNF42a
          claim_id: c_hNfdyQi4aL3JPFHphKadfT
          source_id: s_ksUchVtDMV9P55XVyge3yt
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

# 王鎮濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮濤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮濤（CBDB 640696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640696&o=json)
