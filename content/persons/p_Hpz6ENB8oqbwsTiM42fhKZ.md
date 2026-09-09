---
schema: wang-person/v1
id: p_Hpz6ENB8oqbwsTiM42fhKZ
status: active
merged_into: null
display_name: 王企
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_thGNYSqd3VJtS3ZgXDFCi3
        subject_person_id: p_Hpz6ENB8oqbwsTiM42fhKZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ck8DMiu3tBgs1rHvcmkjRe
          claim_id: c_thGNYSqd3VJtS3ZgXDFCi3
          source_id: s_4J93yvAbxQ3Dv45jTXjXGk
          stance: supports
          locator: CBDB:480385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480385）
          source: &a1
            id: s_4J93yvAbxQ3Dv45jTXjXGk
            source_type: api_record
            title: 中国历代人物传记资料库：王企（CBDB 480385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480385&o=json
            external_identifier: CBDB:480385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h65mhLxUrhMmBH9HxPtWpQ
        subject_person_id: p_Hpz6ENB8oqbwsTiM42fhKZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dZu2XrKXnBTPuG1V16NsiK
          claim_id: c_h65mhLxUrhMmBH9HxPtWpQ
          source_id: s_4J93yvAbxQ3Dv45jTXjXGk
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

# 王企

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王企 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王企（CBDB 480385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480385&o=json)
