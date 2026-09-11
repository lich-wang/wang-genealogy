---
schema: wang-person/v1
id: p_VoLzwtN4e2pofEFYkpZCMW
status: active
merged_into: null
display_name: 王郁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDiRkXm4VooWGKCP75Fi1Z
        subject_person_id: p_VoLzwtN4e2pofEFYkpZCMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f7S3iQrpQ8zac5gBNwqpMQ
          claim_id: c_KDiRkXm4VooWGKCP75Fi1Z
          source_id: s_5Nk2M38G8vjXWtAep38VJH
          stance: supports
          locator: CBDB:186845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186845）
          source: &a1
            id: s_5Nk2M38G8vjXWtAep38VJH
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 186845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186845&o=json
            external_identifier: CBDB:186845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JddkKkiD5Q6P3xg9Hj51v1
        subject_person_id: p_VoLzwtN4e2pofEFYkpZCMW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 959年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AJVyBBFCQJNpZrQCr4QfWV
          claim_id: c_JddkKkiD5Q6P3xg9Hj51v1
          source_id: s_5Nk2M38G8vjXWtAep38VJH
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
        id: c_WY8gKYpZ2PkhAQ6R2i6Qj2
        subject_person_id: p_VoLzwtN4e2pofEFYkpZCMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gx5YKRyNjJibEoXB2dMC1Y
          claim_id: c_WY8gKYpZ2PkhAQ6R2i6Qj2
          source_id: s_5Nk2M38G8vjXWtAep38VJH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eOS0-rxQS2f4Unl2SFXUyA
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VoLzwtN4e2pofEFYkpZCMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0zFh2KB0pl74e6bCUqRQlP
          claim_id: c_eOS0-rxQS2f4Unl2SFXUyA
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DUzV7KbT9MziCZ4BqcdavQ
            source_type: api_record
            title: 中国历代人物传记资料库：王處直（CBDB 144827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json
            external_identifier: CBDB:144827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gNLMaQqWEd6Tcr2zT2brF
        status: active
        display_name: 王處直
        merged_into_person_id: null
  children:
    - claim:
        id: c_q0UURCidgYecp9YDM6Tp9f
        subject_person_id: p_VoLzwtN4e2pofEFYkpZCMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SsZbQkb7Wa4KQYF6cCGrRS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_djfAuzR0xbqlQeJg5AwxfU
          claim_id: c_q0UURCidgYecp9YDM6Tp9f
          source_id: s_jNVVEFD8UKqEmF6EzBtfPR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jNVVEFD8UKqEmF6EzBtfPR
            source_type: api_record
            title: 中国历代人物传记资料库：王鶚（CBDB 169316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169316&o=json
            external_identifier: CBDB:169316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SsZbQkb7Wa4KQYF6cCGrRS
        status: active
        display_name: 王鶚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郁 | accepted |
| death.date | 959年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4gNLMaQqWEd6Tcr2zT2brF | 王處直 | accepted |
| children | p_SsZbQkb7Wa4KQYF6cCGrRS | 王鶚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處直（CBDB 144827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json)
- [中国历代人物传记资料库：王鶚（CBDB 169316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169316&o=json)
- [中国历代人物传记资料库：王郁（CBDB 186845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186845&o=json)
