---
schema: wang-person/v1
id: p_fJ6BwD4QqhvgPod68Fnvvo
status: active
merged_into: null
display_name: 王朝貢
cbdb_id: 295497
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VpLnsCg7QLJveug58PMcG6
        subject_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝貢，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295497）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MYbV0NBVaP-DSjfSLX9NIr
          claim_id: c_VpLnsCg7QLJveug58PMcG6
          source_id: s_YYGB99Xtvy4dQSZcPkeCAu
          stance: supports
          locator: CBDB:295497
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YYGB99Xtvy4dQSZcPkeCAu
            source_type: api_record
            title: 中国历代人物传记资料库：王朝貢（CBDB 295497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json
            external_identifier: CBDB:295497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sMhmwKHHgUvmEutiXT2y6B
        subject_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝貢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3Z9ysMGZ2Yq7rQqTyT1AGn
          claim_id: c_sMhmwKHHgUvmEutiXT2y6B
          source_id: s_YYGB99Xtvy4dQSZcPkeCAu
          stance: supports
          locator: CBDB:295497
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z0XdgMFABmyyFx9YVKP5Jt
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TgEH3ikLGq2ao24lY9_rhB
          claim_id: c_Z0XdgMFABmyyFx9YVKP5Jt
          source_id: s_mmIjEtW8gIsKLiOWArWVT3
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝貢 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝貢 之父／母。
          source:
            id: s_mmIjEtW8gIsKLiOWArWVT3
            source_type: api_record
            title: 中国历代人物传记资料库：王朝貢（CBDB 295497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json
            external_identifier: CBDB:295497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AX7eQXpp32FZKNQ3efJdUf
        status: active
        display_name: 王翮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4Li294yrwOnZig7cPaurF_
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Od05GMRLuVi9mI7QKY3BYr
          claim_id: c_4Li294yrwOnZig7cPaurF_
          source_id: s_mmIjEtW8gIsKLiOWArWVT3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202839 王朝相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mmIjEtW8gIsKLiOWArWVT3
            source_type: api_record
            title: 中国历代人物传记资料库：王朝貢（CBDB 295497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json
            external_identifier: CBDB:295497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AQPzHURj5Q55p8A3sruTTG
        status: active
        display_name: 王朝相
        merged_into_person_id: null
---

# 王朝貢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝貢，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295497） | accepted |
| name.primary | 王朝貢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AX7eQXpp32FZKNQ3efJdUf | 王翮 | accepted |
| other | p_AQPzHURj5Q55p8A3sruTTG | 王朝相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝貢（CBDB 295497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json)
