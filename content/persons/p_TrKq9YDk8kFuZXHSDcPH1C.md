---
schema: wang-person/v1
id: p_TrKq9YDk8kFuZXHSDcPH1C
status: active
merged_into: null
display_name: 王詔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tuwyQBpfLpU6C2U2HD92ig
        subject_person_id: p_TrKq9YDk8kFuZXHSDcPH1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UrS5Ucv6W7CMQmwYQ4SJ2Q
          claim_id: c_tuwyQBpfLpU6C2U2HD92ig
          source_id: s_SdfoHUK4LLSy3USHHEgNhL
          stance: supports
          locator: CBDB:282959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282959）
          source: &a1
            id: s_SdfoHUK4LLSy3USHHEgNhL
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 282959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282959&o=json
            external_identifier: CBDB:282959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_11xHMB1bQQVhE6vUeEHyDk
        subject_person_id: p_TrKq9YDk8kFuZXHSDcPH1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔，明人物。正德十二年進士，籍贯白水。（中国历代人物传记资料库 CBDB 282959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GIeibfOEXBGH16w-naze4C
          claim_id: c_11xHMB1bQQVhE6vUeEHyDk
          source_id: s_SdfoHUK4LLSy3USHHEgNhL
          stance: supports
          locator: CBDB:282959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gjfd7edPGXUg-kZUqiu381
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TrKq9YDk8kFuZXHSDcPH1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QUKh2a-qxURAxy9xwalzkK
          claim_id: c_gjfd7edPGXUg-kZUqiu381
          source_id: s_t6FTaLaWitKTsd_9-CMi97
          stance: supports
          locator: CBDB：兄弟 王謳（126857）之父／母 王珤
          quotation: null
          interpretation_note: 由兄弟关系推断：王詔 与 王謳 为同胞（CBDB 记「弟」），王謳 之父／母即 王詔 之父／母。
          source:
            id: s_t6FTaLaWitKTsd_9-CMi97
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 282959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282959&o=json
            external_identifier: CBDB:282959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t5w9aLHR6A5gdUHq2nzVCC
        status: active
        display_name: 王珤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fRQkmq-FvJ2Nzf5K5I_qQF
        subject_person_id: p_TrKq9YDk8kFuZXHSDcPH1C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cojJSQjAH97J8dPWYrRzuD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yTcHnz0G3tbLNDN9ETQIg
          claim_id: c_fRQkmq-FvJ2Nzf5K5I_qQF
          source_id: s_t6FTaLaWitKTsd_9-CMi97
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126857 王謳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t6FTaLaWitKTsd_9-CMi97
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 282959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282959&o=json
            external_identifier: CBDB:282959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cojJSQjAH97J8dPWYrRzuD
        status: active
        display_name: 王謳
        merged_into_person_id: null
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | 王詔，明人物。正德十二年進士，籍贯白水。（中国历代人物传记资料库 CBDB 282959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5w9aLHR6A5gdUHq2nzVCC | 王珤 | accepted |
| other | p_cojJSQjAH97J8dPWYrRzuD | 王謳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 282959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282959&o=json)
