---
schema: wang-person/v1
id: p_V2hGTFefSFLQVWTx73Ciu4
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_587PckGxx36on9ZmFohNgQ
        subject_person_id: p_V2hGTFefSFLQVWTx73Ciu4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mKT9iGiKEAjGYxqUMrgXu4
          claim_id: c_587PckGxx36on9ZmFohNgQ
          source_id: s_dKKL1BJXnQFjm4LC487qLJ
          stance: supports
          locator: CBDB:69282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69282）
          source: &a1
            id: s_dKKL1BJXnQFjm4LC487qLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 69282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69282&o=json
            external_identifier: CBDB:69282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LjFNKMGwcUeXCYPCo3uHAg
        subject_person_id: p_V2hGTFefSFLQVWTx73Ciu4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1675年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dViELs43iA8DbB673Cjrpn
          claim_id: c_LjFNKMGwcUeXCYPCo3uHAg
          source_id: s_dKKL1BJXnQFjm4LC487qLJ
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
        id: c_PsAS6BJyb31Mx5WfSWr9DC
        subject_person_id: p_V2hGTFefSFLQVWTx73Ciu4
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
        - id: cs_9G6HQFFHQHNcFPMXy1QiRZ
          claim_id: c_PsAS6BJyb31Mx5WfSWr9DC
          source_id: s_dKKL1BJXnQFjm4LC487qLJ
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| death.date | 1675年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 69282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69282&o=json)
