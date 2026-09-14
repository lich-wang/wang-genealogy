---
schema: wang-person/v1
id: p_YEGmKaFkY2XKW39GDxDELP
status: active
merged_into: null
display_name: 王珊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97W6KLwzDnUK7TpKsNoeQo
        subject_person_id: p_YEGmKaFkY2XKW39GDxDELP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yjHkXBDVf3rjCBqPNM5AK5
          claim_id: c_97W6KLwzDnUK7TpKsNoeQo
          source_id: s_6et4x5gDpwF3UhcAcUeFPi
          stance: supports
          locator: CBDB:335485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335485）
          source: &a1
            id: s_6et4x5gDpwF3UhcAcUeFPi
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 335485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335485&o=json
            external_identifier: CBDB:335485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FeVRb84gLC3dWGQxPNbVM9
        subject_person_id: p_YEGmKaFkY2XKW39GDxDELP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珊，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335485）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N1NPGrqA7DqUbkH2LR88D3
          claim_id: c_FeVRb84gLC3dWGQxPNbVM9
          source_id: s_6et4x5gDpwF3UhcAcUeFPi
          stance: supports
          locator: CBDB:335485
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eE6zuWAbnMfLhdrq3RL56G
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YEGmKaFkY2XKW39GDxDELP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-1BcIEMuXGUgDE5ZSfxoUK
          claim_id: c_eE6zuWAbnMfLhdrq3RL56G
          source_id: s_a5kW0gNqQem_TAxCe-SBWY
          stance: supports
          locator: CBDB：兄弟 王用汲（126494）之父／母 王孫
          quotation: null
          interpretation_note: 由兄弟关系推断：王珊 与 王用汲 为同胞（CBDB 记「兄」），王用汲 之父／母即 王珊 之父／母。
          source:
            id: s_a5kW0gNqQem_TAxCe-SBWY
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 335485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335485&o=json
            external_identifier: CBDB:335485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wFTS9Dws5nhZvJ8pXQTGVc
        status: active
        display_name: 王孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oCLMfNEQlO5QO8f1u1Je3o
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YEGmKaFkY2XKW39GDxDELP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LX7Nd3W0BhQYrQDf3QpQd3
          claim_id: c_oCLMfNEQlO5QO8f1u1Je3o
          source_id: s_a5kW0gNqQem_TAxCe-SBWY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a5kW0gNqQem_TAxCe-SBWY
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 335485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335485&o=json
            external_identifier: CBDB:335485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
---

# 王珊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珊 | accepted |
| bio.summary | 王珊，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335485） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFTS9Dws5nhZvJ8pXQTGVc | 王孫 | accepted |
| other | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珊（CBDB 335485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335485&o=json)
