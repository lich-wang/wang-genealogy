---
schema: wang-person/v1
id: p_JrXCGcdeAggbBdG6dKucBz
status: active
merged_into: null
display_name: 王旒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZFatW8mW2M9dZoGibE8Ls7
        subject_person_id: p_JrXCGcdeAggbBdG6dKucBz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yGPG3NRSkFRfWeaiZrgPPn
          claim_id: c_ZFatW8mW2M9dZoGibE8Ls7
          source_id: s_KTLsxb5G52ZeiExCckVMBe
          stance: supports
          locator: CBDB:243175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243175）
          source: &a1
            id: s_KTLsxb5G52ZeiExCckVMBe
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 243175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json
            external_identifier: CBDB:243175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEze9haSjx5AE6ur4yV7vd
        subject_person_id: p_JrXCGcdeAggbBdG6dKucBz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旒，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243175）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oA19lyIjCSowzMf6mkFyYi
          claim_id: c_oEze9haSjx5AE6ur4yV7vd
          source_id: s_KTLsxb5G52ZeiExCckVMBe
          stance: supports
          locator: CBDB:243175
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LZVw0ObAH_RHYEdTMw4aDP
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JrXCGcdeAggbBdG6dKucBz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MmNtXOqn-LS9pbY1JXU9MS
          claim_id: c_LZVw0ObAH_RHYEdTMw4aDP
          source_id: s_EYSOd_529ZRAWPvblTkdjV
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王旒 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王旒 之父／母。
          source:
            id: s_EYSOd_529ZRAWPvblTkdjV
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 243175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json
            external_identifier: CBDB:243175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hh7o2AX3pCLwbnQdJRNfAA
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LTxxyWkO1gIZo_2no8ha6d
        subject_person_id: p_GiENj1L3SMUyiHFegryAJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JrXCGcdeAggbBdG6dKucBz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79Ll3tCic5YcfXagzICko0
          claim_id: c_LTxxyWkO1gIZo_2no8ha6d
          source_id: s_EYSOd_529ZRAWPvblTkdjV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EYSOd_529ZRAWPvblTkdjV
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 243175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json
            external_identifier: CBDB:243175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GiENj1L3SMUyiHFegryAJV
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王旒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旒 | accepted |
| bio.summary | 王旒，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hh7o2AX3pCLwbnQdJRNfAA | 王綱 | accepted |
| other | p_GiENj1L3SMUyiHFegryAJV | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旒（CBDB 243175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json)
