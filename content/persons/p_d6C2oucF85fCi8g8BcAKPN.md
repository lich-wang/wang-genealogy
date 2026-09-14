---
schema: wang-person/v1
id: p_d6C2oucF85fCi8g8BcAKPN
status: active
merged_into: null
display_name: 王愛之
cbdb_id: 213570
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfZNfNDma2ZA4dYSbmo7TJ
        subject_person_id: p_d6C2oucF85fCi8g8BcAKPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛之，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6TVa67Iu5SIfZin1VhwWql
          claim_id: c_VfZNfNDma2ZA4dYSbmo7TJ
          source_id: s_jETaZSE1gR7iTA22Jb9XMz
          stance: supports
          locator: CBDB:213570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jETaZSE1gR7iTA22Jb9XMz
            source_type: api_record
            title: 中国历代人物传记资料库：王愛之（CBDB 213570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213570&o=json
            external_identifier: CBDB:213570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91MBZGkXDjnLSe1jNpSt91
        subject_person_id: p_d6C2oucF85fCi8g8BcAKPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZDcDu7SxUyHP14Q3NPnMqP
          claim_id: c_91MBZGkXDjnLSe1jNpSt91
          source_id: s_jETaZSE1gR7iTA22Jb9XMz
          stance: supports
          locator: CBDB:213570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7e8VNMGXN-VXWDkBX-HiYV
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d6C2oucF85fCi8g8BcAKPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35478gjt4Er_kYWePyZ_a5
          claim_id: c_7e8VNMGXN-VXWDkBX-HiYV
          source_id: s_fOxnZtN8TVGEo3z3gWmtmH
          stance: supports
          locator: CBDB：兄弟 王崇之（126685）之父／母 王憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王愛之 与 王崇之 为同胞（CBDB 记「兄」），王崇之 之父／母即 王愛之 之父／母。
          source:
            id: s_fOxnZtN8TVGEo3z3gWmtmH
            source_type: api_record
            title: 中国历代人物传记资料库：王愛之（CBDB 213570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213570&o=json
            external_identifier: CBDB:213570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_efTyspVBuWnU6D3LVRN3aM
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CbE2OYvO1R46B2y_JJmVTN
        subject_person_id: p_d6C2oucF85fCi8g8BcAKPN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FHZLssDcDW8z4NCcl3Vs9y
          claim_id: c_CbE2OYvO1R46B2y_JJmVTN
          source_id: s_fOxnZtN8TVGEo3z3gWmtmH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126685 王崇之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fOxnZtN8TVGEo3z3gWmtmH
            source_type: api_record
            title: 中国历代人物传记资料库：王愛之（CBDB 213570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213570&o=json
            external_identifier: CBDB:213570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMjY6kwGmS2PR67RexN7yL
        status: active
        display_name: 王崇之
        merged_into_person_id: null
---

# 王愛之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愛之，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213570） | accepted |
| name.primary | 王愛之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_efTyspVBuWnU6D3LVRN3aM | 王憲 | accepted |
| other | p_sMjY6kwGmS2PR67RexN7yL | 王崇之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛之（CBDB 213570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213570&o=json)
