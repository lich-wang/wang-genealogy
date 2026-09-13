---
schema: wang-person/v1
id: p_5iuF56QtzML5N9vH86cANF
status: active
merged_into: null
display_name: 王審鈞
cbdb_id: 17252
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZs1Th6RWn8Gx8Gxq92WMY
        subject_person_id: p_5iuF56QtzML5N9vH86cANF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審鈞，宋人物。籍贯陽曲，曾任刺史、崇儀使、兵馬鈐轄。（中国历代人物传记资料库 CBDB 17252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nYs9Ls7gXkSZvGyawF_5LP
          claim_id: c_tZs1Th6RWn8Gx8Gxq92WMY
          source_id: s_mnsNCAqWT4Jp2VqSVLB4Mp
          stance: supports
          locator: CBDB:17252
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mnsNCAqWT4Jp2VqSVLB4Mp
            source_type: api_record
            title: 中国历代人物传记资料库：王審鈞（CBDB 17252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17252&o=json
            external_identifier: CBDB:17252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4u2ErM42Zj4ihAHhDSDFbK
        subject_person_id: p_5iuF56QtzML5N9vH86cANF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_apZz3kRFYdfDEXDPPkYTUD
          claim_id: c_4u2ErM42Zj4ihAHhDSDFbK
          source_id: s_mnsNCAqWT4Jp2VqSVLB4Mp
          stance: supports
          locator: CBDB:17252
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sCyEeYUgTlfjDqEEHJ7ra3
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5iuF56QtzML5N9vH86cANF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nu538H_hO4jSGQZeJP9f8N
          claim_id: c_sCyEeYUgTlfjDqEEHJ7ra3
          source_id: s_Fdf7Gn5JLEsZX3eJwKcsbG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2025：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Fdf7Gn5JLEsZX3eJwKcsbG
            source_type: api_record
            title: 中国历代人物传记资料库：王全斌（CBDB 11689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11689&o=json
            external_identifier: CBDB:11689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_g1Zwm5njGBgG9tiNz4CK8m
        status: active
        display_name: 王全斌
        merged_into_person_id: null
  children:
    - claim:
        id: c_rPNl2Rk0F0IpEIogIhLRSk
        subject_person_id: p_5iuF56QtzML5N9vH86cANF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVsQjRLETKYSzG3kbAYK87
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AlqEGhyoIA7M3x2TRpKfr0
          claim_id: c_rPNl2Rk0F0IpEIogIhLRSk
          source_id: s_mnsNCAqWT4Jp2VqSVLB4Mp
          stance: supports
          locator: CBDB 双向互证（子 王惟志 ⇄ 父 王審鈞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_mnsNCAqWT4Jp2VqSVLB4Mp
            source_type: api_record
            title: 中国历代人物传记资料库：王審鈞（CBDB 17252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17252&o=json
            external_identifier: CBDB:17252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_SVsQjRLETKYSzG3kbAYK87
        status: active
        display_name: 王惟志
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_YdgCl9uM9CfmBU7-I7cz4Y
        subject_person_id: p_5iuF56QtzML5N9vH86cANF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GrcPU22YikfiRPALs5F2kU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XcxxPe_VhvDdO4P3YOeTid
          claim_id: c_YdgCl9uM9CfmBU7-I7cz4Y
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sZPi7NxFHAWJpPui1Dt8Z2
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 17838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json
            external_identifier: CBDB:17838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GrcPU22YikfiRPALs5F2kU
        status: active
        display_name: 王旭
        merged_into_person_id: null
  other: []
---

# 王審鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王審鈞，宋人物。籍贯陽曲，曾任刺史、崇儀使、兵馬鈐轄。（中国历代人物传记资料库 CBDB 17252） | accepted |
| name.primary | 王審鈞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1Zwm5njGBgG9tiNz4CK8m | 王全斌 | accepted |
| children | p_SVsQjRLETKYSzG3kbAYK87 | 王惟志 | accepted |
| descendants | p_GrcPU22YikfiRPALs5F2kU | 王旭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王全斌（CBDB 11689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11689&o=json)
- [中国历代人物传记资料库：王審鈞（CBDB 17252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17252&o=json)
- [中国历代人物传记资料库：王旭（CBDB 17838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json)
