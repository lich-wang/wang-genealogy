---
schema: wang-person/v1
id: p_W2D9MwuPsN8G7PZXkTNBD2
status: active
merged_into: null
display_name: 王得春
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iAtMo5qbFdzqEUAAkqBG3g
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GuWrSZWT1XvZkuhgeVA78F
          claim_id: c_iAtMo5qbFdzqEUAAkqBG3g
          source_id: s_Wa4wiZepYJeDSm62bbFhJH
          stance: supports
          locator: CBDB:204563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204563）
          source: &a1
            id: s_Wa4wiZepYJeDSm62bbFhJH
            source_type: api_record
            title: 中国历代人物传记资料库：王得春（CBDB 204563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204563&o=json
            external_identifier: CBDB:204563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VhGX5C2spd8EGNf9ypAnRy
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvBQ1kcoUC8Bc75gGKY6ef
          claim_id: c_VhGX5C2spd8EGNf9ypAnRy
          source_id: s_Wa4wiZepYJeDSm62bbFhJH
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
        id: c_M2hSd5tKrnPx92HroiHoC4
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得春（生于1527年），明人物。明清進士進士，籍贯安邑，入仕進士，曾任縣丞。（中国历代人物传记资料库 CBDB 204563）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8JCq-RtTk0b-_u5y0-VGCp
          claim_id: c_M2hSd5tKrnPx92HroiHoC4
          source_id: s_Wa4wiZepYJeDSm62bbFhJH
          stance: supports
          locator: CBDB:204563
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3ikarDicGMOe9K6p2yDg47
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8vxuQuTWTt4zWURnmDoIW
          claim_id: c_3ikarDicGMOe9K6p2yDg47
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y6cg1vrmHBW6v87xYUUoHL
            source_type: api_record
            title: 中国历代人物传记资料库：王惟（CBDB 320864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json
            external_identifier: CBDB:320864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MU2tTmhiuXd4gZeWVvtKyQ
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QBdMgHkP8TKOaTbDX2XSnQ
        subject_person_id: p_HKtsrERLbPSs3yFn5m2saF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uB_AXbg5OtRG7WMUGhtUSW
          claim_id: c_QBdMgHkP8TKOaTbDX2XSnQ
          source_id: s_h31K8bywqY2NBMrRhSTJ3h
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h31K8bywqY2NBMrRhSTJ3h
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瓉（CBDB 320863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320863&o=json
            external_identifier: CBDB:320863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HKtsrERLbPSs3yFn5m2saF
        status: active
        display_name: 王錫瓉
        merged_into_person_id: null
    - claim:
        id: c_9gWnZaT7d0_EawGFnYtcVt
        subject_person_id: p_x4A1qjJkD6YhYAHa8NE8Cc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2xV5mDCEa1xMzHoGd6e6E
          claim_id: c_9gWnZaT7d0_EawGFnYtcVt
          source_id: s_86oa4q79FsBN5iCHH6SUY8
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_86oa4q79FsBN5iCHH6SUY8
            source_type: api_record
            title: 中国历代人物传记资料库：王子華（CBDB 320861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320861&o=json
            external_identifier: CBDB:320861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_x4A1qjJkD6YhYAHa8NE8Cc
        status: active
        display_name: 王子華
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_CvpgLBV588JQcX4CfdKmtY
        subject_person_id: p_831M15AcJTHB1PnQ3qcBDq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DGANQxXxQoxH67d9yIsV5I
          claim_id: c_CvpgLBV588JQcX4CfdKmtY
          source_id: s_wFqti7Jv9wZzPk1i27_SfS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wFqti7Jv9wZzPk1i27_SfS
            source_type: api_record
            title: 中国历代人物传记资料库：王遇春（CBDB 320870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json
            external_identifier: CBDB:320870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_831M15AcJTHB1PnQ3qcBDq
        status: active
        display_name: 王遇春
        merged_into_person_id: null
    - claim:
        id: c_4lth9DebMadGXY2CLx3NK9
        subject_person_id: p_8tFsd34Fq42Fj7cKFcqpsQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rUG5H6xKf_OUIrcW8a3nOa
          claim_id: c_4lth9DebMadGXY2CLx3NK9
          source_id: s_AJzQlRlCp99j4QmJpUHAQa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AJzQlRlCp99j4QmJpUHAQa
            source_type: api_record
            title: 中国历代人物传记资料库：王季春（CBDB 320871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320871&o=json
            external_identifier: CBDB:320871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8tFsd34Fq42Fj7cKFcqpsQ
        status: active
        display_name: 王季春
        merged_into_person_id: null
    - claim:
        id: c_SIr9cCGO3g5BxCszIEkEvj
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJEhW411trgktB88mZRC8c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dyKJR1hH2YUsI4DQus55Q
          claim_id: c_SIr9cCGO3g5BxCszIEkEvj
          source_id: s_kQYaiVPBbQRt5tjH8DKYvR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kQYaiVPBbQRt5tjH8DKYvR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 320868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json
            external_identifier: CBDB:320868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJEhW411trgktB88mZRC8c
        status: active
        display_name: 王應春
        merged_into_person_id: null
    - claim:
        id: c_T1r6INZtTJUoCAJNhl3zA6
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i61WbpSXRDYWobPpN3GbDr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PrQ7NyW1LxOmJ1EuZv-sg
          claim_id: c_T1r6INZtTJUoCAJNhl3zA6
          source_id: s_4gBGvcmCFPGaJ8Y6LsWZnx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4gBGvcmCFPGaJ8Y6LsWZnx
            source_type: api_record
            title: 中国历代人物传记资料库：王孟春（CBDB 320867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json
            external_identifier: CBDB:320867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i61WbpSXRDYWobPpN3GbDr
        status: active
        display_name: 王孟春
        merged_into_person_id: null
    - claim:
        id: c_6dZVnz0wuvLBiNGXnYuOSR
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xbae9uYHimaaUVgfERem7w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__sxHMlUvAOMDPRro5Gg3-B
          claim_id: c_6dZVnz0wuvLBiNGXnYuOSR
          source_id: s_uvDJFloOxECPHA5QIbBWZ7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uvDJFloOxECPHA5QIbBWZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲春（CBDB 320869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json
            external_identifier: CBDB:320869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xbae9uYHimaaUVgfERem7w
        status: active
        display_name: 王仲春
        merged_into_person_id: null
---

# 王得春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得春 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | 王得春（生于1527年），明人物。明清進士進士，籍贯安邑，入仕進士，曾任縣丞。（中国历代人物传记资料库 CBDB 204563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MU2tTmhiuXd4gZeWVvtKyQ | 王惟 | accepted |
| ancestors | p_HKtsrERLbPSs3yFn5m2saF | 王錫瓉 | accepted |
| ancestors | p_x4A1qjJkD6YhYAHa8NE8Cc | 王子華 | accepted |
| other | p_831M15AcJTHB1PnQ3qcBDq | 王遇春 | accepted |
| other | p_8tFsd34Fq42Fj7cKFcqpsQ | 王季春 | accepted |
| other | p_aJEhW411trgktB88mZRC8c | 王應春 | accepted |
| other | p_i61WbpSXRDYWobPpN3GbDr | 王孟春 | accepted |
| other | p_xbae9uYHimaaUVgfERem7w | 王仲春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得春（CBDB 204563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204563&o=json)
- [中国历代人物传记资料库：王季春（CBDB 320871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320871&o=json)
- [中国历代人物传记资料库：王孟春（CBDB 320867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json)
- [中国历代人物传记资料库：王惟（CBDB 320864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json)
- [中国历代人物传记资料库：王錫瓉（CBDB 320863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320863&o=json)
- [中国历代人物传记资料库：王應春（CBDB 320868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json)
- [中国历代人物传记资料库：王遇春（CBDB 320870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json)
- [中国历代人物传记资料库：王仲春（CBDB 320869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json)
- [中国历代人物传记资料库：王子華（CBDB 320861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320861&o=json)
