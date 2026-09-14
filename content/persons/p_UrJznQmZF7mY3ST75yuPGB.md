---
schema: wang-person/v1
id: p_UrJznQmZF7mY3ST75yuPGB
status: active
merged_into: null
display_name: 王豫
revision: 6
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
          text: 王豫，明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 126827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YdIbDdu44JXLKHI95RTn1m
          claim_id: c_LGNzMFHSdBoGDZz9wSQSfG
          source_id: s_555JFMF44bKKwkeAetwcvM
          stance: supports
          locator: CBDB:126827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
    - claim:
        id: c_ECvzd2LPIeAfKgufxkk7Hb
        subject_person_id: p_st8ks4xjYLEogApY4ek2Di
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vP5LcjuojU3X9tFVM2Y1UQ
          claim_id: c_ECvzd2LPIeAfKgufxkk7Hb
          source_id: s_EuyReuoCBsFdwojuxen3Nn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EuyReuoCBsFdwojuxen3Nn
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 265015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265015&o=json
            external_identifier: CBDB:265015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_st8ks4xjYLEogApY4ek2Di
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_YpMx3dR138y98jRFDKRiQY
        subject_person_id: p_5MhG3cgiQ2onDHQzWyeYMH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5z54pfcn7HSJsp5RoDtnY1
          claim_id: c_YpMx3dR138y98jRFDKRiQY
          source_id: s_PXur5jCU36Is24o0-UVYun
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126827 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PXur5jCU36Is24o0-UVYun
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 265070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265070&o=json
            external_identifier: CBDB:265070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5MhG3cgiQ2onDHQzWyeYMH
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_9dDtGawNGW50YuE_KAzq_u
        subject_person_id: p_HGx9jy5KVU1o3ShKgNEJ2j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66OJNY2BnxC36DtEXfDOfJ
          claim_id: c_9dDtGawNGW50YuE_KAzq_u
          source_id: s_CJzSK-1tSxKMwL6pff31L7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126827 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CJzSK-1tSxKMwL6pff31L7
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 265059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json
            external_identifier: CBDB:265059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HGx9jy5KVU1o3ShKgNEJ2j
        status: active
        display_name: 王觀
        merged_into_person_id: null
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | 王豫，明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 126827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HivKtGCAjmdTAMqiQy41Yd | 王和 | accepted |
| ancestors | p_P6vps7EktSPmKP4jr1VTV9 | 王積善 | accepted |
| ancestors | p_st8ks4xjYLEogApY4ek2Di | 王成 | accepted |
| other | p_5MhG3cgiQ2onDHQzWyeYMH | 王讓 | accepted |
| other | p_HGx9jy5KVU1o3ShKgNEJ2j | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 265015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265015&o=json)
- [中国历代人物传记资料库：王觀（CBDB 265059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json)
- [中国历代人物传记资料库：王和（CBDB 265026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265026&o=json)
- [中国历代人物传记资料库：王積善（CBDB 265004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265004&o=json)
- [中国历代人物传记资料库：王讓（CBDB 265070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265070&o=json)
- [中国历代人物传记资料库：王豫（CBDB 126827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126827&o=json)
