---
schema: wang-person/v1
id: p_bbRX9VDen2ibv9yFfhqCNU
status: active
merged_into: null
display_name: 王前
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BK6uG2fxtZBya2nxFFk56c
        subject_person_id: p_bbRX9VDen2ibv9yFfhqCNU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王前
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fBUPTnYmWQRa4czZYmGq1j
          claim_id: c_BK6uG2fxtZBya2nxFFk56c
          source_id: s_4qWy4g8RVaV7kUisUwHHDG
          stance: supports
          locator: CBDB:294549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294549）
          source: &a1
            id: s_4qWy4g8RVaV7kUisUwHHDG
            source_type: api_record
            title: 中国历代人物传记资料库：王前（CBDB 294549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294549&o=json
            external_identifier: CBDB:294549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WR8umA6hy76iSGGjjZGHK7
        subject_person_id: p_bbRX9VDen2ibv9yFfhqCNU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王前，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294549）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IeZlDc0Mh2BjDSF2bmK9c6
          claim_id: c_WR8umA6hy76iSGGjjZGHK7
          source_id: s_4qWy4g8RVaV7kUisUwHHDG
          stance: supports
          locator: CBDB:294549
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K7ipHaBFCwFGzWZ-ImtecX
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbRX9VDen2ibv9yFfhqCNU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLuvw_r1RNRXoPzc8YgP42
          claim_id: c_K7ipHaBFCwFGzWZ-ImtecX
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王前

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王前 | accepted |
| bio.summary | 王前，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294549） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王前（CBDB 294549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294549&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
