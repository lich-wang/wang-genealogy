---
schema: wang-person/v1
id: p_4otBg1xjFfpjDCBKCwjG7N
status: active
merged_into: null
display_name: 王會典
cbdb_id: 329994
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8K1H2DneahLqMhL1Z5Bkmk
        subject_person_id: p_4otBg1xjFfpjDCBKCwjG7N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會典，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9Eh4NBv8i8JwtmCLuipOKA
          claim_id: c_8K1H2DneahLqMhL1Z5Bkmk
          source_id: s_JnxSqQ4oZFptVER6ViEjan
          stance: supports
          locator: CBDB:329994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JnxSqQ4oZFptVER6ViEjan
            source_type: api_record
            title: 中国历代人物传记资料库：王會典（CBDB 329994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json
            external_identifier: CBDB:329994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bwh1XX55vzBUt96RmczZpc
        subject_person_id: p_4otBg1xjFfpjDCBKCwjG7N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AaWaBuuUbfnFENAQ91oqXL
          claim_id: c_Bwh1XX55vzBUt96RmczZpc
          source_id: s_JnxSqQ4oZFptVER6ViEjan
          stance: supports
          locator: CBDB:329994
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__SDIKcM4IGNZn6sSAmwnQ_
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4otBg1xjFfpjDCBKCwjG7N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_048IEb_GRibb3kooqzPXrx
          claim_id: c__SDIKcM4IGNZn6sSAmwnQ_
          source_id: s_Fdo89E_XqbmQ7Jz8cyKMIm
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會典 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會典 之父／母。
          source:
            id: s_Fdo89E_XqbmQ7Jz8cyKMIm
            source_type: api_record
            title: 中国历代人物传记资料库：王會典（CBDB 329994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json
            external_identifier: CBDB:329994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ngRno3M6aBRj8xR4YNhnTD
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4PDTX3IyKCgVuyUu5SGjhJ
        subject_person_id: p_4otBg1xjFfpjDCBKCwjG7N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aOMPqSTlLiklxkiU4kR9VG
          claim_id: c_4PDTX3IyKCgVuyUu5SGjhJ
          source_id: s_Fdo89E_XqbmQ7Jz8cyKMIm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fdo89E_XqbmQ7Jz8cyKMIm
            source_type: api_record
            title: 中国历代人物传记资料库：王會典（CBDB 329994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json
            external_identifier: CBDB:329994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mYaz7ZtA5wiQaCjCBZf5rq
        status: active
        display_name: 王子蕙
        merged_into_person_id: null
---

# 王會典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王會典，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329994） | accepted |
| name.primary | 王會典 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngRno3M6aBRj8xR4YNhnTD | 王紹先 | accepted |
| other | p_mYaz7ZtA5wiQaCjCBZf5rq | 王子蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會典（CBDB 329994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json)
