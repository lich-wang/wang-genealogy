---
schema: wang-person/v1
id: p_MU2tTmhiuXd4gZeWVvtKyQ
status: active
merged_into: null
display_name: 王惟
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEE1G69ymQ3J13BJMLXRpn
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBf2NNn1D2bDEyXiyjErgh
          claim_id: c_eEE1G69ymQ3J13BJMLXRpn
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: CBDB:320864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320864）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4N2q8MUTFT6aZSwBC6si8B
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CxPwdKyzG0aUSoi3O2Yfuo
          claim_id: c_4N2q8MUTFT6aZSwBC6si8B
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: CBDB:320864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
    - claim:
        id: c_7Td2aQwn0Khe8voKTnRzfa
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_831M15AcJTHB1PnQ3qcBDq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u4xeok0Nv2XtOvxJOpK6fb
          claim_id: c_7Td2aQwn0Khe8voKTnRzfa
          source_id: s_wFqti7Jv9wZzPk1i27_SfS
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王遇春 与 王得春 为同胞（CBDB 记「兄」），王得春 之父／母即 王遇春 之父／母。
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
        id: c_UKp_gnFLeo8nWyWH6V9Dlm
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8tFsd34Fq42Fj7cKFcqpsQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dsgpJzPR0HMl2vYl87fL5S
          claim_id: c_UKp_gnFLeo8nWyWH6V9Dlm
          source_id: s_AJzQlRlCp99j4QmJpUHAQa
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王季春 与 王得春 为同胞（CBDB 记「兄」），王得春 之父／母即 王季春 之父／母。
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
        id: c_NOFl5rdciqT-oWL02HmeA_
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJEhW411trgktB88mZRC8c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slg9yRmX44nLTpi2s1U5D1
          claim_id: c_NOFl5rdciqT-oWL02HmeA_
          source_id: s_kQYaiVPBbQRt5tjH8DKYvR
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王應春 与 王得春 为同胞（CBDB 记「弟」），王得春 之父／母即 王應春 之父／母。
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
        id: c_KvIdwFzs2GHHNoRonHx6TE
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i61WbpSXRDYWobPpN3GbDr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHNh4LoXQk3n_pZwCAxyWo
          claim_id: c_KvIdwFzs2GHHNoRonHx6TE
          source_id: s_4gBGvcmCFPGaJ8Y6LsWZnx
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟春 与 王得春 为同胞（CBDB 记「弟」），王得春 之父／母即 王孟春 之父／母。
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
        id: c_0rKkV-tdx5QdpWpysm1Lwa
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xbae9uYHimaaUVgfERem7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_no2O8tYajQcH6froxabuXB
          claim_id: c_0rKkV-tdx5QdpWpysm1Lwa
          source_id: s_uvDJFloOxECPHA5QIbBWZ7
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲春 与 王得春 为同胞（CBDB 记「兄」），王得春 之父／母即 王仲春 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟 | accepted |
| bio.summary | 王惟，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |
| children | p_831M15AcJTHB1PnQ3qcBDq | 王遇春 | accepted |
| children | p_8tFsd34Fq42Fj7cKFcqpsQ | 王季春 | accepted |
| children | p_aJEhW411trgktB88mZRC8c | 王應春 | accepted |
| children | p_i61WbpSXRDYWobPpN3GbDr | 王孟春 | accepted |
| children | p_xbae9uYHimaaUVgfERem7w | 王仲春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王季春（CBDB 320871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320871&o=json)
- [中国历代人物传记资料库：王孟春（CBDB 320867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json)
- [中国历代人物传记资料库：王惟（CBDB 320864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json)
- [中国历代人物传记资料库：王應春（CBDB 320868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320868&o=json)
- [中国历代人物传记资料库：王遇春（CBDB 320870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json)
- [中国历代人物传记资料库：王仲春（CBDB 320869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json)
