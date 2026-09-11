---
schema: wang-person/v1
id: p_y72uyAX7yZY1JjtdCjAJgF
status: active
merged_into: null
display_name: 王引孫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGsPaCM3vkfFoz3Je1GeDG
        subject_person_id: p_y72uyAX7yZY1JjtdCjAJgF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王引孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tHdBVLQRNW41jFjcuDJv5y
          claim_id: c_nGsPaCM3vkfFoz3Je1GeDG
          source_id: s_kjNdX2hB81xJKyb2sbumrB
          stance: supports
          locator: CBDB:637611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637611）
          source: &a1
            id: s_kjNdX2hB81xJKyb2sbumrB
            source_type: api_record
            title: 中国历代人物传记资料库：王引孫（CBDB 637611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637611&o=json
            external_identifier: CBDB:637611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wSGyyE6W5nGyHs8b5Z8QsG
        subject_person_id: p_y72uyAX7yZY1JjtdCjAJgF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王引孫，清人物。籍贯寧波府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637611）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8YgJUFWh2yU3DX6GVLSyOa
          claim_id: c_wSGyyE6W5nGyHs8b5Z8QsG
          source_id: s_kjNdX2hB81xJKyb2sbumrB
          stance: supports
          locator: CBDB:637611
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

# 王引孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王引孫 | accepted |
| bio.summary | 王引孫，清人物。籍贯寧波府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637611） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王引孫（CBDB 637611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637611&o=json)
