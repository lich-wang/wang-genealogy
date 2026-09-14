---
schema: wang-person/v1
id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
status: active
merged_into: null
display_name: 王元選
cbdb_id: 235478
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v9ohhPwRnakrx4L7AfmAGT
        subject_person_id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元選，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235478）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_m68LaCuF8TIRx_F73rbcfz
          claim_id: c_v9ohhPwRnakrx4L7AfmAGT
          source_id: s_N8xdBMnPrVqNGf7XY7uwHB
          stance: supports
          locator: CBDB:235478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N8xdBMnPrVqNGf7XY7uwHB
            source_type: api_record
            title: 中国历代人物传记资料库：王元選（CBDB 235478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json
            external_identifier: CBDB:235478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ce75tfdsWJnDV1ZRMTqAiq
        subject_person_id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TStXssV9TyPtqpPHr3KfG4
          claim_id: c_ce75tfdsWJnDV1ZRMTqAiq
          source_id: s_N8xdBMnPrVqNGf7XY7uwHB
          stance: supports
          locator: CBDB:235478
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YK-0YuqwbZHmBbQmjrRiNt
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qySX9BasKFXZvcE9qop-Sk
          claim_id: c_YK-0YuqwbZHmBbQmjrRiNt
          source_id: s_uBcxwLpUZFbUk5jj5P59iT
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元選 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元選 之父／母。
          source:
            id: s_uBcxwLpUZFbUk5jj5P59iT
            source_type: api_record
            title: 中国历代人物传记资料库：王元選（CBDB 235478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json
            external_identifier: CBDB:235478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GoCZ6LMqwnyLpJJPbTAtp
        status: active
        display_name: 王溉槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oWWdXk4WXfU041UiZyQWxt
        subject_person_id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tPcrOwxHbwdVh3NTSqgyc2
          claim_id: c_oWWdXk4WXfU041UiZyQWxt
          source_id: s_uBcxwLpUZFbUk5jj5P59iT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uBcxwLpUZFbUk5jj5P59iT
            source_type: api_record
            title: 中国历代人物传记资料库：王元選（CBDB 235478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json
            external_identifier: CBDB:235478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
---

# 王元選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元選，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235478） | accepted |
| name.primary | 王元選 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GoCZ6LMqwnyLpJJPbTAtp | 王溉槐 | accepted |
| other | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元選（CBDB 235478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json)
