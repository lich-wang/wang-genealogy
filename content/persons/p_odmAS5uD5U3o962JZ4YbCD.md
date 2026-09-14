---
schema: wang-person/v1
id: p_odmAS5uD5U3o962JZ4YbCD
status: active
merged_into: null
display_name: 王陔
cbdb_id: 37370
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mA3aysH5NPj1K5Da1oEzxr
        subject_person_id: p_odmAS5uD5U3o962JZ4YbCD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陔，宋人物。籍贯崑山。（中国历代人物传记资料库 CBDB 37370）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_epT_ZYVgUoJPJ2X7xpXSQA
          claim_id: c_mA3aysH5NPj1K5Da1oEzxr
          source_id: s_Rrq8NqgFoNYFJx9LM4LL8E
          stance: supports
          locator: CBDB:37370
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Rrq8NqgFoNYFJx9LM4LL8E
            source_type: api_record
            title: 中国历代人物传记资料库：王陔（CBDB 37370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37370&o=json
            external_identifier: CBDB:37370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ANJHdDsrzR6zPdeogFLCdH
        subject_person_id: p_odmAS5uD5U3o962JZ4YbCD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5hNv5RywEaUwKL5DvmrqhE
          claim_id: c_ANJHdDsrzR6zPdeogFLCdH
          source_id: s_Rrq8NqgFoNYFJx9LM4LL8E
          stance: supports
          locator: CBDB:37370
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_C78Ep2lW0Uhf41tnoK3T3B
        subject_person_id: p_odmAS5uD5U3o962JZ4YbCD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3S9LFxPRigqjLYx36NCaFZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_00CKldfcKODouCJp6FQM8f
          claim_id: c_C78Ep2lW0Uhf41tnoK3T3B
          source_id: s_OQoRPvGzxqmX-wMFXZ3efr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37370）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_OQoRPvGzxqmX-wMFXZ3efr
            source_type: api_record
            title: 中国历代人物传记资料库：王晞曾（CBDB 37372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37372&o=json
            external_identifier: CBDB:37372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3S9LFxPRigqjLYx36NCaFZ
        status: active
        display_name: 王晞曾
        merged_into_person_id: null
    - claim:
        id: c_wP6JJVk3H_rseVw3miC84d
        subject_person_id: p_odmAS5uD5U3o962JZ4YbCD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZPUFRJUYhdqyXnzMSGzcdd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qMbjj5rwdFeBwhd9QzQxmy
          claim_id: c_wP6JJVk3H_rseVw3miC84d
          source_id: s_Ebv-Xjv9lqLjlwY6mNbdpE
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37370）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Ebv-Xjv9lqLjlwY6mNbdpE
            source_type: api_record
            title: 中国历代人物传记资料库：王晞祖（CBDB 37373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37373&o=json
            external_identifier: CBDB:37373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZPUFRJUYhdqyXnzMSGzcdd
        status: active
        display_name: 王晞祖
        merged_into_person_id: null
    - claim:
        id: c_8Mc10TQL_pbDOH3LkQBuuu
        subject_person_id: p_odmAS5uD5U3o962JZ4YbCD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_arJqBH5d8XcVfPqczQBUsx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8I4nHsxgEy4t5shjvLQ6GS
          claim_id: c_8Mc10TQL_pbDOH3LkQBuuu
          source_id: s_HNYRDzBXf4Vr1GYVT2wNud
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37370）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_HNYRDzBXf4Vr1GYVT2wNud
            source_type: api_record
            title: 中国历代人物传记资料库：王晞高（CBDB 37371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37371&o=json
            external_identifier: CBDB:37371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_arJqBH5d8XcVfPqczQBUsx
        status: active
        display_name: 王晞高
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王陔，宋人物。籍贯崑山。（中国历代人物传记资料库 CBDB 37370） | accepted |
| name.primary | 王陔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3S9LFxPRigqjLYx36NCaFZ | 王晞曾 | accepted |
| children | p_ZPUFRJUYhdqyXnzMSGzcdd | 王晞祖 | accepted |
| children | p_arJqBH5d8XcVfPqczQBUsx | 王晞高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陔（CBDB 37370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37370&o=json)
- [中国历代人物传记资料库：王晞曾（CBDB 37372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37372&o=json)
- [中国历代人物传记资料库：王晞高（CBDB 37371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37371&o=json)
- [中国历代人物传记资料库：王晞祖（CBDB 37373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37373&o=json)
