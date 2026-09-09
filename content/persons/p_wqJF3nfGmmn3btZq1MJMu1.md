---
schema: wang-person/v1
id: p_wqJF3nfGmmn3btZq1MJMu1
status: active
merged_into: null
display_name: 王迺槃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g9HAHhmDnMmU4Qhrh8Kjzc
        subject_person_id: p_wqJF3nfGmmn3btZq1MJMu1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺槃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNvtaXq2cPjhQS2SvPJy6a
          claim_id: c_g9HAHhmDnMmU4Qhrh8Kjzc
          source_id: s_TtSQGjJJ4wUPJpN5JYg23W
          stance: supports
          locator: CBDB:637601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637601）
          source: &a1
            id: s_TtSQGjJJ4wUPJpN5JYg23W
            source_type: api_record
            title: 中国历代人物传记资料库：王迺槃（CBDB 637601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637601&o=json
            external_identifier: CBDB:637601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQuWtrUmBnYGU9ARNyrKgv
        subject_person_id: p_wqJF3nfGmmn3btZq1MJMu1
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
        - id: cs_7kZm8zCSiSCZPJQGX7sLiu
          claim_id: c_QQuWtrUmBnYGU9ARNyrKgv
          source_id: s_TtSQGjJJ4wUPJpN5JYg23W
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

# 王迺槃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迺槃 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迺槃（CBDB 637601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637601&o=json)
