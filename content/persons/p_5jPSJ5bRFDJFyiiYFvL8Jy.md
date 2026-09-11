---
schema: wang-person/v1
id: p_5jPSJ5bRFDJFyiiYFvL8Jy
status: active
merged_into: null
display_name: 王率賓
cbdb_id: 277146
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iie3Zs8mD9PcJMapQ51TRA
        subject_person_id: p_5jPSJ5bRFDJFyiiYFvL8Jy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王率賓，明人物。中国历代人物传记资料库（CBDB）以人物编号 277146 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RarCPArcf_YaKjd-SLRkw2
          claim_id: c_iie3Zs8mD9PcJMapQ51TRA
          source_id: s_x76VB1o4x9HKEffW5SpbNh
          stance: supports
          locator: CBDB:277146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_x76VB1o4x9HKEffW5SpbNh
            source_type: api_record
            title: 中国历代人物传记资料库：王率賓（CBDB 277146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277146&o=json
            external_identifier: CBDB:277146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b3HBETJ2uP2kQr9dMtjhbR
        subject_person_id: p_5jPSJ5bRFDJFyiiYFvL8Jy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王率賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_847TDR7NrzopM6M8TVgzK2
          claim_id: c_b3HBETJ2uP2kQr9dMtjhbR
          source_id: s_x76VB1o4x9HKEffW5SpbNh
          stance: supports
          locator: CBDB:277146
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_x76VB1o4x9HKEffW5SpbNh
            source_type: api_record
            title: 中国历代人物传记资料库：王率賓（CBDB 277146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277146&o=json
            external_identifier: CBDB:277146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DC-4K8XJDjSw5JMl6LPQzU
        subject_person_id: p_5jPSJ5bRFDJFyiiYFvL8Jy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4rykiD8sXIuwUNFvBwH1iF
          claim_id: c_DC-4K8XJDjSw5JMl6LPQzU
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kekNW4qJqBQs88vjAxByMp
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json
            external_identifier: CBDB:201722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D2oNcSP9ujVXCgNLvsNQq7
        status: active
        display_name: 王璽
        merged_into_person_id: null
  other: []
---

# 王率賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王率賓，明人物。中国历代人物传记资料库（CBDB）以人物编号 277146 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王率賓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_D2oNcSP9ujVXCgNLvsNQq7 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王率賓（CBDB 277146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277146&o=json)
- [中国历代人物传记资料库：王璽（CBDB 201722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json)
