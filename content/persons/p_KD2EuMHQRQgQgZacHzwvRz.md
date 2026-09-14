---
schema: wang-person/v1
id: p_KD2EuMHQRQgQgZacHzwvRz
status: active
merged_into: null
display_name: 王璉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rjmba63UJz6KgPLP6AYxDY
        subject_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AtfPDihPrphmZYcsTYXRd3
          claim_id: c_rjmba63UJz6KgPLP6AYxDY
          source_id: s_KmQQGW2KiH91esQ24PX9dY
          stance: supports
          locator: CBDB:550751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550751）
          source: &a1
            id: s_KmQQGW2KiH91esQ24PX9dY
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 550751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json
            external_identifier: CBDB:550751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y9bwEwtyMg2hnYRRCuUXM7
        subject_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。籍贯長洲，入仕考上會試/貢士，曾任編修、吏部主事。（中国历代人物传记资料库 CBDB 550751）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z-Fw3SUIYJUx__lGPaxEzS
          claim_id: c_y9bwEwtyMg2hnYRRCuUXM7
          source_id: s_KmQQGW2KiH91esQ24PX9dY
          stance: supports
          locator: CBDB:550751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gY7VGGAeGIudlRTmTQbbf9
        subject_person_id: p_yP3zm57t1ArYS555kTvxek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVD7C_m1PZTs1QbYsPUy2D
          claim_id: c_gY7VGGAeGIudlRTmTQbbf9
          source_id: s_sC7P_a4qwxjA4delef7x7L
          stance: supports
          locator: CBDB：兄弟 王汝玉（126499）之父／母 王立中
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王汝玉 为同胞（CBDB 记「弟」），王汝玉 之父／母即 王璉 之父／母。
          source:
            id: s_sC7P_a4qwxjA4delef7x7L
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 550751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json
            external_identifier: CBDB:550751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yP3zm57t1ArYS555kTvxek
        status: active
        display_name: 王立中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oCYmDUiEbllxU5ZU3jdPcv
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ka_c0ckhDCR5lr51QB1fJd
          claim_id: c_oCYmDUiEbllxU5ZU3jdPcv
          source_id: s_sC7P_a4qwxjA4delef7x7L
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126499 王汝玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sC7P_a4qwxjA4delef7x7L
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 550751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json
            external_identifier: CBDB:550751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2ikP4x5v4Dn6VEoAAJy53Z
        status: active
        display_name: 王汝玉
        merged_into_person_id: null
    - claim:
        id: c_13u6j9TmMiFukriVCH4ods
        subject_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TfSUDCjDByc2kg8tK9UUea
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W04enAv6JFwnAkZNH7S5S0
          claim_id: c_13u6j9TmMiFukriVCH4ods
          source_id: s_sC7P_a4qwxjA4delef7x7L
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 550758 王璡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sC7P_a4qwxjA4delef7x7L
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 550751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json
            external_identifier: CBDB:550751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TfSUDCjDByc2kg8tK9UUea
        status: active
        display_name: 王璡
        merged_into_person_id: null
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。籍贯長洲，入仕考上會試/貢士，曾任編修、吏部主事。（中国历代人物传记资料库 CBDB 550751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yP3zm57t1ArYS555kTvxek | 王立中 | accepted |
| other | p_2ikP4x5v4Dn6VEoAAJy53Z | 王汝玉 | accepted |
| other | p_TfSUDCjDByc2kg8tK9UUea | 王璡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 550751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json)
