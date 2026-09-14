---
schema: wang-person/v1
id: p_3stFDkMB5KFsJBGCcP93yg
status: active
merged_into: null
display_name: 王樸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6N6ACGobyLy9QQLLYAsijf
        subject_person_id: p_3stFDkMB5KFsJBGCcP93yg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UdKqUKwQjDC9YRWJwo9bHa
          claim_id: c_6N6ACGobyLy9QQLLYAsijf
          source_id: s_XoY5EMZ4MC4NtRSit5JCGC
          stance: supports
          locator: CBDB:320133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320133）
          source: &a1
            id: s_XoY5EMZ4MC4NtRSit5JCGC
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 320133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json
            external_identifier: CBDB:320133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6W1NeJEa1ksz2fqBkELGDo
        subject_person_id: p_3stFDkMB5KFsJBGCcP93yg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸，明人物。嘉靖三十五年進士，籍贯永康。（中国历代人物传记资料库 CBDB 320133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kci7Gp2UhqQNDp6F-7wZ9z
          claim_id: c_6W1NeJEa1ksz2fqBkELGDo
          source_id: s_XoY5EMZ4MC4NtRSit5JCGC
          stance: supports
          locator: CBDB:320133
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KeQTh6iWNPsQr48wq6EqkV
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3stFDkMB5KFsJBGCcP93yg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBatEKRv3nhZNzzmMmIKfd
          claim_id: c_KeQTh6iWNPsQr48wq6EqkV
          source_id: s_KPP37cou9SL4nqEPFHu3TU
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王樸 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王樸 之父／母。
          source:
            id: s_KPP37cou9SL4nqEPFHu3TU
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 320133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json
            external_identifier: CBDB:320133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4TKB9CF1Pcy4hP4NGvXiGk
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_t4pTxqM83b8Dd10i5rNAOZ
        subject_person_id: p_3stFDkMB5KFsJBGCcP93yg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jpQcaox80yJhLL8mduzbNL
          claim_id: c_t4pTxqM83b8Dd10i5rNAOZ
          source_id: s_KPP37cou9SL4nqEPFHu3TU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KPP37cou9SL4nqEPFHu3TU
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 320133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json
            external_identifier: CBDB:320133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R58pqFjKH7zhFPrnUA5Ato
        status: active
        display_name: 王楷
        merged_into_person_id: null
---

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| bio.summary | 王樸，明人物。嘉靖三十五年進士，籍贯永康。（中国历代人物传记资料库 CBDB 320133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TKB9CF1Pcy4hP4NGvXiGk | 王淮 | accepted |
| other | p_R58pqFjKH7zhFPrnUA5Ato | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 320133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json)
