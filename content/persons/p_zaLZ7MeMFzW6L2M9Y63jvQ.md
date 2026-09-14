---
schema: wang-person/v1
id: p_zaLZ7MeMFzW6L2M9Y63jvQ
status: active
merged_into: null
display_name: 王一臣
cbdb_id: 298427
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5eWxFEsCwe18MT27HmZUNu
        subject_person_id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一臣，明人物。嘉靖十四年進士，籍贯福清，曾任縣丞。（中国历代人物传记资料库 CBDB 298427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XXtNXcpwVnoVN384_O_g2z
          claim_id: c_5eWxFEsCwe18MT27HmZUNu
          source_id: s_peQXWQFVLdHAsk5B6dC1wM
          stance: supports
          locator: CBDB:298427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_peQXWQFVLdHAsk5B6dC1wM
            source_type: api_record
            title: 中国历代人物传记资料库：王一臣（CBDB 298427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json
            external_identifier: CBDB:298427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_27E1MQBzzBnqstRKn3Mftk
        subject_person_id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6t9P5Rzz4LceoNdw33uLe2
          claim_id: c_27E1MQBzzBnqstRKn3Mftk
          source_id: s_peQXWQFVLdHAsk5B6dC1wM
          stance: supports
          locator: CBDB:298427
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b3H5HhR63an1kkD0-Ofulg
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fuBPr-1LAdcqFf3P-3gHLb
          claim_id: c_b3H5HhR63an1kkD0-Ofulg
          source_id: s_kwnqevomL2-vtTpnaZdClx
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一臣 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一臣 之父／母。
          source:
            id: s_kwnqevomL2-vtTpnaZdClx
            source_type: api_record
            title: 中国历代人物传记资料库：王一臣（CBDB 298427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json
            external_identifier: CBDB:298427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iMDGVDoU4FmPtvJuYa8xHG
        status: active
        display_name: 王諭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_reKEtRKs4wBu5NVbwg-PiB
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-I9eboPYhaVqQ8irLmX3Ic
          claim_id: c_reKEtRKs4wBu5NVbwg-PiB
          source_id: s_kwnqevomL2-vtTpnaZdClx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kwnqevomL2-vtTpnaZdClx
            source_type: api_record
            title: 中国历代人物传记资料库：王一臣（CBDB 298427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json
            external_identifier: CBDB:298427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_axvKJHczRE94VwEvMVemSc
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一臣，明人物。嘉靖十四年進士，籍贯福清，曾任縣丞。（中国历代人物传记资料库 CBDB 298427） | accepted |
| name.primary | 王一臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iMDGVDoU4FmPtvJuYa8xHG | 王諭 | accepted |
| other | p_axvKJHczRE94VwEvMVemSc | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一臣（CBDB 298427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json)
