---
schema: wang-person/v1
id: p_nVVq4MzGkhJQverhK7Ezfm
status: active
merged_into: null
display_name: 王鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_52m5Wz6kc1gQmm5gnMCmHj
        subject_person_id: p_nVVq4MzGkhJQverhK7Ezfm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pfn37WEcmHECr5SWHTiTCz
          claim_id: c_52m5Wz6kc1gQmm5gnMCmHj
          source_id: s_GprPgeoC4FgkpuBndXWZfU
          stance: supports
          locator: CBDB:466652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466652）
          source: &a1
            id: s_GprPgeoC4FgkpuBndXWZfU
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻（CBDB 466652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466652&o=json
            external_identifier: CBDB:466652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CKhFycnc68AVQQ6JAtqeK5
        subject_person_id: p_nVVq4MzGkhJQverhK7Ezfm
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
        - id: cs_xJUiz4p4nv7GaCRCN7cAGj
          claim_id: c_CKhFycnc68AVQQ6JAtqeK5
          source_id: s_GprPgeoC4FgkpuBndXWZfU
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

# 王鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻（CBDB 466652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466652&o=json)
