---
schema: wang-person/v1
id: p_3WsfVVB2kcuCXMvUVPJeuG
status: active
merged_into: null
display_name: 王殷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJjqfDjzY8zw7Pvb8GHmMD
        subject_person_id: p_3WsfVVB2kcuCXMvUVPJeuG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ad8PMZsNNBEPAVZ4jcLHEA
          claim_id: c_zJjqfDjzY8zw7Pvb8GHmMD
          source_id: s_Rsz9UmNyr6ZSodvQUz2vQp
          stance: supports
          locator: CBDB:30872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30872）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thU6ifyorgs2ShzWP5LHiy
        subject_person_id: p_3WsfVVB2kcuCXMvUVPJeuG
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
        - id: cs_La1opfzbSEDUGtLkDGjUMB
          claim_id: c_thU6ifyorgs2ShzWP5LHiy
          source_id: s_Rsz9UmNyr6ZSodvQUz2vQp
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
          source: *a1
      object_person:
        id: p_Cf4DeqbmDMMNTQmvW5HBk9
        status: active
        display_name: 王實
        merged_into_person_id: null
    - claim:
        id: c_h42fP5rHoDS1yq7c95KHk_
        subject_person_id: p_3WsfVVB2kcuCXMvUVPJeuG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tk5GzYutt2xEFaw3NUZYNB
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7U3kUtXzOtZhbOrH8oHEA
          claim_id: c_h42fP5rHoDS1yq7c95KHk_
          source_id: s_Rsz9UmNyr6ZSodvQUz2vQp
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王述 ⇄ 高祖;四世祖 王殷）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_tk5GzYutt2xEFaw3NUZYNB
        status: active
        display_name: 王述
        merged_into_person_id: null
  other: []
---

# 王殷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殷 | accepted |
| bio.summary | CBDB 记载为東漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Cf4DeqbmDMMNTQmvW5HBk9 | 王實 | accepted |
| descendants | p_tk5GzYutt2xEFaw3NUZYNB | 王述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王殷（CBDB 30872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30872&o=json)
