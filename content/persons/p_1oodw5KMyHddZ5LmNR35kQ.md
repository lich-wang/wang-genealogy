---
schema: wang-person/v1
id: p_1oodw5KMyHddZ5LmNR35kQ
status: active
merged_into: null
display_name: 王汝正
cbdb_id: 204315
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LjZP8bAML6EH3UwKUV93aX
        subject_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝正（生于1524年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204315 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_udp2F0VlssrMe1bGsbjVpA
          claim_id: c_LjZP8bAML6EH3UwKUV93aX
          source_id: s_8MNF2Bp9ZtELaURNkkmj2R
          stance: supports
          locator: CBDB:204315
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8MNF2Bp9ZtELaURNkkmj2R
            source_type: api_record
            title: 中国历代人物传记资料库：王汝正（CBDB 204315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204315&o=json
            external_identifier: CBDB:204315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GHgUZUqnucLcvD6E65aVjt
        subject_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1524-01-01
            latest: 1524-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BFjcrAmYnRmdE7m5qzdtv9
          claim_id: c_GHgUZUqnucLcvD6E65aVjt
          source_id: s_8MNF2Bp9ZtELaURNkkmj2R
          stance: supports
          locator: CBDB:204315
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1524
          source:
            id: s_8MNF2Bp9ZtELaURNkkmj2R
            source_type: api_record
            title: 中国历代人物传记资料库：王汝正（CBDB 204315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204315&o=json
            external_identifier: CBDB:204315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QRii7nVAGxHb4J9Y5JsKw3
        subject_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gSCALnV5rQS4AQ8vUsFBKi
          claim_id: c_QRii7nVAGxHb4J9Y5JsKw3
          source_id: s_8MNF2Bp9ZtELaURNkkmj2R
          stance: supports
          locator: CBDB:204315
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1524
          source:
            id: s_8MNF2Bp9ZtELaURNkkmj2R
            source_type: api_record
            title: 中国历代人物传记资料库：王汝正（CBDB 204315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204315&o=json
            external_identifier: CBDB:204315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7LZTZvJ2c_YdfPUFl8Vmdr
        subject_person_id: p_M79mJ5KBSfRbXYpGUpXpnk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUH0zc9ruvph0ZAKcao8rK
          claim_id: c_7LZTZvJ2c_YdfPUFl8Vmdr
          source_id: s_Jdtxpb4ABi4DBFQTq6fXCA
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jdtxpb4ABi4DBFQTq6fXCA
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 317397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317397&o=json
            external_identifier: CBDB:317397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M79mJ5KBSfRbXYpGUpXpnk
        status: active
        display_name: 王銳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_OQGxgYVgrOcx8E6xgpod63
        subject_person_id: p_7gBtBFd4EsLfGxedQv6pef
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVuOHbWBa0DHc7q8McklS6
          claim_id: c_OQGxgYVgrOcx8E6xgpod63
          source_id: s_dys8UW2ZrHMGwwKEvazE3f
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dys8UW2ZrHMGwwKEvazE3f
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 317395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317395&o=json
            external_identifier: CBDB:317395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7gBtBFd4EsLfGxedQv6pef
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_VvCCNyrVbfKL73bJlsP0CF
        subject_person_id: p_av2Unwo3FjP9dUhsaMavdq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jf5_p8mgIVFjJvvkDp8Yei
          claim_id: c_VvCCNyrVbfKL73bJlsP0CF
          source_id: s_Eat2z91mzA24ZwKVvjpZR4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Eat2z91mzA24ZwKVvjpZR4
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 317394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317394&o=json
            external_identifier: CBDB:317394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_av2Unwo3FjP9dUhsaMavdq
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝正（生于1524年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204315 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1524年 | accepted |
| name.primary | 王汝正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M79mJ5KBSfRbXYpGUpXpnk | 王銳 | accepted |
| ancestors | p_7gBtBFd4EsLfGxedQv6pef | 王義 | accepted |
| ancestors | p_av2Unwo3FjP9dUhsaMavdq | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 317394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317394&o=json)
- [中国历代人物传记资料库：王汝正（CBDB 204315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204315&o=json)
- [中国历代人物传记资料库：王銳（CBDB 317397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317397&o=json)
- [中国历代人物传记资料库：王義（CBDB 317395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317395&o=json)
