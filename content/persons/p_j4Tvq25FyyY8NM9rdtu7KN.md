---
schema: wang-person/v1
id: p_j4Tvq25FyyY8NM9rdtu7KN
status: active
merged_into: null
display_name: 王世垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PnRe9Kbty9sFcCX48WM38Y
        subject_person_id: p_j4Tvq25FyyY8NM9rdtu7KN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92J1fPzkFJHRFDuu67Vj6G
          claim_id: c_PnRe9Kbty9sFcCX48WM38Y
          source_id: s_p3z91TK8X4Uw7Z7yYyD3D1
          stance: supports
          locator: CBDB:635669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635669）
          source: &a1
            id: s_p3z91TK8X4Uw7Z7yYyD3D1
            source_type: api_record
            title: 中国历代人物传记资料库：王世垣（CBDB 635669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635669&o=json
            external_identifier: CBDB:635669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jcz97BFVbnN12UfWVKdPhM
        subject_person_id: p_j4Tvq25FyyY8NM9rdtu7KN
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
        - id: cs_nmc653ov5WBzsQhH8eQBem
          claim_id: c_Jcz97BFVbnN12UfWVKdPhM
          source_id: s_p3z91TK8X4Uw7Z7yYyD3D1
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
  ancestors: []
  descendants: []
  other: []
---

# 王世垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世垣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世垣（CBDB 635669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635669&o=json)
