---
schema: wang-person/v1
id: p_Wk3sC5J4yRt2WoJturnPL7
status: active
merged_into: null
display_name: 王三俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LW9kMoYdG21mpgZmUermgX
        subject_person_id: p_Wk3sC5J4yRt2WoJturnPL7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iPz1P93q6hLAZnDQgkK3Gu
          claim_id: c_LW9kMoYdG21mpgZmUermgX
          source_id: s_MtUC5T1p26NteR2W9qtSjp
          stance: supports
          locator: CBDB:279882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279882）
          source: &a1
            id: s_MtUC5T1p26NteR2W9qtSjp
            source_type: api_record
            title: 中国历代人物传记资料库：王三俊（CBDB 279882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json
            external_identifier: CBDB:279882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chHhjKqngXcD2UZ6KksJeC
        subject_person_id: p_Wk3sC5J4yRt2WoJturnPL7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三俊，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8OTcGSOeOr1EEMkX_ZN8ez
          claim_id: c_chHhjKqngXcD2UZ6KksJeC
          source_id: s_MtUC5T1p26NteR2W9qtSjp
          stance: supports
          locator: CBDB:279882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TprHw1x9ZBwTxZdwSYnJXZ
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wk3sC5J4yRt2WoJturnPL7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9bIB2ocUtPQlv3Aqgiu55
          claim_id: c_TprHw1x9ZBwTxZdwSYnJXZ
          source_id: s_TZHJzTDgkY8cLyEha9YSme
          stance: supports
          locator: CBDB：兄弟 王三錫（126453）之父／母 王瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王三俊 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三俊 之父／母。
          source:
            id: s_TZHJzTDgkY8cLyEha9YSme
            source_type: api_record
            title: 中国历代人物传记资料库：王三俊（CBDB 279882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json
            external_identifier: CBDB:279882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NUN9V2WpcJELAKS3hvUbxx
        status: active
        display_name: 王瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e21KP4CH-JgbShlZi6iH2E
        subject_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wk3sC5J4yRt2WoJturnPL7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1gBGKECrBvH4gvS8C4-Vg
          claim_id: c_e21KP4CH-JgbShlZi6iH2E
          source_id: s_TZHJzTDgkY8cLyEha9YSme
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126453 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TZHJzTDgkY8cLyEha9YSme
            source_type: api_record
            title: 中国历代人物传记资料库：王三俊（CBDB 279882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json
            external_identifier: CBDB:279882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HkNX6H623Y1z9EYnBdcJJC
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王三俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三俊 | accepted |
| bio.summary | 王三俊，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NUN9V2WpcJELAKS3hvUbxx | 王瑞 | accepted |
| other | p_HkNX6H623Y1z9EYnBdcJJC | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三俊（CBDB 279882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json)
