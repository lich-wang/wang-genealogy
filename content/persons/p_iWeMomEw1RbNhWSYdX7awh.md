---
schema: wang-person/v1
id: p_iWeMomEw1RbNhWSYdX7awh
status: active
merged_into: null
display_name: 王柏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YGGPYDRufPodWxnT2UZ4J
        subject_person_id: p_iWeMomEw1RbNhWSYdX7awh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MiWzen1BkA6yDQqrZML7Mu
          claim_id: c_1YGGPYDRufPodWxnT2UZ4J
          source_id: s_KqS2iGTkiVJpxDPigF89Az
          stance: supports
          locator: CBDB:254952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254952）
          source: &a1
            id: s_KqS2iGTkiVJpxDPigF89Az
            source_type: api_record
            title: 中国历代人物传记资料库：王柏（CBDB 254952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254952&o=json
            external_identifier: CBDB:254952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZSNnv1V1rDYpBpF68HTvAF
        subject_person_id: p_iWeMomEw1RbNhWSYdX7awh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柏，明人物。成化十七年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 254952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_--IZcXGD7hFMsVDaLX5fVZ
          claim_id: c_ZSNnv1V1rDYpBpF68HTvAF
          source_id: s_KqS2iGTkiVJpxDPigF89Az
          stance: supports
          locator: CBDB:254952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8-rqFlK6gBuhKGB5XaKbKL
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iWeMomEw1RbNhWSYdX7awh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMSNwJAfkep6GiQU2oUwCl
          claim_id: c_8-rqFlK6gBuhKGB5XaKbKL
          source_id: s_oX2K1rR4GHA761Crdh6lm9
          stance: supports
          locator: CBDB：兄弟 王機（200214）之父／母 王宣清
          quotation: null
          interpretation_note: 由兄弟关系推断：王柏 与 王機 为同胞（CBDB 记「弟」），王機 之父／母即 王柏 之父／母。
          source:
            id: s_oX2K1rR4GHA761Crdh6lm9
            source_type: api_record
            title: 中国历代人物传记资料库：王柏（CBDB 254952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254952&o=json
            external_identifier: CBDB:254952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h8sJHgEUaQHScKxtt1BkuB
        status: active
        display_name: 王宣清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZceeYuoS6JQb10p_ji8YZj
        subject_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iWeMomEw1RbNhWSYdX7awh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDRV7i4AdjgKQkqcC2imgJ
          claim_id: c_ZceeYuoS6JQb10p_ji8YZj
          source_id: s_oX2K1rR4GHA761Crdh6lm9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200214 王機）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oX2K1rR4GHA761Crdh6lm9
            source_type: api_record
            title: 中国历代人物传记资料库：王柏（CBDB 254952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254952&o=json
            external_identifier: CBDB:254952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G8UB9fUGo95gK5v77Cu4Q6
        status: active
        display_name: 王機
        merged_into_person_id: null
---

# 王柏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柏 | accepted |
| bio.summary | 王柏，明人物。成化十七年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 254952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h8sJHgEUaQHScKxtt1BkuB | 王宣清 | accepted |
| other | p_G8UB9fUGo95gK5v77Cu4Q6 | 王機 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柏（CBDB 254952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254952&o=json)
