---
schema: wang-person/v1
id: p_btjFhQUd8gZH3MSNL2CygU
status: active
merged_into: null
display_name: 王貌
cbdb_id: 241845
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_61sHZBBe35PBJeTNL3NbFg
        subject_person_id: p_btjFhQUd8gZH3MSNL2CygU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貌，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oNh-ph8u4iq8CtULQhzWx8
          claim_id: c_61sHZBBe35PBJeTNL3NbFg
          source_id: s_d1tmKi6LHevb5ZPmfXuTPK
          stance: supports
          locator: CBDB:241845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_d1tmKi6LHevb5ZPmfXuTPK
            source_type: api_record
            title: 中国历代人物传记资料库：王貌（CBDB 241845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json
            external_identifier: CBDB:241845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZvqaLpixeX9EX5pdeD8VHk
        subject_person_id: p_btjFhQUd8gZH3MSNL2CygU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mf5FQYDgfNxdMyCUXfuNs9
          claim_id: c_ZvqaLpixeX9EX5pdeD8VHk
          source_id: s_d1tmKi6LHevb5ZPmfXuTPK
          stance: supports
          locator: CBDB:241845
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9E8kIwOaJTejhuNlxuOx77
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btjFhQUd8gZH3MSNL2CygU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWRRVar67j3U64xx__kx5d
          claim_id: c_9E8kIwOaJTejhuNlxuOx77
          source_id: s_Wc4EXN8zdKiLwSIgdFT75D
          stance: supports
          locator: CBDB：兄弟 王得孚（126702）之父／母 王子榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王貌 与 王得孚 为同胞（CBDB 记「兄」），王得孚 之父／母即 王貌 之父／母。
          source:
            id: s_Wc4EXN8zdKiLwSIgdFT75D
            source_type: api_record
            title: 中国历代人物传记资料库：王貌（CBDB 241845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json
            external_identifier: CBDB:241845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eN26ab6vRMdN7dn1bE1CDf
        status: active
        display_name: 王子榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8-21VycsocRd-2_zvZr0-z
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_btjFhQUd8gZH3MSNL2CygU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCO4uYCc2pAtAs-c8ZM-8U
          claim_id: c_8-21VycsocRd-2_zvZr0-z
          source_id: s_Wc4EXN8zdKiLwSIgdFT75D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wc4EXN8zdKiLwSIgdFT75D
            source_type: api_record
            title: 中国历代人物传记资料库：王貌（CBDB 241845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json
            external_identifier: CBDB:241845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7a2QWukYSmEM9zh4AA1o47
        status: active
        display_name: 王得孚
        merged_into_person_id: null
---

# 王貌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貌，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241845） | accepted |
| name.primary | 王貌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eN26ab6vRMdN7dn1bE1CDf | 王子榮 | accepted |
| other | p_7a2QWukYSmEM9zh4AA1o47 | 王得孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貌（CBDB 241845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json)
