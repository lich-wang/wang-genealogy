---
schema: wang-person/v1
id: p_1TdEwjEL19s1J7G5PHfNTM
status: active
merged_into: null
display_name: 王汝能
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUkCbAGE7i5mpenujVQeSy
        subject_person_id: p_1TdEwjEL19s1J7G5PHfNTM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uRhmUFd7fLcbKx2i5rxj6D
          claim_id: c_iUkCbAGE7i5mpenujVQeSy
          source_id: s_LmoEWUcqEf2q3ztW3BYHb8
          stance: supports
          locator: CBDB:265941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265941）
          source: &a1
            id: s_LmoEWUcqEf2q3ztW3BYHb8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝能（CBDB 265941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265941&o=json
            external_identifier: CBDB:265941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jYRPvixjfi1MvLuNe8jZtJ
        subject_person_id: p_1TdEwjEL19s1J7G5PHfNTM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝能，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UwEOxQaWnT0yjsPBX_hd1a
          claim_id: c_jYRPvixjfi1MvLuNe8jZtJ
          source_id: s_LmoEWUcqEf2q3ztW3BYHb8
          stance: supports
          locator: CBDB:265941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RSKuCAEWg1fQN06IGvHAl1
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1TdEwjEL19s1J7G5PHfNTM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JexZ5Ex_6650lSYw4pNlcY
          claim_id: c_RSKuCAEWg1fQN06IGvHAl1
          source_id: s_0tYDo9oK2fniBcTVgkYJwU
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝能 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝能 之父／母。
          source:
            id: s_0tYDo9oK2fniBcTVgkYJwU
            source_type: api_record
            title: 中国历代人物传记资料库：王汝能（CBDB 265941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265941&o=json
            external_identifier: CBDB:265941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_czhtiwqBMu1RGkzhciwNgo
        status: active
        display_name: 王昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Vt7gkCLTKkRnug4OAX1d67
        subject_person_id: p_1TdEwjEL19s1J7G5PHfNTM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bVh1otR2HH59HH7rfKSMH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DFv-vW_MkWeShCB9JFDJp5
          claim_id: c_Vt7gkCLTKkRnug4OAX1d67
          source_id: s_0tYDo9oK2fniBcTVgkYJwU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201011 王德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0tYDo9oK2fniBcTVgkYJwU
            source_type: api_record
            title: 中国历代人物传记资料库：王汝能（CBDB 265941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265941&o=json
            external_identifier: CBDB:265941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVh1otR2HH59HH7rfKSMH9
        status: active
        display_name: 王德
        merged_into_person_id: null
---

# 王汝能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝能 | accepted |
| bio.summary | 王汝能，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_czhtiwqBMu1RGkzhciwNgo | 王昌 | accepted |
| other | p_bVh1otR2HH59HH7rfKSMH9 | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝能（CBDB 265941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265941&o=json)
