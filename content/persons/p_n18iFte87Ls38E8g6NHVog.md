---
schema: wang-person/v1
id: p_n18iFte87Ls38E8g6NHVog
status: active
merged_into: null
display_name: 王延德
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DkrLq6DMgv8NZxSCE1eEJ
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7p4W8HUEj6jhao3GJ9Gt77
          claim_id: c_6DkrLq6DMgv8NZxSCE1eEJ
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
          stance: supports
          locator: CBDB:39400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39400）
          source: &a1
            id: s_5mjjLAZ2p4uzm8At9YJQKc
            source_type: api_record
            title: 中国历代人物传记资料库：王延德（CBDB 39400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39400&o=json
            external_identifier: CBDB:39400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A4zXyaWX5E5Q6MAoSoffiU
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 936年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ApeGgDttQfMpoBEmgtD574
          claim_id: c_A4zXyaWX5E5Q6MAoSoffiU
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r623R4jW8mYzsKna2fT12K
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsFMaM37ZVNTZxn7oQineA
          claim_id: c_r623R4jW8mYzsKna2fT12K
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a9Und5Vz5BKoYaktguAHyj
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延德（936年—999年），宋人物。籍贯東明，曾任崇儀使、昭宣使、都巡檢使。（中国历代人物传记资料库 CBDB 39400）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CzLjMNTWCIxHZKQZfFgIMp
          claim_id: c_a9Und5Vz5BKoYaktguAHyj
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
          stance: supports
          locator: CBDB:39400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__uezu-YI2L0irVS4z71zBp
        subject_person_id: p_5KXqnGcUb8SEM8grnPHtW7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n18iFte87Ls38E8g6NHVog
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoB_38S5xvkQeRGfumsgyS
          claim_id: c__uezu-YI2L0irVS4z71zBp
          source_id: s_VXhvcxgsHrJaAdC2nBui3k
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VXhvcxgsHrJaAdC2nBui3k
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 121460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121460&o=json
            external_identifier: CBDB:121460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5KXqnGcUb8SEM8grnPHtW7
        status: active
        display_name: 王溫
        merged_into_person_id: null
  children:
    - claim:
        id: c_WY3SYphbSli0oMYgTrNprq
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1w4qc4tD5umhv2Nv4ed24E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6maBZGl6645zbHcHGq63hW
          claim_id: c_WY3SYphbSli0oMYgTrNprq
          source_id: s_9AKb42Yf1dJ7SzQQBhQVyH
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2054：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9AKb42Yf1dJ7SzQQBhQVyH
            source_type: api_record
            title: 中国历代人物传记资料库：王應昌（CBDB 38349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38349&o=json
            external_identifier: CBDB:38349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1w4qc4tD5umhv2Nv4ed24E
        status: active
        display_name: 王應昌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rRJbrAKSn3occvO2AE2ryA
        subject_person_id: p_22p4KGDghvo8rsfY2RMJjr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_n18iFte87Ls38E8g6NHVog
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tf6d3y1FQ-TPiMV7XBGuu
          claim_id: c_rRJbrAKSn3occvO2AE2ryA
          source_id: s_VtWVsVTSsbFTgHQ1gaDfzx
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VtWVsVTSsbFTgHQ1gaDfzx
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 121461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121461&o=json
            external_identifier: CBDB:121461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_22p4KGDghvo8rsfY2RMJjr
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_aU5CHhGP3a0Tvcyv3xOmRH
        subject_person_id: p_D7vc16ZCnBApa7DLYpzhzq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_n18iFte87Ls38E8g6NHVog
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OM9d-xkm8s0_ItgXOZOHzL
          claim_id: c_aU5CHhGP3a0Tvcyv3xOmRH
          source_id: s_R65cHsL7kKwHqM3tUu5xZF
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R65cHsL7kKwHqM3tUu5xZF
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 121459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121459&o=json
            external_identifier: CBDB:121459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D7vc16ZCnBApa7DLYpzhzq
        status: active
        display_name: 王芝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王延德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延德 | accepted |
| birth.date | 936年 | accepted |
| death.date | 999年 | accepted |
| bio.summary | 王延德（936年—999年），宋人物。籍贯東明，曾任崇儀使、昭宣使、都巡檢使。（中国历代人物传记资料库 CBDB 39400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5KXqnGcUb8SEM8grnPHtW7 | 王溫 | accepted |
| children | p_1w4qc4tD5umhv2Nv4ed24E | 王應昌 | accepted |
| ancestors | p_22p4KGDghvo8rsfY2RMJjr | 王璋 | accepted |
| ancestors | p_D7vc16ZCnBApa7DLYpzhzq | 王芝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溫（CBDB 121460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121460&o=json)
- [中国历代人物传记资料库：王延德（CBDB 39400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39400&o=json)
- [中国历代人物传记资料库：王應昌（CBDB 38349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38349&o=json)
- [中国历代人物传记资料库：王璋（CBDB 121461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121461&o=json)
- [中国历代人物传记资料库：王芝（CBDB 121459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121459&o=json)
