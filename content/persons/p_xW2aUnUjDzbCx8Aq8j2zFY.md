---
schema: wang-person/v1
id: p_xW2aUnUjDzbCx8Aq8j2zFY
status: active
merged_into: null
display_name: 王以週
cbdb_id: 221825
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ju8mE8N2ee9r4Bos3LQP6i
        subject_person_id: p_xW2aUnUjDzbCx8Aq8j2zFY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以週，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221825）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ic98A2_SNk5Z9K8s7TgsMH
          claim_id: c_Ju8mE8N2ee9r4Bos3LQP6i
          source_id: s_M2wu3qpUofEXSGBqQUMScN
          stance: supports
          locator: CBDB:221825
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M2wu3qpUofEXSGBqQUMScN
            source_type: api_record
            title: 中国历代人物传记资料库：王以週（CBDB 221825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221825&o=json
            external_identifier: CBDB:221825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vk4mMCCqvKFJdYH4rGwjcE
        subject_person_id: p_xW2aUnUjDzbCx8Aq8j2zFY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以週
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dL8zKRoqvmQ2UVqiTBf7XL
          claim_id: c_vk4mMCCqvKFJdYH4rGwjcE
          source_id: s_M2wu3qpUofEXSGBqQUMScN
          stance: supports
          locator: CBDB:221825
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2aKBFX5z0SrPjhzAGpEjU-
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xW2aUnUjDzbCx8Aq8j2zFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6e7mDAt7NEl86yWwcMK7Mo
          claim_id: c_2aKBFX5z0SrPjhzAGpEjU-
          source_id: s_-V7k9IemK4uLkY4ksEHwml
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以週 与 王以通 为同胞（CBDB 记「兄」），王以通 之父／母即 王以週 之父／母。
          source:
            id: s_-V7k9IemK4uLkY4ksEHwml
            source_type: api_record
            title: 中国历代人物传记资料库：王以週（CBDB 221825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221825&o=json
            external_identifier: CBDB:221825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtPUy8Ayd7XFTp2c4HBHNK
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NCxCBnX_Hppc5u1f9KAprr
        subject_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xW2aUnUjDzbCx8Aq8j2zFY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w1QH5MWVFK5-aE6-A1XqWK
          claim_id: c_NCxCBnX_Hppc5u1f9KAprr
          source_id: s_-V7k9IemK4uLkY4ksEHwml
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206705 王以通）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-V7k9IemK4uLkY4ksEHwml
            source_type: api_record
            title: 中国历代人物传记资料库：王以週（CBDB 221825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221825&o=json
            external_identifier: CBDB:221825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qMg6Q8CEPodQMPp2EgjAAi
        status: active
        display_name: 王以通
        merged_into_person_id: null
---

# 王以週

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以週，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221825） | accepted |
| name.primary | 王以週 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtPUy8Ayd7XFTp2c4HBHNK | 王榮 | accepted |
| other | p_qMg6Q8CEPodQMPp2EgjAAi | 王以通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以週（CBDB 221825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221825&o=json)
