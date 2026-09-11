---
schema: wang-person/v1
id: p_ZZrGNgrwoWs5GNZCjNrcKG
status: active
merged_into: null
display_name: 王浤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z49bVkcgSWe6c3TQ8F2fzW
        subject_person_id: p_ZZrGNgrwoWs5GNZCjNrcKG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QzrspztGt6EWxHKqki27PD
          claim_id: c_z49bVkcgSWe6c3TQ8F2fzW
          source_id: s_G1BqM89pyJAu7hzts7pqJq
          stance: supports
          locator: CBDB:120581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120581）
          source: &a1
            id: s_G1BqM89pyJAu7hzts7pqJq
            source_type: api_record
            title: 中国历代人物传记资料库：王浤（CBDB 120581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120581&o=json
            external_identifier: CBDB:120581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N41aziziyf2K263fn6oRup
        subject_person_id: p_ZZrGNgrwoWs5GNZCjNrcKG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5aHFC32yPyc3bJVeP7c3D
          claim_id: c_N41aziziyf2K263fn6oRup
          source_id: s_G1BqM89pyJAu7hzts7pqJq
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
  spouses:
    - claim:
        id: c_E1LzcLUL0tqP45hvP2L2bz
        subject_person_id: p_ZZrGNgrwoWs5GNZCjNrcKG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GBhfcv9MKSqujRSt3dZJND
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUxmaCSL7XVDn_1VEJURnL
          claim_id: c_E1LzcLUL0tqP45hvP2L2bz
          source_id: s_-J0YhHi2zaLP401ZVdjNus
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4082, HuWenKai #353：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-J0YhHi2zaLP401ZVdjNus
            source_type: api_record
            title: 中国历代人物传记资料库：汪清暎（CBDB 120580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120580&o=json
            external_identifier: CBDB:120580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GBhfcv9MKSqujRSt3dZJND
        status: active
        display_name: 汪清暎
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王浤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GBhfcv9MKSqujRSt3dZJND | 汪清暎 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪清暎（CBDB 120580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120580&o=json)
- [中国历代人物传记资料库：王浤（CBDB 120581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120581&o=json)
