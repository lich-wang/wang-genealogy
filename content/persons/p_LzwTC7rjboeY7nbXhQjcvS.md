---
schema: wang-person/v1
id: p_LzwTC7rjboeY7nbXhQjcvS
status: active
merged_into: null
display_name: 王東蒙
cbdb_id: 248669
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FqCMDBQ3vpi3AgYfM78N98
        subject_person_id: p_LzwTC7rjboeY7nbXhQjcvS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東蒙，明人物。成化十一年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 248669）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zkfZCFe4gVmvqRMMrjmBQg
          claim_id: c_FqCMDBQ3vpi3AgYfM78N98
          source_id: s_tG199jx8N37MwaSLFJFtse
          stance: supports
          locator: CBDB:248669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tG199jx8N37MwaSLFJFtse
            source_type: api_record
            title: 中国历代人物传记资料库：王東蒙（CBDB 248669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248669&o=json
            external_identifier: CBDB:248669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FSEbZXKvA2tBUnRmvopK5x
        subject_person_id: p_LzwTC7rjboeY7nbXhQjcvS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東蒙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PPatWHWrVmbzNm1r2PnHSp
          claim_id: c_FSEbZXKvA2tBUnRmvopK5x
          source_id: s_tG199jx8N37MwaSLFJFtse
          stance: supports
          locator: CBDB:248669
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z2xu3nY_HGD5Ds1AaEfr7X
        subject_person_id: p_PEt7x529igvwnBDEaRjBZt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LzwTC7rjboeY7nbXhQjcvS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ap3a6noQZe5wp2iMdZNyVz
          claim_id: c_z2xu3nY_HGD5Ds1AaEfr7X
          source_id: s_EEr5iRraHNEIH2YmGvNyKe
          stance: supports
          locator: CBDB：兄弟 王懋（199698）之父／母 王玘
          quotation: null
          interpretation_note: 由兄弟关系推断：王東蒙 与 王懋 为同胞（CBDB 记「兄」），王懋 之父／母即 王東蒙 之父／母。
          source:
            id: s_EEr5iRraHNEIH2YmGvNyKe
            source_type: api_record
            title: 中国历代人物传记资料库：王東蒙（CBDB 248669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248669&o=json
            external_identifier: CBDB:248669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PEt7x529igvwnBDEaRjBZt
        status: active
        display_name: 王玘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4gEbGW933i9qLrmlTREUu-
        subject_person_id: p_LzwTC7rjboeY7nbXhQjcvS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9kidbXkE5Sn11wxCgC84s
          claim_id: c_4gEbGW933i9qLrmlTREUu-
          source_id: s_EEr5iRraHNEIH2YmGvNyKe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199698 王懋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EEr5iRraHNEIH2YmGvNyKe
            source_type: api_record
            title: 中国历代人物传记资料库：王東蒙（CBDB 248669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248669&o=json
            external_identifier: CBDB:248669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xTwQsV9XKSmsGQePeW7Ut1
        status: active
        display_name: 王懋
        merged_into_person_id: null
---

# 王東蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王東蒙，明人物。成化十一年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 248669） | accepted |
| name.primary | 王東蒙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PEt7x529igvwnBDEaRjBZt | 王玘 | accepted |
| other | p_xTwQsV9XKSmsGQePeW7Ut1 | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東蒙（CBDB 248669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248669&o=json)
