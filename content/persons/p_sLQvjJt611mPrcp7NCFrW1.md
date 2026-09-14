---
schema: wang-person/v1
id: p_sLQvjJt611mPrcp7NCFrW1
status: active
merged_into: null
display_name: 王茂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BTJtHozEGZZGS9bsTzRJEK
        subject_person_id: p_sLQvjJt611mPrcp7NCFrW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o2GYRvG7X1CsKbtyMfj4ML
          claim_id: c_BTJtHozEGZZGS9bsTzRJEK
          source_id: s_z2e9WkdekYBQmjQYcvxXac
          stance: supports
          locator: CBDB:209393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209393）
          source: &a1
            id: s_z2e9WkdekYBQmjQYcvxXac
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 209393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209393&o=json
            external_identifier: CBDB:209393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kDrsZw7b8Duc6PWe8Epc9t
        subject_person_id: p_sLQvjJt611mPrcp7NCFrW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209393）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jYvJ5n4J8gYA2RuhFKo_up
          claim_id: c_kDrsZw7b8Duc6PWe8Epc9t
          source_id: s_z2e9WkdekYBQmjQYcvxXac
          stance: supports
          locator: CBDB:209393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C5ccpEFRc_RvisrQj8fA_C
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sLQvjJt611mPrcp7NCFrW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yauAcbXAwQAfUI5e9S6dAu
          claim_id: c_C5ccpEFRc_RvisrQj8fA_C
          source_id: s_M13nitQwZys2CsfZIh_wnR
          stance: supports
          locator: CBDB：兄弟 王昭（198949）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王茂 与 王昭 为同胞（CBDB 记「兄」），王昭 之父／母即 王茂 之父／母。
          source:
            id: s_M13nitQwZys2CsfZIh_wnR
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 209393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209393&o=json
            external_identifier: CBDB:209393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Btfea7jDKKytTsOQ_4eCD0
        subject_person_id: p_rueH5VJGf9EEceCDH3UTnn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sLQvjJt611mPrcp7NCFrW1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sATZ_Y3uaBnQiEzAlp9fkj
          claim_id: c_Btfea7jDKKytTsOQ_4eCD0
          source_id: s_M13nitQwZys2CsfZIh_wnR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198949 王昭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_M13nitQwZys2CsfZIh_wnR
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 209393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209393&o=json
            external_identifier: CBDB:209393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rueH5VJGf9EEceCDH3UTnn
        status: active
        display_name: 王昭
        merged_into_person_id: null
---

# 王茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂 | accepted |
| bio.summary | 王茂，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LkHA7Eh6TZ3G6EVZV4TAQp | 王斌 | accepted |
| other | p_rueH5VJGf9EEceCDH3UTnn | 王昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂（CBDB 209393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209393&o=json)
