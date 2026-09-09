---
schema: wang-person/v1
id: p_Myk9nYTvg4RtEAbVhWh8Jg
status: active
merged_into: null
display_name: 王學曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WrYCn59SedDVwBGbiqfDs5
        subject_person_id: p_Myk9nYTvg4RtEAbVhWh8Jg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kRzsHT1xJ9MyQSA92NAXPU
          claim_id: c_WrYCn59SedDVwBGbiqfDs5
          source_id: s_MTw9rtBFqc4VijZW1j6hzP
          stance: supports
          locator: CBDB:576151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576151）
          source: &a1
            id: s_MTw9rtBFqc4VijZW1j6hzP
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 576151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576151&o=json
            external_identifier: CBDB:576151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vrftHx1AQFaX26NLc6JpU4
        subject_person_id: p_Myk9nYTvg4RtEAbVhWh8Jg
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
        - id: cs_oN1Z9KJUhJ3R3Eu7PrBZ5Q
          claim_id: c_vrftHx1AQFaX26NLc6JpU4
          source_id: s_MTw9rtBFqc4VijZW1j6hzP
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

# 王學曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學曾（CBDB 576151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576151&o=json)
