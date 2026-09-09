---
schema: wang-person/v1
id: p_KGLHCJDAiz3TqutP1CgL1w
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Qefd2fnxngK3FZV19k3QS
        subject_person_id: p_KGLHCJDAiz3TqutP1CgL1w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3hWhvxGdcrCc2EkP4rWo3v
          claim_id: c_4Qefd2fnxngK3FZV19k3QS
          source_id: s_hRqspk3Do5JtLCuTnWPQ47
          stance: supports
          locator: CBDB:341641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341641）
          source: &a1
            id: s_hRqspk3Do5JtLCuTnWPQ47
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 341641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341641&o=json
            external_identifier: CBDB:341641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLV6KsbXb5reor21s8JxAs
        subject_person_id: p_KGLHCJDAiz3TqutP1CgL1w
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
        - id: cs_medDs85HnDF3tKv2cbcejq
          claim_id: c_rLV6KsbXb5reor21s8JxAs
          source_id: s_hRqspk3Do5JtLCuTnWPQ47
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 341641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341641&o=json)
