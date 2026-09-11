---
schema: wang-person/v1
id: p_r73GTo7UVW9pWB8GCQAYS8
status: active
merged_into: null
display_name: 王天麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YkNu67nJ2816QzYGJKhBt3
        subject_person_id: p_r73GTo7UVW9pWB8GCQAYS8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V3Md7PvBhXvgvcYsEzbwYe
          claim_id: c_YkNu67nJ2816QzYGJKhBt3
          source_id: s_4tjzqbdW8w6yPNJV1QdmJW
          stance: supports
          locator: CBDB:543090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543090）
          source: &a1
            id: s_4tjzqbdW8w6yPNJV1QdmJW
            source_type: api_record
            title: 中国历代人物传记资料库：王天麟（CBDB 543090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543090&o=json
            external_identifier: CBDB:543090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lu1CBWeAHK4mMwE5DnuT2X
        subject_person_id: p_r73GTo7UVW9pWB8GCQAYS8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天麟，宋人物。籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 543090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U6pNSrwaS1OA6PrI4MDTwI
          claim_id: c_Lu1CBWeAHK4mMwE5DnuT2X
          source_id: s_4tjzqbdW8w6yPNJV1QdmJW
          stance: supports
          locator: CBDB:543090
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

# 王天麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天麟 | accepted |
| bio.summary | 王天麟，宋人物。籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 543090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天麟（CBDB 543090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543090&o=json)
