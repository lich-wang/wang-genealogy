---
schema: wang-person/v1
id: p_GB7C9iCPVFk1bWVfvXJBAb
status: active
merged_into: null
display_name: 王鈞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wrtkqijXdsta7tECrJocXg
        subject_person_id: p_GB7C9iCPVFk1bWVfvXJBAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uYLdBLja8eJxoYduEvcDpW
          claim_id: c_wrtkqijXdsta7tECrJocXg
          source_id: s_Yx55bw4aRGmuyEZeHoJMJQ
          stance: supports
          locator: CBDB:285960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285960）
          source: &a1
            id: s_Yx55bw4aRGmuyEZeHoJMJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 285960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json
            external_identifier: CBDB:285960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DGCuLc42Ao9QeAZ5P7JSv2
        subject_person_id: p_GB7C9iCPVFk1bWVfvXJBAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞，明人物。正德十六年進士，籍贯平峪。（中国历代人物传记资料库 CBDB 285960）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3-jKnm-k52XQlorZK-z2L6
          claim_id: c_DGCuLc42Ao9QeAZ5P7JSv2
          source_id: s_Yx55bw4aRGmuyEZeHoJMJQ
          stance: supports
          locator: CBDB:285960
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8yASCvbzJLdNJYqMbfUtoa
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GB7C9iCPVFk1bWVfvXJBAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8_lkn4hr8PE5KWrbspdxby
          claim_id: c_8yASCvbzJLdNJYqMbfUtoa
          source_id: s_fDWkH7Uvph0ooZswqhsGff
          stance: supports
          locator: CBDB：兄弟 王銳（202276）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈞 与 王銳 为同胞（CBDB 记「兄」），王銳 之父／母即 王鈞 之父／母。
          source:
            id: s_fDWkH7Uvph0ooZswqhsGff
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 285960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json
            external_identifier: CBDB:285960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l6yGX_fmOjclF8Fkz64QmQ
        subject_person_id: p_GB7C9iCPVFk1bWVfvXJBAb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yro-N-_bT3LIDfv2Tgfwc0
          claim_id: c_l6yGX_fmOjclF8Fkz64QmQ
          source_id: s_fDWkH7Uvph0ooZswqhsGff
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202276 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fDWkH7Uvph0ooZswqhsGff
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 285960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json
            external_identifier: CBDB:285960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ihqwFHoQL5fezFftJsukMb
        status: active
        display_name: 王銳
        merged_into_person_id: null
---

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| bio.summary | 王鈞，明人物。正德十六年進士，籍贯平峪。（中国历代人物传记资料库 CBDB 285960） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z8BnuYsiaLneHAb2Y8ZJ1g | 王通 | accepted |
| other | p_ihqwFHoQL5fezFftJsukMb | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 285960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json)
