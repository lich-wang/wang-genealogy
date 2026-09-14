---
schema: wang-person/v1
id: p_4DBPgFDtrEYdZbGdhqcUCp
status: active
merged_into: null
display_name: 王鎣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAqYw7HMopMdmttK52MgFd
        subject_person_id: p_4DBPgFDtrEYdZbGdhqcUCp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fG2V4tRutvAQF8Tca3Bt8R
          claim_id: c_dAqYw7HMopMdmttK52MgFd
          source_id: s_bbQwLASozdp3EC6Jjdsh5S
          stance: supports
          locator: CBDB:244359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244359）
          source: &a1
            id: s_bbQwLASozdp3EC6Jjdsh5S
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 244359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244359&o=json
            external_identifier: CBDB:244359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iCRj1S5M9vpeMDD3wXFcHB
        subject_person_id: p_4DBPgFDtrEYdZbGdhqcUCp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎣，明人物。成化五年進士，籍贯襄城。（中国历代人物传记资料库 CBDB 244359）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ikAOnkZGOVmdgh9s5Y_B44
          claim_id: c_iCRj1S5M9vpeMDD3wXFcHB
          source_id: s_bbQwLASozdp3EC6Jjdsh5S
          stance: supports
          locator: CBDB:244359
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CNr6O4tdmDR4QKjA0zp2NS
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DBPgFDtrEYdZbGdhqcUCp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqtSJrajvZei217LEK7xVL
          claim_id: c_CNr6O4tdmDR4QKjA0zp2NS
          source_id: s_tCPbB-Pfwzex73wwJKCoLC
          stance: supports
          locator: CBDB：兄弟 王錦（199393）之父／母 王瓖
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎣 与 王錦 为同胞（CBDB 记「兄」），王錦 之父／母即 王鎣 之父／母。
          source:
            id: s_tCPbB-Pfwzex73wwJKCoLC
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 244359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244359&o=json
            external_identifier: CBDB:244359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vBZf8XcAfN7YLCu434S6Mn
        status: active
        display_name: 王瓖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-Lye6FEQII0G9iaRQ4B-WL
        subject_person_id: p_4DBPgFDtrEYdZbGdhqcUCp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_prR5c0Q9ynPFFFzGkz2Yku
          claim_id: c_-Lye6FEQII0G9iaRQ4B-WL
          source_id: s_tCPbB-Pfwzex73wwJKCoLC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199393 王錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tCPbB-Pfwzex73wwJKCoLC
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 244359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244359&o=json
            external_identifier: CBDB:244359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_epxa1325d3t8zGBhqaGATe
        status: active
        display_name: 王錦
        merged_into_person_id: null
---

# 王鎣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎣 | accepted |
| bio.summary | 王鎣，明人物。成化五年進士，籍贯襄城。（中国历代人物传记资料库 CBDB 244359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vBZf8XcAfN7YLCu434S6Mn | 王瓖 | accepted |
| other | p_epxa1325d3t8zGBhqaGATe | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎣（CBDB 244359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244359&o=json)
