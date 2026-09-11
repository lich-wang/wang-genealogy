---
schema: wang-person/v1
id: p_Cf4DeqbmDMMNTQmvW5HBk9
status: active
merged_into: null
display_name: 王實
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JUDgyWp3QHkZgtvRxFhKuR
        subject_person_id: p_Cf4DeqbmDMMNTQmvW5HBk9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iN7NRVTJNBxSXkBT9QKixo
          claim_id: c_JUDgyWp3QHkZgtvRxFhKuR
          source_id: s_FQBgc8zUrfVq174sPH9VvP
          stance: supports
          locator: CBDB:33006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33006）
          source: &a1
            id: s_FQBgc8zUrfVq174sPH9VvP
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 33006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33006&o=json
            external_identifier: CBDB:33006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q5GK5GNp6SAB2RneZcDwjc
        subject_person_id: p_Cf4DeqbmDMMNTQmvW5HBk9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为東漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKypRHQZWsRMZvSG6qNZ9J
          claim_id: c_q5GK5GNp6SAB2RneZcDwjc
          source_id: s_FQBgc8zUrfVq174sPH9VvP
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
        id: c_Rw77O10ZdQX9hmi8MpW0R2
        subject_person_id: p_3WsfVVB2kcuCXMvUVPJeuG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Cf4DeqbmDMMNTQmvW5HBk9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VOrv0EPgBnEDHHX1PYsgcv
          claim_id: c_Rw77O10ZdQX9hmi8MpW0R2
          source_id: s_Rsz9UmNyr6ZSodvQUz2vQp
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王實 ⇄ 曾祖 王殷）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Rsz9UmNyr6ZSodvQUz2vQp
            source_type: api_record
            title: 中国历代人物传记资料库：王殷（CBDB 30872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30872&o=json
            external_identifier: CBDB:30872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3WsfVVB2kcuCXMvUVPJeuG
        status: active
        display_name: 王殷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | CBDB 记载为東漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3WsfVVB2kcuCXMvUVPJeuG | 王殷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 33006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33006&o=json)
- [中国历代人物传记资料库：王殷（CBDB 30872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30872&o=json)
