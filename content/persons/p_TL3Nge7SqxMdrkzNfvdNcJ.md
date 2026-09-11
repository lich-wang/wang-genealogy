---
schema: wang-person/v1
id: p_TL3Nge7SqxMdrkzNfvdNcJ
status: active
merged_into: null
display_name: 王誨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q45k7FDByvT58h48qv5KXv
        subject_person_id: p_TL3Nge7SqxMdrkzNfvdNcJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KW2NcwxPVDPQ736FTy8J8E
          claim_id: c_Q45k7FDByvT58h48qv5KXv
          source_id: s_2H5U3kamyH9hETu4fUbEPL
          stance: supports
          locator: CBDB:17766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17766）
          source: &a1
            id: s_2H5U3kamyH9hETu4fUbEPL
            source_type: api_record
            title: 中国历代人物传记资料库：王誨（CBDB 17766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17766&o=json
            external_identifier: CBDB:17766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UimmXkZ167srRKx5LMBz2q
        subject_person_id: p_TL3Nge7SqxMdrkzNfvdNcJ
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
        - id: cs_dEGbAg3PGMRKB8H6Pfe3NZ
          claim_id: c_UimmXkZ167srRKx5LMBz2q
          source_id: s_2H5U3kamyH9hETu4fUbEPL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UJ3NkRWDx4TPPtv9KlIF8O
        subject_person_id: p_L19PHwgKSc3FpMQ79Hyn3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TL3Nge7SqxMdrkzNfvdNcJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KWTYI8cH8TWl3GYtjBwjKQ
          claim_id: c_UJ3NkRWDx4TPPtv9KlIF8O
          source_id: s_sFUBfNL3VboHruuAUoPsqc
          stance: supports
          locator: CBDB 双向互证（子 王誨 ⇄ 父 王克明）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_sFUBfNL3VboHruuAUoPsqc
            source_type: api_record
            title: 中国历代人物传记资料库：王克明（CBDB 17762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17762&o=json
            external_identifier: CBDB:17762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_L19PHwgKSc3FpMQ79Hyn3z
        status: active
        display_name: 王克明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誨 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L19PHwgKSc3FpMQ79Hyn3z | 王克明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誨（CBDB 17766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17766&o=json)
- [中国历代人物传记资料库：王克明（CBDB 17762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17762&o=json)
