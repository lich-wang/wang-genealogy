---
schema: wang-person/v1
id: p_TwDh5Y5nFZbMTDh7UouR38
status: active
merged_into: null
display_name: 王淑燦
cbdb_id: 331196
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_izszyMAZSadA2VUB1SwhLt
        subject_person_id: p_TwDh5Y5nFZbMTDh7UouR38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑燦，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nVYefvnSz9ihMpK3E_mZfN
          claim_id: c_izszyMAZSadA2VUB1SwhLt
          source_id: s_49TH1chTj1bhBx6xNNMo4N
          stance: supports
          locator: CBDB:331196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_49TH1chTj1bhBx6xNNMo4N
            source_type: api_record
            title: 中国历代人物传记资料库：王淑燦（CBDB 331196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json
            external_identifier: CBDB:331196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rssXa1821dD8KVvTneT7D3
        subject_person_id: p_TwDh5Y5nFZbMTDh7UouR38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hj9K75gZnF8XUi551barJQ
          claim_id: c_rssXa1821dD8KVvTneT7D3
          source_id: s_49TH1chTj1bhBx6xNNMo4N
          stance: supports
          locator: CBDB:331196
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_glaf7088USEeEuAynQzV2E
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwDh5Y5nFZbMTDh7UouR38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CzXaUERt8lVJu44wqjJjIG
          claim_id: c_glaf7088USEeEuAynQzV2E
          source_id: s_Freo1Su_wQBrRQYaei6Au_
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑燦 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑燦 之父／母。
          source:
            id: s_Freo1Su_wQBrRQYaei6Au_
            source_type: api_record
            title: 中国历代人物传记资料库：王淑燦（CBDB 331196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json
            external_identifier: CBDB:331196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EKAbKSAdjUvO8adC7nPBVT
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TwDh5Y5nFZbMTDh7UouR38
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fr3QGsBWeszXy0BFJTgxC7
          claim_id: c_EKAbKSAdjUvO8adC7nPBVT
          source_id: s_Freo1Su_wQBrRQYaei6Au_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Freo1Su_wQBrRQYaei6Au_
            source_type: api_record
            title: 中国历代人物传记资料库：王淑燦（CBDB 331196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json
            external_identifier: CBDB:331196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑燦，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331196） | accepted |
| name.primary | 王淑燦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑燦（CBDB 331196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json)
