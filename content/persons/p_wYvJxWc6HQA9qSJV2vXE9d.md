---
schema: wang-person/v1
id: p_wYvJxWc6HQA9qSJV2vXE9d
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vc9vzG2dHvBjPQz3Fyk4oV
        subject_person_id: p_wYvJxWc6HQA9qSJV2vXE9d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Db9J8HnN9Z3kUVGurTnQSw
          claim_id: c_Vc9vzG2dHvBjPQz3Fyk4oV
          source_id: s_Qor4PnSz45AUA8idCpdZsB
          stance: supports
          locator: CBDB:326330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326330）
          source: &a1
            id: s_Qor4PnSz45AUA8idCpdZsB
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326330&o=json
            external_identifier: CBDB:326330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y5prDXCb6GYKEMnP8dCore
        subject_person_id: p_wYvJxWc6HQA9qSJV2vXE9d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。天順八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 326330）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7bjOEKq9I2hLkVlVIdmfi4
          claim_id: c_y5prDXCb6GYKEMnP8dCore
          source_id: s_Qor4PnSz45AUA8idCpdZsB
          stance: supports
          locator: CBDB:326330
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wPaTfjCkVvip3QXdJB7S_U
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wYvJxWc6HQA9qSJV2vXE9d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9M8fPiBFuruiOkhcGsgGg
          claim_id: c_wPaTfjCkVvip3QXdJB7S_U
          source_id: s_9DCspi1_7szif-ayf8hqCG
          stance: supports
          locator: CBDB：兄弟 王讓（126898）之父／母 王應橫
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王讓 为同胞（CBDB 记「弟」），王讓 之父／母即 王佐 之父／母。
          source:
            id: s_9DCspi1_7szif-ayf8hqCG
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326330&o=json
            external_identifier: CBDB:326330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        status: active
        display_name: 王應橫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_S9DCc2iTP2bho_jgIuDNUO
        subject_person_id: p_H6ADXcsddQz8PL3XHF26HH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wYvJxWc6HQA9qSJV2vXE9d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJwiXFNyD07IkpDiKSv6h7
          claim_id: c_S9DCc2iTP2bho_jgIuDNUO
          source_id: s_9DCspi1_7szif-ayf8hqCG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126898 王讓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9DCspi1_7szif-ayf8hqCG
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326330&o=json
            external_identifier: CBDB:326330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H6ADXcsddQz8PL3XHF26HH
        status: active
        display_name: 王讓
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。天順八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 326330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rQ3QkQ6Ppvi2nvZM6NWRzv | 王應橫 | accepted |
| other | p_H6ADXcsddQz8PL3XHF26HH | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 326330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326330&o=json)
