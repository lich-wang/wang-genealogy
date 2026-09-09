---
schema: wang-person/v1
id: p_r9TG7jPErYDNAkQE8JGPtQ
status: active
merged_into: null
display_name: 王文範
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKFaX5wHFzPmkoJqofohQU
        subject_person_id: p_r9TG7jPErYDNAkQE8JGPtQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Hz6rwjh5VoPxDk3PMnPDA
          claim_id: c_HKFaX5wHFzPmkoJqofohQU
          source_id: s_ENbND1dBK1jwej2ctyjUf6
          stance: supports
          locator: CBDB:549247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549247）
          source: &a1
            id: s_ENbND1dBK1jwej2ctyjUf6
            source_type: api_record
            title: 中国历代人物传记资料库：王文範（CBDB 549247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549247&o=json
            external_identifier: CBDB:549247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c4Dg4wWxCm9mJYH67YEXn8
        subject_person_id: p_r9TG7jPErYDNAkQE8JGPtQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NJ82dCaMLUwKz5d75h6Np
          claim_id: c_c4Dg4wWxCm9mJYH67YEXn8
          source_id: s_ENbND1dBK1jwej2ctyjUf6
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

# 王文範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文範 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文範（CBDB 549247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549247&o=json)
