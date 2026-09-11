---
schema: wang-person/v1
id: p_y7EyMSu7d6G6tRK3dnwd4b
status: active
merged_into: null
display_name: 王澤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4A1p7RQKK6xbZUZ8inbPYJ
        subject_person_id: p_y7EyMSu7d6G6tRK3dnwd4b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DzMZnvNy95q7t89QuGQgti
          claim_id: c_4A1p7RQKK6xbZUZ8inbPYJ
          source_id: s_i8xAX94weziP8c78vuWm49
          stance: supports
          locator: CBDB:298837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298837）
          source: &a1
            id: s_i8xAX94weziP8c78vuWm49
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 298837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298837&o=json
            external_identifier: CBDB:298837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D6MGSck86yvgcU7Kc9Cd13
        subject_person_id: p_y7EyMSu7d6G6tRK3dnwd4b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。嘉靖十七年進士，籍贯無錫，曾任戶部主事。（中国历代人物传记资料库 CBDB 298837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TOC8xXiqoHdmIwMXd8vLVR
          claim_id: c_D6MGSck86yvgcU7Kc9Cd13
          source_id: s_i8xAX94weziP8c78vuWm49
          stance: supports
          locator: CBDB:298837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tuy2sq4f8GYmRwiWdURtZq
        subject_person_id: p_y7EyMSu7d6G6tRK3dnwd4b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stsLal1AZRhXRtpvURqS9d
          claim_id: c_tuy2sq4f8GYmRwiWdURtZq
          source_id: s_i8xAX94weziP8c78vuWm49
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。嘉靖十七年進士，籍贯無錫，曾任戶部主事。（中国历代人物传记资料库 CBDB 298837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 298837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298837&o=json)
