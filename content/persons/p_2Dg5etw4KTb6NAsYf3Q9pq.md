---
schema: wang-person/v1
id: p_2Dg5etw4KTb6NAsYf3Q9pq
status: active
merged_into: null
display_name: 王起
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_35Ey4uGaiWuYXqHfDiwtHL
        subject_person_id: p_2Dg5etw4KTb6NAsYf3Q9pq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mhJACjjgxJjXT96vta8pNu
          claim_id: c_35Ey4uGaiWuYXqHfDiwtHL
          source_id: s_33dVvc9DYWZt1BLBqJNcdy
          stance: supports
          locator: CBDB:26644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26644）
          source: &a1
            id: s_33dVvc9DYWZt1BLBqJNcdy
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 26644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26644&o=json
            external_identifier: CBDB:26644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T24f4ps6Gzhsg7znggs4AQ
        subject_person_id: p_2Dg5etw4KTb6NAsYf3Q9pq
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
        - id: cs_kReKwrAPDR8eaqztEe1a8F
          claim_id: c_T24f4ps6Gzhsg7znggs4AQ
          source_id: s_33dVvc9DYWZt1BLBqJNcdy
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
        id: c_CyEVyg9UpBa8pVSizrdnp9
        subject_person_id: p_KWKcuxuCsVJSzxDy5w7Jom
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Dg5etw4KTb6NAsYf3Q9pq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6JMTpfXrvBGr1pvZcOBeu4
          claim_id: c_CyEVyg9UpBa8pVSizrdnp9
          source_id: s_33dVvc9DYWZt1BLBqJNcdy
          stance: supports
          locator: CBDB 双向互证（父 王淮 ⇄ 子 王起）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KWKcuxuCsVJSzxDy5w7Jom
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children:
    - claim:
        id: c_2DbIScLWlOBO6bLXDvklra
        subject_person_id: p_2Dg5etw4KTb6NAsYf3Q9pq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Lgirh8tCkhjbetAZ9DFZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZAuESBuuNRjX_T0-kXyWLR
          claim_id: c_2DbIScLWlOBO6bLXDvklra
          source_id: s_33dVvc9DYWZt1BLBqJNcdy
          stance: supports
          locator: CBDB 双向互证（子 王仲儒 ⇄ 父 王起）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_3Lgirh8tCkhjbetAZ9DFZ4
        status: active
        display_name: 王仲儒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KWKcuxuCsVJSzxDy5w7Jom | 王淮 | accepted |
| children | p_3Lgirh8tCkhjbetAZ9DFZ4 | 王仲儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 26644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26644&o=json)
