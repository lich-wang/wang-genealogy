---
schema: wang-person/v1
id: p_8kQgVN3FjWf6BR7HACAhWz
status: active
merged_into: null
display_name: 王綬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wnLtJTVmsiQyntLqXcANR
        subject_person_id: p_8kQgVN3FjWf6BR7HACAhWz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P4AZo7EauVYW2FyMKffhgV
          claim_id: c_2wnLtJTVmsiQyntLqXcANR
          source_id: s_u6rupJjMXxvJWi2UqG8ZX7
          stance: supports
          locator: CBDB:285667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285667）
          source: &a1
            id: s_u6rupJjMXxvJWi2UqG8ZX7
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 285667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json
            external_identifier: CBDB:285667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BoRE1MBux1vxv9kZyY64L2
        subject_person_id: p_8kQgVN3FjWf6BR7HACAhWz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285667）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tBKIbJSBJvE_99USdKyggo
          claim_id: c_BoRE1MBux1vxv9kZyY64L2
          source_id: s_u6rupJjMXxvJWi2UqG8ZX7
          stance: supports
          locator: CBDB:285667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0-gynM3WPbyYO0VWyR5iOk
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kQgVN3FjWf6BR7HACAhWz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XwokYChuQPWqzFKfa3f2Bv
          claim_id: c_0-gynM3WPbyYO0VWyR5iOk
          source_id: s_x8epU5eB4Vrd3s5Sw78bsf
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王綬 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王綬 之父／母。
          source:
            id: s_x8epU5eB4Vrd3s5Sw78bsf
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 285667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json
            external_identifier: CBDB:285667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ETf8kmCosGHgchW9GUTGiB
        status: active
        display_name: 王絕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xVEOqB9fQswp9r0_nKXV2m
        subject_person_id: p_8kQgVN3FjWf6BR7HACAhWz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRqjxAQTO3IUG8q6GKfW8T
          claim_id: c_xVEOqB9fQswp9r0_nKXV2m
          source_id: s_x8epU5eB4Vrd3s5Sw78bsf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x8epU5eB4Vrd3s5Sw78bsf
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 285667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json
            external_identifier: CBDB:285667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AoR8GkNH17NPVQc7r3ceML
        status: active
        display_name: 王紀
        merged_into_person_id: null
---

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| bio.summary | 王綬，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ETf8kmCosGHgchW9GUTGiB | 王絕 | accepted |
| other | p_AoR8GkNH17NPVQc7r3ceML | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 285667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json)
