---
schema: wang-person/v1
id: p_ZMKmNF4DcF1TEszw7CEs7o
status: active
merged_into: null
display_name: 王應麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GsDPoxQb8zF7dseMn6UAx2
        subject_person_id: p_ZMKmNF4DcF1TEszw7CEs7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hkJSGNX7xA5XoYsj9pzk9j
          claim_id: c_GsDPoxQb8zF7dseMn6UAx2
          source_id: s_udkaVtu3Ejf2XbmdRmNqbH
          stance: supports
          locator: CBDB:465541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465541）
          source: &a1
            id: s_udkaVtu3Ejf2XbmdRmNqbH
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 465541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465541&o=json
            external_identifier: CBDB:465541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sSAvEn3BRK1NrvTr6zEDt4
        subject_person_id: p_ZMKmNF4DcF1TEszw7CEs7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟，明人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 465541）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iYWTPKY4x57hEEzGzTu009
          claim_id: c_sSAvEn3BRK1NrvTr6zEDt4
          source_id: s_udkaVtu3Ejf2XbmdRmNqbH
          stance: supports
          locator: CBDB:465541
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

# 王應麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應麟 | accepted |
| bio.summary | 王應麟，明人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 465541） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應麟（CBDB 465541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465541&o=json)
