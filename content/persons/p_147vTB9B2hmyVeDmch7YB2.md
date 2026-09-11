---
schema: wang-person/v1
id: p_147vTB9B2hmyVeDmch7YB2
status: active
merged_into: null
display_name: 王應先
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajJbk48rq67Ti7qnrLe3sr
        subject_person_id: p_147vTB9B2hmyVeDmch7YB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_saSWyZxPLqbv8oG1FWQSod
          claim_id: c_ajJbk48rq67Ti7qnrLe3sr
          source_id: s_scZF58Sm2AdgtDUm64F71m
          stance: supports
          locator: CBDB:326107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326107）
          source: &a1
            id: s_scZF58Sm2AdgtDUm64F71m
            source_type: api_record
            title: 中国历代人物传记资料库：王應先（CBDB 326107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326107&o=json
            external_identifier: CBDB:326107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZdH5KHwPwHXAAJaYArspc
        subject_person_id: p_147vTB9B2hmyVeDmch7YB2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應先，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 326107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fZjjdwNDxd6Xtuqk8zEJBk
          claim_id: c_tZdH5KHwPwHXAAJaYArspc
          source_id: s_scZF58Sm2AdgtDUm64F71m
          stance: supports
          locator: CBDB:326107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_beajc8Ii3N90v8CVgZ9OHB
        subject_person_id: p_147vTB9B2hmyVeDmch7YB2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_frdf9A7Da82dDkVmfYt6CO
          claim_id: c_beajc8Ii3N90v8CVgZ9OHB
          source_id: s_scZF58Sm2AdgtDUm64F71m
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BiHBv5kE6hFqq82j1ZogDT
        status: active
        display_name: 王祥
        merged_into_person_id: null
  other: []
---

# 王應先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應先 | accepted |
| bio.summary | 王應先，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 326107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BiHBv5kE6hFqq82j1ZogDT | 王祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應先（CBDB 326107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326107&o=json)
