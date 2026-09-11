---
schema: wang-person/v1
id: p_yATrvbDs8MzbFhm464b9wL
status: active
merged_into: null
display_name: 王恢基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4RxhXNFYUpwALV7N34Xnq
        subject_person_id: p_yATrvbDs8MzbFhm464b9wL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恢基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3DU59DfRqwaZBnk73rrRW
          claim_id: c_a4RxhXNFYUpwALV7N34Xnq
          source_id: s_Heb4rCsJ5C2LAMzVjB9RNF
          stance: supports
          locator: CBDB:526948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526948）
          source: &a1
            id: s_Heb4rCsJ5C2LAMzVjB9RNF
            source_type: api_record
            title: 中国历代人物传记资料库：王恢基（CBDB 526948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526948&o=json
            external_identifier: CBDB:526948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SZrdN5A5nFrKXvwwE8ZiJ8
        subject_person_id: p_yATrvbDs8MzbFhm464b9wL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rB8m2Qxov14TgP3BrH9MN7
          claim_id: c_SZrdN5A5nFrKXvwwE8ZiJ8
          source_id: s_Heb4rCsJ5C2LAMzVjB9RNF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Oduo3jrGrDlSFpdO4pvzco
        subject_person_id: p_yATrvbDs8MzbFhm464b9wL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z6CPA3wHm19YKR4izqKsNb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_53YYuyfLnq2Va3qGgmv49l
          claim_id: c_Oduo3jrGrDlSFpdO4pvzco
          source_id: s_Heb4rCsJ5C2LAMzVjB9RNF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13126：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z6CPA3wHm19YKR4izqKsNb
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恢基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恢基 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z6CPA3wHm19YKR4izqKsNb | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恢基（CBDB 526948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526948&o=json)
