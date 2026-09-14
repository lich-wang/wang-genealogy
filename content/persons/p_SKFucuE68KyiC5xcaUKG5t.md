---
schema: wang-person/v1
id: p_SKFucuE68KyiC5xcaUKG5t
status: active
merged_into: null
display_name: 王淳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2N9nQFBxQhBKYSXv7PVFyv
        subject_person_id: p_SKFucuE68KyiC5xcaUKG5t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5F2QbCY1C9oJfDDsyXQcrb
          claim_id: c_2N9nQFBxQhBKYSXv7PVFyv
          source_id: s_cTWFYs5RNxwrnecjsUgHNs
          stance: supports
          locator: CBDB:244051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244051）
          source: &a1
            id: s_cTWFYs5RNxwrnecjsUgHNs
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 244051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244051&o=json
            external_identifier: CBDB:244051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6bpV6CxAhLynm72B3sEgg9
        subject_person_id: p_SKFucuE68KyiC5xcaUKG5t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳，明人物。成化五年進士，籍贯內鄉。（中国历代人物传记资料库 CBDB 244051）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QV5HCgoWUX5lLFQZsKry-S
          claim_id: c_6bpV6CxAhLynm72B3sEgg9
          source_id: s_cTWFYs5RNxwrnecjsUgHNs
          stance: supports
          locator: CBDB:244051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qbh9D3pxj_VejrORiJ02_u
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SKFucuE68KyiC5xcaUKG5t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BzwiAinie7ncQhsVAugWlh
          claim_id: c_qbh9D3pxj_VejrORiJ02_u
          source_id: s_5NgH3hbS6ci7kLZEWnA2IW
          stance: supports
          locator: CBDB：兄弟 王溥（199368）之父／母 王儼
          quotation: null
          interpretation_note: 由兄弟关系推断：王淳 与 王溥 为同胞（CBDB 记「兄」），王溥 之父／母即 王淳 之父／母。
          source:
            id: s_5NgH3hbS6ci7kLZEWnA2IW
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 244051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244051&o=json
            external_identifier: CBDB:244051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YJESKH2yrBjEwkYMGE9k5E
        status: active
        display_name: 王儼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4Tmvs-RraLQBwEkqPFBVSk
        subject_person_id: p_SKFucuE68KyiC5xcaUKG5t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4EQh6lmv1oVTFjEYbs5Y1w
          claim_id: c_4Tmvs-RraLQBwEkqPFBVSk
          source_id: s_5NgH3hbS6ci7kLZEWnA2IW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199368 王溥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5NgH3hbS6ci7kLZEWnA2IW
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 244051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244051&o=json
            external_identifier: CBDB:244051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v5g4H2q2EXrnEQmwfqdSHb
        status: active
        display_name: 王溥
        merged_into_person_id: null
---

# 王淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淳 | accepted |
| bio.summary | 王淳，明人物。成化五年進士，籍贯內鄉。（中国历代人物传记资料库 CBDB 244051） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YJESKH2yrBjEwkYMGE9k5E | 王儼 | accepted |
| other | p_v5g4H2q2EXrnEQmwfqdSHb | 王溥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 244051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244051&o=json)
