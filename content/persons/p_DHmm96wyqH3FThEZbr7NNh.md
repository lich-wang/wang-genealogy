---
schema: wang-person/v1
id: p_DHmm96wyqH3FThEZbr7NNh
status: active
merged_into: null
display_name: 王應顯
cbdb_id: 204039
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DZsRLAPSUY3gaeSoAtbs49
        subject_person_id: p_DHmm96wyqH3FThEZbr7NNh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應顯（生于1511年），明人物。明清進士進士，籍贯漳浦，入仕進士，曾任分守道。（中国历代人物传记资料库 CBDB 204039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LSEwGhRn-ipKtACgb9Swwh
          claim_id: c_DZsRLAPSUY3gaeSoAtbs49
          source_id: s_XvSp6Rf4jnA7pUx8vL2znc
          stance: supports
          locator: CBDB:204039
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XvSp6Rf4jnA7pUx8vL2znc
            source_type: api_record
            title: 中国历代人物传记资料库：王應顯（CBDB 204039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204039&o=json
            external_identifier: CBDB:204039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gAr9BojqyY3NvNNVB5kN4f
        subject_person_id: p_DHmm96wyqH3FThEZbr7NNh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1511-01-01
            latest: 1511-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMbqYigyrPvrG6o6Gk37Kc
          claim_id: c_gAr9BojqyY3NvNNVB5kN4f
          source_id: s_XvSp6Rf4jnA7pUx8vL2znc
          stance: supports
          locator: CBDB:204039
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1511
          source:
            id: s_XvSp6Rf4jnA7pUx8vL2znc
            source_type: api_record
            title: 中国历代人物传记资料库：王應顯（CBDB 204039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204039&o=json
            external_identifier: CBDB:204039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TJzxGfqXr1qu3N4EJSJDVi
        subject_person_id: p_DHmm96wyqH3FThEZbr7NNh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mL5k196V9vJaTDPNZrRRfg
          claim_id: c_TJzxGfqXr1qu3N4EJSJDVi
          source_id: s_XvSp6Rf4jnA7pUx8vL2znc
          stance: supports
          locator: CBDB:204039
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1511
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d-RMlzuKBKT431jpIMLMGU
        subject_person_id: p_6EDxBNb6A4KZM4GUSLwb5Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHmm96wyqH3FThEZbr7NNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xbJablzF53L5MW6w0OUY4e
          claim_id: c_d-RMlzuKBKT431jpIMLMGU
          source_id: s_sgFVx5SeDJ589PZCLwKjSP
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sgFVx5SeDJ589PZCLwKjSP
            source_type: api_record
            title: 中国历代人物传记资料库：王穹（CBDB 313621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313621&o=json
            external_identifier: CBDB:313621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6EDxBNb6A4KZM4GUSLwb5Y
        status: active
        display_name: 王穹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FO3cpcKVjMIpFTZscBUkdB
        subject_person_id: p_A6GtM7UJhYUAHaRvVmsNu6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHmm96wyqH3FThEZbr7NNh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tlLjHlTBnRGnZLd111zPYg
          claim_id: c_FO3cpcKVjMIpFTZscBUkdB
          source_id: s_kjVMQYpUeJgBYYPE446kGA
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kjVMQYpUeJgBYYPE446kGA
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 313620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313620&o=json
            external_identifier: CBDB:313620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A6GtM7UJhYUAHaRvVmsNu6
        status: active
        display_name: 王亨
        merged_into_person_id: null
    - claim:
        id: c_7ie36LY7luo-o4FKTz74zw
        subject_person_id: p_DkQMvzrrjMDQb18zwSbimb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHmm96wyqH3FThEZbr7NNh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKP-ZFPllPSYyZqN8Q7pJh
          claim_id: c_7ie36LY7luo-o4FKTz74zw
          source_id: s_C6PjfengbT4LCL5k2KCigL
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C6PjfengbT4LCL5k2KCigL
            source_type: api_record
            title: 中国历代人物传记资料库：王希德（CBDB 313619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313619&o=json
            external_identifier: CBDB:313619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DkQMvzrrjMDQb18zwSbimb
        status: active
        display_name: 王希德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應顯（生于1511年），明人物。明清進士進士，籍贯漳浦，入仕進士，曾任分守道。（中国历代人物传记资料库 CBDB 204039） | accepted |
| birth.date | 1511年 | accepted |
| name.primary | 王應顯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6EDxBNb6A4KZM4GUSLwb5Y | 王穹 | accepted |
| ancestors | p_A6GtM7UJhYUAHaRvVmsNu6 | 王亨 | accepted |
| ancestors | p_DkQMvzrrjMDQb18zwSbimb | 王希德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 313620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313620&o=json)
- [中国历代人物传记资料库：王穹（CBDB 313621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313621&o=json)
- [中国历代人物传记资料库：王希德（CBDB 313619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313619&o=json)
- [中国历代人物传记资料库：王應顯（CBDB 204039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204039&o=json)
