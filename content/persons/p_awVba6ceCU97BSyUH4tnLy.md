---
schema: wang-person/v1
id: p_awVba6ceCU97BSyUH4tnLy
status: active
merged_into: null
display_name: 王貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b6hjcqJKpzeyDutzUaHtux
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNJCUXcTHGLZbihpga7ZZK
          claim_id: c_b6hjcqJKpzeyDutzUaHtux
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: CBDB:140124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140124）
          source: &a1
            id: s_VJr7Vz53eu5S9mJ22g5diG
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 140124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140124&o=json
            external_identifier: CBDB:140124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B7mGGNUmYZsHHNfKed485K
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 644年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeVnga5LkqLKcFPNmnuT2h
          claim_id: c_B7mGGNUmYZsHHNfKed485K
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
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
        id: c_NNFaQKoAA6fnAEGQexiBc4
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 694年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kpt43m82XFfK3J9CPXXCDD
          claim_id: c_NNFaQKoAA6fnAEGQexiBc4
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
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
        id: c_sJtcWLvPPGgAQsKoidwhB5
        subject_person_id: p_awVba6ceCU97BSyUH4tnLy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Rs998zftQr9bDQFKv4Avr
          claim_id: c_sJtcWLvPPGgAQsKoidwhB5
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
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

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| birth.date | 644年 | accepted |
| death.date | 694年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貞（CBDB 140124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140124&o=json)
