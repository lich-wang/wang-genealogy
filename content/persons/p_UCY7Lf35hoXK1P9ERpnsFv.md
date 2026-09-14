---
schema: wang-person/v1
id: p_UCY7Lf35hoXK1P9ERpnsFv
status: active
merged_into: null
display_name: 王子昌
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MqLbYvHZ3qME5Q9V9CrmRP
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8P7iNMv853B1DSa2n4uET
          claim_id: c_MqLbYvHZ3qME5Q9V9CrmRP
          source_id: s_vXRma67PtKgp4zgo2uC681
          stance: supports
          locator: CBDB:294940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294940）
          source: &a1
            id: s_vXRma67PtKgp4zgo2uC681
            source_type: api_record
            title: 中国历代人物传记资料库：王子昌（CBDB 294940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294940&o=json
            external_identifier: CBDB:294940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MoDAw72BsL4HZH7Jgp4Ng6
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子昌，明人物。天順元年進士，籍贯金華。（中国历代人物传记资料库 CBDB 294940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jhH5ZzkY6dejx-DwqneMOK
          claim_id: c_MoDAw72BsL4HZH7Jgp4Ng6
          source_id: s_vXRma67PtKgp4zgo2uC681
          stance: supports
          locator: CBDB:294940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_q75jy5dJlHBJZ0dsFcics0
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uaek5dH7vUvS3w7o2aMbko
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-nH6kJUQkYJVieOGT1n3MG
          claim_id: c_q75jy5dJlHBJZ0dsFcics0
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ALbcHnh28ruonXPAzF68S
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 198619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json
            external_identifier: CBDB:198619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uaek5dH7vUvS3w7o2aMbko
        status: active
        display_name: 王存禮
        merged_into_person_id: null
    - claim:
        id: c_H7Ivfpo4OY6xMH-wO-VHc1
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Te6Es6Zcu5AXunuxkZ5zGM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wn7QVjXXkM1eZVOAfQQDPj
          claim_id: c_H7Ivfpo4OY6xMH-wO-VHc1
          source_id: s_1TXlx1aWz6faVMgfJlwNwm
          stance: supports
          locator: CBDB：兄弟 王存禮（198619）之父／母 王子昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王文華 与 王存禮 为同胞（CBDB 记「弟」），王存禮 之父／母即 王文華 之父／母。
          source:
            id: s_1TXlx1aWz6faVMgfJlwNwm
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 294973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294973&o=json
            external_identifier: CBDB:294973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Te6Es6Zcu5AXunuxkZ5zGM
        status: active
        display_name: 王文華
        merged_into_person_id: null
    - claim:
        id: c_ulC7LUVHFpFU44PiXNW8_d
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XACWmfjcV4Kg4HtSUSzAnE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msA-_Q6QBZUaAU4YjFRSxJ
          claim_id: c_ulC7LUVHFpFU44PiXNW8_d
          source_id: s_ZKq0xcxMysFDggpL3k8L_x
          stance: supports
          locator: CBDB：兄弟 王存禮（198619）之父／母 王子昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王文偉 与 王存禮 为同胞（CBDB 记「兄」），王存禮 之父／母即 王文偉 之父／母。
          source:
            id: s_ZKq0xcxMysFDggpL3k8L_x
            source_type: api_record
            title: 中国历代人物传记资料库：王文偉（CBDB 294996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294996&o=json
            external_identifier: CBDB:294996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XACWmfjcV4Kg4HtSUSzAnE
        status: active
        display_name: 王文偉
        merged_into_person_id: null
    - claim:
        id: c_rxfhYROn6x0dd49xZUJPEa
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o6WQRYCcwN19hjUVGwpP7P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDS_DmSDaja12NVObMq_i4
          claim_id: c_rxfhYROn6x0dd49xZUJPEa
          source_id: s_dO7OYolbn91AzoE4MOV_vh
          stance: supports
          locator: CBDB：兄弟 王存禮（198619）之父／母 王子昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王文政 与 王存禮 为同胞（CBDB 记「弟」），王存禮 之父／母即 王文政 之父／母。
          source:
            id: s_dO7OYolbn91AzoE4MOV_vh
            source_type: api_record
            title: 中国历代人物传记资料库：王文政（CBDB 294985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294985&o=json
            external_identifier: CBDB:294985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o6WQRYCcwN19hjUVGwpP7P
        status: active
        display_name: 王文政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子昌 | accepted |
| bio.summary | 王子昌，明人物。天順元年進士，籍贯金華。（中国历代人物传记资料库 CBDB 294940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uaek5dH7vUvS3w7o2aMbko | 王存禮 | accepted |
| children | p_Te6Es6Zcu5AXunuxkZ5zGM | 王文華 | accepted |
| children | p_XACWmfjcV4Kg4HtSUSzAnE | 王文偉 | accepted |
| children | p_o6WQRYCcwN19hjUVGwpP7P | 王文政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 198619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json)
- [中国历代人物传记资料库：王文華（CBDB 294973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294973&o=json)
- [中国历代人物传记资料库：王文偉（CBDB 294996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294996&o=json)
- [中国历代人物传记资料库：王文政（CBDB 294985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294985&o=json)
- [中国历代人物传记资料库：王子昌（CBDB 294940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294940&o=json)
