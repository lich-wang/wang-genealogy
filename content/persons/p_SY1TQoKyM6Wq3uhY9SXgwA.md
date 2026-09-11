---
schema: wang-person/v1
id: p_SY1TQoKyM6Wq3uhY9SXgwA
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1FUEJTE3SoY4x1jv6LY2L
        subject_person_id: p_SY1TQoKyM6Wq3uhY9SXgwA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtqBmB4boaahMDBxEDUACL
          claim_id: c_D1FUEJTE3SoY4x1jv6LY2L
          source_id: s_f8u3YDCstAE6oCopNnfxZr
          stance: supports
          locator: CBDB:100827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100827）
          source: &a1
            id: s_f8u3YDCstAE6oCopNnfxZr
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 100827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100827&o=json
            external_identifier: CBDB:100827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PR9fU3LDvcucAk8juGrJ67
        subject_person_id: p_SY1TQoKyM6Wq3uhY9SXgwA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1261年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mo8Rr2sgLB9A3rPNThff8z
          claim_id: c_PR9fU3LDvcucAk8juGrJ67
          source_id: s_f8u3YDCstAE6oCopNnfxZr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QRW3KDekMH5GXmMioni5nW
        subject_person_id: p_SY1TQoKyM6Wq3uhY9SXgwA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1322年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmkVhdBk3786LAK26bYzwc
          claim_id: c_QRW3KDekMH5GXmMioni5nW
          source_id: s_f8u3YDCstAE6oCopNnfxZr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZKxsj8rDCQpZNF8PA5DUo
        subject_person_id: p_SY1TQoKyM6Wq3uhY9SXgwA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠（1261年—1322年），元人物。籍贯昆明，曾任縣尹。（中国历代人物传记资料库 CBDB 100827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7l1TCMes9q-c68zWYMWY3Y
          claim_id: c_EZKxsj8rDCQpZNF8PA5DUo
          source_id: s_f8u3YDCstAE6oCopNnfxZr
          stance: supports
          locator: CBDB:100827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ruW19bQWLGHndN0K8zZxJv
        subject_person_id: p_SY1TQoKyM6Wq3uhY9SXgwA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C78wRKHggJ3n5qE5BBS29D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jNhXo3-kDiN-9r_Do0ZokV
          claim_id: c_ruW19bQWLGHndN0K8zZxJv
          source_id: s_2PmoNRHpgVhLM6jSVUEdEo
          stance: supports
          locator: 元人傳記資料索引，503：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2PmoNRHpgVhLM6jSVUEdEo
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 100693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100693&o=json
            external_identifier: CBDB:100693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C78wRKHggJ3n5qE5BBS29D
        status: active
        display_name: 王昇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| birth.date | 1261年 | accepted |
| death.date | 1322年 | accepted |
| bio.summary | 王惠（1261年—1322年），元人物。籍贯昆明，曾任縣尹。（中国历代人物传记资料库 CBDB 100827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C78wRKHggJ3n5qE5BBS29D | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 100827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100827&o=json)
- [中国历代人物传记资料库：王昇（CBDB 100693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100693&o=json)
