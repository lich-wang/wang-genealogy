---
schema: wang-person/v1
id: p_6jw2H1KWkaDQExePFFB6Yj
status: active
merged_into: null
display_name: 王孟良
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMkvsuifAFXrtLSGENbWhD
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BhK4YkNsq2B2Ee3KZ9M37
          claim_id: c_wMkvsuifAFXrtLSGENbWhD
          source_id: s_V9JaY25oCXbWANDrnJmb8P
          stance: supports
          locator: CBDB:251771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251771）
          source: &a1
            id: s_V9JaY25oCXbWANDrnJmb8P
            source_type: api_record
            title: 中国历代人物传记资料库：王孟良（CBDB 251771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251771&o=json
            external_identifier: CBDB:251771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y5cQLQHysFbx327MfcZQe1
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟良，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_15-8t7-84axVZGhT0YOqE5
          claim_id: c_Y5cQLQHysFbx327MfcZQe1
          source_id: s_V9JaY25oCXbWANDrnJmb8P
          stance: supports
          locator: CBDB:251771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aVkYEFWIQYM8Fr4ygkECpF
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NyYs75tiy6TeiLPrp_VQL1
          claim_id: c_aVkYEFWIQYM8Fr4ygkECpF
          source_id: s_V9JaY25oCXbWANDrnJmb8P
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9PrBQcpmCF997Qgs2oiS3t
        status: active
        display_name: 王本儉
        merged_into_person_id: null
    - claim:
        id: c_sG2YuTf099XKxezB9XpWHx
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYey2g1wYQhjGuqsaWu3KR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqe8hArU9l5wKvUPE4I3YO
          claim_id: c_sG2YuTf099XKxezB9XpWHx
          source_id: s_bUtaBofzw2bpRP6q4ylRVe
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王邵 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王邵 之父／母。
          source:
            id: s_bUtaBofzw2bpRP6q4ylRVe
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 251777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json
            external_identifier: CBDB:251777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYey2g1wYQhjGuqsaWu3KR
        status: active
        display_name: 王邵
        merged_into_person_id: null
    - claim:
        id: c_WzFStDhrVDTeEjbGZzwqlY
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G1Ug4TzjKE3SJeEyp3nW9G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3rODCgkJxVQTpl1K0SVRwH
          claim_id: c_WzFStDhrVDTeEjbGZzwqlY
          source_id: s_GPOlhq3cEXtNbfJ0VPGUfa
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王郇 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王郇 之父／母。
          source:
            id: s_GPOlhq3cEXtNbfJ0VPGUfa
            source_type: api_record
            title: 中国历代人物传记资料库：王郇（CBDB 251778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json
            external_identifier: CBDB:251778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G1Ug4TzjKE3SJeEyp3nW9G
        status: active
        display_name: 王郇
        merged_into_person_id: null
    - claim:
        id: c_womdhMZPVXF3jIfbuuOw26
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCfHD6mvyXrG1eXFjXNwRa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcWS4o2HOECJrSzgNBFTll
          claim_id: c_womdhMZPVXF3jIfbuuOw26
          source_id: s_xbiJ9G0_aZ-h4xJy4GYt8X
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王郭 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王郭 之父／母。
          source:
            id: s_xbiJ9G0_aZ-h4xJy4GYt8X
            source_type: api_record
            title: 中国历代人物传记资料库：王郭（CBDB 251776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json
            external_identifier: CBDB:251776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JCfHD6mvyXrG1eXFjXNwRa
        status: active
        display_name: 王郭
        merged_into_person_id: null
    - claim:
        id: c_bDXte0375FtP_sL95RlQRP
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UBGHnQm4ZWY7CHDozUhv2E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NX_X-MOj7yBmrtFTwA3aqW
          claim_id: c_bDXte0375FtP_sL95RlQRP
          source_id: s_qGKU15tsapk8ueDuxqpIpH
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王鄖 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王鄖 之父／母。
          source:
            id: s_qGKU15tsapk8ueDuxqpIpH
            source_type: api_record
            title: 中国历代人物传记资料库：王鄖（CBDB 251780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251780&o=json
            external_identifier: CBDB:251780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UBGHnQm4ZWY7CHDozUhv2E
        status: active
        display_name: 王鄖
        merged_into_person_id: null
    - claim:
        id: c_lTfUbsV5n6dyPPxQElTZkz
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ouqs9QXbb97G4sutE4DonZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wcNiJIaX5vk5OjuUfxrlLf
          claim_id: c_lTfUbsV5n6dyPPxQElTZkz
          source_id: s_edmD9wc0v6ECS54oMqv6UI
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦 与 王本儉 为同胞（CBDB 记「弟」），王本儉 之父／母即 王邦 之父／母。
          source:
            id: s_edmD9wc0v6ECS54oMqv6UI
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 251775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json
            external_identifier: CBDB:251775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ouqs9QXbb97G4sutE4DonZ
        status: active
        display_name: 王邦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孟良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟良 | accepted |
| bio.summary | 王孟良，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9PrBQcpmCF997Qgs2oiS3t | 王本儉 | accepted |
| children | p_DYey2g1wYQhjGuqsaWu3KR | 王邵 | accepted |
| children | p_G1Ug4TzjKE3SJeEyp3nW9G | 王郇 | accepted |
| children | p_JCfHD6mvyXrG1eXFjXNwRa | 王郭 | accepted |
| children | p_UBGHnQm4ZWY7CHDozUhv2E | 王鄖 | accepted |
| children | p_ouqs9QXbb97G4sutE4DonZ | 王邦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦（CBDB 251775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json)
- [中国历代人物传记资料库：王郭（CBDB 251776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json)
- [中国历代人物传记资料库：王郇（CBDB 251778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json)
- [中国历代人物传记资料库：王孟良（CBDB 251771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251771&o=json)
- [中国历代人物传记资料库：王邵（CBDB 251777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json)
- [中国历代人物传记资料库：王鄖（CBDB 251780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251780&o=json)
