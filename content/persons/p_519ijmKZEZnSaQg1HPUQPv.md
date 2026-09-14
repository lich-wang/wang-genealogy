---
schema: wang-person/v1
id: p_519ijmKZEZnSaQg1HPUQPv
status: active
merged_into: null
display_name: 王桐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tvS8DC6L5E5KHRiryHHrFK
        subject_person_id: p_519ijmKZEZnSaQg1HPUQPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bH4QJDvpXouZVBV2toeNRN
          claim_id: c_tvS8DC6L5E5KHRiryHHrFK
          source_id: s_ZmM5tg85tWRoENXP76Ffd8
          stance: supports
          locator: CBDB:274253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274253）
          source: &a1
            id: s_ZmM5tg85tWRoENXP76Ffd8
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 274253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274253&o=json
            external_identifier: CBDB:274253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jV3CvAucfSq5F3o1meZy2J
        subject_person_id: p_519ijmKZEZnSaQg1HPUQPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274253）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J1nwGBd1W08YDkUL5OyEwa
          claim_id: c_jV3CvAucfSq5F3o1meZy2J
          source_id: s_ZmM5tg85tWRoENXP76Ffd8
          stance: supports
          locator: CBDB:274253
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_okERXEdmsS6zzOqOMgqRmq
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_519ijmKZEZnSaQg1HPUQPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUUC1h8lq-QP0gUh5lzC6C
          claim_id: c_okERXEdmsS6zzOqOMgqRmq
          source_id: s_mdhvEasFF6Epjr6y7LsFIU
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王桐 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王桐 之父／母。
          source:
            id: s_mdhvEasFF6Epjr6y7LsFIU
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 274253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274253&o=json
            external_identifier: CBDB:274253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VcYjKdyzjQFgG3FRqoyThA
        status: active
        display_name: 王完
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DTIx6yxQFcZm3ry0U77l2E
        subject_person_id: p_519ijmKZEZnSaQg1HPUQPv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKgstqTCYR9xW4LnKSIau6
          claim_id: c_DTIx6yxQFcZm3ry0U77l2E
          source_id: s_mdhvEasFF6Epjr6y7LsFIU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mdhvEasFF6Epjr6y7LsFIU
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 274253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274253&o=json
            external_identifier: CBDB:274253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
---

# 王桐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桐 | accepted |
| bio.summary | 王桐，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274253） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VcYjKdyzjQFgG3FRqoyThA | 王完 | accepted |
| other | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桐（CBDB 274253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274253&o=json)
