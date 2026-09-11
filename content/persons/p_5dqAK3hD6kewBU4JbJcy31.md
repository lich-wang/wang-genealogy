---
schema: wang-person/v1
id: p_5dqAK3hD6kewBU4JbJcy31
status: active
merged_into: null
display_name: 王材
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T3kFE35dyefMcBdpUDyuLR
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_735Z84PTtJ3M1GYBUEQHpY
          claim_id: c_T3kFE35dyefMcBdpUDyuLR
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: CBDB:201358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201358）
          source: &a1
            id: s_An9gdp4F4554SBwPLfcvo1
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 201358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201358&o=json
            external_identifier: CBDB:201358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_phpkYamFimocC1Q9QS9K9h
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1461年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3buwGNGH44PjjR2Lz8B9Y7
          claim_id: c_phpkYamFimocC1Q9QS9K9h
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwCNnYby4jkyMwkkXr2vr6
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材（生于1461年），明人物。明清進士進士，籍贯望江，入仕進士。（中国历代人物传记资料库 CBDB 201358）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BcOqXtL-0eBZlMn0-nGlnu
          claim_id: c_CwCNnYby4jkyMwkkXr2vr6
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: CBDB:201358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WS1Enqd5T-kH3dLnxZS1aK
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5dqAK3hD6kewBU4JbJcy31
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjAxFlEIb9OYRl08tNb1Zn
          claim_id: c_WS1Enqd5T-kH3dLnxZS1aK
          source_id: s_3WV1SaBi3ghD6oEqEXPGRG
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3WV1SaBi3ghD6oEqEXPGRG
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 271103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json
            external_identifier: CBDB:271103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JJVNEEM87Q9sBUqrYf9DpQ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5amWBS1HirtjGpubQuFTcZ
        subject_person_id: p_2b9TwxYB6wxHNBNWLVvncu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5dqAK3hD6kewBU4JbJcy31
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5yOnrwsPa7mJvZ0YY5z11
          claim_id: c_5amWBS1HirtjGpubQuFTcZ
          source_id: s_U49EE6FSj9755rRx66Z9c2
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U49EE6FSj9755rRx66Z9c2
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 271102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271102&o=json
            external_identifier: CBDB:271102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2b9TwxYB6wxHNBNWLVvncu
        status: active
        display_name: 王旻
        merged_into_person_id: null
    - claim:
        id: c_SpM_lDNpvHENUy1cTPbyL7
        subject_person_id: p_nek84Xdon2JWL2E4LgqiXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5dqAK3hD6kewBU4JbJcy31
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AT-_gMST1nnyCPZgrmdvbB
          claim_id: c_SpM_lDNpvHENUy1cTPbyL7
          source_id: s_Zf2MbjP8nVFyCrS2uk4Mnw
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zf2MbjP8nVFyCrS2uk4Mnw
            source_type: api_record
            title: 中国历代人物传记资料库：王震隆（CBDB 271101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271101&o=json
            external_identifier: CBDB:271101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nek84Xdon2JWL2E4LgqiXF
        status: active
        display_name: 王震隆
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| birth.date | 1461年 | accepted |
| bio.summary | 王材（生于1461年），明人物。明清進士進士，籍贯望江，入仕進士。（中国历代人物传记资料库 CBDB 201358） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJVNEEM87Q9sBUqrYf9DpQ | 王瓊 | accepted |
| ancestors | p_2b9TwxYB6wxHNBNWLVvncu | 王旻 | accepted |
| ancestors | p_nek84Xdon2JWL2E4LgqiXF | 王震隆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 201358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201358&o=json)
- [中国历代人物传记资料库：王旻（CBDB 271102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271102&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 271103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json)
- [中国历代人物传记资料库：王震隆（CBDB 271101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271101&o=json)
