---
schema: wang-person/v1
id: p_476jrDJS3QanVD7fC4Q4CZ
status: active
merged_into: null
display_name: 王克愛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wKToJJ4ZBAjepTLvNFzKYM
        subject_person_id: p_476jrDJS3QanVD7fC4Q4CZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_isdai9FXjJdhCV5BRqqxac
          claim_id: c_wKToJJ4ZBAjepTLvNFzKYM
          source_id: s_b9GNrLnB3rdogPrK44CGZs
          stance: supports
          locator: CBDB:579162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（579162）
          source: &a1
            id: s_b9GNrLnB3rdogPrK44CGZs
            source_type: api_record
            title: 中国历代人物传记资料库：王克愛（CBDB 579162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579162&o=json
            external_identifier: CBDB:579162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cg6XjwkGBGunpRLn8vJCza
        subject_person_id: p_476jrDJS3QanVD7fC4Q4CZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1899年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oSWABf1pvZkLbuTu4adEPT
          claim_id: c_cg6XjwkGBGunpRLn8vJCza
          source_id: s_b9GNrLnB3rdogPrK44CGZs
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
        id: c_MrFw3u2JLG46TJkHQNuPf5
        subject_person_id: p_476jrDJS3QanVD7fC4Q4CZ
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
        - id: cs_doT3MWJhfd5Kfd2yD7eQSF
          claim_id: c_MrFw3u2JLG46TJkHQNuPf5
          source_id: s_b9GNrLnB3rdogPrK44CGZs
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

# 王克愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克愛 | accepted |
| birth.date | 1899年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克愛（CBDB 579162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579162&o=json)
