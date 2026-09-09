---
schema: wang-person/v1
id: p_5rppzxcAWagSR1b62BgR1U
status: active
merged_into: null
display_name: 王寧順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wtDgWmicB4zD4K6KRd2Su8
        subject_person_id: p_5rppzxcAWagSR1b62BgR1U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j5dQ69MLjCP5rKroRu81bD
          claim_id: c_wtDgWmicB4zD4K6KRd2Su8
          source_id: s_c56deLKsmLpKD4HBW5pBC4
          stance: supports
          locator: CBDB:637251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637251）
          source: &a1
            id: s_c56deLKsmLpKD4HBW5pBC4
            source_type: api_record
            title: 中国历代人物传记资料库：王寧順（CBDB 637251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637251&o=json
            external_identifier: CBDB:637251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kWvUcwkqWMJULPFNo1HpZG
        subject_person_id: p_5rppzxcAWagSR1b62BgR1U
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
        - id: cs_eQ914kCoA47N4hJHuzE3Ss
          claim_id: c_kWvUcwkqWMJULPFNo1HpZG
          source_id: s_c56deLKsmLpKD4HBW5pBC4
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

# 王寧順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧順 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寧順（CBDB 637251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637251&o=json)
