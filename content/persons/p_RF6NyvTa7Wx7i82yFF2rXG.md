---
schema: wang-person/v1
id: p_RF6NyvTa7Wx7i82yFF2rXG
status: active
merged_into: null
display_name: 王褧
cbdb_id: 260100
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJxCUtGD6KujLyUZ6mGiSE
        subject_person_id: p_RF6NyvTa7Wx7i82yFF2rXG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褧，明人物。成化二十三年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 260100）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ge1cFYLoGGLIawSwDuR93V
          claim_id: c_jJxCUtGD6KujLyUZ6mGiSE
          source_id: s_pbN9fHrfLotYJgqot8ha9d
          stance: supports
          locator: CBDB:260100
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pbN9fHrfLotYJgqot8ha9d
            source_type: api_record
            title: 中国历代人物传记资料库：王褧（CBDB 260100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260100&o=json
            external_identifier: CBDB:260100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7SKmPrMJMKkj3hd9HSPgZ8
        subject_person_id: p_RF6NyvTa7Wx7i82yFF2rXG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ud6kDLSUJhtmq2XYEzgy4S
          claim_id: c_7SKmPrMJMKkj3hd9HSPgZ8
          source_id: s_pbN9fHrfLotYJgqot8ha9d
          stance: supports
          locator: CBDB:260100
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1Wfvz6k-YWAr5hNShxi5nj
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RF6NyvTa7Wx7i82yFF2rXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sn6NnON_8h-a3cl9mh2tDA
          claim_id: c_1Wfvz6k-YWAr5hNShxi5nj
          source_id: s_ooUQnhIa3aCx3NdEUngTwF
          stance: supports
          locator: CBDB：兄弟 王秩（200588）之父／母 王詁
          quotation: null
          interpretation_note: 由兄弟关系推断：王褧 与 王秩 为同胞（CBDB 记「弟」），王秩 之父／母即 王褧 之父／母。
          source:
            id: s_ooUQnhIa3aCx3NdEUngTwF
            source_type: api_record
            title: 中国历代人物传记资料库：王褧（CBDB 260100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260100&o=json
            external_identifier: CBDB:260100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t8KEZXxBW1dy3kvu8XnvuX
        status: active
        display_name: 王詁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_S82eWw0pC85h4C-oumxG1U
        subject_person_id: p_7THfMJodZEJjq2hbN5iKFW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RF6NyvTa7Wx7i82yFF2rXG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8DJJWZxTfo7stw32fp7Kb9
          claim_id: c_S82eWw0pC85h4C-oumxG1U
          source_id: s_ooUQnhIa3aCx3NdEUngTwF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200588 王秩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ooUQnhIa3aCx3NdEUngTwF
            source_type: api_record
            title: 中国历代人物传记资料库：王褧（CBDB 260100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260100&o=json
            external_identifier: CBDB:260100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7THfMJodZEJjq2hbN5iKFW
        status: active
        display_name: 王秩
        merged_into_person_id: null
---

# 王褧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王褧，明人物。成化二十三年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 260100） | accepted |
| name.primary | 王褧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t8KEZXxBW1dy3kvu8XnvuX | 王詁 | accepted |
| other | p_7THfMJodZEJjq2hbN5iKFW | 王秩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王褧（CBDB 260100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260100&o=json)
