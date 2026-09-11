---
schema: wang-person/v1
id: p_Pf6TEXjGfNj869D16z8ZuG
status: active
merged_into: null
display_name: 王守充
cbdb_id: 204079
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2pQEvv6YCeNWUJL7sSNv6
        subject_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守充（生于1523年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204079 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_FGxMKH92S5n1kHWA6SaldB
          claim_id: c_P2pQEvv6YCeNWUJL7sSNv6
          source_id: s_MZbtVuPs6GWGrc581XD3AN
          stance: supports
          locator: CBDB:204079
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_MZbtVuPs6GWGrc581XD3AN
            source_type: api_record
            title: 中国历代人物传记资料库：王守充（CBDB 204079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204079&o=json
            external_identifier: CBDB:204079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3k3seBjEq52KgqxB7ZvCrp
        subject_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1523-01-01
            latest: 1523-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FKxgZx2t6mX5FsrtNyDLVX
          claim_id: c_3k3seBjEq52KgqxB7ZvCrp
          source_id: s_MZbtVuPs6GWGrc581XD3AN
          stance: supports
          locator: CBDB:204079
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1523
          source:
            id: s_MZbtVuPs6GWGrc581XD3AN
            source_type: api_record
            title: 中国历代人物传记资料库：王守充（CBDB 204079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204079&o=json
            external_identifier: CBDB:204079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4mRFyW6o3PwpFuLh2hLZG8
        subject_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守充
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9yFK7h4qMXy8FgzHZBqZWV
          claim_id: c_4mRFyW6o3PwpFuLh2hLZG8
          source_id: s_MZbtVuPs6GWGrc581XD3AN
          stance: supports
          locator: CBDB:204079
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1523
          source:
            id: s_MZbtVuPs6GWGrc581XD3AN
            source_type: api_record
            title: 中国历代人物传记资料库：王守充（CBDB 204079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204079&o=json
            external_identifier: CBDB:204079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CmB5atj_MgpTL_6k89qnYH
        subject_person_id: p_den6Qb7fcU9dqdvbGrfnab
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ibMPJMei3V05BGMh6rBAkZ
          claim_id: c_CmB5atj_MgpTL_6k89qnYH
          source_id: s_L3nVgXwwtRNfMECV2219FW
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L3nVgXwwtRNfMECV2219FW
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 314096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314096&o=json
            external_identifier: CBDB:314096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_den6Qb7fcU9dqdvbGrfnab
        status: active
        display_name: 王密
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9ODSJqnF87fqNsjiAlEZ63
        subject_person_id: p_h191P7ENcbHX8163N1GsDA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vEWViL1PPX5TTPESuJpJN3
          claim_id: c_9ODSJqnF87fqNsjiAlEZ63
          source_id: s_9T75oZ9JHG5RSTuRoky9mw
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9T75oZ9JHG5RSTuRoky9mw
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 314093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314093&o=json
            external_identifier: CBDB:314093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h191P7ENcbHX8163N1GsDA
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_RfI-LpWEtUNWoOmghhY9yT
        subject_person_id: p_jQQSRy2uXkJdezJQ7bH4wz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxRks_GFaMob_B1tMd-fvk
          claim_id: c_RfI-LpWEtUNWoOmghhY9yT
          source_id: s_of79tcKBjycupESEYKsg5c
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_of79tcKBjycupESEYKsg5c
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳翥（CBDB 314094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314094&o=json
            external_identifier: CBDB:314094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jQQSRy2uXkJdezJQ7bH4wz
        status: active
        display_name: 王鳳翥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守充

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守充（生于1523年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204079 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1523年 | accepted |
| name.primary | 王守充 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_den6Qb7fcU9dqdvbGrfnab | 王密 | accepted |
| ancestors | p_h191P7ENcbHX8163N1GsDA | 王璽 | accepted |
| ancestors | p_jQQSRy2uXkJdezJQ7bH4wz | 王鳳翥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳翥（CBDB 314094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314094&o=json)
- [中国历代人物传记资料库：王密（CBDB 314096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314096&o=json)
- [中国历代人物传记资料库：王守充（CBDB 204079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204079&o=json)
- [中国历代人物传记资料库：王璽（CBDB 314093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314093&o=json)
