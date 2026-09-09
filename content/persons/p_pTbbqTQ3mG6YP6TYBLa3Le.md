---
schema: wang-person/v1
id: p_pTbbqTQ3mG6YP6TYBLa3Le
status: active
merged_into: null
display_name: 王大謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vSx8ZeS67EX1Y5tLYuKDqd
        subject_person_id: p_pTbbqTQ3mG6YP6TYBLa3Le
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QhoxADz6Pg8N2qqcH1WV4H
          claim_id: c_vSx8ZeS67EX1Y5tLYuKDqd
          source_id: s_xyCC2sjmWG5NAe5sAydCAa
          stance: supports
          locator: CBDB:69095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69095）
          source: &a1
            id: s_xyCC2sjmWG5NAe5sAydCAa
            source_type: api_record
            title: 中国历代人物传记资料库：王大謨（CBDB 69095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69095&o=json
            external_identifier: CBDB:69095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qmBqY3tV2sCgzmVp9wF26k
        subject_person_id: p_pTbbqTQ3mG6YP6TYBLa3Le
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKKQ8QeTgHFm8HPP3F1cHo
          claim_id: c_qmBqY3tV2sCgzmVp9wF26k
          source_id: s_xyCC2sjmWG5NAe5sAydCAa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_73j3QAp1jQHTXv7ohJNBri
        subject_person_id: p_pTbbqTQ3mG6YP6TYBLa3Le
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
        - id: cs_hhmDrVst7PrM1SsRgS7eaj
          claim_id: c_73j3QAp1jQHTXv7ohJNBri
          source_id: s_xyCC2sjmWG5NAe5sAydCAa
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

# 王大謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大謨 | accepted |
| death.date | 1730年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大謨（CBDB 69095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69095&o=json)
