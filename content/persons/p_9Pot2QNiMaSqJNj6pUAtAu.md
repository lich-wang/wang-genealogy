---
schema: wang-person/v1
id: p_9Pot2QNiMaSqJNj6pUAtAu
status: active
merged_into: null
display_name: 王璘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CWMjnGB64AM8S4AfCZzwtC
        subject_person_id: p_9Pot2QNiMaSqJNj6pUAtAu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GtADYFffWE25VMLkbVZT4b
          claim_id: c_CWMjnGB64AM8S4AfCZzwtC
          source_id: s_sKt7NG5XvPFXPdckHSwkoa
          stance: supports
          locator: CBDB:257481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257481）
          source: &a1
            id: s_sKt7NG5XvPFXPdckHSwkoa
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 257481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257481&o=json
            external_identifier: CBDB:257481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Eqwav3Wsv4z2JW8sGiH6xU
        subject_person_id: p_9Pot2QNiMaSqJNj6pUAtAu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘，明人物。成化二十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 257481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mymeda7NC75TzpEg_F3j_o
          claim_id: c_Eqwav3Wsv4z2JW8sGiH6xU
          source_id: s_sKt7NG5XvPFXPdckHSwkoa
          stance: supports
          locator: CBDB:257481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BxO7DOGMeyt0Mrd_imZ3Kl
        subject_person_id: p_3zRBK42K5MyFsKs7staexG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Pot2QNiMaSqJNj6pUAtAu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tk_uFRMJOhTx-aaV79B4kX
          claim_id: c_BxO7DOGMeyt0Mrd_imZ3Kl
          source_id: s_lqx-hb7KiSn_PYY8apYm2_
          stance: supports
          locator: CBDB：兄弟 王璽（126870）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王璘 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璘 之父／母。
          source:
            id: s_lqx-hb7KiSn_PYY8apYm2_
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 257481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257481&o=json
            external_identifier: CBDB:257481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zRBK42K5MyFsKs7staexG
        status: active
        display_name: 王淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Vk93Nsa1Ru7iS5L7Lr-swW
        subject_person_id: p_9Pot2QNiMaSqJNj6pUAtAu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9-d-x0H4OAVPVmwKEuc7ep
          claim_id: c_Vk93Nsa1Ru7iS5L7Lr-swW
          source_id: s_lqx-hb7KiSn_PYY8apYm2_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126870 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lqx-hb7KiSn_PYY8apYm2_
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 257481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257481&o=json
            external_identifier: CBDB:257481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2oY1DBC6ZsoMfLhszPRPg
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| bio.summary | 王璘，明人物。成化二十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 257481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zRBK42K5MyFsKs7staexG | 王淵 | accepted |
| other | p_A2oY1DBC6ZsoMfLhszPRPg | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璘（CBDB 257481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257481&o=json)
