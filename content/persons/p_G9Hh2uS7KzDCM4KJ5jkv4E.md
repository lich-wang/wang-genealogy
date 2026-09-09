---
schema: wang-person/v1
id: p_G9Hh2uS7KzDCM4KJ5jkv4E
status: active
merged_into: null
display_name: 王觀振
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RuceMxgk7G7HQrPRyVSMGq
        subject_person_id: p_G9Hh2uS7KzDCM4KJ5jkv4E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_juMhC1m4Qi2Jj3HCuy4oyG
          claim_id: c_RuceMxgk7G7HQrPRyVSMGq
          source_id: s_5iNWCpUmASLsw5u2Wtwo6A
          stance: supports
          locator: CBDB:640251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640251）
          source: &a1
            id: s_5iNWCpUmASLsw5u2Wtwo6A
            source_type: api_record
            title: 中国历代人物传记资料库：王觀振（CBDB 640251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640251&o=json
            external_identifier: CBDB:640251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tRVyBVModDGBR8LQ9W4SjE
        subject_person_id: p_G9Hh2uS7KzDCM4KJ5jkv4E
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
        - id: cs_uv7xK5SXCjakiGy84yi1CR
          claim_id: c_tRVyBVModDGBR8LQ9W4SjE
          source_id: s_5iNWCpUmASLsw5u2Wtwo6A
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

# 王觀振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀振 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀振（CBDB 640251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640251&o=json)
