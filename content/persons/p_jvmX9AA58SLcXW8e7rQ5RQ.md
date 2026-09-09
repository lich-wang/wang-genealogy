---
schema: wang-person/v1
id: p_jvmX9AA58SLcXW8e7rQ5RQ
status: active
merged_into: null
display_name: 王兆離
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNH6MVqRd38YuPaHGZk4bp
        subject_person_id: p_jvmX9AA58SLcXW8e7rQ5RQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆離
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WkVrKMcF9gCNwQFaXvRZwv
          claim_id: c_rNH6MVqRd38YuPaHGZk4bp
          source_id: s_rdPPtBB4ADKCTPK3XNR2u7
          stance: supports
          locator: CBDB:71598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71598）
          source: &a1
            id: s_rdPPtBB4ADKCTPK3XNR2u7
            source_type: api_record
            title: 中国历代人物传记资料库：王兆離（CBDB 71598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71598&o=json
            external_identifier: CBDB:71598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LFHBEoCMqLAMZ5kFan6qRS
        subject_person_id: p_jvmX9AA58SLcXW8e7rQ5RQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1870年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgHEYnrYrEZPvw8ZxxLUhW
          claim_id: c_LFHBEoCMqLAMZ5kFan6qRS
          source_id: s_rdPPtBB4ADKCTPK3XNR2u7
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
        id: c_tN1YvhFS72UfQZzh3R9GMC
        subject_person_id: p_jvmX9AA58SLcXW8e7rQ5RQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1942年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqCCD6xBraPVTK9uGHiMhM
          claim_id: c_tN1YvhFS72UfQZzh3R9GMC
          source_id: s_rdPPtBB4ADKCTPK3XNR2u7
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
        id: c_okt5Tpf8vVaGWXpvpEbwj3
        subject_person_id: p_jvmX9AA58SLcXW8e7rQ5RQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xrxzW1c1ZCYsrWTq6hGjbG
          claim_id: c_okt5Tpf8vVaGWXpvpEbwj3
          source_id: s_rdPPtBB4ADKCTPK3XNR2u7
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

# 王兆離

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆離 | accepted |
| birth.date | 1870年 | accepted |
| death.date | 1942年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆離（CBDB 71598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71598&o=json)
