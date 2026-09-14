---
schema: wang-person/v1
id: p_A1AYcvj4ZubEnPn3vW6v9a
status: active
merged_into: null
display_name: 王敏學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EspQfdp2uZQ6ABvDuWCcxV
        subject_person_id: p_A1AYcvj4ZubEnPn3vW6v9a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y3fZ7ZUUNmnSwBjRrjQAxd
          claim_id: c_EspQfdp2uZQ6ABvDuWCcxV
          source_id: s_NTJ6hXbdw2BEZeHYSNzmXC
          stance: supports
          locator: CBDB:237273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237273）
          source: &a1
            id: s_NTJ6hXbdw2BEZeHYSNzmXC
            source_type: api_record
            title: 中国历代人物传记资料库：王敏學（CBDB 237273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237273&o=json
            external_identifier: CBDB:237273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5tEHuvBDu5LvBakH9Ea8Gh
        subject_person_id: p_A1AYcvj4ZubEnPn3vW6v9a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏學，明人物。正統四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 237273）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SPdTmzcy8ZAG4z6hezYQ-f
          claim_id: c_5tEHuvBDu5LvBakH9Ea8Gh
          source_id: s_NTJ6hXbdw2BEZeHYSNzmXC
          stance: supports
          locator: CBDB:237273
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Kc246bKAldWbdZxV89WcGp
        subject_person_id: p_vziev5XZKu5i15QAie4vMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A1AYcvj4ZubEnPn3vW6v9a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIElAz8CyRjf3OA8h3qt19
          claim_id: c_Kc246bKAldWbdZxV89WcGp
          source_id: s_RhkMhqXxz-gnbSuCfdVc5U
          stance: supports
          locator: CBDB：兄弟 王訥（207872）之父／母 王景深
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏學 与 王訥 为同胞（CBDB 记「兄」），王訥 之父／母即 王敏學 之父／母。
          source:
            id: s_RhkMhqXxz-gnbSuCfdVc5U
            source_type: api_record
            title: 中国历代人物传记资料库：王敏學（CBDB 237273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237273&o=json
            external_identifier: CBDB:237273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vziev5XZKu5i15QAie4vMb
        status: active
        display_name: 王景深
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WkQuOnE_DAvAa6SGo56oeq
        subject_person_id: p_A1AYcvj4ZubEnPn3vW6v9a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iiNybZ-Kz9uUwjEVbVyjIB
          claim_id: c_WkQuOnE_DAvAa6SGo56oeq
          source_id: s_RhkMhqXxz-gnbSuCfdVc5U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207872 王訥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RhkMhqXxz-gnbSuCfdVc5U
            source_type: api_record
            title: 中国历代人物传记资料库：王敏學（CBDB 237273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237273&o=json
            external_identifier: CBDB:237273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ieK4DN3AcasJWKbAPHMC7t
        status: active
        display_name: 王訥
        merged_into_person_id: null
---

# 王敏學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏學 | accepted |
| bio.summary | 王敏學，明人物。正統四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 237273） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vziev5XZKu5i15QAie4vMb | 王景深 | accepted |
| other | p_ieK4DN3AcasJWKbAPHMC7t | 王訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏學（CBDB 237273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237273&o=json)
