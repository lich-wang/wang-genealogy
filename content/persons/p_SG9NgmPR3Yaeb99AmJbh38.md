---
schema: wang-person/v1
id: p_SG9NgmPR3Yaeb99AmJbh38
status: active
merged_into: null
display_name: 王師
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDcwJxisJFGd6cto8SXZYr
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_84SQKVL3H2iwCTtUNPByw7
          claim_id: c_JDcwJxisJFGd6cto8SXZYr
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: CBDB:56851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56851）
          source: &a1
            id: s_6nS14JEXQgMJ3Jm3bXa72Q
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 56851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json
            external_identifier: CBDB:56851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1vTDgXUaJSMsmryBHdy3Zi
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1690年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQ1wZXwmVdVHF6B243FWP1
          claim_id: c_1vTDgXUaJSMsmryBHdy3Zi
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
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
        id: c_SaKVL3QUJDB99wDZi329UM
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1751年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dQt7tDVNmP8YLD9w8DQiP
          claim_id: c_SaKVL3QUJDB99wDZi329UM
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
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
        id: c_KjkJucmNTrWprLtPhKWt7S
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
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
        - id: cs_V3NA15HWLFKVikv2mohm7A
          claim_id: c_KjkJucmNTrWprLtPhKWt7S
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
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

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| birth.date | 1690年 | accepted |
| death.date | 1751年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 56851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json)
