---
schema: wang-person/v1
id: p_5q7M5NN4tHZhLCPj7eAQaC
status: active
merged_into: null
display_name: 王誨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XR8NwtdhUG52grgBBugeAa
        subject_person_id: p_5q7M5NN4tHZhLCPj7eAQaC
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
        - id: cs_i3VuZA2kF9Tg4YvWuj6jxA
          claim_id: c_XR8NwtdhUG52grgBBugeAa
          source_id: s_FxbqjtC8FFMoRqn6HpFi6i
          stance: supports
          locator: CBDB:22121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22121）
          source: &a1
            id: s_FxbqjtC8FFMoRqn6HpFi6i
            source_type: api_record
            title: 中国历代人物传记资料库：王誨（CBDB 22121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22121&o=json
            external_identifier: CBDB:22121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYDs5jboi3EHnhMS1Lv3ak
        subject_person_id: p_5q7M5NN4tHZhLCPj7eAQaC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誨，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 22121）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZHkHup21vHBQtdVE5tg9XE
          claim_id: c_BYDs5jboi3EHnhMS1Lv3ak
          source_id: s_FxbqjtC8FFMoRqn6HpFi6i
          stance: supports
          locator: CBDB:22121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vjv9BR3t9wzjMSmFVzFB1-
        subject_person_id: p_LfSJ6e9XsMFtMLtvQoDMFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5q7M5NN4tHZhLCPj7eAQaC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XkJ_iPSpmvSwPC8sU2qOPp
          claim_id: c_Vjv9BR3t9wzjMSmFVzFB1-
          source_id: s_FxbqjtC8FFMoRqn6HpFi6i
          stance: supports
          locator: CBDB 双向互证（父 王樵 ⇄ 子 王誨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_LfSJ6e9XsMFtMLtvQoDMFX
        status: active
        display_name: 王樵
        merged_into_person_id: null
  children:
    - claim:
        id: c_YWDy5OsHO4gqO7B3Si0Dkz
        subject_person_id: p_5q7M5NN4tHZhLCPj7eAQaC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XxbY91RiCBrsB5eVREE1y2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QM-bCV-eLKdPEkV4F89P8M
          claim_id: c_YWDy5OsHO4gqO7B3Si0Dkz
          source_id: s_FxbqjtC8FFMoRqn6HpFi6i
          stance: supports
          locator: CBDB 双向互证（子 王應 ⇄ 父 王誨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XxbY91RiCBrsB5eVREE1y2
        status: active
        display_name: 王應
        merged_into_person_id: null
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
| bio.summary | 王誨，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 22121） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LfSJ6e9XsMFtMLtvQoDMFX | 王樵 | accepted |
| children | p_XxbY91RiCBrsB5eVREE1y2 | 王應 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誨（CBDB 22121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22121&o=json)
