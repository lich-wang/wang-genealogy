---
schema: wang-person/v1
id: p_6cisLRAfmkNHKANVGLVFNG
status: active
merged_into: null
display_name: 王牗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_48cvKTdZ1aMBvg3RfcJGZE
        subject_person_id: p_6cisLRAfmkNHKANVGLVFNG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZayZ7QuzqMV8WTpp3sfSMZ
          claim_id: c_48cvKTdZ1aMBvg3RfcJGZE
          source_id: s_6XuX76Rms5nQo3Hqd5qnRT
          stance: supports
          locator: CBDB:639361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639361）
          source: &a1
            id: s_6XuX76Rms5nQo3Hqd5qnRT
            source_type: api_record
            title: 中国历代人物传记资料库：王牗（CBDB 639361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639361&o=json
            external_identifier: CBDB:639361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EvZQwkfVm9no9ByMxkehXD
        subject_person_id: p_6cisLRAfmkNHKANVGLVFNG
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
        - id: cs_snAHC1L2JNyyeUuQQyBsDF
          claim_id: c_EvZQwkfVm9no9ByMxkehXD
          source_id: s_6XuX76Rms5nQo3Hqd5qnRT
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

# 王牗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牗 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王牗（CBDB 639361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639361&o=json)
