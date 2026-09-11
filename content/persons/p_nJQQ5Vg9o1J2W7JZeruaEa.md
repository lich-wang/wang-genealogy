---
schema: wang-person/v1
id: p_nJQQ5Vg9o1J2W7JZeruaEa
status: active
merged_into: null
display_name: 王簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ramzEfwV755PaaBtXaNkmA
        subject_person_id: p_nJQQ5Vg9o1J2W7JZeruaEa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqczTs4VjntnVXs6P76PyY
          claim_id: c_ramzEfwV755PaaBtXaNkmA
          source_id: s_7Q97QTocjWpT6LxnfbmTUV
          stance: supports
          locator: CBDB:61571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61571）
          source: &a1
            id: s_7Q97QTocjWpT6LxnfbmTUV
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 61571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61571&o=json
            external_identifier: CBDB:61571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BdDwjP2ZoM6dbLAPE5F12d
        subject_person_id: p_nJQQ5Vg9o1J2W7JZeruaEa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡，清人物。明清進士進士，籍贯安邱，入仕進士，曾任布政使、按察使。（中国历代人物传记资料库 CBDB 61571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6wG4W0P2YJilUhQFzwRtb-
          claim_id: c_BdDwjP2ZoM6dbLAPE5F12d
          source_id: s_7Q97QTocjWpT6LxnfbmTUV
          stance: supports
          locator: CBDB:61571
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

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | 王簡，清人物。明清進士進士，籍贯安邱，入仕進士，曾任布政使、按察使。（中国历代人物传记资料库 CBDB 61571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 61571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61571&o=json)
