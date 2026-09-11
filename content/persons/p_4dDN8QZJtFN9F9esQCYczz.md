---
schema: wang-person/v1
id: p_4dDN8QZJtFN9F9esQCYczz
status: active
merged_into: null
display_name: 王星慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1X64d68TPJzLVFBvPrYVU
        subject_person_id: p_4dDN8QZJtFN9F9esQCYczz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JvQHNS5F6p8QHv7gEZ69yU
          claim_id: c_W1X64d68TPJzLVFBvPrYVU
          source_id: s_GiGyMQcECuSUfoe7KhNnVf
          stance: supports
          locator: CBDB:638400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638400）
          source: &a1
            id: s_GiGyMQcECuSUfoe7KhNnVf
            source_type: api_record
            title: 中国历代人物传记资料库：王星慶（CBDB 638400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638400&o=json
            external_identifier: CBDB:638400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kVVGt9y1yn3zj51aRGxZ4Y
        subject_person_id: p_4dDN8QZJtFN9F9esQCYczz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星慶，清人物。籍贯杭州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TEtmIGMM9sKXCkDuRzcvMA
          claim_id: c_kVVGt9y1yn3zj51aRGxZ4Y
          source_id: s_GiGyMQcECuSUfoe7KhNnVf
          stance: supports
          locator: CBDB:638400
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

# 王星慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星慶 | accepted |
| bio.summary | 王星慶，清人物。籍贯杭州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王星慶（CBDB 638400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638400&o=json)
