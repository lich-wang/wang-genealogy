---
schema: wang-person/v1
id: p_cdvLWdUT8xwQ2GV4vwbiSj
status: active
merged_into: null
display_name: 王明
revision: 3
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_icRT1drW76pKvyL4C3x7D9
          claim_id: c_zMgAcjKs4kaDWBN88RWvNB
          source_id: s_QvcuMYoKi1NGHEj8G9N7He
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_8YJr5iN4qPp3nLCKpSvh1Z | 王欽 | accepted |
| ancestors | p_UcLAoUsQRg5X99v3V1g2V3 | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 221457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221457&o=json)
- [中国历代人物传记资料库：王明（CBDB 126580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126580&o=json)
- [中国历代人物传记资料库：王欽（CBDB 221456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221456&o=json)
