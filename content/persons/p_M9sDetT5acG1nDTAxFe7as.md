---
schema: wang-person/v1
id: p_M9sDetT5acG1nDTAxFe7as
status: active
merged_into: null
display_name: 王之望
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CG1GRCB7zmxnJ7doE4nBRd
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m5BSyqsBEEJE6p9igKAcJ4
          claim_id: c_CG1GRCB7zmxnJ7doE4nBRd
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: CBDB:1787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1787）
          source: &a1
            id: s_e5DyWRHhCLMf3Rcv5swhW7
            source_type: api_record
            title: 中国历代人物传记资料库：王之望（CBDB 1787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json
            external_identifier: CBDB:1787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QmjSAgSJBeLVfd2FpUiUMD
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1103年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6qQe9EJUqFJuX8gw7nPdCN
          claim_id: c_QmjSAgSJBeLVfd2FpUiUMD
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sL7CQPxmqCMDMYLJeVNbKe
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1170年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yFP9P8JR5Y3M9NNAE89SkA
          claim_id: c_sL7CQPxmqCMDMYLJeVNbKe
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JnfMbggZLYmKxV5umA9FBo
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J79ntpyu5kKeNgJ6PYUD4h
          claim_id: c_JnfMbggZLYmKxV5umA9FBo
          source_id: s_e5DyWRHhCLMf3Rcv5swhW7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ENjkpSNk5ZsKSKB9G9cQld
        subject_person_id: p_9mXC5Vf3jEyoF6c6eS5VsK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M9sDetT5acG1nDTAxFe7as
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__YF-Lbj3c1DoAqPQxfKF3D
          claim_id: c_ENjkpSNk5ZsKSKB9G9cQld
          source_id: s_e2iBmBHnXFNVgLMEBAtdVZ
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e2iBmBHnXFNVgLMEBAtdVZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（37848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37848&o=json
            external_identifier: CBDB:37848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:17.918Z
            metadata_json: null
      object_person:
        id: p_9mXC5Vf3jEyoF6c6eS5VsK
        status: active
        display_name: 张氏
        merged_into_person_id: null
  children:
    - claim:
        id: c_bnCnsPclZdNtCswxQBV6sg
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9R6yLWJqy9QZVUAQhYQHfj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxMcLLffCx6wPi5B4DSTs7
          claim_id: c_bnCnsPclZdNtCswxQBV6sg
          source_id: s_yFw4nFQMpzbXouEESC5h7M
          stance: supports
          locator: CBDB 双向互证（父 王之望 ⇄ 子 王鐸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_yFw4nFQMpzbXouEESC5h7M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐸（3984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3984&o=json
            external_identifier: CBDB:3984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:16.044Z
            metadata_json: null
      object_person:
        id: p_9R6yLWJqy9QZVUAQhYQHfj
        status: active
        display_name: 王铎
        merged_into_person_id: null
    - claim:
        id: c_VJim6l0WOZ6xvEudwPHvd7
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L26c88MDkQg3QWVPmq2YFp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Oithq_GaY_sF8CbzpC7ou
          claim_id: c_VJim6l0WOZ6xvEudwPHvd7
          source_id: s_VTt4DiWSj2j363MveoxEiB
          stance: supports
          locator: CBDB 双向互证（父 王之望 ⇄ 子 王銘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VTt4DiWSj2j363MveoxEiB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銘（21996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21996&o=json
            external_identifier: CBDB:21996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:20.018Z
            metadata_json: null
      object_person:
        id: p_L26c88MDkQg3QWVPmq2YFp
        status: active
        display_name: 王铭
        merged_into_person_id: null
    - claim:
        id: c_E72wk_BKBf8rKPURRcTBFk
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sQ5BkZRhs6GYEqAHihQgAv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OeK7R3he6ZngUFp96ClgDF
          claim_id: c_E72wk_BKBf8rKPURRcTBFk
          source_id: s_Lbqq7VMqXcuNY5MFnfYWVZ
          stance: supports
          locator: CBDB 双向互证（父 王之望 ⇄ 子 王鏞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Lbqq7VMqXcuNY5MFnfYWVZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏞（21994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21994&o=json
            external_identifier: CBDB:21994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.742Z
            metadata_json: null
      object_person:
        id: p_sQ5BkZRhs6GYEqAHihQgAv
        status: active
        display_name: 王镛
        merged_into_person_id: null
    - claim:
        id: c_uGW6DdS60uK6R8qaDC-XAj
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xJf4hheW88yz2QYGycFsip
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gphJ9zd6VjPmwua9nYMlz
          claim_id: c_uGW6DdS60uK6R8qaDC-XAj
          source_id: s_4wZd2MJ6nXBPbHfr1rzU8c
          stance: supports
          locator: CBDB 双向互证（父 王之望 ⇄ 子 王學可）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4wZd2MJ6nXBPbHfr1rzU8c
            source_type: api_record
            title: 中国历代人物传记资料库：王學可（CBDB 22257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22257&o=json
            external_identifier: CBDB:22257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xJf4hheW88yz2QYGycFsip
        status: active
        display_name: 王學可
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1Ao7qJ_E-l7FrOrqLgg7ao
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9GJnwQBF4on62pho7MUycK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X8RTKjO5zFqrbSR7JPlIOj
          claim_id: c_1Ao7qJ_E-l7FrOrqLgg7ao
          source_id: s_p8XRvMhcki9qMC8B2TFFJh
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p8XRvMhcki9qMC8B2TFFJh
            source_type: api_record
            title: 中国历代人物传记资料库：王洤（CBDB 22205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22205&o=json
            external_identifier: CBDB:22205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9GJnwQBF4on62pho7MUycK
        status: active
        display_name: 王洤
        merged_into_person_id: null
    - claim:
        id: c_8IbtLoJiSdS4x4wLJ6-Z4N
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PdRkzyCE8dbVGJM6pbU2vZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeAVq_7MqSioFgGI_z7vPc
          claim_id: c_8IbtLoJiSdS4x4wLJ6-Z4N
          source_id: s_En2QAJqXHpgKT9bFsEAJtR
          stance: supports
          locator: CBDB 双向互证（祖父 王之望 ⇄ 孫 王涔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_En2QAJqXHpgKT9bFsEAJtR
            source_type: api_record
            title: 中国历代人物传记资料库：王涔（CBDB 21997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21997&o=json
            external_identifier: CBDB:21997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PdRkzyCE8dbVGJM6pbU2vZ
        status: active
        display_name: 王涔
        merged_into_person_id: null
  other: []
---

# 王之望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之望 | accepted |
| birth.date | 1103年 | accepted |
| death.date | 1170年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9mXC5Vf3jEyoF6c6eS5VsK | 张氏 | accepted |
| children | p_9R6yLWJqy9QZVUAQhYQHfj | 王铎 | accepted |
| children | p_L26c88MDkQg3QWVPmq2YFp | 王铭 | accepted |
| children | p_sQ5BkZRhs6GYEqAHihQgAv | 王镛 | accepted |
| children | p_xJf4hheW88yz2QYGycFsip | 王學可 | accepted |
| descendants | p_9GJnwQBF4on62pho7MUycK | 王洤 | accepted |
| descendants | p_PdRkzyCE8dbVGJM6pbU2vZ | 王涔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王涔（CBDB 21997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21997&o=json)
- [中国历代人物传记资料库：王洤（CBDB 22205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22205&o=json)
- [中国历代人物传记资料库：王學可（CBDB 22257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22257&o=json)
- [中国历代人物传记资料库：王之望（CBDB 1787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json)
- [CBDB 中国历代人物传记资料库：王鐸（3984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3984&o=json)
- [CBDB 中国历代人物传记资料库：王銘（21996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21996&o=json)
- [CBDB 中国历代人物传记资料库：王鏞（21994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21994&o=json)
- [CBDB 中国历代人物传记资料库：張氏（37848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37848&o=json)
