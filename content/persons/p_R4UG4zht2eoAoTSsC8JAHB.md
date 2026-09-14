---
schema: wang-person/v1
id: p_R4UG4zht2eoAoTSsC8JAHB
status: active
merged_into: null
display_name: 王冏
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NuCa942MQp2XQE4URFG54P
        subject_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P5wkmGyH3oCH3KE948UGYV
          claim_id: c_NuCa942MQp2XQE4URFG54P
          source_id: s_1fvzYDoafrPKeN3RV2bgu8
          stance: supports
          locator: CBDB:3940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3940）
          source: &a1
            id: s_1fvzYDoafrPKeN3RV2bgu8
            source_type: api_record
            title: 中国历代人物传记资料库：王冏（CBDB 3940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json
            external_identifier: CBDB:3940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3WKrGdRxs9dojLEPnPsPiB
        subject_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冏，宋人物。籍贯汝陰，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 3940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yhlGrNDHeCJ-ii5qNGvsbI
          claim_id: c_3WKrGdRxs9dojLEPnPsPiB
          source_id: s_1fvzYDoafrPKeN3RV2bgu8
          stance: supports
          locator: CBDB:3940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wEYd78x8Nf_ZWRcNQPT_Xp
        subject_person_id: p_MvjnQ8zRv6SbE2KLZKNY8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_IEcHvr2NWOdhbp6nl2LcJf
          claim_id: c_wEYd78x8Nf_ZWRcNQPT_Xp
          source_id: s_60xc-ZReU4EsTIdPMTeE38
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1856）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_60xc-ZReU4EsTIdPMTeE38
            source_type: api_record
            title: 中国历代人物传记资料库：王冏（CBDB 3940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json
            external_identifier: CBDB:3940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MvjnQ8zRv6SbE2KLZKNY8r
        status: active
        display_name: 王平
        merged_into_person_id: null
    - claim:
        id: c_FBjWL9YESkLs3FxrD5yLbV
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2R-bgcY-3Ylk3fY9NgMfSO
          claim_id: c_FBjWL9YESkLs3FxrD5yLbV
          source_id: s_60xc-ZReU4EsTIdPMTeE38
          stance: supports
          locator: CBDB：兄弟 王回（3958）之父／母 王平言
          quotation: null
          interpretation_note: 由兄弟关系推断：王冏 与 王回 为同胞（CBDB 记「兄」），王回 之父／母即 王冏 之父／母。
          source:
            id: s_60xc-ZReU4EsTIdPMTeE38
            source_type: api_record
            title: 中国历代人物传记资料库：王冏（CBDB 3940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json
            external_identifier: CBDB:3940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XLQnjXPKwDsW1NBJZky1dr
        status: active
        display_name: 王平言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B45ssijilKeh6FZsrw6fr3
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFWs94VlXdo1LpKZk6jz5G
          claim_id: c_B45ssijilKeh6FZsrw6fr3
          source_id: s_60xc-ZReU4EsTIdPMTeE38
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 3958 王回）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60xc-ZReU4EsTIdPMTeE38
            source_type: api_record
            title: 中国历代人物传记资料库：王冏（CBDB 3940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json
            external_identifier: CBDB:3940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_APTq991Q3yJCPFR1a9881c
        status: active
        display_name: 王回
        merged_into_person_id: null
    - claim:
        id: c_ailhAOTgFLe4vHaZuEntqO
        subject_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVMdJehoH5B4yPtHuvj6nY
          claim_id: c_ailhAOTgFLe4vHaZuEntqO
          source_id: s_60xc-ZReU4EsTIdPMTeE38
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22043 王向）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60xc-ZReU4EsTIdPMTeE38
            source_type: api_record
            title: 中国历代人物传记资料库：王冏（CBDB 3940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json
            external_identifier: CBDB:3940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K5LjMqeJMi1bJQpP3h2SuW
        status: active
        display_name: 王向
        merged_into_person_id: null
---

# 王冏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冏 | accepted |
| bio.summary | 王冏，宋人物。籍贯汝陰，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 3940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MvjnQ8zRv6SbE2KLZKNY8r | 王平 | accepted |
| parents | p_XLQnjXPKwDsW1NBJZky1dr | 王平言 | accepted |
| other | p_APTq991Q3yJCPFR1a9881c | 王回 | accepted |
| other | p_K5LjMqeJMi1bJQpP3h2SuW | 王向 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冏（CBDB 3940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json)
