---
schema: wang-person/v1
id: p_zQAyFcVTh8uEFRKFQtkku9
status: active
merged_into: null
display_name: 王恪
cbdb_id: 264939
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yzGZn6NPJGH6VL5V7C9aTL
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪，明人物。弘治六年進士，籍贯東莞，曾任知府。（中国历代人物传记资料库 CBDB 264939）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_MtmYRkDh3z9dkhADzM6pNc
          claim_id: c_yzGZn6NPJGH6VL5V7C9aTL
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_HDcpoETM2HzOP9-qVioUOz
          claim_id: c_yzGZn6NPJGH6VL5V7C9aTL
          source_id: s_P3dGTcvrREC5FWJ2NokCtm
          stance: supports
          locator: CBDB:264939
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P3dGTcvrREC5FWJ2NokCtm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恪（264939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264939&o=json
            external_identifier: CBDB:264939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:10.914Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vccJgGXjHs4iWq9cwPeh5H
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8M6KAG54Yca5p8GGWPeoZN
          claim_id: c_vccJgGXjHs4iWq9cwPeh5H
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: Q45583500
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_r9CzTndkNyNmEy2PsQWyeP
          claim_id: c_vccJgGXjHs4iWq9cwPeh5H
          source_id: s_P3dGTcvrREC5FWJ2NokCtm
          stance: supports
          locator: Q45583500
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3hiyBQZLwBsW8TR2h5mq1M
        subject_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoUotdm3wyN2YcpVRrbf9T
          claim_id: c_3hiyBQZLwBsW8TR2h5mq1M
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_3kb66C7yu75ywzU2HAeeFZ
          claim_id: c_3hiyBQZLwBsW8TR2h5mq1M
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B552dSZzBGwMMCA9WPbwQi
            source_type: api_record
            title: 维基数据：王琛（Q45583436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583436
            external_identifier: Q45583436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_YUKAdQiXr1DTx2KFsrYLgt
        status: active
        display_name: 王琛
        merged_into_person_id: null
  children:
    - claim:
        id: c_GxzicMFF1GSFrFjdWRGBR3
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZNX5a9Ue7bnqTkDjELFB7L
          claim_id: c_GxzicMFF1GSFrFjdWRGBR3
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_ZU7SPBGP5FxJMm8uhWHBbx
          claim_id: c_GxzicMFF1GSFrFjdWRGBR3
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person:
        id: p_GYXTdGzZ8zRdfAxpgeUm9N
        status: active
        display_name: 王缜
        merged_into_person_id: null
    - claim:
        id: c_sP6Q_iQ2vi_UnDKyI_ZcUL
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSNqF-BbQdiE3s5Ua1ee4C
          claim_id: c_sP6Q_iQ2vi_UnDKyI_ZcUL
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8nUwjmnF5xTmqZCNqzBRAK
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9esUYZvNqsWNd3UXAh8qx5
        status: active
        display_name: 王縝
        merged_into_person_id: null
    - claim:
        id: c_mZOeodND0siaTjizAHqEdm
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xuhy9rkRAKk1HotAywcbcM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTDM4zTKdWbeEAEObvi6RN
          claim_id: c_mZOeodND0siaTjizAHqEdm
          source_id: s_Fdnc-6wnnsWwGHz44DZhNz
          stance: supports
          locator: CBDB：兄弟 王縝（68275）之父／母 王恪
          quotation: null
          interpretation_note: 由兄弟关系推断：王組瑋 与 王縝 为同胞（CBDB 记「弟」），王縝 之父／母即 王組瑋 之父／母。
          source:
            id: s_Fdnc-6wnnsWwGHz44DZhNz
            source_type: api_record
            title: 中国历代人物传记资料库：王組瑋（CBDB 264943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264943&o=json
            external_identifier: CBDB:264943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xuhy9rkRAKk1HotAywcbcM
        status: active
        display_name: 王組瑋
        merged_into_person_id: null
    - claim:
        id: c_nPTD2lR2VKn59K4slc4XZb
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vMevNWYN32QXU3ybSEDDSn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbPgw4szcU1oxgQZIBGawa
          claim_id: c_nPTD2lR2VKn59K4slc4XZb
          source_id: s_n1QmD_hvEaH3Pfj7UiqVlT
          stance: supports
          locator: CBDB：兄弟 王縝（68275）之父／母 王恪
          quotation: null
          interpretation_note: 由兄弟关系推断：王組經 与 王縝 为同胞（CBDB 记「弟」），王縝 之父／母即 王組經 之父／母。
          source:
            id: s_n1QmD_hvEaH3Pfj7UiqVlT
            source_type: api_record
            title: 中国历代人物传记资料库：王組經（CBDB 264942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264942&o=json
            external_identifier: CBDB:264942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vMevNWYN32QXU3ybSEDDSn
        status: active
        display_name: 王組經
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恪，明人物。弘治六年進士，籍贯東莞，曾任知府。（中国历代人物传记资料库 CBDB 264939） | accepted |
| name.primary | 王恪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YUKAdQiXr1DTx2KFsrYLgt | 王琛 | accepted |
| children | p_GYXTdGzZ8zRdfAxpgeUm9N | 王缜 | accepted |
| children | p_9esUYZvNqsWNd3UXAh8qx5 | 王縝 | accepted |
| children | p_Xuhy9rkRAKk1HotAywcbcM | 王組瑋 | accepted |
| children | p_vMevNWYN32QXU3ybSEDDSn | 王組經 | accepted |

## 外部来源

- [维基数据：王琛（Q45583436）](https://www.wikidata.org/wiki/Q45583436)
- [维基数据：王恪（Q45583500）](https://www.wikidata.org/wiki/Q45583500)
- [维基数据：王缜（Q15933343）](https://www.wikidata.org/wiki/Q15933343)
- [中国历代人物传记资料库：王縝（CBDB 68275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json)
- [中国历代人物传记资料库：王組經（CBDB 264942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264942&o=json)
- [中国历代人物传记资料库：王組瑋（CBDB 264943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264943&o=json)
- [CBDB 中国历代人物传记资料库：王恪（264939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264939&o=json)
