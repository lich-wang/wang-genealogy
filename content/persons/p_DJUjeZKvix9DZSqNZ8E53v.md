---
schema: wang-person/v1
id: p_DJUjeZKvix9DZSqNZ8E53v
status: active
merged_into: null
display_name: 王一貫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jmberSVeeDS43Cy4b9W4CA
        subject_person_id: p_DJUjeZKvix9DZSqNZ8E53v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KVC5ju8vXY3E9qG9s8gNET
          claim_id: c_jmberSVeeDS43Cy4b9W4CA
          source_id: s_ftCu8MkKB5Bzkp9DCQZR4W
          stance: supports
          locator: CBDB:337561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337561）
          source: &a1
            id: s_ftCu8MkKB5Bzkp9DCQZR4W
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 337561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json
            external_identifier: CBDB:337561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8hmfFqC9sB9s9QCbcPzCqf
        subject_person_id: p_DJUjeZKvix9DZSqNZ8E53v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vWgKknp4-ie5nylrN5ERRM
          claim_id: c_8hmfFqC9sB9s9QCbcPzCqf
          source_id: s_ftCu8MkKB5Bzkp9DCQZR4W
          stance: supports
          locator: CBDB:337561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V7ZJ49waO3LmW3_4TTDma0
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJUjeZKvix9DZSqNZ8E53v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lUcJWd-Wr6N6DhBqllcY_r
          claim_id: c_V7ZJ49waO3LmW3_4TTDma0
          source_id: s_0n5F5FOIzlQKtNBTP__VZ8
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一貫 与 王一誠 为同胞（CBDB 记「弟」），王一誠 之父／母即 王一貫 之父／母。
          source:
            id: s_0n5F5FOIzlQKtNBTP__VZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 337561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json
            external_identifier: CBDB:337561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uWARgTHwHotCqXAXAieGV4
        status: active
        display_name: 王世芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qOMriAD9OUdz5DtGjPCgKH
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DJUjeZKvix9DZSqNZ8E53v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCeRryBXUJLjpPpzxSM5Ve
          claim_id: c_qOMriAD9OUdz5DtGjPCgKH
          source_id: s_0n5F5FOIzlQKtNBTP__VZ8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205728 王一誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0n5F5FOIzlQKtNBTP__VZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 337561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json
            external_identifier: CBDB:337561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
---

# 王一貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一貫 | accepted |
| bio.summary | 王一貫，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uWARgTHwHotCqXAXAieGV4 | 王世芳 | accepted |
| other | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一貫（CBDB 337561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json)
