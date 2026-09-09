---
schema: wang-person/v1
id: p_ShRgcGwJWKtCWigqyhUxLD
status: active
merged_into: null
display_name: 王承盈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PARLSEpCKSeW4XKebk6x9f
        subject_person_id: p_ShRgcGwJWKtCWigqyhUxLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承盈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K79o852bDsoN2CfLumZ69z
          claim_id: c_PARLSEpCKSeW4XKebk6x9f
          source_id: s_wkWjUM2Xn9AgAwpiTz5oNM
          stance: supports
          locator: CBDB:638097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638097）
          source: &a1
            id: s_wkWjUM2Xn9AgAwpiTz5oNM
            source_type: api_record
            title: 中国历代人物传记资料库：王承盈（CBDB 638097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638097&o=json
            external_identifier: CBDB:638097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dwiGTin9cXQGuHMF5tsGwa
        subject_person_id: p_ShRgcGwJWKtCWigqyhUxLD
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
        - id: cs_ruXiXBo2gVT64iTAT258d4
          claim_id: c_dwiGTin9cXQGuHMF5tsGwa
          source_id: s_wkWjUM2Xn9AgAwpiTz5oNM
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

# 王承盈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承盈 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承盈（CBDB 638097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638097&o=json)
