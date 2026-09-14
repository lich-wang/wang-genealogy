---
schema: wang-person/v1
id: p_fWwneV8r1G2iVJWGgF8cT1
status: active
merged_into: null
display_name: 王欄
cbdb_id: 291897
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HHZZWbdmrDbdW5yADDePqn
        subject_person_id: p_fWwneV8r1G2iVJWGgF8cT1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欄，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SC2oNybRjmmIgDmZVobUIY
          claim_id: c_HHZZWbdmrDbdW5yADDePqn
          source_id: s_GqFVQrjafnfqdymS6wTEWX
          stance: supports
          locator: CBDB:291897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GqFVQrjafnfqdymS6wTEWX
            source_type: api_record
            title: 中国历代人物传记资料库：王欄（CBDB 291897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json
            external_identifier: CBDB:291897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VcBHLasvgBCgKq32JB9kYo
        subject_person_id: p_fWwneV8r1G2iVJWGgF8cT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8o5YfpyS8KjRAfc4d8P49X
          claim_id: c_VcBHLasvgBCgKq32JB9kYo
          source_id: s_GqFVQrjafnfqdymS6wTEWX
          stance: supports
          locator: CBDB:291897
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2jhw-jT1Lo56HowN5LNd3q
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fWwneV8r1G2iVJWGgF8cT1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XN6Vj4tOLrsr51mhFiON3t
          claim_id: c_2jhw-jT1Lo56HowN5LNd3q
          source_id: s_j7LUjFm8EDMNxzHQ_DgHP5
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王欄 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王欄 之父／母。
          source:
            id: s_j7LUjFm8EDMNxzHQ_DgHP5
            source_type: api_record
            title: 中国历代人物传记资料库：王欄（CBDB 291897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json
            external_identifier: CBDB:291897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_11RhKLzn2Mi6Moy5jEp4MD
        status: active
        display_name: 王汝猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nQfp808dhEouBFuEHlnjhu
        subject_person_id: p_fWwneV8r1G2iVJWGgF8cT1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e3nKrxK-s9ufajE9nVQSUD
          claim_id: c_nQfp808dhEouBFuEHlnjhu
          source_id: s_j7LUjFm8EDMNxzHQ_DgHP5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j7LUjFm8EDMNxzHQ_DgHP5
            source_type: api_record
            title: 中国历代人物传记资料库：王欄（CBDB 291897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json
            external_identifier: CBDB:291897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
---

# 王欄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王欄，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291897） | accepted |
| name.primary | 王欄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_11RhKLzn2Mi6Moy5jEp4MD | 王汝猷 | accepted |
| other | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欄（CBDB 291897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json)
