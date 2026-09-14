---
schema: wang-person/v1
id: p_354XDNnF2jP5CLDqCQoBca
status: active
merged_into: null
display_name: 王瑀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QK9hPyaMV9K5KqEREA7HkG
        subject_person_id: p_354XDNnF2jP5CLDqCQoBca
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxbQ57g8xTjKk2biE329RA
          claim_id: c_QK9hPyaMV9K5KqEREA7HkG
          source_id: s_os4pAm8sVHo6U37PBhx5up
          stance: supports
          locator: CBDB:260247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260247）
          source: &a1
            id: s_os4pAm8sVHo6U37PBhx5up
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 260247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json
            external_identifier: CBDB:260247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RiHNsV3P25UoADwZ1MKSh4
        subject_person_id: p_354XDNnF2jP5CLDqCQoBca
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sVimukd2dxCYctI8xxt22c
          claim_id: c_RiHNsV3P25UoADwZ1MKSh4
          source_id: s_os4pAm8sVHo6U37PBhx5up
          stance: supports
          locator: CBDB:260247
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9KCsjlgcr0hLOeW4J66epc
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_354XDNnF2jP5CLDqCQoBca
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BPda3DPV2GODRrBh8btGJ
          claim_id: c_9KCsjlgcr0hLOeW4J66epc
          source_id: s_x0HeFMJBxQ15xYGrey2oSw
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑀 之父／母。
          source:
            id: s_x0HeFMJBxQ15xYGrey2oSw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 260247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json
            external_identifier: CBDB:260247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y9VpT5a4bHRsBrje4LpbfA
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JKeCmTGRZQ2Oe2SrP5x6oU
        subject_person_id: p_354XDNnF2jP5CLDqCQoBca
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuaYWgjyJIGycDihRbwcSx
          claim_id: c_JKeCmTGRZQ2Oe2SrP5x6oU
          source_id: s_x0HeFMJBxQ15xYGrey2oSw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x0HeFMJBxQ15xYGrey2oSw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 260247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json
            external_identifier: CBDB:260247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y9VpT5a4bHRsBrje4LpbfA | 王豫 | accepted |
| other | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 260247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json)
