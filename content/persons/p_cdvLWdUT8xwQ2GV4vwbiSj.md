---
schema: wang-person/v1
id: p_cdvLWdUT8xwQ2GV4vwbiSj
status: active
merged_into: null
display_name: 王明
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2w3HfHwtVENEs1RZZD6QBV
        subject_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y67gKasBDUkN3jBKb2yzAi
          claim_id: c_2w3HfHwtVENEs1RZZD6QBV
          source_id: s_QvcuMYoKi1NGHEj8G9N7He
          stance: supports
          locator: CBDB:126580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126580）
          source: &a1
            id: s_QvcuMYoKi1NGHEj8G9N7He
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 126580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126580&o=json
            external_identifier: CBDB:126580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zMgAcjKs4kaDWBN88RWvNB
        subject_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，明人物。明清進士進士，籍贯解州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gyNMcvzhoMun0MufavTLRj
          claim_id: c_zMgAcjKs4kaDWBN88RWvNB
          source_id: s_QvcuMYoKi1NGHEj8G9N7He
          stance: supports
          locator: CBDB:126580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UsTPBbNTImd7X05vM8VG4c
        subject_person_id: p_dr5THMYZGs7zW675Bw8A4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdfb6CQ2t0fnM10tUwvFb1
          claim_id: c_UsTPBbNTImd7X05vM8VG4c
          source_id: s_pzKa22AK3ZSEDJTFQ71tEE
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pzKa22AK3ZSEDJTFQ71tEE
            source_type: api_record
            title: 中国历代人物传记资料库：王玉圭（CBDB 221458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221458&o=json
            external_identifier: CBDB:221458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dr5THMYZGs7zW675Bw8A4u
        status: active
        display_name: 王玉圭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hGiOot2_7awQJVf9nI4qP6
        subject_person_id: p_8YJr5iN4qPp3nLCKpSvh1Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nBNaQvRsxqFyGoqDEtRpyL
          claim_id: c_hGiOot2_7awQJVf9nI4qP6
          source_id: s_uXgF38D7Z2nTjNN8QBSWV8
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uXgF38D7Z2nTjNN8QBSWV8
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 221456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221456&o=json
            external_identifier: CBDB:221456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8YJr5iN4qPp3nLCKpSvh1Z
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_noFp2Wu2x0oSM4TkEWUKpU
        subject_person_id: p_UcLAoUsQRg5X99v3V1g2V3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b0pHWgnhzNtTXdlAAhfWBa
          claim_id: c_noFp2Wu2x0oSM4TkEWUKpU
          source_id: s_6zk7K7BDHaiyRFzuzbu6kq
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6zk7K7BDHaiyRFzuzbu6kq
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 221457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221457&o=json
            external_identifier: CBDB:221457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UcLAoUsQRg5X99v3V1g2V3
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7hRH8SIk-QbvwbPKvjAE2X
        subject_person_id: p_L5ix6rN3nxTFcxwkS6DCrw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7J9v2IL29i1rZl4rpaPin
          claim_id: c_7hRH8SIk-QbvwbPKvjAE2X
          source_id: s_V3hGQfYAbb38mfUk6JuCmy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126580 王明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V3hGQfYAbb38mfUk6JuCmy
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 221463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221463&o=json
            external_identifier: CBDB:221463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L5ix6rN3nxTFcxwkS6DCrw
        status: active
        display_name: 王言
        merged_into_person_id: null
    - claim:
        id: c_9NgCeN1NQmJ_M0PjxVpb5C
        subject_person_id: p_P94s9TZdzMJZbp9U94rxAj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SwIev_GUYjoYC6ub8NcMWl
          claim_id: c_9NgCeN1NQmJ_M0PjxVpb5C
          source_id: s_wSnTaVdr0Dxgdv_FBsSusS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126580 王明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wSnTaVdr0Dxgdv_FBsSusS
            source_type: api_record
            title: 中国历代人物传记资料库：王心（CBDB 221464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221464&o=json
            external_identifier: CBDB:221464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P94s9TZdzMJZbp9U94rxAj
        status: active
        display_name: 王心
        merged_into_person_id: null
    - claim:
        id: c_DeHBzyCeNTBbsY2Kkj_4c9
        subject_person_id: p_aAw8QRKUDP46mUEr1nQMJg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0q2CJ78QC4CyJD2Mne9L72
          claim_id: c_DeHBzyCeNTBbsY2Kkj_4c9
          source_id: s_jakG0aob2reRYpGLXZxVNZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126580 王明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jakG0aob2reRYpGLXZxVNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王耳（CBDB 221465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221465&o=json
            external_identifier: CBDB:221465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aAw8QRKUDP46mUEr1nQMJg
        status: active
        display_name: 王耳
        merged_into_person_id: null
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，明人物。明清進士進士，籍贯解州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dr5THMYZGs7zW675Bw8A4u | 王玉圭 | accepted |
| ancestors | p_8YJr5iN4qPp3nLCKpSvh1Z | 王欽 | accepted |
| ancestors | p_UcLAoUsQRg5X99v3V1g2V3 | 王和 | accepted |
| other | p_L5ix6rN3nxTFcxwkS6DCrw | 王言 | accepted |
| other | p_P94s9TZdzMJZbp9U94rxAj | 王心 | accepted |
| other | p_aAw8QRKUDP46mUEr1nQMJg | 王耳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王耳（CBDB 221465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221465&o=json)
- [中国历代人物传记资料库：王和（CBDB 221457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221457&o=json)
- [中国历代人物传记资料库：王明（CBDB 126580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126580&o=json)
- [中国历代人物传记资料库：王欽（CBDB 221456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221456&o=json)
- [中国历代人物传记资料库：王心（CBDB 221464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221464&o=json)
- [中国历代人物传记资料库：王言（CBDB 221463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221463&o=json)
- [中国历代人物传记资料库：王玉圭（CBDB 221458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221458&o=json)
