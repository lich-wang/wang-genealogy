---
schema: wang-person/v1
id: p_Ae2AyaTpa1d36ySH3SZ7t7
status: active
merged_into: null
display_name: 王維齡
cbdb_id: 120965
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yU1MPJDMyfP3Vbe9hkNxVJ
        subject_person_id: p_Ae2AyaTpa1d36ySH3SZ7t7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維齡，清人物。中国历代人物传记资料库（CBDB）以人物编号 120965 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Xy2eAFoo5Ywl-aAnfaryXX
          claim_id: c_yU1MPJDMyfP3Vbe9hkNxVJ
          source_id: s_RzA5eNdQRRmQhrrtKsuGHA
          stance: supports
          locator: CBDB:120965
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RzA5eNdQRRmQhrrtKsuGHA
            source_type: api_record
            title: 中国历代人物传记资料库：王維齡（CBDB 120965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120965&o=json
            external_identifier: CBDB:120965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gJ1USL6R51L7FZjENR95CH
        subject_person_id: p_Ae2AyaTpa1d36ySH3SZ7t7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SKhAAW4MWDu4QrYV2y6Uji
          claim_id: c_gJ1USL6R51L7FZjENR95CH
          source_id: s_RzA5eNdQRRmQhrrtKsuGHA
          stance: supports
          locator: CBDB:120965
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_RzA5eNdQRRmQhrrtKsuGHA
            source_type: api_record
            title: 中国历代人物传记资料库：王維齡（CBDB 120965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120965&o=json
            external_identifier: CBDB:120965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lxGBTnLGuzGDLveOvJrwz-
        subject_person_id: p_Ae2AyaTpa1d36ySH3SZ7t7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nij3CyF938xG5q6589kczh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mLLsJH35ank0ljI3jhh9N9
          claim_id: c_lxGBTnLGuzGDLveOvJrwz-
          source_id: s_77YkYy3FfqiLGL8NWehQT5
          stance: supports
          locator: CBDB 双向互证（父 王維齡 ⇄ 子 王彥威）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_77YkYy3FfqiLGL8NWehQT5
            source_type: api_record
            title: 中国历代人物传记资料库：王彥威（CBDB 71903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71903&o=json
            external_identifier: CBDB:71903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nij3CyF938xG5q6589kczh
        status: active
        display_name: 王彥威
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FccgdJqTNHUMd-oHTcj554
        subject_person_id: p_Ae2AyaTpa1d36ySH3SZ7t7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HX4xJ4V7oG3PruU9wcELKs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zWVlGkplMGcE3RAhQ4MFWl
          claim_id: c_FccgdJqTNHUMd-oHTcj554
          source_id: s_WleXy9BKbraVKtJu40SQwh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3923, HuWenKai #748：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WleXy9BKbraVKtJu40SQwh
            source_type: api_record
            title: 中国历代人物传记资料库：盧德儀（CBDB 73027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=73027&o=json
            external_identifier: CBDB:73027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HX4xJ4V7oG3PruU9wcELKs
        status: active
        display_name: 盧德儀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王維齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王維齡，清人物。中国历代人物传记资料库（CBDB）以人物编号 120965 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王維齡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nij3CyF938xG5q6589kczh | 王彥威 | accepted |
| spouses | p_HX4xJ4V7oG3PruU9wcELKs | 盧德儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧德儀（CBDB 73027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=73027&o=json)
- [中国历代人物传记资料库：王維齡（CBDB 120965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120965&o=json)
- [中国历代人物传记资料库：王彥威（CBDB 71903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71903&o=json)
