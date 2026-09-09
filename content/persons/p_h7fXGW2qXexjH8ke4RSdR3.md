---
schema: wang-person/v1
id: p_h7fXGW2qXexjH8ke4RSdR3
status: active
merged_into: null
display_name: 王金
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rA6yAxgCJLgs2GZxF299At
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uunpX1Bw4QsuFGQ8fJyQTL
          claim_id: c_rA6yAxgCJLgs2GZxF299At
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
          stance: supports
          locator: CBDB:201798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201798）
          source: &a1
            id: s_YKx1VJJuWVzR7HUsm6D4ou
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 201798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201798&o=json
            external_identifier: CBDB:201798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2ZDG4CPPKvG438gPvvCd75
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BGgeNpAhPJc83Von4skFmK
          claim_id: c_2ZDG4CPPKvG438gPvvCd75
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5rzFXgpW431T62TtZ5Ba1
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
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
        - id: cs_RySDnjn3nKaAz5FfzmkhBU
          claim_id: c_Z5rzFXgpW431T62TtZ5Ba1
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
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

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 201798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201798&o=json)
