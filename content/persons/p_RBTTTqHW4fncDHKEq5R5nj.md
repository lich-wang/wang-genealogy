---
schema: wang-person/v1
id: p_RBTTTqHW4fncDHKEq5R5nj
status: active
merged_into: null
display_name: 王楠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QDF3zmu2FVgttUE78fd5Ap
        subject_person_id: p_RBTTTqHW4fncDHKEq5R5nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hbBieDsoo1L8DPBRoys94
          claim_id: c_QDF3zmu2FVgttUE78fd5Ap
          source_id: s_SRvJwo2WmdviX4mRReQ6DQ
          stance: supports
          locator: CBDB:271118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271118）
          source: &a1
            id: s_SRvJwo2WmdviX4mRReQ6DQ
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 271118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json
            external_identifier: CBDB:271118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MoaXZobqCW66qWjsYNZvEN
        subject_person_id: p_RBTTTqHW4fncDHKEq5R5nj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271118）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YLvJJZSfVG1xdNh1PpLNwt
          claim_id: c_MoaXZobqCW66qWjsYNZvEN
          source_id: s_SRvJwo2WmdviX4mRReQ6DQ
          stance: supports
          locator: CBDB:271118
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7ChYZKzjt8vApbZRIrfQoj
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RBTTTqHW4fncDHKEq5R5nj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bzJ1AyArvkTEjfxOFUgxO
          claim_id: c_7ChYZKzjt8vApbZRIrfQoj
          source_id: s_vemI__HKIWSuKpR4z-27Zb
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王楠 之父／母。
          source:
            id: s_vemI__HKIWSuKpR4z-27Zb
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 271118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json
            external_identifier: CBDB:271118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JJVNEEM87Q9sBUqrYf9DpQ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Fo8vEchuAoqpUN-33kzxul
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RBTTTqHW4fncDHKEq5R5nj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HAfm7CFP_ie6rEl4UnirSY
          claim_id: c_Fo8vEchuAoqpUN-33kzxul
          source_id: s_vemI__HKIWSuKpR4z-27Zb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vemI__HKIWSuKpR4z-27Zb
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 271118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json
            external_identifier: CBDB:271118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dqAK3hD6kewBU4JbJcy31
        status: active
        display_name: 王材
        merged_into_person_id: null
---

# 王楠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楠 | accepted |
| bio.summary | 王楠，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271118） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJVNEEM87Q9sBUqrYf9DpQ | 王瓊 | accepted |
| other | p_5dqAK3hD6kewBU4JbJcy31 | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楠（CBDB 271118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json)
