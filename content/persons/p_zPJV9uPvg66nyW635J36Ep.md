---
schema: wang-person/v1
id: p_zPJV9uPvg66nyW635J36Ep
status: active
merged_into: null
display_name: 王中行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CghzdekFd9VoFxCCCLeeA3
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LE2hNavrunPfGTfNpGKqxz
          claim_id: c_CghzdekFd9VoFxCCCLeeA3
          source_id: s_EcS2YebY2R4Her2hQjAiGR
          stance: supports
          locator: CBDB:3942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3942）
          source: &a1
            id: s_EcS2YebY2R4Her2hQjAiGR
            source_type: api_record
            title: 中国历代人物传记资料库：王中行（CBDB 3942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3942&o=json
            external_identifier: CBDB:3942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KThmWFBT2EHC77CkSkT4eY
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1158年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HgLTK7hJ2bKQPQzuCrGksm
          claim_id: c_KThmWFBT2EHC77CkSkT4eY
          source_id: s_EcS2YebY2R4Her2hQjAiGR
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
        id: c_oZr1BKjcqyEZ4z48BYh3oj
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1210年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDVgUzDV9AKSyTT4wV8uH5
          claim_id: c_oZr1BKjcqyEZ4z48BYh3oj
          source_id: s_EcS2YebY2R4Her2hQjAiGR
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
        id: c_VybtM4aNxK6KudT7meqXSg
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
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
        - id: cs_9AL2ncxQHts9iHceNvt5nL
          claim_id: c_VybtM4aNxK6KudT7meqXSg
          source_id: s_EcS2YebY2R4Her2hQjAiGR
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

# 王中行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中行 | accepted |
| birth.date | 1158年 | accepted |
| death.date | 1210年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中行（CBDB 3942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3942&o=json)
