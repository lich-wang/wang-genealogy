---
schema: wang-person/v1
id: p_CkGggftk9dtqJ417Mrfatu
status: active
merged_into: null
display_name: 王來舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfH8ZUhbHPSeUr6GB5Jv3K
        subject_person_id: p_CkGggftk9dtqJ417Mrfatu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7WsxJhintPT1B2V5spfpk
          claim_id: c_MfH8ZUhbHPSeUr6GB5Jv3K
          source_id: s_Ni9DuJ5SaQz4cDvszef31K
          stance: supports
          locator: CBDB:471944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471944）
          source: &a1
            id: s_Ni9DuJ5SaQz4cDvszef31K
            source_type: api_record
            title: 中国历代人物传记资料库：王來舉（CBDB 471944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471944&o=json
            external_identifier: CBDB:471944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hA5myNP1Us63pYAUm2TLSn
        subject_person_id: p_CkGggftk9dtqJ417Mrfatu
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
        - id: cs_hKp1BoUpc9c5G6omeHAMVD
          claim_id: c_hA5myNP1Us63pYAUm2TLSn
          source_id: s_Ni9DuJ5SaQz4cDvszef31K
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

# 王來舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來舉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來舉（CBDB 471944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471944&o=json)
