---
schema: wang-person/v1
id: p_ZWY8xZMkJzdZTRMT8Yjmes
status: active
merged_into: null
display_name: 王儉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RjoKcGD1ZjiGFwmoK7V2ut
        subject_person_id: p_ZWY8xZMkJzdZTRMT8Yjmes
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DWFPGiqT1DEyn3cQRTrMfK
          claim_id: c_RjoKcGD1ZjiGFwmoK7V2ut
          source_id: s_GTMaeMd7x1UQXAxEmZi1Ph
          stance: supports
          locator: CBDB:276671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276671）
          source: &a1
            id: s_GTMaeMd7x1UQXAxEmZi1Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 276671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276671&o=json
            external_identifier: CBDB:276671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KXGr9CroU6vmdNMFADgvo1
        subject_person_id: p_ZWY8xZMkJzdZTRMT8Yjmes
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉，明人物。正德六年進士，籍贯句容。（中国历代人物传记资料库 CBDB 276671）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ofv2oB_H-vnaFHO3dRL9H2
          claim_id: c_KXGr9CroU6vmdNMFADgvo1
          source_id: s_GTMaeMd7x1UQXAxEmZi1Ph
          stance: supports
          locator: CBDB:276671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qrmw5YpYbbKOpLoOS25aBb
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZWY8xZMkJzdZTRMT8Yjmes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeXtKGOhP_FJixqITJw4zC
          claim_id: c_Qrmw5YpYbbKOpLoOS25aBb
          source_id: s_fwR__8b1DZ8yXL5ah-m8XL
          stance: supports
          locator: CBDB：兄弟 王介（201700）之父／母 王惟德
          quotation: null
          interpretation_note: 由兄弟关系推断：王儉 与 王介 为同胞（CBDB 记「弟」），王介 之父／母即 王儉 之父／母。
          source:
            id: s_fwR__8b1DZ8yXL5ah-m8XL
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 276671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276671&o=json
            external_identifier: CBDB:276671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oATKFKdRvk6K28ajcm7R48
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_21NYoYeUn4NNeYCdobqbFV
        subject_person_id: p_ZWY8xZMkJzdZTRMT8Yjmes
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qm3yXmnP5j_JDlkmS79O42
          claim_id: c_21NYoYeUn4NNeYCdobqbFV
          source_id: s_fwR__8b1DZ8yXL5ah-m8XL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201700 王介）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fwR__8b1DZ8yXL5ah-m8XL
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 276671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276671&o=json
            external_identifier: CBDB:276671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oEEcQRCAqs4YewibUGGkH9
        status: active
        display_name: 王介
        merged_into_person_id: null
---

# 王儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儉 | accepted |
| bio.summary | 王儉，明人物。正德六年進士，籍贯句容。（中国历代人物传记资料库 CBDB 276671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oATKFKdRvk6K28ajcm7R48 | 王惟德 | accepted |
| other | p_oEEcQRCAqs4YewibUGGkH9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 276671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276671&o=json)
