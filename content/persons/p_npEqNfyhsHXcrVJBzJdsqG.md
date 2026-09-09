---
schema: wang-person/v1
id: p_npEqNfyhsHXcrVJBzJdsqG
status: active
merged_into: null
display_name: 王祖武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_37B1S7ukWcGmJGMYimy3KN
        subject_person_id: p_npEqNfyhsHXcrVJBzJdsqG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nM8ez16P7gQn87iYBA3b7R
          claim_id: c_37B1S7ukWcGmJGMYimy3KN
          source_id: s_nzQsPo2ocHASLzBCCeXEEZ
          stance: supports
          locator: CBDB:71919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71919）
          source: &a1
            id: s_nzQsPo2ocHASLzBCCeXEEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王祖武（CBDB 71919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71919&o=json
            external_identifier: CBDB:71919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ABbGCyu99NxBCz8QJDKKZK
        subject_person_id: p_npEqNfyhsHXcrVJBzJdsqG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1758年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMgaBfFx4rb9Jtv7E4UJAS
          claim_id: c_ABbGCyu99NxBCz8QJDKKZK
          source_id: s_nzQsPo2ocHASLzBCCeXEEZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JTJGj8uRViP3o4pN4G7FXH
        subject_person_id: p_npEqNfyhsHXcrVJBzJdsqG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6N9Ahn92eSAeQXFE1DJijt
          claim_id: c_JTJGj8uRViP3o4pN4G7FXH
          source_id: s_nzQsPo2ocHASLzBCCeXEEZ
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
        id: c_CczVszCa57nQbEw1KPAqKm
        subject_person_id: p_npEqNfyhsHXcrVJBzJdsqG
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
        - id: cs_w6Ejb3sacScLvvgQqj6nZ6
          claim_id: c_CczVszCa57nQbEw1KPAqKm
          source_id: s_nzQsPo2ocHASLzBCCeXEEZ
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

# 王祖武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖武 | accepted |
| birth.date | 1758年 | accepted |
| death.date | 1802年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖武（CBDB 71919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71919&o=json)
