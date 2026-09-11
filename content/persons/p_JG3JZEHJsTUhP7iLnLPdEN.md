---
schema: wang-person/v1
id: p_JG3JZEHJsTUhP7iLnLPdEN
status: active
merged_into: null
display_name: 王鄰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEm6HkZmGRusZ3FhvoHUWK
        subject_person_id: p_JG3JZEHJsTUhP7iLnLPdEN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yCnVAnNZmBWxeMH3BVaXDy
          claim_id: c_VEm6HkZmGRusZ3FhvoHUWK
          source_id: s_RuEuVErYYNAtbrM3YM6veK
          stance: supports
          locator: CBDB:26226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26226）
          source: &a1
            id: s_RuEuVErYYNAtbrM3YM6veK
            source_type: api_record
            title: 中国历代人物传记资料库：王鄰（CBDB 26226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26226&o=json
            external_identifier: CBDB:26226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nomj2qvzaUr2xnRu5fyCz1
        subject_person_id: p_JG3JZEHJsTUhP7iLnLPdEN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄰，宋人物。籍贯任城，身份为地方士人/鄉紳、士人。（中国历代人物传记资料库 CBDB 26226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aMgbJ7JUDqy9iK7dTFaRWk
          claim_id: c_nomj2qvzaUr2xnRu5fyCz1
          source_id: s_RuEuVErYYNAtbrM3YM6veK
          stance: supports
          locator: CBDB:26226
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3b3c84UZcn0bF2uANCSwGI
        subject_person_id: p_JG3JZEHJsTUhP7iLnLPdEN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EHosypq5k9YAB5xCUgjsne
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7rLI9qYZEV4dZ7E5DNH5D
          claim_id: c_3b3c84UZcn0bF2uANCSwGI
          source_id: s_RuEuVErYYNAtbrM3YM6veK
          stance: supports
          locator: CBDB 双向互证（子 王志 ⇄ 父 王鄰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EHosypq5k9YAB5xCUgjsne
        status: active
        display_name: 王志
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鄰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鄰 | accepted |
| bio.summary | 王鄰，宋人物。籍贯任城，身份为地方士人/鄉紳、士人。（中国历代人物传记资料库 CBDB 26226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EHosypq5k9YAB5xCUgjsne | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鄰（CBDB 26226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26226&o=json)
