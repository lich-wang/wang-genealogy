---
schema: wang-person/v1
id: p_NZbU5FY38Nkxc2th62UdLc
status: active
merged_into: null
display_name: 王澤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_omLbmMKNyDVxBVA2xWg2ZL
        subject_person_id: p_NZbU5FY38Nkxc2th62UdLc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1w8z9gh3dcobBAQSE1dCgX
          claim_id: c_omLbmMKNyDVxBVA2xWg2ZL
          source_id: s_pM2DGe5megE4wa3jEQrDXs
          stance: supports
          locator: CBDB:313579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313579）
          source: &a1
            id: s_pM2DGe5megE4wa3jEQrDXs
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 313579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313579&o=json
            external_identifier: CBDB:313579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FhmbPCi53BRS5TRHqmi2PN
        subject_person_id: p_NZbU5FY38Nkxc2th62UdLc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。嘉靖二十九年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 313579）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tFK3bBUhvWH3KbsG9z9TVY
          claim_id: c_FhmbPCi53BRS5TRHqmi2PN
          source_id: s_pM2DGe5megE4wa3jEQrDXs
          stance: supports
          locator: CBDB:313579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PvH9rkJxWrzKFsF3dzKYEA
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NZbU5FY38Nkxc2th62UdLc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gx1bm7gLC8SrEPPz27GdDb
          claim_id: c_PvH9rkJxWrzKFsF3dzKYEA
          source_id: s_PEmKAPFKFACBxJF98_d2He
          stance: supports
          locator: CBDB：兄弟 王潺（204037）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王潺 为同胞（CBDB 记「弟」），王潺 之父／母即 王澤 之父／母。
          source:
            id: s_PEmKAPFKFACBxJF98_d2He
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 313579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313579&o=json
            external_identifier: CBDB:313579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GLsUFUhPwGamaG8mG7dLop
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_evZz9kkbgoptpRjfdWyHvy
        subject_person_id: p_C86M2AWo3FFh1j65XmxDtp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NZbU5FY38Nkxc2th62UdLc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nc8xrH3oQJrt4fpQYBESc5
          claim_id: c_evZz9kkbgoptpRjfdWyHvy
          source_id: s_PEmKAPFKFACBxJF98_d2He
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204037 王潺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PEmKAPFKFACBxJF98_d2He
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 313579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313579&o=json
            external_identifier: CBDB:313579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C86M2AWo3FFh1j65XmxDtp
        status: active
        display_name: 王潺
        merged_into_person_id: null
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。嘉靖二十九年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 313579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GLsUFUhPwGamaG8mG7dLop | 王鉞 | accepted |
| other | p_C86M2AWo3FFh1j65XmxDtp | 王潺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 313579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313579&o=json)
