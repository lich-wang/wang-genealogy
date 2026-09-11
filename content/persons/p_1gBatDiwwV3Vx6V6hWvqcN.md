---
schema: wang-person/v1
id: p_1gBatDiwwV3Vx6V6hWvqcN
status: active
merged_into: null
display_name: 王寄岩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UEuV9N3JDoNtGBQzAn6k7w
        subject_person_id: p_1gBatDiwwV3Vx6V6hWvqcN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寄岩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3GnH6UjXT5acXZycXM5BVN
          claim_id: c_UEuV9N3JDoNtGBQzAn6k7w
          source_id: s_yLZrmmSWjqK7PKLCsBm2BA
          stance: supports
          locator: CBDB:566437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566437）
          source: &a1
            id: s_yLZrmmSWjqK7PKLCsBm2BA
            source_type: api_record
            title: 中国历代人物传记资料库：王寄岩（CBDB 566437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566437&o=json
            external_identifier: CBDB:566437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fK5Jv4Uj7Apvh2Y5C2grP5
        subject_person_id: p_1gBatDiwwV3Vx6V6hWvqcN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寄岩，明人物。籍贯長沙。（中国历代人物传记资料库 CBDB 566437）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9RmckQghE1NT5BKDP752rf
          claim_id: c_fK5Jv4Uj7Apvh2Y5C2grP5
          source_id: s_yLZrmmSWjqK7PKLCsBm2BA
          stance: supports
          locator: CBDB:566437
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

# 王寄岩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寄岩 | accepted |
| bio.summary | 王寄岩，明人物。籍贯長沙。（中国历代人物传记资料库 CBDB 566437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寄岩（CBDB 566437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566437&o=json)
