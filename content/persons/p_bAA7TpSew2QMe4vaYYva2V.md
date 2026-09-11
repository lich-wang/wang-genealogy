---
schema: wang-person/v1
id: p_bAA7TpSew2QMe4vaYYva2V
status: active
merged_into: null
display_name: 王振輝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zLENV3uciHn3KW7PZEgYp
        subject_person_id: p_bAA7TpSew2QMe4vaYYva2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z1Z3c3r9wuy33yCaWs748b
          claim_id: c_8zLENV3uciHn3KW7PZEgYp
          source_id: s_2rousP44yZ7FJPSvcVRHKU
          stance: supports
          locator: CBDB:638132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638132）
          source: &a1
            id: s_2rousP44yZ7FJPSvcVRHKU
            source_type: api_record
            title: 中国历代人物传记资料库：王振輝（CBDB 638132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638132&o=json
            external_identifier: CBDB:638132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9SMNTVRrff8h1cG3Za3N9a
        subject_person_id: p_bAA7TpSew2QMe4vaYYva2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振輝，清人物。籍贯岳州府，曾任訓導。（中国历代人物传记资料库 CBDB 638132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XCev6MZu6LEo8RkXLKBGfg
          claim_id: c_9SMNTVRrff8h1cG3Za3N9a
          source_id: s_2rousP44yZ7FJPSvcVRHKU
          stance: supports
          locator: CBDB:638132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王振輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振輝 | accepted |
| bio.summary | 王振輝，清人物。籍贯岳州府，曾任訓導。（中国历代人物传记资料库 CBDB 638132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振輝（CBDB 638132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638132&o=json)
