---
schema: wang-person/v1
id: p_9CJKioZHiAeuLtx5BXiWKy
status: active
merged_into: null
display_name: 王守訥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fPBZv8WYDX5MfjPH95NE32
        subject_person_id: p_9CJKioZHiAeuLtx5BXiWKy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y3AxS7ddGstxDXPnCPekAv
          claim_id: c_fPBZv8WYDX5MfjPH95NE32
          source_id: s_iZvH18iTk8AydXEk55pAch
          stance: supports
          locator: CBDB:637073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637073）
          source: &a1
            id: s_iZvH18iTk8AydXEk55pAch
            source_type: api_record
            title: 中国历代人物传记资料库：王守訥（CBDB 637073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637073&o=json
            external_identifier: CBDB:637073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oVEsS1c2beBpaFxHGDwSPr
        subject_person_id: p_9CJKioZHiAeuLtx5BXiWKy
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
        - id: cs_CDonfGEnGbcMTTfznSQQeN
          claim_id: c_oVEsS1c2beBpaFxHGDwSPr
          source_id: s_iZvH18iTk8AydXEk55pAch
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

# 王守訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守訥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守訥（CBDB 637073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637073&o=json)
