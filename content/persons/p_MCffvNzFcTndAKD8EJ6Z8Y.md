---
schema: wang-person/v1
id: p_MCffvNzFcTndAKD8EJ6Z8Y
status: active
merged_into: null
display_name: 王崇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBdioBhDAeKzYDbivcvbnq
        subject_person_id: p_MCffvNzFcTndAKD8EJ6Z8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VJDHiDqA3ydZR62E9hJjdH
          claim_id: c_gBdioBhDAeKzYDbivcvbnq
          source_id: s_5xW3pFZ3LiXZjiCjhWL6Kr
          stance: supports
          locator: CBDB:22059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22059）
          source: &a1
            id: s_5xW3pFZ3LiXZjiCjhWL6Kr
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 22059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22059&o=json
            external_identifier: CBDB:22059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7jWxXPpa8AQQ772aKUzD9B
        subject_person_id: p_MCffvNzFcTndAKD8EJ6Z8Y
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
        - id: cs_BXtX71j4DmnSHDr9SvJdap
          claim_id: c_7jWxXPpa8AQQ772aKUzD9B
          source_id: s_5xW3pFZ3LiXZjiCjhWL6Kr
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
        id: c_KX9DpeQAK8XhG7OfZg6rJc
        subject_person_id: p_rgVANp3U6o6Bm7dTjnMwgT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MCffvNzFcTndAKD8EJ6Z8Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uwIAXmTPBdWkpfvutKLS8j
          claim_id: c_KX9DpeQAK8XhG7OfZg6rJc
          source_id: s_5xW3pFZ3LiXZjiCjhWL6Kr
          stance: supports
          locator: CBDB 双向互证（父 王傑 ⇄ 子 王崇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_rgVANp3U6o6Bm7dTjnMwgT
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children:
    - claim:
        id: c_KlJqRykDgD3txoF8ZgJKR2
        subject_person_id: p_MCffvNzFcTndAKD8EJ6Z8Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9pzb9SHgZopgCnQ2EJxi5A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JIU8qShPKno73UD1CkdeW6
          claim_id: c_KlJqRykDgD3txoF8ZgJKR2
          source_id: s_tLa4DF2oxLmZKUC7HfnULK
          stance: supports
          locator: CBDB 双向互证（父 王崇 ⇄ 子 王景純）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tLa4DF2oxLmZKUC7HfnULK
            source_type: api_record
            title: 中国历代人物传记资料库：王景純（CBDB 22060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22060&o=json
            external_identifier: CBDB:22060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9pzb9SHgZopgCnQ2EJxi5A
        status: active
        display_name: 王景純
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rgVANp3U6o6Bm7dTjnMwgT | 王傑 | accepted |
| children | p_9pzb9SHgZopgCnQ2EJxi5A | 王景純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 22059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22059&o=json)
- [中国历代人物传记资料库：王景純（CBDB 22060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22060&o=json)
