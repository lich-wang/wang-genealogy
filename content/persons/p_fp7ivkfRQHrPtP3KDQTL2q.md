---
schema: wang-person/v1
id: p_fp7ivkfRQHrPtP3KDQTL2q
status: active
merged_into: null
display_name: 王杲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H1CjZUqitL5tY1K2Rg4z32
        subject_person_id: p_fp7ivkfRQHrPtP3KDQTL2q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hdez1D3MeWcHVkEfvkp8kP
          claim_id: c_H1CjZUqitL5tY1K2Rg4z32
          source_id: s_E4N5pMmPR5M8NAi83BKqrA
          stance: supports
          locator: CBDB:216319
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216319）
          source: &a1
            id: s_E4N5pMmPR5M8NAi83BKqrA
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 216319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216319&o=json
            external_identifier: CBDB:216319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6xn1REmcB2awZ4QmNSEH4g
        subject_person_id: p_fp7ivkfRQHrPtP3KDQTL2q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲，明人物。萬曆五年進士，曾任都司都事。（中国历代人物传记资料库 CBDB 216319）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ADV0ioWOdR42Dlz-G99GdA
          claim_id: c_6xn1REmcB2awZ4QmNSEH4g
          source_id: s_E4N5pMmPR5M8NAi83BKqrA
          stance: supports
          locator: CBDB:216319
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_zo1GZfsgBJ403gUjk-NGjV
        subject_person_id: p_fp7ivkfRQHrPtP3KDQTL2q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QHF2r1EZsyqAF5yBfVXCYR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2kvWqxDy0QqtLfmRzmR3h
          claim_id: c_zo1GZfsgBJ403gUjk-NGjV
          source_id: s_E4N5pMmPR5M8NAi83BKqrA
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QHF2r1EZsyqAF5yBfVXCYR
        status: active
        display_name: 王鍵
        merged_into_person_id: null
  other: []
---

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，明人物。萬曆五年進士，曾任都司都事。（中国历代人物传记资料库 CBDB 216319） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QHF2r1EZsyqAF5yBfVXCYR | 王鍵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 216319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216319&o=json)
