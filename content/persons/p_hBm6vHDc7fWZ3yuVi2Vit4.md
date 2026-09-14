---
schema: wang-person/v1
id: p_hBm6vHDc7fWZ3yuVi2Vit4
status: active
merged_into: null
display_name: 王訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PoNxp3JK8z3EF5RU6rdTbM
        subject_person_id: p_hBm6vHDc7fWZ3yuVi2Vit4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_szug8NktJ5HDzDG7vNdAPN
          claim_id: c_PoNxp3JK8z3EF5RU6rdTbM
          source_id: s_wzGFKmWD2zqbHWGU9MV874
          stance: supports
          locator: CBDB:313482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313482）
          source: &a1
            id: s_wzGFKmWD2zqbHWGU9MV874
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 313482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json
            external_identifier: CBDB:313482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_48R43iGqWfaADRHC73hF9n
        subject_person_id: p_hBm6vHDc7fWZ3yuVi2Vit4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓，明人物。嘉靖二十九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 313482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0VnZYl4cPTzYTPe5LEmzdH
          claim_id: c_48R43iGqWfaADRHC73hF9n
          source_id: s_wzGFKmWD2zqbHWGU9MV874
          stance: supports
          locator: CBDB:313482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zJVVFHtfT96GrI56ha_t0C
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hBm6vHDc7fWZ3yuVi2Vit4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdC-BaU7eMk7VnB2rW4882
          claim_id: c_zJVVFHtfT96GrI56ha_t0C
          source_id: s_zntLQdgCS8XtgGkovL7HDs
          stance: supports
          locator: CBDB：兄弟 王諍（126801）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓 与 王諍 为同胞（CBDB 记「弟」），王諍 之父／母即 王訓 之父／母。
          source:
            id: s_zntLQdgCS8XtgGkovL7HDs
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 313482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json
            external_identifier: CBDB:313482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bAZKMRH7j8tU7qjcKDr2aW
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zDfzf83aTHpVMlDWu7FLRh
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hBm6vHDc7fWZ3yuVi2Vit4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5QrVZN0e7qGl_64bHV-EDN
          claim_id: c_zDfzf83aTHpVMlDWu7FLRh
          source_id: s_zntLQdgCS8XtgGkovL7HDs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126801 王諍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zntLQdgCS8XtgGkovL7HDs
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 313482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json
            external_identifier: CBDB:313482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GKmc7UBMnwgzBKbep1LTG
        status: active
        display_name: 王諍
        merged_into_person_id: null
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | 王訓，明人物。嘉靖二十九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 313482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bAZKMRH7j8tU7qjcKDr2aW | 王鍊 | accepted |
| other | p_5GKmc7UBMnwgzBKbep1LTG | 王諍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 313482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json)
