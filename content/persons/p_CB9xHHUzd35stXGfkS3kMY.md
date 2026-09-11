---
schema: wang-person/v1
id: p_CB9xHHUzd35stXGfkS3kMY
status: active
merged_into: null
display_name: 王溱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FkuKPyr8guwFf9H37SWpUF
        subject_person_id: p_CB9xHHUzd35stXGfkS3kMY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_whZTbsLX9LsanKjcfa8JGV
          claim_id: c_FkuKPyr8guwFf9H37SWpUF
          source_id: s_8mufRGan1jvwg2S8pJEpHB
          stance: supports
          locator: CBDB:639192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639192）
          source: &a1
            id: s_8mufRGan1jvwg2S8pJEpHB
            source_type: api_record
            title: 中国历代人物传记资料库：王溱（CBDB 639192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639192&o=json
            external_identifier: CBDB:639192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eLBRc9LzHLUBSVbFfwMCoY
        subject_person_id: p_CB9xHHUzd35stXGfkS3kMY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溱，清人物。籍贯福州府，入仕鄉貢舉人，曾任復設訓導、復設教諭。（中国历代人物传记资料库 CBDB 639192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o-i0vVzKnpP1wy7qN4rvwU
          claim_id: c_eLBRc9LzHLUBSVbFfwMCoY
          source_id: s_8mufRGan1jvwg2S8pJEpHB
          stance: supports
          locator: CBDB:639192
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

# 王溱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溱 | accepted |
| bio.summary | 王溱，清人物。籍贯福州府，入仕鄉貢舉人，曾任復設訓導、復設教諭。（中国历代人物传记资料库 CBDB 639192） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溱（CBDB 639192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639192&o=json)
