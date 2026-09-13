---
schema: wang-person/v1
id: p_6HcTFXM8o7jGP9HyscW8Hm
status: active
merged_into: null
display_name: 王胤祥
cbdb_id: 126623
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gT7ibpb31W61G49b9v4SLg
        subject_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤祥，明人物。明清進士進士，籍贯丹徒，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LZr2ImszLYSk1uJQ1c3aE-
          claim_id: c_gT7ibpb31W61G49b9v4SLg
          source_id: s_YLjzUdkVd6Epe3ogy24cbG
          stance: supports
          locator: CBDB:126623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YLjzUdkVd6Epe3ogy24cbG
            source_type: api_record
            title: 中国历代人物传记资料库：王胤祥（CBDB 126623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126623&o=json
            external_identifier: CBDB:126623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6cHHnRbV1pRoGWLu4staK
        subject_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ksW2XiAvi5YL4KP84RfWJJ
          claim_id: c_e6cHHnRbV1pRoGWLu4staK
          source_id: s_YLjzUdkVd6Epe3ogy24cbG
          stance: supports
          locator: CBDB:126623
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5UZywOhDwgvt4aZd_Sig1x
        subject_person_id: p_TdCGJkaDBDD2sDaykpJqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDX9SOqnk4yuQXc4Dq2adX
          claim_id: c_5UZywOhDwgvt4aZd_Sig1x
          source_id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王枕（CBDB 211334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211334&o=json
            external_identifier: CBDB:211334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_TdCGJkaDBDD2sDaykpJqA5
        status: active
        display_name: 王枕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eiHG8U_ty9YDtPLCRRmOO8
        subject_person_id: p_Cnh4txyPLJW7HqXD58SfLB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YoeiVXbcSg4mCRSfIcx20T
          claim_id: c_eiHG8U_ty9YDtPLCRRmOO8
          source_id: s_dRA2MnhFNwDgAGFx2aso4L
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dRA2MnhFNwDgAGFx2aso4L
            source_type: api_record
            title: 中国历代人物传记资料库：王潾（CBDB 211333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211333&o=json
            external_identifier: CBDB:211333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cnh4txyPLJW7HqXD58SfLB
        status: active
        display_name: 王潾
        merged_into_person_id: null
    - claim:
        id: c_L2qDsHjjT4qZAV16DhYVwM
        subject_person_id: p_thPKstWT5YUsKmwehAYcfL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8MQvtP2i0D3bkx5XkBYfT
          claim_id: c_L2qDsHjjT4qZAV16DhYVwM
          source_id: s_qDxCjCxebcFszv3mi9b1D9
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qDxCjCxebcFszv3mi9b1D9
            source_type: api_record
            title: 中国历代人物传记资料库：王喜（CBDB 211332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211332&o=json
            external_identifier: CBDB:211332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_thPKstWT5YUsKmwehAYcfL
        status: active
        display_name: 王喜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王胤祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胤祥，明人物。明清進士進士，籍贯丹徒，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126623） | accepted |
| name.primary | 王胤祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TdCGJkaDBDD2sDaykpJqA5 | 王枕 | accepted |
| ancestors | p_Cnh4txyPLJW7HqXD58SfLB | 王潾 | accepted |
| ancestors | p_thPKstWT5YUsKmwehAYcfL | 王喜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潾（CBDB 211333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211333&o=json)
- [中国历代人物传记资料库：王喜（CBDB 211332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211332&o=json)
- [中国历代人物传记资料库：王胤祥（CBDB 126623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126623&o=json)
- [中国历代人物传记资料库：王枕（CBDB 211334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211334&o=json)
