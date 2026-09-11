---
schema: wang-person/v1
id: p_zZbuHXnqm4wRFTtwvCX7hA
status: active
merged_into: null
display_name: 王道增
cbdb_id: 206547
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N8kk9w7wRDKzKBPGkSw8hg
        subject_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道增（生于1553年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206547 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-pq6DiNMQnnF-tbKCq7dWb
          claim_id: c_N8kk9w7wRDKzKBPGkSw8hg
          source_id: s_AgKUTxLkHNYtG4knDATNtw
          stance: supports
          locator: CBDB:206547
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_AgKUTxLkHNYtG4knDATNtw
            source_type: api_record
            title: 中国历代人物传记资料库：王道增（CBDB 206547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206547&o=json
            external_identifier: CBDB:206547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_diDn77cxTiU7FPgZ9h912U
        subject_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1553-01-01
            latest: 1553-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Udv1Q3Y3bC2rHeTWXcwTBw
          claim_id: c_diDn77cxTiU7FPgZ9h912U
          source_id: s_AgKUTxLkHNYtG4knDATNtw
          stance: supports
          locator: CBDB:206547
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1553
          source:
            id: s_AgKUTxLkHNYtG4knDATNtw
            source_type: api_record
            title: 中国历代人物传记资料库：王道增（CBDB 206547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206547&o=json
            external_identifier: CBDB:206547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oLbitpd7wH7qNFNsZ13Ruw
        subject_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HhQ8QHfPZ7xgTykaYYE18K
          claim_id: c_oLbitpd7wH7qNFNsZ13Ruw
          source_id: s_AgKUTxLkHNYtG4knDATNtw
          stance: supports
          locator: CBDB:206547
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1553
          source:
            id: s_AgKUTxLkHNYtG4knDATNtw
            source_type: api_record
            title: 中国历代人物传记资料库：王道增（CBDB 206547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206547&o=json
            external_identifier: CBDB:206547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G1qtdfhXiC6hcvi1ipdyxl
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfn6RTjudN38mHGMoyvEdk
          claim_id: c_G1qtdfhXiC6hcvi1ipdyxl
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4oPXT5i77e8Jgr9bqR3YfP
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 219569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219569&o=json
            external_identifier: CBDB:219569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RYeG6QXC3LvzmPc5LSo3Tt
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CLTwVU9BLRTmzuXFz_DQW-
        subject_person_id: p_GPvXA4LriUiQYx6qpSspPM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pSTppQ38bfGDQqVSx_xqd8
          claim_id: c_CLTwVU9BLRTmzuXFz_DQW-
          source_id: s_XZQ6MyCYA9HfsPfvEY2XTA
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XZQ6MyCYA9HfsPfvEY2XTA
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 219567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219567&o=json
            external_identifier: CBDB:219567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GPvXA4LriUiQYx6qpSspPM
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_e4hJ8kX8PxNM69pYRlWQnd
        subject_person_id: p_tqHGdZV9SSuNMYwQN7FaPN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QN8QboYP2fyRa5G-cOXk0k
          claim_id: c_e4hJ8kX8PxNM69pYRlWQnd
          source_id: s_P56ArMWsaMDuyMzmHRDPoE
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P56ArMWsaMDuyMzmHRDPoE
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 219568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219568&o=json
            external_identifier: CBDB:219568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tqHGdZV9SSuNMYwQN7FaPN
        status: active
        display_name: 王銳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道增（生于1553年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206547 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1553年 | accepted |
| name.primary | 王道增 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RYeG6QXC3LvzmPc5LSo3Tt | 王澍 | accepted |
| ancestors | p_GPvXA4LriUiQYx6qpSspPM | 王賓 | accepted |
| ancestors | p_tqHGdZV9SSuNMYwQN7FaPN | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 219567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219567&o=json)
- [中国历代人物传记资料库：王道增（CBDB 206547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206547&o=json)
- [中国历代人物传记资料库：王銳（CBDB 219568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219568&o=json)
- [中国历代人物传记资料库：王澍（CBDB 219569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219569&o=json)
