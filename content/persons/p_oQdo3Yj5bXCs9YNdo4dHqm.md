---
schema: wang-person/v1
id: p_oQdo3Yj5bXCs9YNdo4dHqm
status: active
merged_into: null
display_name: 王光祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ua4LWoRWkyYC6QCDm2Ho9m
        subject_person_id: p_oQdo3Yj5bXCs9YNdo4dHqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJRRJCf6mDGHXnbsUMDCEp
          claim_id: c_Ua4LWoRWkyYC6QCDm2Ho9m
          source_id: s_7y6SJqg5PmKgQMuECcxKDg
          stance: supports
          locator: CBDB:17437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17437）
          source: &a1
            id: s_7y6SJqg5PmKgQMuECcxKDg
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 17437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17437&o=json
            external_identifier: CBDB:17437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_658MnP8TGDS7B33EnDShgm
        subject_person_id: p_oQdo3Yj5bXCs9YNdo4dHqm
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
        - id: cs_UCTzLWTZJMmw2mTcYD7RLz
          claim_id: c_658MnP8TGDS7B33EnDShgm
          source_id: s_7y6SJqg5PmKgQMuECcxKDg
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
  ancestors:
    - claim:
        id: c_d91tEQpk9t0fgVgcb64rJ_
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQdo3Yj5bXCs9YNdo4dHqm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9VRtEkywb9r60J3PqIvqCo
          claim_id: c_d91tEQpk9t0fgVgcb64rJ_
          source_id: s_7y6SJqg5PmKgQMuECcxKDg
          stance: supports
          locator: CBDB 双向互证（祖父 王异 ⇄ 孫 王光祖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 17437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17437&o=json)
