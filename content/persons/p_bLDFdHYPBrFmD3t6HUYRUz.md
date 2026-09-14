---
schema: wang-person/v1
id: p_bLDFdHYPBrFmD3t6HUYRUz
status: active
merged_into: null
display_name: 王健
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zz4EY5YmH5FYnv4FJf9NLr
        subject_person_id: p_bLDFdHYPBrFmD3t6HUYRUz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王健
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Uea5WDa2LbvSvA3snapFg
          claim_id: c_zz4EY5YmH5FYnv4FJf9NLr
          source_id: s_8HFxKjDGrxHYqBAomsKkGb
          stance: supports
          locator: CBDB:244424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244424）
          source: &a1
            id: s_8HFxKjDGrxHYqBAomsKkGb
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 244424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244424&o=json
            external_identifier: CBDB:244424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w77aoVi8soVJBDqvcNx7GB
        subject_person_id: p_bLDFdHYPBrFmD3t6HUYRUz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王健，明人物。成化五年進士，籍贯平原。（中国历代人物传记资料库 CBDB 244424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mRilQGWQerCvcwjhMN0HpF
          claim_id: c_w77aoVi8soVJBDqvcNx7GB
          source_id: s_8HFxKjDGrxHYqBAomsKkGb
          stance: supports
          locator: CBDB:244424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QXHDoH5KPq9JxEztMtqvLh
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bLDFdHYPBrFmD3t6HUYRUz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_05tv5q3diGrpZF3jF62Rgl
          claim_id: c_QXHDoH5KPq9JxEztMtqvLh
          source_id: s_rYm4kDnN7Y0bMB7tndEck3
          stance: supports
          locator: CBDB：兄弟 王坦（126565）之父／母 王蕃
          quotation: null
          interpretation_note: 由兄弟关系推断：王健 与 王坦 为同胞（CBDB 记「兄」），王坦 之父／母即 王健 之父／母。
          source:
            id: s_rYm4kDnN7Y0bMB7tndEck3
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 244424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244424&o=json
            external_identifier: CBDB:244424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ggxQ1jnked4p4GU2cPQ9m8
        status: active
        display_name: 王蕃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l8Q4_tO3iIO23WlFzsVBLZ
        subject_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bLDFdHYPBrFmD3t6HUYRUz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1VbbewUttQ1_qBBoApjf7
          claim_id: c_l8Q4_tO3iIO23WlFzsVBLZ
          source_id: s_rYm4kDnN7Y0bMB7tndEck3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126565 王坦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rYm4kDnN7Y0bMB7tndEck3
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 244424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244424&o=json
            external_identifier: CBDB:244424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYH4Kd4bjhZaTFXvNipRQE
        status: active
        display_name: 王坦
        merged_into_person_id: null
---

# 王健

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王健 | accepted |
| bio.summary | 王健，明人物。成化五年進士，籍贯平原。（中国历代人物传记资料库 CBDB 244424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggxQ1jnked4p4GU2cPQ9m8 | 王蕃 | accepted |
| other | p_aYH4Kd4bjhZaTFXvNipRQE | 王坦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王健（CBDB 244424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244424&o=json)
