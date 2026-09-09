---
schema: wang-person/v1
id: p_KgveivKC2tAaFmjxPKfPPt
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NtEWDsQJtbjsQqj4pjZKqQ
        subject_person_id: p_KgveivKC2tAaFmjxPKfPPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uvTCWCmNwQHVG5Kcbjir4u
          claim_id: c_NtEWDsQJtbjsQqj4pjZKqQ
          source_id: s_r8ZVgqQW6T6WCPngB91mpv
          stance: supports
          locator: CBDB:243555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243555）
          source: &a1
            id: s_r8ZVgqQW6T6WCPngB91mpv
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 243555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243555&o=json
            external_identifier: CBDB:243555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZVmRPDUP4x9ubtCXh4akGR
        subject_person_id: p_KgveivKC2tAaFmjxPKfPPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KY19fkhEYXJ71XJgcej2aX
          claim_id: c_ZVmRPDUP4x9ubtCXh4akGR
          source_id: s_r8ZVgqQW6T6WCPngB91mpv
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 243555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243555&o=json)
