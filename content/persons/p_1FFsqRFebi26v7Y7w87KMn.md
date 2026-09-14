---
schema: wang-person/v1
id: p_1FFsqRFebi26v7Y7w87KMn
status: active
merged_into: null
display_name: 王光庭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vthocH9kDyeXt5bN2bjT3X
        subject_person_id: p_1FFsqRFebi26v7Y7w87KMn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qceHDp27XEsPTZV3xu7fp
          claim_id: c_vthocH9kDyeXt5bN2bjT3X
          source_id: s_QAVyDTcSKTeBEYz89keECx
          stance: supports
          locator: CBDB:297381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297381）
          source: &a1
            id: s_QAVyDTcSKTeBEYz89keECx
            source_type: api_record
            title: 中国历代人物传记资料库：王光庭（CBDB 297381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json
            external_identifier: CBDB:297381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bGCqjrT6Pf2HLStn5h47An
        subject_person_id: p_1FFsqRFebi26v7Y7w87KMn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光庭，明人物。嘉靖十四年進士，籍贯臨晉。（中国历代人物传记资料库 CBDB 297381）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0a1gaE_Mvtd5sAZZ8te-Cu
          claim_id: c_bGCqjrT6Pf2HLStn5h47An
          source_id: s_QAVyDTcSKTeBEYz89keECx
          stance: supports
          locator: CBDB:297381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NcwcNtcXf09GwG2-6S9ymB
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FFsqRFebi26v7Y7w87KMn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GUkr4xkTCJgTIvK54WT3Go
          claim_id: c_NcwcNtcXf09GwG2-6S9ymB
          source_id: s__P6g7E7KgQXmgxWg4i4Dry
          stance: supports
          locator: CBDB：兄弟 王光宇（202958）之父／母 王謙益
          quotation: null
          interpretation_note: 由兄弟关系推断：王光庭 与 王光宇 为同胞（CBDB 记「兄」），王光宇 之父／母即 王光庭 之父／母。
          source:
            id: s__P6g7E7KgQXmgxWg4i4Dry
            source_type: api_record
            title: 中国历代人物传记资料库：王光庭（CBDB 297381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json
            external_identifier: CBDB:297381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_epYzvTR9hN3wwDSSzwW3ua
        status: active
        display_name: 王謙益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GlNDxqIofHn2jz01TTCkhQ
        subject_person_id: p_1FFsqRFebi26v7Y7w87KMn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OB5wDa2WMNNRG42eUPpWK4
          claim_id: c_GlNDxqIofHn2jz01TTCkhQ
          source_id: s__P6g7E7KgQXmgxWg4i4Dry
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202958 王光宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__P6g7E7KgQXmgxWg4i4Dry
            source_type: api_record
            title: 中国历代人物传记资料库：王光庭（CBDB 297381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json
            external_identifier: CBDB:297381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yPDG6qr1bXraqFkBrL15Y6
        status: active
        display_name: 王光宇
        merged_into_person_id: null
---

# 王光庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光庭 | accepted |
| bio.summary | 王光庭，明人物。嘉靖十四年進士，籍贯臨晉。（中国历代人物传记资料库 CBDB 297381） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_epYzvTR9hN3wwDSSzwW3ua | 王謙益 | accepted |
| other | p_yPDG6qr1bXraqFkBrL15Y6 | 王光宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光庭（CBDB 297381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json)
