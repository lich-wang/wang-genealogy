---
schema: wang-person/v1
id: p_JGq87aHe6T2sf8Kup2KqXP
status: active
merged_into: null
display_name: 王勲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YYjAaEz7kmegSJm91y7TC5
        subject_person_id: p_JGq87aHe6T2sf8Kup2KqXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hGrV3jKsGQ3MFv6YP9UZBR
          claim_id: c_YYjAaEz7kmegSJm91y7TC5
          source_id: s_17238cCMHwGPWwr6EQJkAK
          stance: supports
          locator: CBDB:489197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489197）
          source: &a1
            id: s_17238cCMHwGPWwr6EQJkAK
            source_type: api_record
            title: 中国历代人物传记资料库：王勲（CBDB 489197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489197&o=json
            external_identifier: CBDB:489197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_89A4favmGjdAbq5aft2jYE
        subject_person_id: p_JGq87aHe6T2sf8Kup2KqXP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w8A916Qp6jkt4hSFJ7xJGt
          claim_id: c_89A4favmGjdAbq5aft2jYE
          source_id: s_17238cCMHwGPWwr6EQJkAK
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

# 王勲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勲（CBDB 489197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489197&o=json)
