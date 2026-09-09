---
schema: wang-person/v1
id: p_91zRRJot4Wj2zpToWL1Jwe
status: active
merged_into: null
display_name: 王廷賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5xFZS7F99oy3UWEvkvNHoe
        subject_person_id: p_91zRRJot4Wj2zpToWL1Jwe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oRKFfrzW9f8b6kZ5ZmL6wB
          claim_id: c_5xFZS7F99oy3UWEvkvNHoe
          source_id: s_YNgxSwufRudQo3YTzLi4nP
          stance: supports
          locator: CBDB:637567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637567）
          source: &a1
            id: s_YNgxSwufRudQo3YTzLi4nP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賢（CBDB 637567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637567&o=json
            external_identifier: CBDB:637567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1x35Y6dMFeq1aBdXPV4mwS
        subject_person_id: p_91zRRJot4Wj2zpToWL1Jwe
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
        - id: cs_pDADcQR9Cd11BXno9ej6fX
          claim_id: c_1x35Y6dMFeq1aBdXPV4mwS
          source_id: s_YNgxSwufRudQo3YTzLi4nP
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

# 王廷賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷賢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷賢（CBDB 637567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637567&o=json)
