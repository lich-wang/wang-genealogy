---
schema: wang-person/v1
id: p_HFc4i7ostWTJALk17wFMxu
status: active
merged_into: null
display_name: 王興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCuJ3kc6vQ9ES99NP66puo
        subject_person_id: p_HFc4i7ostWTJALk17wFMxu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PBRJZ16K5D7WcXFNFWTX8q
          claim_id: c_LCuJ3kc6vQ9ES99NP66puo
          source_id: s_jv4eL43nqDrFS7xoLyjpfe
          stance: supports
          locator: CBDB:303240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303240）
          source: &a1
            id: s_jv4eL43nqDrFS7xoLyjpfe
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 303240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303240&o=json
            external_identifier: CBDB:303240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WgLyGZ41xpFSCM4xMQGJMF
        subject_person_id: p_HFc4i7ostWTJALk17wFMxu
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
        - id: cs_dRSEkczfm1SvQ1dnN53dgA
          claim_id: c_WgLyGZ41xpFSCM4xMQGJMF
          source_id: s_jv4eL43nqDrFS7xoLyjpfe
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

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 303240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303240&o=json)
