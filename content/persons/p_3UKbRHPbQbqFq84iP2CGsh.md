---
schema: wang-person/v1
id: p_3UKbRHPbQbqFq84iP2CGsh
status: active
merged_into: null
display_name: 王惠
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4jA2eKomoQu8D6AFuj7HA2
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dtvrmacppEFa3Ds5sf4rsa
          claim_id: c_4jA2eKomoQu8D6AFuj7HA2
          source_id: s_nXyHsxGYf2p44C122wVknU
          stance: supports
          locator: CBDB:325018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325018）
          source: &a1
            id: s_nXyHsxGYf2p44C122wVknU
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 325018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325018&o=json
            external_identifier: CBDB:325018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gWatzhUceGot24CmGKhgKe
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZnaRLEHoyKWyzHX9t0Nzf
          claim_id: c_gWatzhUceGot24CmGKhgKe
          source_id: s_nXyHsxGYf2p44C122wVknU
          stance: supports
          locator: CBDB:325018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VuOxzJQ_Zn7oYVJRfvy1SK
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AsKndUgLV5THcrwWuRrJU9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6STMKcBt4WCgIjC_xBViu
          claim_id: c_VuOxzJQ_Zn7oYVJRfvy1SK
          source_id: s_nXyHsxGYf2p44C122wVknU
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AsKndUgLV5THcrwWuRrJU9
        status: active
        display_name: 王君賞
        merged_into_person_id: null
    - claim:
        id: c_4YoGVliadoZm-x5xCZL5B5
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Cem8yLntCzkfRU6YYou77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KP5Af2g3rSN-yNjxx6a1-F
          claim_id: c_4YoGVliadoZm-x5xCZL5B5
          source_id: s_A7zUnXs2kV_I9WRNHsDHtm
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君揚 与 王君賞 为同胞（CBDB 记「弟」），王君賞 之父／母即 王君揚 之父／母。
          source:
            id: s_A7zUnXs2kV_I9WRNHsDHtm
            source_type: api_record
            title: 中国历代人物传记资料库：王君揚（CBDB 325025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325025&o=json
            external_identifier: CBDB:325025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3Cem8yLntCzkfRU6YYou77
        status: active
        display_name: 王君揚
        merged_into_person_id: null
    - claim:
        id: c_ifIujrUfawGY4tCFKrN8GJ
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7rXE8F8SviWpKYUoECL3JY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWMEg4dtpprEs-9zZyrZT5
          claim_id: c_ifIujrUfawGY4tCFKrN8GJ
          source_id: s_tDBQlYZK2ys1pv8LOQlAvb
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君寵 与 王君賞 为同胞（CBDB 记「兄」），王君賞 之父／母即 王君寵 之父／母。
          source:
            id: s_tDBQlYZK2ys1pv8LOQlAvb
            source_type: api_record
            title: 中国历代人物传记资料库：王君寵（CBDB 325026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325026&o=json
            external_identifier: CBDB:325026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7rXE8F8SviWpKYUoECL3JY
        status: active
        display_name: 王君寵
        merged_into_person_id: null
    - claim:
        id: c_5my0bNm5QoElZenlC8oerQ
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ArrGS6zNcu6QmvQbVdkVLq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_47tsTKwFr7uI8I6Cosxmfa
          claim_id: c_5my0bNm5QoElZenlC8oerQ
          source_id: s_wyEsN9dtTqc1Y-6KlzR2pM
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君命 与 王君賞 为同胞（CBDB 记「兄」），王君賞 之父／母即 王君命 之父／母。
          source:
            id: s_wyEsN9dtTqc1Y-6KlzR2pM
            source_type: api_record
            title: 中国历代人物传记资料库：王君命（CBDB 325031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325031&o=json
            external_identifier: CBDB:325031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ArrGS6zNcu6QmvQbVdkVLq
        status: active
        display_name: 王君命
        merged_into_person_id: null
    - claim:
        id: c_MGgEAXCrQl-XS8BIeZK-4i
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LLaZffQxVHiaY2kkaKJReS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nXQQNOtWgHzaEvO9CennNd
          claim_id: c_MGgEAXCrQl-XS8BIeZK-4i
          source_id: s_biqFBYvZy_ZgZBXIscZmUz
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王庭揚 与 王君賞 为同胞（CBDB 记「兄」），王君賞 之父／母即 王庭揚 之父／母。
          source:
            id: s_biqFBYvZy_ZgZBXIscZmUz
            source_type: api_record
            title: 中国历代人物传记资料库：王庭揚（CBDB 325029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325029&o=json
            external_identifier: CBDB:325029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LLaZffQxVHiaY2kkaKJReS
        status: active
        display_name: 王庭揚
        merged_into_person_id: null
    - claim:
        id: c_WADax2kIohYBgH4s3UL2fT
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5quTtF4WcabyMtDi9vMMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ta0eNLruhnQfpTFfIh_4Gf
          claim_id: c_WADax2kIohYBgH4s3UL2fT
          source_id: s__cUbuWsne02kbq0DhUtmys
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王載揚 与 王君賞 为同胞（CBDB 记「兄」），王君賞 之父／母即 王載揚 之父／母。
          source:
            id: s__cUbuWsne02kbq0DhUtmys
            source_type: api_record
            title: 中国历代人物传记资料库：王載揚（CBDB 325027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325027&o=json
            external_identifier: CBDB:325027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5quTtF4WcabyMtDi9vMMb
        status: active
        display_name: 王載揚
        merged_into_person_id: null
    - claim:
        id: c_ABNwmcCN5SRxo1ObIiiBAZ
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZV9mg4r8f9VvyUSHC9c8pA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9okcV8GIXvMppmNp2IiI4
          claim_id: c_ABNwmcCN5SRxo1ObIiiBAZ
          source_id: s_eewzCb4P8NGDW29AsBPQhs
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君錫 与 王君賞 为同胞（CBDB 记「弟」），王君賞 之父／母即 王君錫 之父／母。
          source:
            id: s_eewzCb4P8NGDW29AsBPQhs
            source_type: api_record
            title: 中国历代人物传记资料库：王君錫（CBDB 325023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325023&o=json
            external_identifier: CBDB:325023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZV9mg4r8f9VvyUSHC9c8pA
        status: active
        display_name: 王君錫
        merged_into_person_id: null
    - claim:
        id: c_Eco5ivK78QA1r3xWmOWOJd
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aHjRh6U4JeGwL5BvajrcS4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2lZNteLIHgRACZoyor6QCV
          claim_id: c_Eco5ivK78QA1r3xWmOWOJd
          source_id: s_7z3zuC8bOqYjIX0LB3mqQd
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君聘 与 王君賞 为同胞（CBDB 记「兄」），王君賞 之父／母即 王君聘 之父／母。
          source:
            id: s_7z3zuC8bOqYjIX0LB3mqQd
            source_type: api_record
            title: 中国历代人物传记资料库：王君聘（CBDB 325028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325028&o=json
            external_identifier: CBDB:325028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aHjRh6U4JeGwL5BvajrcS4
        status: active
        display_name: 王君聘
        merged_into_person_id: null
    - claim:
        id: c_Q3Us6f1ptWdBU1k1a0XBQn
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yf2d89FPUSwi2cw7k6dzD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2oNqiJeeNxeAqecnfp5Hu
          claim_id: c_Q3Us6f1ptWdBU1k1a0XBQn
          source_id: s_kQIt41xqkxU5wEKpXWwveA
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君賜 与 王君賞 为同胞（CBDB 记「弟」），王君賞 之父／母即 王君賜 之父／母。
          source:
            id: s_kQIt41xqkxU5wEKpXWwveA
            source_type: api_record
            title: 中国历代人物传记资料库：王君賜（CBDB 325024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325024&o=json
            external_identifier: CBDB:325024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yf2d89FPUSwi2cw7k6dzD8
        status: active
        display_name: 王君賜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | 王惠，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AsKndUgLV5THcrwWuRrJU9 | 王君賞 | accepted |
| children | p_3Cem8yLntCzkfRU6YYou77 | 王君揚 | accepted |
| children | p_7rXE8F8SviWpKYUoECL3JY | 王君寵 | accepted |
| children | p_ArrGS6zNcu6QmvQbVdkVLq | 王君命 | accepted |
| children | p_LLaZffQxVHiaY2kkaKJReS | 王庭揚 | accepted |
| children | p_Z5quTtF4WcabyMtDi9vMMb | 王載揚 | accepted |
| children | p_ZV9mg4r8f9VvyUSHC9c8pA | 王君錫 | accepted |
| children | p_aHjRh6U4JeGwL5BvajrcS4 | 王君聘 | accepted |
| children | p_yf2d89FPUSwi2cw7k6dzD8 | 王君賜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 325018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325018&o=json)
- [中国历代人物传记资料库：王君寵（CBDB 325026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325026&o=json)
- [中国历代人物传记资料库：王君賜（CBDB 325024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325024&o=json)
- [中国历代人物传记资料库：王君命（CBDB 325031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325031&o=json)
- [中国历代人物传记资料库：王君聘（CBDB 325028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325028&o=json)
- [中国历代人物传记资料库：王君錫（CBDB 325023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325023&o=json)
- [中国历代人物传记资料库：王君揚（CBDB 325025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325025&o=json)
- [中国历代人物传记资料库：王庭揚（CBDB 325029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325029&o=json)
- [中国历代人物传记资料库：王載揚（CBDB 325027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325027&o=json)
