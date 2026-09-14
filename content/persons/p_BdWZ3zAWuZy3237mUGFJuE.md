---
schema: wang-person/v1
id: p_BdWZ3zAWuZy3237mUGFJuE
status: active
merged_into: null
display_name: 王櫑
cbdb_id: 290699
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MC9dHZ48qg5aSF62zW1Mg
        subject_person_id: p_BdWZ3zAWuZy3237mUGFJuE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫑，明人物。嘉靖八年進士，籍贯奉化。（中国历代人物传记资料库 CBDB 290699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5bJgd6hCm7D2Z-yRNJ92h0
          claim_id: c_7MC9dHZ48qg5aSF62zW1Mg
          source_id: s_7Nsu45BfcVipkcSVd9bNWM
          stance: supports
          locator: CBDB:290699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7Nsu45BfcVipkcSVd9bNWM
            source_type: api_record
            title: 中国历代人物传记资料库：王櫑（CBDB 290699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290699&o=json
            external_identifier: CBDB:290699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EDLMad3Cz1kFBy7LMiKV2n
        subject_person_id: p_BdWZ3zAWuZy3237mUGFJuE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8AMYYADPJCpXEbUgY8B1Sw
          claim_id: c_EDLMad3Cz1kFBy7LMiKV2n
          source_id: s_7Nsu45BfcVipkcSVd9bNWM
          stance: supports
          locator: CBDB:290699
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WccYyschMK4U8l4eLPiVOK
        subject_person_id: p_Q6amHE4HK8gJDrscEZBJcD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BdWZ3zAWuZy3237mUGFJuE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HMC7XC0o_OhH8hBOAF2BjJ
          claim_id: c_WccYyschMK4U8l4eLPiVOK
          source_id: s_VYSpofKxHjkI6F5qLPvlTh
          stance: supports
          locator: CBDB：兄弟 王杏（202611）之父／母 王訓
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫑 与 王杏 为同胞（CBDB 记「兄」），王杏 之父／母即 王櫑 之父／母。
          source:
            id: s_VYSpofKxHjkI6F5qLPvlTh
            source_type: api_record
            title: 中国历代人物传记资料库：王櫑（CBDB 290699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290699&o=json
            external_identifier: CBDB:290699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6amHE4HK8gJDrscEZBJcD
        status: active
        display_name: 王訓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rwcnmaBrDSp1lN2WOejTtD
        subject_person_id: p_BdWZ3zAWuZy3237mUGFJuE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tqwNUi4YHEq3GLVvJB5D2K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCpmz28mLvbu6DNkUInAs-
          claim_id: c_rwcnmaBrDSp1lN2WOejTtD
          source_id: s_VYSpofKxHjkI6F5qLPvlTh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202611 王杏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VYSpofKxHjkI6F5qLPvlTh
            source_type: api_record
            title: 中国历代人物传记资料库：王櫑（CBDB 290699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290699&o=json
            external_identifier: CBDB:290699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tqwNUi4YHEq3GLVvJB5D2K
        status: active
        display_name: 王杏
        merged_into_person_id: null
---

# 王櫑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王櫑，明人物。嘉靖八年進士，籍贯奉化。（中国历代人物传记资料库 CBDB 290699） | accepted |
| name.primary | 王櫑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q6amHE4HK8gJDrscEZBJcD | 王訓 | accepted |
| other | p_tqwNUi4YHEq3GLVvJB5D2K | 王杏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王櫑（CBDB 290699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290699&o=json)
