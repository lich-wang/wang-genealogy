---
schema: wang-person/v1
id: p_LXKRXaEE74nGyP81XJFnZ4
status: active
merged_into: null
display_name: 王之賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pstuMf48c1mj1j1TgddUWR
        subject_person_id: p_LXKRXaEE74nGyP81XJFnZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zp64v6LqGBRX4rcdizSgVp
          claim_id: c_pstuMf48c1mj1j1TgddUWR
          source_id: s_FG6xJoJ9Rq1WPUXrRxdZgf
          stance: supports
          locator: CBDB:300178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300178）
          source: &a1
            id: s_FG6xJoJ9Rq1WPUXrRxdZgf
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 300178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json
            external_identifier: CBDB:300178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SLLLh1bDosRKvxpq3VBmLN
        subject_person_id: p_LXKRXaEE74nGyP81XJFnZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賓，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TTaYCgbDl6re6LOa0bFscp
          claim_id: c_SLLLh1bDosRKvxpq3VBmLN
          source_id: s_FG6xJoJ9Rq1WPUXrRxdZgf
          stance: supports
          locator: CBDB:300178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DSKFRxk6KiqI2roMjUJGTj
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LXKRXaEE74nGyP81XJFnZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uo9_yuDFgRf9ushGa5R2yN
          claim_id: c_DSKFRxk6KiqI2roMjUJGTj
          source_id: s_K5tjB8rqPGWQiAPJyALLH8
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王之賓 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王之賓 之父／母。
          source:
            id: s_K5tjB8rqPGWQiAPJyALLH8
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 300178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json
            external_identifier: CBDB:300178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t5Pa7BDdJtGhQZXGCYrN2e
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wfAcF7_kjFhnyQ3219mdcu
        subject_person_id: p_LXKRXaEE74nGyP81XJFnZ4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C2ayUqdk5HvUo0pWLSlouP
          claim_id: c_wfAcF7_kjFhnyQ3219mdcu
          source_id: s_K5tjB8rqPGWQiAPJyALLH8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K5tjB8rqPGWQiAPJyALLH8
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 300178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json
            external_identifier: CBDB:300178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fYsU7A3SFMfzEtkjj2jnfk
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王之賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之賓 | accepted |
| bio.summary | 王之賓，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300178） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5Pa7BDdJtGhQZXGCYrN2e | 王棟 | accepted |
| other | p_fYsU7A3SFMfzEtkjj2jnfk | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之賓（CBDB 300178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json)
