---
schema: wang-person/v1
id: p_pxsLeQ6oMGEE8B96sx5qgA
status: active
merged_into: null
display_name: 王元佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wgHwac1GBrKMaAf9kWaPf2
        subject_person_id: p_pxsLeQ6oMGEE8B96sx5qgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yohmc5P4Ho2ngciinAwU3R
          claim_id: c_wgHwac1GBrKMaAf9kWaPf2
          source_id: s_EGSMpPZEDg2Qegm78qNmtP
          stance: supports
          locator: CBDB:693424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693424）
          source: &a1
            id: s_EGSMpPZEDg2Qegm78qNmtP
            source_type: api_record
            title: 中国历代人物传记资料库：王元佐（CBDB 693424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693424&o=json
            external_identifier: CBDB:693424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2guYRXUZ9BM43sncY4dbfn
        subject_person_id: p_pxsLeQ6oMGEE8B96sx5qgA
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
        - id: cs_kN9z3ZMhP8ALi9FwUMa5EG
          claim_id: c_2guYRXUZ9BM43sncY4dbfn
          source_id: s_EGSMpPZEDg2Qegm78qNmtP
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

# 王元佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元佐（CBDB 693424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693424&o=json)
