---
schema: wang-person/v1
id: p_dw1HkJvxeQbGLvtDiNGqfE
status: active
merged_into: null
display_name: 王惟寧
cbdb_id: 204346
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_51fDniXZ5SYQZH2oL4Z5zJ
        subject_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟寧（生于1522年），史料所见人物。本项目依据《中国历代人物传记资料库：王惟寧（CBDB 204346）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_flopOeFxsFtQdJoUR2jhLv
          claim_id: c_51fDniXZ5SYQZH2oL4Z5zJ
          source_id: s_fpqYxMbm9V89D1HqAuEz8F
          stance: supports
          locator: CBDB:204346
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_fpqYxMbm9V89D1HqAuEz8F
            source_type: api_record
            title: 中国历代人物传记资料库：王惟寧（CBDB 204346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204346&o=json
            external_identifier: CBDB:204346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x8k4nXDTskjxZJMJNkXmyz
        subject_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1522年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1522-01-01
            latest: 1522-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1eJ7qGKG29RuyUQs95rQP4
          claim_id: c_x8k4nXDTskjxZJMJNkXmyz
          source_id: s_fpqYxMbm9V89D1HqAuEz8F
          stance: supports
          locator: CBDB:204346
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1522
          source:
            id: s_fpqYxMbm9V89D1HqAuEz8F
            source_type: api_record
            title: 中国历代人物传记资料库：王惟寧（CBDB 204346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204346&o=json
            external_identifier: CBDB:204346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vY4mRLJGbjtFC5kL9JQXzX
        subject_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VThLiqNnNi4c8iJLk6kW8m
          claim_id: c_vY4mRLJGbjtFC5kL9JQXzX
          source_id: s_fpqYxMbm9V89D1HqAuEz8F
          stance: supports
          locator: CBDB:204346
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1522
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y3qjsua6HHAlChFcsLUTbk
        subject_person_id: p_adU4MrMDVi49ue2hfZefvu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdfNxoOck2O33LIQ6s1P0H
          claim_id: c_Y3qjsua6HHAlChFcsLUTbk
          source_id: s_rHH3GQGg3QH3wL4nwy7u1E
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rHH3GQGg3QH3wL4nwy7u1E
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 317770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317770&o=json
            external_identifier: CBDB:317770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_adU4MrMDVi49ue2hfZefvu
        status: active
        display_name: 王官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_F0V-4dygvrjQredc6BqvA8
        subject_person_id: p_TcUcycSfKD7VSNkWy8cSDi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S42-X-BB7Ne7p3mh19wyWj
          claim_id: c_F0V-4dygvrjQredc6BqvA8
          source_id: s_xTPgYjH552QyFSvEfaTi8V
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xTPgYjH552QyFSvEfaTi8V
            source_type: api_record
            title: 中国历代人物传记资料库：王文達（CBDB 317769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317769&o=json
            external_identifier: CBDB:317769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TcUcycSfKD7VSNkWy8cSDi
        status: active
        display_name: 王文達
        merged_into_person_id: null
    - claim:
        id: c_3j4wUEs2u5miskiFy-xRQP
        subject_person_id: p_Khzg6KKAHWYJwQcZ9DnzkS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_93byrH5e_daKtQT7Ezk9V5
          claim_id: c_3j4wUEs2u5miskiFy-xRQP
          source_id: s_p8A1ybHAaQ6iuunjvAMZ7T
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p8A1ybHAaQ6iuunjvAMZ7T
            source_type: api_record
            title: 中国历代人物传记资料库：王恭政（CBDB 317768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317768&o=json
            external_identifier: CBDB:317768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Khzg6KKAHWYJwQcZ9DnzkS
        status: active
        display_name: 王恭政
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惟寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟寧（生于1522年），史料所见人物。本项目依据《中国历代人物传记资料库：王惟寧（CBDB 204346）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1522年 | accepted |
| name.primary | 王惟寧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_adU4MrMDVi49ue2hfZefvu | 王官 | accepted |
| ancestors | p_TcUcycSfKD7VSNkWy8cSDi | 王文達 | accepted |
| ancestors | p_Khzg6KKAHWYJwQcZ9DnzkS | 王恭政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭政（CBDB 317768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317768&o=json)
- [中国历代人物传记资料库：王官（CBDB 317770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317770&o=json)
- [中国历代人物传记资料库：王惟寧（CBDB 204346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204346&o=json)
- [中国历代人物传记资料库：王文達（CBDB 317769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317769&o=json)
