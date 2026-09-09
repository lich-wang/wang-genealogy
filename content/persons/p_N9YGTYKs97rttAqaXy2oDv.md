---
schema: wang-person/v1
id: p_N9YGTYKs97rttAqaXy2oDv
status: active
merged_into: null
display_name: 王崇煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y4qNJpAxV5xpZK5pZ7omcw
        subject_person_id: p_N9YGTYKs97rttAqaXy2oDv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bMK3ZGv11jUTpcp9xfgLam
          claim_id: c_y4qNJpAxV5xpZK5pZ7omcw
          source_id: s_4WRczPCpFNyULLVvU4bJ14
          stance: supports
          locator: CBDB:517414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（517414）
          source: &a1
            id: s_4WRczPCpFNyULLVvU4bJ14
            source_type: api_record
            title: 中国历代人物传记资料库：王崇煥（CBDB 517414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517414&o=json
            external_identifier: CBDB:517414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PAhYcfvyam6k6hy7seQanC
        subject_person_id: p_N9YGTYKs97rttAqaXy2oDv
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
        - id: cs_EiJRtAMQcSpk6eRjrieiAa
          claim_id: c_PAhYcfvyam6k6hy7seQanC
          source_id: s_4WRczPCpFNyULLVvU4bJ14
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

# 王崇煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇煥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇煥（CBDB 517414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517414&o=json)
