---
schema: wang-person/v1
id: p_skE22yKfDfbLErvfJ74UoM
status: active
merged_into: null
display_name: 王珣
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Azv3yR1JX7HefmaVckiuBX
        subject_person_id: p_skE22yKfDfbLErvfJ74UoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YM5afoafYE5h8NC6at4yyL
          claim_id: c_Azv3yR1JX7HefmaVckiuBX
          source_id: s_u58QRMGxqL4CFi6VQF9GvF
          stance: supports
          locator: CBDB:126640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126640）
          source: &a1
            id: s_u58QRMGxqL4CFi6VQF9GvF
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 126640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126640&o=json
            external_identifier: CBDB:126640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_at3FHqbzXSMz3z3WFQmQ67
        subject_person_id: p_skE22yKfDfbLErvfJ74UoM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣，明人物。明清進士進士，籍贯曹縣，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126640）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wdr_wCeYYqKVU3c6j0np10
          claim_id: c_at3FHqbzXSMz3z3WFQmQ67
          source_id: s_u58QRMGxqL4CFi6VQF9GvF
          stance: supports
          locator: CBDB:126640
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zJQMprfTGeGKtHsoaP1Bd8
        subject_person_id: p_jzBh6L6KhRH4LcPSXE67mz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_skE22yKfDfbLErvfJ74UoM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TP-hKYope3CslSL9j_KPWY
          claim_id: c_zJQMprfTGeGKtHsoaP1Bd8
          source_id: s_imQ7JRrSsxwenYX754GD3c
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_imQ7JRrSsxwenYX754GD3c
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 243628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243628&o=json
            external_identifier: CBDB:243628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jzBh6L6KhRH4LcPSXE67mz
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8u-lqTKiCBEmrtdiLxT8Yd
        subject_person_id: p_dCfMaFwsRUoxMaq7jCVvtf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_skE22yKfDfbLErvfJ74UoM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m-DyYrDSof42-_q-ZNHo5m
          claim_id: c_8u-lqTKiCBEmrtdiLxT8Yd
          source_id: s_mrHDKNnVqZFy3kbnqBPhfF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mrHDKNnVqZFy3kbnqBPhfF
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 243627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243627&o=json
            external_identifier: CBDB:243627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dCfMaFwsRUoxMaq7jCVvtf
        status: active
        display_name: 王導
        merged_into_person_id: null
    - claim:
        id: c_HkGC_neMlcZyfQtmZs0FCr
        subject_person_id: p_XZnq6j5CoHrHxMMQMVmn6q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_skE22yKfDfbLErvfJ74UoM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JrenB0zgNyIaEM7Gd9s-QF
          claim_id: c_HkGC_neMlcZyfQtmZs0FCr
          source_id: s_v4LZ5dWA5gWPGKnCaoWuof
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v4LZ5dWA5gWPGKnCaoWuof
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 243626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243626&o=json
            external_identifier: CBDB:243626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XZnq6j5CoHrHxMMQMVmn6q
        status: active
        display_name: 王麒
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | 王珣，明人物。明清進士進士，籍贯曹縣，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jzBh6L6KhRH4LcPSXE67mz | 王蘭 | accepted |
| ancestors | p_dCfMaFwsRUoxMaq7jCVvtf | 王導 | accepted |
| ancestors | p_XZnq6j5CoHrHxMMQMVmn6q | 王麒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王導（CBDB 243627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243627&o=json)
- [中国历代人物传记资料库：王蘭（CBDB 243628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243628&o=json)
- [中国历代人物传记资料库：王麒（CBDB 243626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243626&o=json)
- [中国历代人物传记资料库：王珣（CBDB 126640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126640&o=json)
