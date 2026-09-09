---
schema: wang-person/v1
id: p_C6bjLHSAeHHQGuDzPtzHHm
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FyyNUocH8SgzCP6ZJDaWuF
        subject_person_id: p_C6bjLHSAeHHQGuDzPtzHHm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LGKzRG74tF278DBNyyLEwR
          claim_id: c_FyyNUocH8SgzCP6ZJDaWuF
          source_id: s_iV7KcSY6Aw2qG11P2mG7Sj
          stance: supports
          locator: CBDB:198814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198814）
          source: &a1
            id: s_iV7KcSY6Aw2qG11P2mG7Sj
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 198814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198814&o=json
            external_identifier: CBDB:198814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P9XzkgVEqA7PTCeWgsGH3b
        subject_person_id: p_C6bjLHSAeHHQGuDzPtzHHm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qmjdgiFZYNLH6WB4L5eQD
          claim_id: c_P9XzkgVEqA7PTCeWgsGH3b
          source_id: s_iV7KcSY6Aw2qG11P2mG7Sj
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
        id: c_LAdNLYKMQ7QoMzN8PPiEvr
        subject_person_id: p_C6bjLHSAeHHQGuDzPtzHHm
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
        - id: cs_G1uerKhxfbyFsEb3c68sGs
          claim_id: c_LAdNLYKMQ7QoMzN8PPiEvr
          source_id: s_iV7KcSY6Aw2qG11P2mG7Sj
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 198814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198814&o=json)
