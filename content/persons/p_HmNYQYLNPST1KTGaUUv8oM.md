---
schema: wang-person/v1
id: p_HmNYQYLNPST1KTGaUUv8oM
status: active
merged_into: null
display_name: 王一麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_anraJk1QNkN4xQH22ZMJrB
        subject_person_id: p_HmNYQYLNPST1KTGaUUv8oM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r5BZRsEqSMoNxqesFGMW2F
          claim_id: c_anraJk1QNkN4xQH22ZMJrB
          source_id: s_3A2ZKZUBqkDKs5pZU2S2Nj
          stance: supports
          locator: CBDB:298429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298429）
          source: &a1
            id: s_3A2ZKZUBqkDKs5pZU2S2Nj
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 298429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json
            external_identifier: CBDB:298429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EUscGUUkPGQkQfU5znRSa9
        subject_person_id: p_HmNYQYLNPST1KTGaUUv8oM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298429）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j0cnp2dXK0lavlD-gtLSwr
          claim_id: c_EUscGUUkPGQkQfU5znRSa9
          source_id: s_3A2ZKZUBqkDKs5pZU2S2Nj
          stance: supports
          locator: CBDB:298429
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hwelD-xFkX871Hvy_SQIrp
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HmNYQYLNPST1KTGaUUv8oM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pjafc4phsYKaeDFZ-0Pp6r
          claim_id: c_hwelD-xFkX871Hvy_SQIrp
          source_id: s_f0QGPoN4sF7BiVk9-47AzN
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一麟 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一麟 之父／母。
          source:
            id: s_f0QGPoN4sF7BiVk9-47AzN
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 298429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json
            external_identifier: CBDB:298429
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
        id: c_C5ufo151uTVXryQmbojOKp
        subject_person_id: p_HmNYQYLNPST1KTGaUUv8oM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctMuhCGj8AxFAs7rbmogS3
          claim_id: c_C5ufo151uTVXryQmbojOKp
          source_id: s_f0QGPoN4sF7BiVk9-47AzN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f0QGPoN4sF7BiVk9-47AzN
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 298429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json
            external_identifier: CBDB:298429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_axvKJHczRE94VwEvMVemSc
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一麟 | accepted |
| bio.summary | 王一麟，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298429） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iMDGVDoU4FmPtvJuYa8xHG | 王諭 | accepted |
| other | p_axvKJHczRE94VwEvMVemSc | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一麟（CBDB 298429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json)
