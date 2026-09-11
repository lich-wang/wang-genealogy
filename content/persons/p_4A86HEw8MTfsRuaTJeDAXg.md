---
schema: wang-person/v1
id: p_4A86HEw8MTfsRuaTJeDAXg
status: active
merged_into: null
display_name: 王如堅
cbdb_id: 126521
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Cw3V43pQ9B866izp5bLg4
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如堅，明人物。中国历代人物传记资料库（CBDB）以人物编号 126521 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_aYsVa-6GIKWVtQ1khd1KL_
          claim_id: c_7Cw3V43pQ9B866izp5bLg4
          source_id: s_1vCtG62qiKjiUdUoFWqJTW
          stance: supports
          locator: CBDB:126521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_1vCtG62qiKjiUdUoFWqJTW
            source_type: api_record
            title: 中国历代人物传记资料库：王如堅（CBDB 126521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126521&o=json
            external_identifier: CBDB:126521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4WP9hawKHtESWqh3dVnHwu
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y1NXoQcciTUfDg2EKBVTdo
          claim_id: c_4WP9hawKHtESWqh3dVnHwu
          source_id: s_1vCtG62qiKjiUdUoFWqJTW
          stance: supports
          locator: CBDB:126521
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_1vCtG62qiKjiUdUoFWqJTW
            source_type: api_record
            title: 中国历代人物传记资料库：王如堅（CBDB 126521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126521&o=json
            external_identifier: CBDB:126521
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
        id: c_wW9r1Gdw4tmbH2YLcY7QNY
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9b6v9c6R1jEbuddukv4n9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkrkTxkcTFwI4rQIHO_Y7X
          claim_id: c_wW9r1Gdw4tmbH2YLcY7QNY
          source_id: s_BqHyFtHt2YcdckWj72LYMx
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BqHyFtHt2YcdckWj72LYMx
            source_type: api_record
            title: 中国历代人物传记资料库：王立德（CBDB 226078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226078&o=json
            external_identifier: CBDB:226078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U9b6v9c6R1jEbuddukv4n9
        status: active
        display_name: 王立德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GijHQFW4Ej2W1De6LsNfeu
        subject_person_id: p_Kx5m9AG61yTn4dcbNdJvSZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vEIDuPobnB-B0pMAGrHak6
          claim_id: c_GijHQFW4Ej2W1De6LsNfeu
          source_id: s_S4WnZn7C47M9YtfDY7XrZN
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S4WnZn7C47M9YtfDY7XrZN
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 226063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226063&o=json
            external_identifier: CBDB:226063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kx5m9AG61yTn4dcbNdJvSZ
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_KQR07Tf_xwhzs_lzyKGhaf
        subject_person_id: p_3wL2fQErDSb4B4arPG5LJq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKkX7TuoFC8_FUdGx8Luxm
          claim_id: c_KQR07Tf_xwhzs_lzyKGhaf
          source_id: s_HYD6AxK7dDHTprrNXE2uut
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HYD6AxK7dDHTprrNXE2uut
            source_type: api_record
            title: 中国历代人物传记资料库：王有懋（CBDB 226064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226064&o=json
            external_identifier: CBDB:226064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3wL2fQErDSb4B4arPG5LJq
        status: active
        display_name: 王有懋
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王如堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如堅，明人物。中国历代人物传记资料库（CBDB）以人物编号 126521 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王如堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_U9b6v9c6R1jEbuddukv4n9 | 王立德 | accepted |
| ancestors | p_Kx5m9AG61yTn4dcbNdJvSZ | 王淇 | accepted |
| ancestors | p_3wL2fQErDSb4B4arPG5LJq | 王有懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立德（CBDB 226078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226078&o=json)
- [中国历代人物传记资料库：王淇（CBDB 226063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226063&o=json)
- [中国历代人物传记资料库：王如堅（CBDB 126521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126521&o=json)
- [中国历代人物传记资料库：王有懋（CBDB 226064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226064&o=json)
