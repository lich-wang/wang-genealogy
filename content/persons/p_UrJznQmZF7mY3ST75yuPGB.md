---
schema: wang-person/v1
id: p_UrJznQmZF7mY3ST75yuPGB
status: active
merged_into: null
display_name: 王豫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9BKiwTT2igCzeWQrKFXNY4
        subject_person_id: p_UrJznQmZF7mY3ST75yuPGB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mAFbWHTqKo5pZ5fTeB6c2H
          claim_id: c_9BKiwTT2igCzeWQrKFXNY4
          source_id: s_555JFMF44bKKwkeAetwcvM
          stance: supports
          locator: CBDB:126827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126827）
          source: &a1
            id: s_555JFMF44bKKwkeAetwcvM
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 126827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126827&o=json
            external_identifier: CBDB:126827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGNzMFHSdBoGDZz9wSQSfG
        subject_person_id: p_UrJznQmZF7mY3ST75yuPGB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPcMNeo8nc7ou7zKgqWWhJ
          claim_id: c_LGNzMFHSdBoGDZz9wSQSfG
          source_id: s_555JFMF44bKKwkeAetwcvM
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
        id: c_72UAsHyvwgikd_dDJoLS7J
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68Wv--3rIlRArDRLkwKWaF
          claim_id: c_72UAsHyvwgikd_dDJoLS7J
          source_id: s_t8RyUjx3X23JJtCZLENKsH
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t8RyUjx3X23JJtCZLENKsH
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 265026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265026&o=json
            external_identifier: CBDB:265026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HivKtGCAjmdTAMqiQy41Yd
        status: active
        display_name: 王和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DAGXOjrfyk6LtU48T8IpQ4
        subject_person_id: p_P6vps7EktSPmKP4jr1VTV9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cn-f3VpEov5M5A5GhZo6Tf
          claim_id: c_DAGXOjrfyk6LtU48T8IpQ4
          source_id: s_2DiQBERtqDt4wMQ6hRcW4h
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2DiQBERtqDt4wMQ6hRcW4h
            source_type: api_record
            title: 中国历代人物传记资料库：王積善（CBDB 265004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265004&o=json
            external_identifier: CBDB:265004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P6vps7EktSPmKP4jr1VTV9
        status: active
        display_name: 王積善
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HivKtGCAjmdTAMqiQy41Yd | 王和 | accepted |
| ancestors | p_P6vps7EktSPmKP4jr1VTV9 | 王積善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 265026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265026&o=json)
- [中国历代人物传记资料库：王積善（CBDB 265004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265004&o=json)
- [中国历代人物传记资料库：王豫（CBDB 126827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126827&o=json)
