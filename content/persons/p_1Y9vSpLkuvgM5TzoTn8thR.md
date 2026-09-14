---
schema: wang-person/v1
id: p_1Y9vSpLkuvgM5TzoTn8thR
status: active
merged_into: null
display_name: 王讓
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Vi5x9VZzdnta1B1LeqZL5
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VAr18V7Lgku3Xn9GVNn1pK
          claim_id: c_4Vi5x9VZzdnta1B1LeqZL5
          source_id: s_MG6q9dH4LZabg1XaZv4s12
          stance: supports
          locator: CBDB:247354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247354）
          source: &a1
            id: s_MG6q9dH4LZabg1XaZv4s12
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 247354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247354&o=json
            external_identifier: CBDB:247354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4YJdVu4MDMw87gZ7VgeLuK
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓，明人物。成化八年進士，籍贯長洲，曾任教諭。（中国历代人物传记资料库 CBDB 247354）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JhqbMeKQRcuW_JJpQbj680
          claim_id: c_4YJdVu4MDMw87gZ7VgeLuK
          source_id: s_MG6q9dH4LZabg1XaZv4s12
          stance: supports
          locator: CBDB:247354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MuNTomHm3uhGfFLeecdArW
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNRwrBJOLlRoDFRxFNiR5Z
          claim_id: c_MuNTomHm3uhGfFLeecdArW
          source_id: s_MG6q9dH4LZabg1XaZv4s12
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9qy8VX4YhBeXV8fGKmBp1E
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c__qUkEthMMIDRuBnrfTi-eO
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DR4C21YnAw4Ege8955RHsa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUyXHhe18Is7Pl4IJ1ik5i
          claim_id: c__qUkEthMMIDRuBnrfTi-eO
          source_id: s_BUYW0Y5fSDptsgQ4jEeRpt
          stance: supports
          locator: CBDB：兄弟 王經（199619）之父／母 王讓
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王經 为同胞（CBDB 记「兄」），王經 之父／母即 王紳 之父／母。
          source:
            id: s_BUYW0Y5fSDptsgQ4jEeRpt
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 247360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json
            external_identifier: CBDB:247360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DR4C21YnAw4Ege8955RHsa
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_In_gvtQHVvy5bOvMU765TX
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h5CjHuT4H6rxp5Z2L9KQdh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vhyMc-GYAZxkXURK7VWlUb
          claim_id: c_In_gvtQHVvy5bOvMU765TX
          source_id: s_k__VQA42zE8cxiOmqLIWgn
          stance: supports
          locator: CBDB：兄弟 王經（199619）之父／母 王讓
          quotation: null
          interpretation_note: 由兄弟关系推断：王綸 与 王經 为同胞（CBDB 记「兄」），王經 之父／母即 王綸 之父／母。
          source:
            id: s_k__VQA42zE8cxiOmqLIWgn
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 247358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json
            external_identifier: CBDB:247358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h5CjHuT4H6rxp5Z2L9KQdh
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_4NOkeKOTSeXS4kHs4ncbOD
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hbW5gmdqcq7HA51pN5Jsnr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsnLKPMOVBBUA7_mHL4NFs
          claim_id: c_4NOkeKOTSeXS4kHs4ncbOD
          source_id: s_V_m2hPMZJcushaiGnYDcvb
          stance: supports
          locator: CBDB：兄弟 王經（199619）之父／母 王讓
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王經 为同胞（CBDB 记「兄」），王經 之父／母即 王縉 之父／母。
          source:
            id: s_V_m2hPMZJcushaiGnYDcvb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 247359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json
            external_identifier: CBDB:247359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hbW5gmdqcq7HA51pN5Jsnr
        status: active
        display_name: 王縉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| bio.summary | 王讓，明人物。成化八年進士，籍贯長洲，曾任教諭。（中国历代人物传记资料库 CBDB 247354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9qy8VX4YhBeXV8fGKmBp1E | 王經 | accepted |
| children | p_DR4C21YnAw4Ege8955RHsa | 王紳 | accepted |
| children | p_h5CjHuT4H6rxp5Z2L9KQdh | 王綸 | accepted |
| children | p_hbW5gmdqcq7HA51pN5Jsnr | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 247359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json)
- [中国历代人物传记资料库：王綸（CBDB 247358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json)
- [中国历代人物传记资料库：王讓（CBDB 247354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247354&o=json)
- [中国历代人物传记资料库：王紳（CBDB 247360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json)
