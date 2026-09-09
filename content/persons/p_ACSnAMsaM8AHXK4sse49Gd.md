---
schema: wang-person/v1
id: p_ACSnAMsaM8AHXK4sse49Gd
status: active
merged_into: null
display_name: 王元弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n27pjK44tGxEj4qtzJ8nUh
        subject_person_id: p_ACSnAMsaM8AHXK4sse49Gd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xz3dK8CGgHbfsruJKxeCvs
          claim_id: c_n27pjK44tGxEj4qtzJ8nUh
          source_id: s_YveyGjMfpf5ygg95qt79kW
          stance: supports
          locator: CBDB:498116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498116）
          source: &a1
            id: s_YveyGjMfpf5ygg95qt79kW
            source_type: api_record
            title: 中国历代人物传记资料库：王元弼（CBDB 498116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498116&o=json
            external_identifier: CBDB:498116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mHAiaUkbHUrb2pFVGjQU4m
        subject_person_id: p_ACSnAMsaM8AHXK4sse49Gd
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
        - id: cs_TQivsdbX4wWKZRJ1tCzmWN
          claim_id: c_mHAiaUkbHUrb2pFVGjQU4m
          source_id: s_YveyGjMfpf5ygg95qt79kW
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

# 王元弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元弼 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元弼（CBDB 498116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498116&o=json)
