---
schema: wang-person/v1
id: p_bLfo4gwEuQmX4Zh731z8HM
status: active
merged_into: null
display_name: 王壬垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJ8bya2AqN1Wsi7MyY9QNF
        subject_person_id: p_bLfo4gwEuQmX4Zh731z8HM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壬垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bV38HEhqCUX8ruzKNiEMDM
          claim_id: c_UJ8bya2AqN1Wsi7MyY9QNF
          source_id: s_GK2obQjFrf2NcQicAN2Tw7
          stance: supports
          locator: CBDB:636831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636831）
          source: &a1
            id: s_GK2obQjFrf2NcQicAN2Tw7
            source_type: api_record
            title: 中国历代人物传记资料库：王壬垣（CBDB 636831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636831&o=json
            external_identifier: CBDB:636831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zzXK312o694juqbgjLtGAc
        subject_person_id: p_bLfo4gwEuQmX4Zh731z8HM
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
        - id: cs_fvRLCMJcAn3tiNnYLDRJdZ
          claim_id: c_zzXK312o694juqbgjLtGAc
          source_id: s_GK2obQjFrf2NcQicAN2Tw7
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

# 王壬垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壬垣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壬垣（CBDB 636831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636831&o=json)
