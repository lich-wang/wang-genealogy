---
schema: wang-person/v1
id: p_PdBPJVHqizEMUoTmb638jr
status: active
merged_into: null
display_name: 王瓚
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oeiCEC9qP4HYiteVQHEpce
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HcHjPdDAft7isXd5B9Sn3A
          claim_id: c_oeiCEC9qP4HYiteVQHEpce
          source_id: s_cQgqQM6MPxN5HNJ4LNgLZy
          stance: supports
          locator: CBDB:198693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198693）
          source: &a1
            id: s_cQgqQM6MPxN5HNJ4LNgLZy
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 198693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198693&o=json
            external_identifier: CBDB:198693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JThY4vhdvY7nfzwf9FLv4A
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ScqQ6HR7g6PQspj73X6wC7
          claim_id: c_JThY4vhdvY7nfzwf9FLv4A
          source_id: s_cQgqQM6MPxN5HNJ4LNgLZy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_azatHE3hRQVKWUcMB4Pckz
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚（生于1430年），明人物。天順元年進士，籍贯陝州，入仕進士。（中国历代人物传记资料库 CBDB 198693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a0g-tTw1h65L0B_VdSgztS
          claim_id: c_azatHE3hRQVKWUcMB4Pckz
          source_id: s_cQgqQM6MPxN5HNJ4LNgLZy
          stance: supports
          locator: CBDB:198693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_jpb5e1LSfcNEcndKC8NGxG
        status: active
        display_name: 王鄷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_s5SvsEC5hCAca2C5KNS2d-
        subject_person_id: p_oUb5sB73dC3KZFbPKC8ymf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PdBPJVHqizEMUoTmb638jr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTqRoOW974jJLZeIr0jHTz
          claim_id: c_s5SvsEC5hCAca2C5KNS2d-
          source_id: s_KCuTieHdb7tuR1uP74izb1
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KCuTieHdb7tuR1uP74izb1
            source_type: api_record
            title: 中国历代人物传记资料库：王天祐（CBDB 304725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304725&o=json
            external_identifier: CBDB:304725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oUb5sB73dC3KZFbPKC8ymf
        status: active
        display_name: 王天祐
        merged_into_person_id: null
    - claim:
        id: c_AZd81Yct9R4H4FdBdDg64R
        subject_person_id: p_QpyM9VFEY5YMqvL4Kb3WVn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PdBPJVHqizEMUoTmb638jr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R79RMi8Ebp7WJvaYZ2qX7f
          claim_id: c_AZd81Yct9R4H4FdBdDg64R
          source_id: s_HjHDhujtrE4k4GFXyFDgK2
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HjHDhujtrE4k4GFXyFDgK2
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 304736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304736&o=json
            external_identifier: CBDB:304736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QpyM9VFEY5YMqvL4Kb3WVn
        status: active
        display_name: 王文奎
        merged_into_person_id: null
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
        id: p_TP1Ex1VEusLFsBT8p2qNEB
        status: active
        display_name: 王璟
        merged_into_person_id: null
    - claim:
        id: c_GLa-GGItOh6t4YYieCBcIG
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WEyGY8tnFiduvGyLHw9TaC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5BRm3GQqNZs_jKLaOmb0yV
          claim_id: c_GLa-GGItOh6t4YYieCBcIG
          source_id: s_9KGULXRp6w4X23pfZ4OS0C
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198693 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Q1HzqnJvn_40SWaf0EjLAU
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eJtNzmia7UZh5Qs2TtVQLg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hDtUbgjPjV_DvVOEjJ_5Fe
          claim_id: c_Q1HzqnJvn_40SWaf0EjLAU
          source_id: s_aFf09phfV1UUftEQ86qvqG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198693 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_OIg6Al8YZWALrvAhTPYu5T
        subject_person_id: p_PdBPJVHqizEMUoTmb638jr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jRYMdCT6RgHdYTLBH4E8Pm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ediMmzY9KrFXrMhnsLAxtb
          claim_id: c_OIg6Al8YZWALrvAhTPYu5T
          source_id: s_gcgevCcYta0TYQ1kS76JI1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198693 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| birth.date | 1430年 | accepted |
| bio.summary | 王瓚（生于1430年），明人物。天順元年進士，籍贯陝州，入仕進士。（中国历代人物传记资料库 CBDB 198693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jpb5e1LSfcNEcndKC8NGxG | 王鄷 | accepted |
| ancestors | p_oUb5sB73dC3KZFbPKC8ymf | 王天祐 | accepted |
| ancestors | p_QpyM9VFEY5YMqvL4Kb3WVn | 王文奎 | accepted |
| other | p_TP1Ex1VEusLFsBT8p2qNEB | 王璟 | accepted |
| other | p_WEyGY8tnFiduvGyLHw9TaC | 王琮 | accepted |
| other | p_eJtNzmia7UZh5Qs2TtVQLg | 王璽 | accepted |
| other | p_jRYMdCT6RgHdYTLBH4E8Pm | 王瑀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 304794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304794&o=json)
- [中国历代人物传记资料库：王鄷（CBDB 304747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json)
- [中国历代人物传记资料库：王璟（CBDB 304805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json)
- [中国历代人物传记资料库：王天祐（CBDB 304725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304725&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 304736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304736&o=json)
- [中国历代人物传记资料库：王璽（CBDB 304783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304783&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 304816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304816&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 198693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198693&o=json)
