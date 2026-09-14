---
schema: wang-person/v1
id: p_jpb5e1LSfcNEcndKC8NGxG
status: active
merged_into: null
display_name: 王鄷
cbdb_id: 304747
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KAA1tT7U4zAwhgQN8Xnv14
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄷，明人物。天順元年進士，籍贯陝州，曾任教授。（中国历代人物传记资料库 CBDB 304747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tRlMyMNte0nMEcMSbOjNUE
          claim_id: c_KAA1tT7U4zAwhgQN8Xnv14
          source_id: s_ersuMdygx9HVcxawPFRHpy
          stance: supports
          locator: CBDB:304747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ersuMdygx9HVcxawPFRHpy
            source_type: api_record
            title: 中国历代人物传记资料库：王鄷（CBDB 304747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json
            external_identifier: CBDB:304747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TD6nLkvaS1pyMDZSJAFY9Z
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Py3soPk76FPwLH6uRnkFT2
          claim_id: c_TD6nLkvaS1pyMDZSJAFY9Z
          source_id: s_ersuMdygx9HVcxawPFRHpy
          stance: supports
          locator: CBDB:304747
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_C-ciSiRWgKA6w_uUM_h8a6
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PdBPJVHqizEMUoTmb638jr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_90vfazPGDJPvxMATMbMkNv
          claim_id: c_C-ciSiRWgKA6w_uUM_h8a6
          source_id: s_ersuMdygx9HVcxawPFRHpy
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ersuMdygx9HVcxawPFRHpy
            source_type: api_record
            title: 中国历代人物传记资料库：王鄷（CBDB 304747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json
            external_identifier: CBDB:304747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PdBPJVHqizEMUoTmb638jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
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
        id: p_TP1Ex1VEusLFsBT8p2qNEB
        status: active
        display_name: 王璟
        merged_into_person_id: null
    - claim:
        id: c_7j1bQE6HrtavzfuT0EJmS_
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WEyGY8tnFiduvGyLHw9TaC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hDKpYyVAXEbcsJd3-S2obc
          claim_id: c_7j1bQE6HrtavzfuT0EJmS_
          source_id: s_9KGULXRp6w4X23pfZ4OS0C
          stance: supports
          locator: CBDB：兄弟 王瓚（198693）之父／母 王鄷
          quotation: null
          interpretation_note: 由兄弟关系推断：王琮 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王琮 之父／母。
          source:
            id: s_9KGULXRp6w4X23pfZ4OS0C
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 304794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304794&o=json
            external_identifier: CBDB:304794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WEyGY8tnFiduvGyLHw9TaC
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_D1ZCl3UyvUOf2lyi9JXhC5
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJtNzmia7UZh5Qs2TtVQLg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7m7-ll8tfho4JQDATAjh_6
          claim_id: c_D1ZCl3UyvUOf2lyi9JXhC5
          source_id: s_aFf09phfV1UUftEQ86qvqG
          stance: supports
          locator: CBDB：兄弟 王瓚（198693）之父／母 王鄷
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王璽 之父／母。
          source:
            id: s_aFf09phfV1UUftEQ86qvqG
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 304783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304783&o=json
            external_identifier: CBDB:304783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eJtNzmia7UZh5Qs2TtVQLg
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_IGWBBK0iJjk-NpPNSl_fjc
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jRYMdCT6RgHdYTLBH4E8Pm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lF_D36cZ1FMIu-T8hkpuss
          claim_id: c_IGWBBK0iJjk-NpPNSl_fjc
          source_id: s_gcgevCcYta0TYQ1kS76JI1
          stance: supports
          locator: CBDB：兄弟 王瓚（198693）之父／母 王鄷
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王瓚 为同胞（CBDB 记「兄」），王瓚 之父／母即 王瑀 之父／母。
          source:
            id: s_gcgevCcYta0TYQ1kS76JI1
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 304816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304816&o=json
            external_identifier: CBDB:304816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jRYMdCT6RgHdYTLBH4E8Pm
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鄷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鄷，明人物。天順元年進士，籍贯陝州，曾任教授。（中国历代人物传记资料库 CBDB 304747） | accepted |
| name.primary | 王鄷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PdBPJVHqizEMUoTmb638jr | 王瓚 | accepted |
| children | p_TP1Ex1VEusLFsBT8p2qNEB | 王璟 | accepted |
| children | p_WEyGY8tnFiduvGyLHw9TaC | 王琮 | accepted |
| children | p_eJtNzmia7UZh5Qs2TtVQLg | 王璽 | accepted |
| children | p_jRYMdCT6RgHdYTLBH4E8Pm | 王瑀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 304794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304794&o=json)
- [中国历代人物传记资料库：王鄷（CBDB 304747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json)
- [中国历代人物传记资料库：王璟（CBDB 304805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json)
- [中国历代人物传记资料库：王璽（CBDB 304783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304783&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 304816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304816&o=json)
