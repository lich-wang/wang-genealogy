---
schema: wang-person/v1
id: p_aFMUYGj8BUSGRCS44jePEP
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6WdjHS3ZU7u5Np4XZJhF58
        subject_person_id: p_aFMUYGj8BUSGRCS44jePEP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WHLK1sxdt8CbB98z6zybzW
          claim_id: c_6WdjHS3ZU7u5Np4XZJhF58
          source_id: s_VxiCZ5UPpF6bQZCpPYLAiy
          stance: supports
          locator: CBDB:99963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（99963）
          source: &a1
            id: s_VxiCZ5UPpF6bQZCpPYLAiy
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 99963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=99963&o=json
            external_identifier: CBDB:99963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t84L23eFGNFkdzWJjyjQeE
        subject_person_id: p_aFMUYGj8BUSGRCS44jePEP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，宋人物。曾任顯謨閣待制。（中国历代人物传记资料库 CBDB 99963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rKXsEpdpC49BjhsuYRP1X6
          claim_id: c_t84L23eFGNFkdzWJjyjQeE
          source_id: s_VxiCZ5UPpF6bQZCpPYLAiy
          stance: supports
          locator: CBDB:99963
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IAqfjJG_ZYKIMadxJdfuA-
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aFMUYGj8BUSGRCS44jePEP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4q_sfKeRFfRZciK1d5J8vk
          claim_id: c_IAqfjJG_ZYKIMadxJdfuA-
          source_id: s_VxiCZ5UPpF6bQZCpPYLAiy
          stance: supports
          locator: 蘇學士集：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RV7rHymbjAuMVkCqKsJaax
        status: active
        display_name: 王陶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，宋人物。曾任顯謨閣待制。（中国历代人物传记资料库 CBDB 99963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RV7rHymbjAuMVkCqKsJaax | 王陶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 99963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=99963&o=json)
