---
schema: wang-person/v1
id: p_9scMvZbY1QFgKzRKBWDHTa
status: active
merged_into: null
display_name: 王萬修
cbdb_id: 3990
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2yKo7CiFcQ64HMZZXFj7Rm
        subject_person_id: p_9scMvZbY1QFgKzRKBWDHTa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬修（生于1126年），史料所见人物。本项目依据《中国历代人物传记资料库：王萬修（CBDB 3990）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_XIjrNa_aI98khcR6SgFDVk
          claim_id: c_2yKo7CiFcQ64HMZZXFj7Rm
          source_id: s_rtaP4WHTiEzAoa2NhZ6Jno
          stance: supports
          locator: CBDB:3990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rtaP4WHTiEzAoa2NhZ6Jno
            source_type: api_record
            title: 中国历代人物传记资料库：王萬修（CBDB 3990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3990&o=json
            external_identifier: CBDB:3990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QU35B9TpmVUqXSWqKNQ6x8
        subject_person_id: p_9scMvZbY1QFgKzRKBWDHTa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1126-01-01
            latest: 1126-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7VSLmqEVPWgBD2aWAUZucD
          claim_id: c_QU35B9TpmVUqXSWqKNQ6x8
          source_id: s_rtaP4WHTiEzAoa2NhZ6Jno
          stance: supports
          locator: CBDB:3990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1126
          source:
            id: s_rtaP4WHTiEzAoa2NhZ6Jno
            source_type: api_record
            title: 中国历代人物传记资料库：王萬修（CBDB 3990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3990&o=json
            external_identifier: CBDB:3990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHBFMfT85myQ4eq4LLCLBX
        subject_person_id: p_9scMvZbY1QFgKzRKBWDHTa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wqwQKDPCdCWaC8C66AofQJ
          claim_id: c_GHBFMfT85myQ4eq4LLCLBX
          source_id: s_rtaP4WHTiEzAoa2NhZ6Jno
          stance: supports
          locator: CBDB:3990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1126
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KAVAB1tfWsF6mLLqvZV3ZL
        subject_person_id: p_7GdAohLrLcihNMPL7pxbW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9scMvZbY1QFgKzRKBWDHTa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YIJs-ljSIxNXRG8W1hS_DI
          claim_id: c_KAVAB1tfWsF6mLLqvZV3ZL
          source_id: s_UVn8mELxLB3W9d5kisY6gz
          stance: supports
          locator: CBDB 双向互证（子 王萬修 ⇄ 父 王棟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UVn8mELxLB3W9d5kisY6gz
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 23951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23951&o=json
            external_identifier: CBDB:23951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7GdAohLrLcihNMPL7pxbW1
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_r1Gs-m8xAULh4gFKgG1qEX
        subject_person_id: p_9scMvZbY1QFgKzRKBWDHTa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qZuAmAhZM7t3E3mWF25UgD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VetrQKBjg_raX6GHtE9GN1
          claim_id: c_r1Gs-m8xAULh4gFKgG1qEX
          source_id: s_JHTiDZ_v9g7B3P_vsa_X0b
          stance: supports
          locator: 紹興十八年同年小錄，90：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JHTiDZ_v9g7B3P_vsa_X0b
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王萬修妻)（CBDB 134783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134783&o=json
            external_identifier: CBDB:134783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qZuAmAhZM7t3E3mWF25UgD
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王萬修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王萬修（生于1126年），史料所见人物。本项目依据《中国历代人物传记资料库：王萬修（CBDB 3990）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1126年 | accepted |
| name.primary | 王萬修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7GdAohLrLcihNMPL7pxbW1 | 王棟 | accepted |
| spouses | p_qZuAmAhZM7t3E3mWF25UgD | 韓氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王萬修妻)（CBDB 134783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134783&o=json)
- [中国历代人物传记资料库：王棟（CBDB 23951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23951&o=json)
- [中国历代人物传记资料库：王萬修（CBDB 3990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3990&o=json)
