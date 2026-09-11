---
schema: wang-person/v1
id: p_LH26wNU5A1mxpo4iK4N5Kd
status: active
merged_into: null
display_name: 王瑗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k121cFJ73kT28CX68g2YqW
        subject_person_id: p_LH26wNU5A1mxpo4iK4N5Kd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ndnoW3spLNbx97VS6H9mJt
          claim_id: c_k121cFJ73kT28CX68g2YqW
          source_id: s_Aj4FDxpSUmE86ENrUh9UaY
          stance: supports
          locator: CBDB:255907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255907）
          source: &a1
            id: s_Aj4FDxpSUmE86ENrUh9UaY
            source_type: api_record
            title: 中国历代人物传记资料库：王瑗（CBDB 255907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255907&o=json
            external_identifier: CBDB:255907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pSZ75E7GyB7dPAAYjKWqYf
        subject_person_id: p_LH26wNU5A1mxpo4iK4N5Kd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑗，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WPAqyRUMtA_eZWW4r79elE
          claim_id: c_pSZ75E7GyB7dPAAYjKWqYf
          source_id: s_Aj4FDxpSUmE86ENrUh9UaY
          stance: supports
          locator: CBDB:255907
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
  descendants: []
  other: []
---

# 王瑗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑗 | accepted |
| bio.summary | 王瑗，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑗（CBDB 255907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255907&o=json)
