---
schema: wang-person/v1
id: p_1mTarTAk9zCkFQA3N1M5JH
status: active
merged_into: null
display_name: 王可安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HCyLFcZuR1CAdgeWm4NUzc
        subject_person_id: p_1mTarTAk9zCkFQA3N1M5JH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ws2Sh3KgEkDSxGcqV86ytF
          claim_id: c_HCyLFcZuR1CAdgeWm4NUzc
          source_id: s_cyL4FGBj31KRJaJEFCE3bY
          stance: supports
          locator: CBDB:636480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636480）
          source: &a1
            id: s_cyL4FGBj31KRJaJEFCE3bY
            source_type: api_record
            title: 中国历代人物传记资料库：王可安（CBDB 636480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636480&o=json
            external_identifier: CBDB:636480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ccQXSoci3raaSCJg1PMcbb
        subject_person_id: p_1mTarTAk9zCkFQA3N1M5JH
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
        - id: cs_U8KRPPidTBhM5ie47vRJd4
          claim_id: c_ccQXSoci3raaSCJg1PMcbb
          source_id: s_cyL4FGBj31KRJaJEFCE3bY
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

# 王可安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可安 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可安（CBDB 636480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636480&o=json)
