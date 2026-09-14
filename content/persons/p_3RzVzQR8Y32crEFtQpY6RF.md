---
schema: wang-person/v1
id: p_3RzVzQR8Y32crEFtQpY6RF
status: active
merged_into: null
display_name: 王選
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Moq6yDotFhhNugyo7k2aYn
        subject_person_id: p_3RzVzQR8Y32crEFtQpY6RF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2F2yS3m9Ly3rDX524GGbYN
          claim_id: c_Moq6yDotFhhNugyo7k2aYn
          source_id: s_E5V71AGHzNCrz5QsaF9Qo8
          stance: supports
          locator: CBDB:237291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237291）
          source: &a1
            id: s_E5V71AGHzNCrz5QsaF9Qo8
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 237291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json
            external_identifier: CBDB:237291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1bw8HCL1BAnUQTkQCFZf8G
        subject_person_id: p_3RzVzQR8Y32crEFtQpY6RF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，明人物。正統四年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 237291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kFOyIXFgniwJeKnE0iLBC2
          claim_id: c_1bw8HCL1BAnUQTkQCFZf8G
          source_id: s_E5V71AGHzNCrz5QsaF9Qo8
          stance: supports
          locator: CBDB:237291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4j6HHgNo-7xFJcBVYwNj5s
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3RzVzQR8Y32crEFtQpY6RF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8pepmsMc-jsmcG_iJWhT-
          claim_id: c_4j6HHgNo-7xFJcBVYwNj5s
          source_id: s_uHG1bfKkvxQN5IKN6wdtUX
          stance: supports
          locator: CBDB：兄弟 王澤（207874）之父／母 王鳳
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王澤 为同胞（CBDB 记「兄」），王澤 之父／母即 王選 之父／母。
          source:
            id: s_uHG1bfKkvxQN5IKN6wdtUX
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 237291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json
            external_identifier: CBDB:237291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5c4qM7nrdVKGAvGun3bQkF
        status: active
        display_name: 王鳳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2xnN5RX4Wp0S68A9o6iF8c
        subject_person_id: p_3RzVzQR8Y32crEFtQpY6RF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwnvoW9koYXKYKXsGuoW2_
          claim_id: c_2xnN5RX4Wp0S68A9o6iF8c
          source_id: s_uHG1bfKkvxQN5IKN6wdtUX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207874 王澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uHG1bfKkvxQN5IKN6wdtUX
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 237291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json
            external_identifier: CBDB:237291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GHVQL4hWHQRpyP8bz5zK2L
        status: active
        display_name: 王澤
        merged_into_person_id: null
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，明人物。正統四年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 237291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5c4qM7nrdVKGAvGun3bQkF | 王鳳 | accepted |
| other | p_GHVQL4hWHQRpyP8bz5zK2L | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 237291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json)
