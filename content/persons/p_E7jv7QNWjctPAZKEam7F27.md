---
schema: wang-person/v1
id: p_E7jv7QNWjctPAZKEam7F27
status: active
merged_into: null
display_name: 王敬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1gNNDCGAyGbErXtFyD4z3z
        subject_person_id: p_E7jv7QNWjctPAZKEam7F27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HxEK2z18uVDE8oCGEYEhNp
          claim_id: c_1gNNDCGAyGbErXtFyD4z3z
          source_id: s_95SkmtiNQ6LHbnH1F1PLm1
          stance: supports
          locator: CBDB:248449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248449）
          source: &a1
            id: s_95SkmtiNQ6LHbnH1F1PLm1
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 248449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248449&o=json
            external_identifier: CBDB:248449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ns43yM7Bwy6dA2vYMt994M
        subject_person_id: p_E7jv7QNWjctPAZKEam7F27
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。成化十一年進士，籍贯宣府前衛。（中国历代人物传记资料库 CBDB 248449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NW2zktimJz3fMNqSmn8CG7
          claim_id: c_Ns43yM7Bwy6dA2vYMt994M
          source_id: s_95SkmtiNQ6LHbnH1F1PLm1
          stance: supports
          locator: CBDB:248449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jtLrW6mhH40pYvEimLpEOX
        subject_person_id: p_uTGWZPP3K2AvshF7Q9pjcC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7jv7QNWjctPAZKEam7F27
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3d4D6kMNKa3Jstx4BNDD3
          claim_id: c_jtLrW6mhH40pYvEimLpEOX
          source_id: s_0mL2Hk_G8mDrbW7nI7bU65
          stance: supports
          locator: CBDB：兄弟 王敏（199681）之父／母 王能
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬 与 王敏 为同胞（CBDB 记「兄」），王敏 之父／母即 王敬 之父／母。
          source:
            id: s_0mL2Hk_G8mDrbW7nI7bU65
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 248449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248449&o=json
            external_identifier: CBDB:248449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uTGWZPP3K2AvshF7Q9pjcC
        status: active
        display_name: 王能
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iNL6xgmxMqdFdLXrLFbdp9
        subject_person_id: p_E7jv7QNWjctPAZKEam7F27
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wtbH7xExyKzkv5ZQ6eBmE5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VyeQgWFsxKb_o0T61lf1TY
          claim_id: c_iNL6xgmxMqdFdLXrLFbdp9
          source_id: s_0mL2Hk_G8mDrbW7nI7bU65
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199681 王敏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0mL2Hk_G8mDrbW7nI7bU65
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 248449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248449&o=json
            external_identifier: CBDB:248449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wtbH7xExyKzkv5ZQ6eBmE5
        status: active
        display_name: 王敏
        merged_into_person_id: null
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。成化十一年進士，籍贯宣府前衛。（中国历代人物传记资料库 CBDB 248449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uTGWZPP3K2AvshF7Q9pjcC | 王能 | accepted |
| other | p_wtbH7xExyKzkv5ZQ6eBmE5 | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 248449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248449&o=json)
