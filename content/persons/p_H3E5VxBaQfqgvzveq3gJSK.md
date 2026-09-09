---
schema: wang-person/v1
id: p_H3E5VxBaQfqgvzveq3gJSK
status: active
merged_into: null
display_name: 王代恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uwXeD1TN9JyyGfB6G2GToY
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNTsYGHvbBVrzsrK4GtyxN
          claim_id: c_uwXeD1TN9JyyGfB6G2GToY
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
          stance: supports
          locator: CBDB:12850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12850）
          source: &a1
            id: s_2Uy9LcTEbqt4ThFXCehGaG
            source_type: api_record
            title: 中国历代人物传记资料库：王代恕（CBDB 12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fAychUZkvFvHznc82TF2js
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eX7qvo1e2NdM7VWZHfyAEz
          claim_id: c_fAychUZkvFvHznc82TF2js
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
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
        id: c_ymUyhuvKBKJraDf1w7MfDD
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1041年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1peJPpbw4gAAcnatWD1pv
          claim_id: c_ymUyhuvKBKJraDf1w7MfDD
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
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
        id: c_s662LnSmwohP2vaNLeBVW4
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ey4hpue1nTQ3mc4anHTBy9
          claim_id: c_s662LnSmwohP2vaNLeBVW4
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
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

# 王代恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王代恕 | accepted |
| birth.date | 973年 | accepted |
| death.date | 1041年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王代恕（CBDB 12850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json)
