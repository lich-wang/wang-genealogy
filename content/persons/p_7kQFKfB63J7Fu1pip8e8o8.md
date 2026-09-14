---
schema: wang-person/v1
id: p_7kQFKfB63J7Fu1pip8e8o8
status: active
merged_into: null
display_name: 王芮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FCtSA159VDmygrbcpzEuMh
        subject_person_id: p_7kQFKfB63J7Fu1pip8e8o8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bBthNpj8RfpnWHMKAaZXMj
          claim_id: c_FCtSA159VDmygrbcpzEuMh
          source_id: s_2K3VmMp8vHS1kjCnC3ihv1
          stance: supports
          locator: CBDB:282022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282022）
          source: &a1
            id: s_2K3VmMp8vHS1kjCnC3ihv1
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 282022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282022&o=json
            external_identifier: CBDB:282022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YHSPEFHiKpD98JYCf7kDB9
        subject_person_id: p_7kQFKfB63J7Fu1pip8e8o8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芮，明人物。正德十二年進士，籍贯江陰，曾任引禮舍人。（中国历代人物传记资料库 CBDB 282022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hsS8IvNIAk6cOh7O3yav9d
          claim_id: c_YHSPEFHiKpD98JYCf7kDB9
          source_id: s_2K3VmMp8vHS1kjCnC3ihv1
          stance: supports
          locator: CBDB:282022
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3hNj2wyHPeiOqp65uaFn_7
        subject_person_id: p_XqWNJLmbKSSL4nVqCGV54n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7kQFKfB63J7Fu1pip8e8o8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcXvP5vSZydq3x4GMpRurw
          claim_id: c_3hNj2wyHPeiOqp65uaFn_7
          source_id: s_C2PNRXCSDuUgXuw4QIvvgb
          stance: supports
          locator: CBDB：兄弟 王莘（126692）之父／母 王格
          quotation: null
          interpretation_note: 由兄弟关系推断：王芮 与 王莘 为同胞（CBDB 记「兄」），王莘 之父／母即 王芮 之父／母。
          source:
            id: s_C2PNRXCSDuUgXuw4QIvvgb
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 282022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282022&o=json
            external_identifier: CBDB:282022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XqWNJLmbKSSL4nVqCGV54n
        status: active
        display_name: 王格
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PkIrFWWfwWJzKXipAcYahY
        subject_person_id: p_7kQFKfB63J7Fu1pip8e8o8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oVY5gyYAQOxMbVQ4xquLV1
          claim_id: c_PkIrFWWfwWJzKXipAcYahY
          source_id: s_C2PNRXCSDuUgXuw4QIvvgb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126692 王莘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C2PNRXCSDuUgXuw4QIvvgb
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 282022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282022&o=json
            external_identifier: CBDB:282022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fsfzbsXi2CKQ2Y6QzQVevK
        status: active
        display_name: 王莘
        merged_into_person_id: null
---

# 王芮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芮 | accepted |
| bio.summary | 王芮，明人物。正德十二年進士，籍贯江陰，曾任引禮舍人。（中国历代人物传记资料库 CBDB 282022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XqWNJLmbKSSL4nVqCGV54n | 王格 | accepted |
| other | p_fsfzbsXi2CKQ2Y6QzQVevK | 王莘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芮（CBDB 282022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282022&o=json)
