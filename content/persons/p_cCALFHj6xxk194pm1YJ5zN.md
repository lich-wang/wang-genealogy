---
schema: wang-person/v1
id: p_cCALFHj6xxk194pm1YJ5zN
status: active
merged_into: null
display_name: 王雱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A4odCQwDgLX63VRx3h5Lmt
        subject_person_id: p_cCALFHj6xxk194pm1YJ5zN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhGu4nW5TzuGZ1RqY2yiNZ
          claim_id: c_A4odCQwDgLX63VRx3h5Lmt
          source_id: s_YkkfkcsmraE1XoXNfSUVzQ
          stance: supports
          locator: CBDB:14306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14306）
          source: &a1
            id: s_YkkfkcsmraE1XoXNfSUVzQ
            source_type: api_record
            title: 中国历代人物传记资料库：王雱（CBDB 14306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14306&o=json
            external_identifier: CBDB:14306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ECDSStaEBZbQkV1eiyM3Nq
        subject_person_id: p_cCALFHj6xxk194pm1YJ5zN
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
        - id: cs_Fqb5koVWEPU8aQE3YDZAHj
          claim_id: c_ECDSStaEBZbQkV1eiyM3Nq
          source_id: s_YkkfkcsmraE1XoXNfSUVzQ
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
        id: c_eNf1C7SE1GLAxytwaORXMW
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCALFHj6xxk194pm1YJ5zN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LoA6zWf--0BjYu5lT0fwBG
          claim_id: c_eNf1C7SE1GLAxytwaORXMW
          source_id: s_YkkfkcsmraE1XoXNfSUVzQ
          stance: supports
          locator: CBDB 双向互证（父 王獻可 ⇄ 子 王雱）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iL53NuuSgA33Ht2KRWRfLu
        status: active
        display_name: 王獻可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雱 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iL53NuuSgA33Ht2KRWRfLu | 王獻可 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雱（CBDB 14306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14306&o=json)
