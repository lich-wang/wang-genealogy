---
schema: wang-person/v1
id: p_Qz5eSMUhWXhxV3CqkvQZeD
status: active
merged_into: null
display_name: 王嘉檠
cbdb_id: 209790
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H4vLA1iKU98TaQ78jEH2De
        subject_person_id: p_Qz5eSMUhWXhxV3CqkvQZeD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉檠，明人物。隆慶五年進士，籍贯潛山。（中国历代人物传记资料库 CBDB 209790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G0wn-BM4cYnLEhH99Q8_by
          claim_id: c_H4vLA1iKU98TaQ78jEH2De
          source_id: s_ULEMeJBcK455v6JMCgZGue
          stance: supports
          locator: CBDB:209790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ULEMeJBcK455v6JMCgZGue
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉檠（CBDB 209790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json
            external_identifier: CBDB:209790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JaZ1DcNRfNHyXkKFcYfSeE
        subject_person_id: p_Qz5eSMUhWXhxV3CqkvQZeD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉檠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CPTX2SbuxkAJCyHGzWcEFF
          claim_id: c_JaZ1DcNRfNHyXkKFcYfSeE
          source_id: s_ULEMeJBcK455v6JMCgZGue
          stance: supports
          locator: CBDB:209790
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s8n7e7jOtrhJv9_ORe0fps
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qz5eSMUhWXhxV3CqkvQZeD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EOEYcdUdt0x1U5nobJScp7
          claim_id: c_s8n7e7jOtrhJv9_ORe0fps
          source_id: s_C-m7ilHiolSQQNhztCDJhN
          stance: supports
          locator: CBDB：兄弟 王嘉柔（205854）之父／母 王漟
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉檠 与 王嘉柔 为同胞（CBDB 记「兄」），王嘉柔 之父／母即 王嘉檠 之父／母。
          source:
            id: s_C-m7ilHiolSQQNhztCDJhN
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉檠（CBDB 209790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json
            external_identifier: CBDB:209790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VkGu8uv668PXiV6BFFStb
        status: active
        display_name: 王漟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B6D45XR6MQzWuRiuW7jg8N
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Qz5eSMUhWXhxV3CqkvQZeD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tZhytJr31zY0vgq9c0qIv-
          claim_id: c_B6D45XR6MQzWuRiuW7jg8N
          source_id: s_C-m7ilHiolSQQNhztCDJhN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205854 王嘉柔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C-m7ilHiolSQQNhztCDJhN
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉檠（CBDB 209790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json
            external_identifier: CBDB:209790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Eo3x5BVMmizyxxEaJmawa5
        status: active
        display_name: 王嘉柔
        merged_into_person_id: null
---

# 王嘉檠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉檠，明人物。隆慶五年進士，籍贯潛山。（中国历代人物传记资料库 CBDB 209790） | accepted |
| name.primary | 王嘉檠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VkGu8uv668PXiV6BFFStb | 王漟 | accepted |
| other | p_Eo3x5BVMmizyxxEaJmawa5 | 王嘉柔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉檠（CBDB 209790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json)
