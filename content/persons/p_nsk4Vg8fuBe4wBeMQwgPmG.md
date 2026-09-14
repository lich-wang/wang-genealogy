---
schema: wang-person/v1
id: p_nsk4Vg8fuBe4wBeMQwgPmG
status: active
merged_into: null
display_name: 王世德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xYjQfBtZsJkZrfSatFnc5M
        subject_person_id: p_nsk4Vg8fuBe4wBeMQwgPmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KjLYDdLgZ9dhqYgAxSNdeo
          claim_id: c_xYjQfBtZsJkZrfSatFnc5M
          source_id: s_vxMB8L7Ng6sJ4ZVkXvJN2a
          stance: supports
          locator: CBDB:309379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309379）
          source: &a1
            id: s_vxMB8L7Ng6sJ4ZVkXvJN2a
            source_type: api_record
            title: 中国历代人物传记资料库：王世德（CBDB 309379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309379&o=json
            external_identifier: CBDB:309379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bBCCkxLuReWWhMBKv9CsBv
        subject_person_id: p_nsk4Vg8fuBe4wBeMQwgPmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王世德，明人物。嘉靖二十六年進士，籍贯崑山，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任官生。（中国历代人物传记资料库 CBDB 309379）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pxO4l1kBxi9cdZn2I-7FIn
          claim_id: c_bBCCkxLuReWWhMBKv9CsBv
          source_id: s_vxMB8L7Ng6sJ4ZVkXvJN2a
          stance: supports
          locator: CBDB:309379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P5Zj6xlPmrhc6c8NuuvHkd
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nsk4Vg8fuBe4wBeMQwgPmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bez0VcO6-xUsOryfoMS2cA
          claim_id: c_P5Zj6xlPmrhc6c8NuuvHkd
          source_id: s_oLaKmsI2yTEy6v5qwPrEZR
          stance: supports
          locator: CBDB：兄弟 王士骐（34717）之父／母 王世贞
          quotation: null
          interpretation_note: 由兄弟关系推断：王世德 与 王士骐 为同胞（CBDB 记「弟」），王士骐 之父／母即 王世德 之父／母。
          source:
            id: s_oLaKmsI2yTEy6v5qwPrEZR
            source_type: api_record
            title: 中国历代人物传记资料库：王世德（CBDB 309379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309379&o=json
            external_identifier: CBDB:309379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zOyQjmLhdk8l1djq9X9Fj0
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nsk4Vg8fuBe4wBeMQwgPmG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IrG-GigjNGNfYJUbTKGsnN
          claim_id: c_zOyQjmLhdk8l1djq9X9Fj0
          source_id: s_oLaKmsI2yTEy6v5qwPrEZR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34717 王世貞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oLaKmsI2yTEy6v5qwPrEZR
            source_type: api_record
            title: 中国历代人物传记资料库：王世德（CBDB 309379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309379&o=json
            external_identifier: CBDB:309379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dh9CnuPaa166GMCnTFvEL4
        status: active
        display_name: 王士骐
        merged_into_person_id: null
---

# 王世德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世德 | accepted |
| bio.summary | 王世德，明人物。嘉靖二十六年進士，籍贯崑山，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任官生。（中国历代人物传记资料库 CBDB 309379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |
| other | p_Dh9CnuPaa166GMCnTFvEL4 | 王士骐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世德（CBDB 309379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309379&o=json)
