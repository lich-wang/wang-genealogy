---
schema: wang-person/v1
id: p_DpriGiLpH9zMCxpSjK9uRY
status: active
merged_into: null
display_name: 王子謙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7T431Jha3FBTEKsAV1EzN2
        subject_person_id: p_DpriGiLpH9zMCxpSjK9uRY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dv9hGoGBB854QXPgrL1mYB
          claim_id: c_7T431Jha3FBTEKsAV1EzN2
          source_id: s_hAGfWy44WtSvZjeHRQUbyv
          stance: supports
          locator: CBDB:239296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239296）
          source: &a1
            id: s_hAGfWy44WtSvZjeHRQUbyv
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 239296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239296&o=json
            external_identifier: CBDB:239296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_boGyW2mnpDZvSqLymMM8hX
        subject_person_id: p_DpriGiLpH9zMCxpSjK9uRY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謙，明人物。正统十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 239296）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6NXX6m-tKabtAdUGVlioOA
          claim_id: c_boGyW2mnpDZvSqLymMM8hX
          source_id: s_hAGfWy44WtSvZjeHRQUbyv
          stance: supports
          locator: CBDB:239296
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SH_kx4VvBB9NnfdnE_b1ls
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpriGiLpH9zMCxpSjK9uRY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oX5ThzrL7FFUP4i8d7Qm1q
          claim_id: c_SH_kx4VvBB9NnfdnE_b1ls
          source_id: s_au1SvCMhvwAeeAzDyX6xyx
          stance: supports
          locator: CBDB：兄弟 王福（208015）之父／母 王意
          quotation: null
          interpretation_note: 由兄弟关系推断：王子謙 与 王福 为同胞（CBDB 记「兄」），王福 之父／母即 王子謙 之父／母。
          source:
            id: s_au1SvCMhvwAeeAzDyX6xyx
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 239296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239296&o=json
            external_identifier: CBDB:239296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UKmnBNaYcR6Y5ExUHqMqA5
        status: active
        display_name: 王意
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ff23jXAF7Eh3RVG9PYO7ES
        subject_person_id: p_DpriGiLpH9zMCxpSjK9uRY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MNVtNbmsRroI2YQbn3zW9j
          claim_id: c_Ff23jXAF7Eh3RVG9PYO7ES
          source_id: s_au1SvCMhvwAeeAzDyX6xyx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208015 王福）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_au1SvCMhvwAeeAzDyX6xyx
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 239296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239296&o=json
            external_identifier: CBDB:239296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H841UufcMkWpzbemaqposM
        status: active
        display_name: 王福
        merged_into_person_id: null
---

# 王子謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子謙 | accepted |
| bio.summary | 王子謙，明人物。正统十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 239296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKmnBNaYcR6Y5ExUHqMqA5 | 王意 | accepted |
| other | p_H841UufcMkWpzbemaqposM | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子謙（CBDB 239296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239296&o=json)
