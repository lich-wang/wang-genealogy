---
schema: wang-person/v1
id: p_WjJgLP6QdD3ASQ4ZZR5UaT
status: active
merged_into: null
display_name: 王壁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eoy346rJzF2xGvX7LtDWsF
        subject_person_id: p_WjJgLP6QdD3ASQ4ZZR5UaT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z934s64JGLU1fzJ33gA7Ni
          claim_id: c_Eoy346rJzF2xGvX7LtDWsF
          source_id: s_VWjzcyzHeBomHbm6ymhfP4
          stance: supports
          locator: CBDB:261844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261844）
          source: &a1
            id: s_VWjzcyzHeBomHbm6ymhfP4
            source_type: api_record
            title: 中国历代人物传记资料库：王壁（CBDB 261844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261844&o=json
            external_identifier: CBDB:261844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHgCpzr53ruK1H1wTsReDQ
        subject_person_id: p_WjJgLP6QdD3ASQ4ZZR5UaT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壁，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q3TnOvIlQc6CUWlBasX4CG
          claim_id: c_zHgCpzr53ruK1H1wTsReDQ
          source_id: s_VWjzcyzHeBomHbm6ymhfP4
          stance: supports
          locator: CBDB:261844
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e1ptHCtia6Jz-6OpvSXKhh
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WjJgLP6QdD3ASQ4ZZR5UaT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FyUWktZtzCjEfbrElp_lpk
          claim_id: c_e1ptHCtia6Jz-6OpvSXKhh
          source_id: s_dHrC03aHawlUIU-m4g1rlS
          stance: supports
          locator: CBDB：兄弟 王奎（200714）之父／母 王乾溥
          quotation: null
          interpretation_note: 由兄弟关系推断：王壁 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王壁 之父／母。
          source:
            id: s_dHrC03aHawlUIU-m4g1rlS
            source_type: api_record
            title: 中国历代人物传记资料库：王壁（CBDB 261844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261844&o=json
            external_identifier: CBDB:261844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g6tTV8xspEG83C3EPVzpm7
        status: active
        display_name: 王乾溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_A3i700KXA1yOaG6a6tyA5E
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WjJgLP6QdD3ASQ4ZZR5UaT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NzIoOJNUEvcsXXw6rTJzrH
          claim_id: c_A3i700KXA1yOaG6a6tyA5E
          source_id: s_dHrC03aHawlUIU-m4g1rlS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200714 王奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dHrC03aHawlUIU-m4g1rlS
            source_type: api_record
            title: 中国历代人物传记资料库：王壁（CBDB 261844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261844&o=json
            external_identifier: CBDB:261844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JhT8MPbcy6fqyD8xKqm8c7
        status: active
        display_name: 王奎
        merged_into_person_id: null
---

# 王壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壁 | accepted |
| bio.summary | 王壁，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g6tTV8xspEG83C3EPVzpm7 | 王乾溥 | accepted |
| other | p_JhT8MPbcy6fqyD8xKqm8c7 | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王壁（CBDB 261844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261844&o=json)
