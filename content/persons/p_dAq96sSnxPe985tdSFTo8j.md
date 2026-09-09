---
schema: wang-person/v1
id: p_dAq96sSnxPe985tdSFTo8j
status: active
merged_into: null
display_name: 王蘇氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kp4FcdTL6FqwpyWGArhygR
        subject_person_id: p_dAq96sSnxPe985tdSFTo8j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘇氏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m3tUrtdCmqV3GodbgPUV2N
          claim_id: c_kp4FcdTL6FqwpyWGArhygR
          source_id: s_5oGUK5yXTGjZnzms18nP28
          stance: supports
          locator: CBDB:555314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555314）
          source: &a1
            id: s_5oGUK5yXTGjZnzms18nP28
            source_type: api_record
            title: 中国历代人物传记资料库：王蘇氏（CBDB 555314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555314&o=json
            external_identifier: CBDB:555314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_spUF41cjo2QrXDACWQFN38
        subject_person_id: p_dAq96sSnxPe985tdSFTo8j
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
        - id: cs_kt9xYE7z99pTU44zhek5zF
          claim_id: c_spUF41cjo2QrXDACWQFN38
          source_id: s_5oGUK5yXTGjZnzms18nP28
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

# 王蘇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘇氏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘇氏（CBDB 555314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555314&o=json)
