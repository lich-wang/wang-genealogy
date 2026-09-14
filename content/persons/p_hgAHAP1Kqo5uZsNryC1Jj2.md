---
schema: wang-person/v1
id: p_hgAHAP1Kqo5uZsNryC1Jj2
status: active
merged_into: null
display_name: 王進賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uXCWfesMeeudyGhGqwqKHS
        subject_person_id: p_hgAHAP1Kqo5uZsNryC1Jj2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MoLWNYGYiQ6WxudrL7wDak
          claim_id: c_uXCWfesMeeudyGhGqwqKHS
          source_id: s_KkNhFsqB3AACyV98RzZdFU
          stance: supports
          locator: CBDB:313201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313201）
          source: &a1
            id: s_KkNhFsqB3AACyV98RzZdFU
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 313201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json
            external_identifier: CBDB:313201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8jS1gntbedGhL18yiqsQ3G
        subject_person_id: p_hgAHAP1Kqo5uZsNryC1Jj2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢，明人物。嘉靖二十九年進士，籍贯祁州。（中国历代人物传记资料库 CBDB 313201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2PTJG_34UlFnd9PbLofQ03
          claim_id: c_8jS1gntbedGhL18yiqsQ3G
          source_id: s_KkNhFsqB3AACyV98RzZdFU
          stance: supports
          locator: CBDB:313201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ro6gOcuDBjI6yRJr3pOG3G
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hgAHAP1Kqo5uZsNryC1Jj2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rU-u5UeJh57QgQ2R4lRaN
          claim_id: c_Ro6gOcuDBjI6yRJr3pOG3G
          source_id: s_z8ePkpAHqmxwLjIrIyaI98
          stance: supports
          locator: CBDB：兄弟 王用賢（204011）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王進賢 与 王用賢 为同胞（CBDB 记「兄」），王用賢 之父／母即 王進賢 之父／母。
          source:
            id: s_z8ePkpAHqmxwLjIrIyaI98
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 313201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json
            external_identifier: CBDB:313201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DFCRUSa4hCVBMPph3xEiW2
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Or3K7SXIche4zW2iR5iYT9
        subject_person_id: p_hgAHAP1Kqo5uZsNryC1Jj2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WVt2neex_x_A92byTdQ-9h
          claim_id: c_Or3K7SXIche4zW2iR5iYT9
          source_id: s_z8ePkpAHqmxwLjIrIyaI98
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204011 王用賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z8ePkpAHqmxwLjIrIyaI98
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 313201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json
            external_identifier: CBDB:313201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rkwUCxJkarsqGGHssHtTdk
        status: active
        display_name: 王用賢
        merged_into_person_id: null
---

# 王進賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進賢 | accepted |
| bio.summary | 王進賢，明人物。嘉靖二十九年進士，籍贯祁州。（中国历代人物传记资料库 CBDB 313201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DFCRUSa4hCVBMPph3xEiW2 | 王瑤 | accepted |
| other | p_rkwUCxJkarsqGGHssHtTdk | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進賢（CBDB 313201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json)
