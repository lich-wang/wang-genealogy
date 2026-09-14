---
schema: wang-person/v1
id: p_TP1Ex1VEusLFsBT8p2qNEB
status: active
merged_into: null
display_name: 王璟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qXqkdvmdrwKiBuSrYfhb5M
        subject_person_id: p_TP1Ex1VEusLFsBT8p2qNEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bmbnPxj2G2q8hR73sVkd8J
          claim_id: c_qXqkdvmdrwKiBuSrYfhb5M
          source_id: s_em39yFkmaPCqciBDnu8riM
          stance: supports
          locator: CBDB:304805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304805）
          source: &a1
            id: s_em39yFkmaPCqciBDnu8riM
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 304805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json
            external_identifier: CBDB:304805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jMyMXjdc3yfbgFhSg2S5qa
        subject_person_id: p_TP1Ex1VEusLFsBT8p2qNEB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟，明人物。天順元年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 304805）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cSbxK7nzbkPYbE-J1rsjP7
          claim_id: c_jMyMXjdc3yfbgFhSg2S5qa
          source_id: s_em39yFkmaPCqciBDnu8riM
          stance: supports
          locator: CBDB:304805
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B63M-d4K_cLnqYzpDxfr02
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TP1Ex1VEusLFsBT8p2qNEB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4RFFI64IsXOJKInLqOqOQ-
          claim_id: c_B63M-d4K_cLnqYzpDxfr02
          source_id: s_OQWgNz6VrkR1e6V7a6w0jb
          stance: supports
          locator: CBDB：兄弟 王瓚（198693）之父／母 王鄷
          quotation: null
          interpretation_note: 由兄弟关系推断：王璟 与 王瓚 为同胞（CBDB 记「兄」），王瓚 之父／母即 王璟 之父／母。
          source:
            id: s_OQWgNz6VrkR1e6V7a6w0jb
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 304805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json
            external_identifier: CBDB:304805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jpb5e1LSfcNEcndKC8NGxG
        status: active
        display_name: 王鄷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FwxOj9NeZ4ANHdsX55DCSY
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TP1Ex1VEusLFsBT8p2qNEB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tVBTapXH9zuKojgIT1cA9N
          claim_id: c_FwxOj9NeZ4ANHdsX55DCSY
          source_id: s_OQWgNz6VrkR1e6V7a6w0jb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198693 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OQWgNz6VrkR1e6V7a6w0jb
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 304805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json
            external_identifier: CBDB:304805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PdBPJVHqizEMUoTmb638jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
---

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| bio.summary | 王璟，明人物。天順元年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 304805） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jpb5e1LSfcNEcndKC8NGxG | 王鄷 | accepted |
| other | p_PdBPJVHqizEMUoTmb638jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 304805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json)
