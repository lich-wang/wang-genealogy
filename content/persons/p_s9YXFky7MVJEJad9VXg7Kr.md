---
schema: wang-person/v1
id: p_s9YXFky7MVJEJad9VXg7Kr
status: active
merged_into: null
display_name: 王逖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rBUmhPza1YNuMshiwR584j
        subject_person_id: p_s9YXFky7MVJEJad9VXg7Kr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nfP3KDR11aQdCzDV2dkSGr
          claim_id: c_rBUmhPza1YNuMshiwR584j
          source_id: s_Dd2sXuL2jMqibXq57iQeMZ
          stance: supports
          locator: CBDB:35034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35034）
          source: &a1
            id: s_Dd2sXuL2jMqibXq57iQeMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王逖（CBDB 35034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35034&o=json
            external_identifier: CBDB:35034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76hkZLfzM4VuFeifxAQJLu
        subject_person_id: p_s9YXFky7MVJEJad9VXg7Kr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4QagR75qFAu4kdtSHsER6z
          claim_id: c_76hkZLfzM4VuFeifxAQJLu
          source_id: s_Dd2sXuL2jMqibXq57iQeMZ
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
  descendants:
    - claim:
        id: c_zPZIhyGPRF73UGJsiTL5As
        subject_person_id: p_s9YXFky7MVJEJad9VXg7Kr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mr7WL1H5XRA2PNx82Aovox
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_joX8o53lEf0M4KDZcqhA
          claim_id: c_zPZIhyGPRF73UGJsiTL5As
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: CBDB 双向互证（祖父 王逖 ⇄ 孫 王結）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Pnf3TH57yK75Bz5FGF69ej
            source_type: api_record
            title: 中国历代人物传记资料库：王結（CBDB 35033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35033&o=json
            external_identifier: CBDB:35033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mr7WL1H5XRA2PNx82Aovox
        status: active
        display_name: 王結
        merged_into_person_id: null
  other: []
---

# 王逖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逖 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mr7WL1H5XRA2PNx82Aovox | 王結 | accepted |

## 外部来源

- [中国历代人物传记资料库：王結（CBDB 35033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35033&o=json)
- [中国历代人物传记资料库：王逖（CBDB 35034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35034&o=json)
