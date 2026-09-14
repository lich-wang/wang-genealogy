---
schema: wang-person/v1
id: p_AHxos763CxLVJAAUFYkhkc
status: active
merged_into: null
display_name: 王儒
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6XP5UMCZGzE37yHEToH8V
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_THUxB4MCmK7z2Z4KyFunSh
          claim_id: c_f6XP5UMCZGzE37yHEToH8V
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
          stance: supports
          locator: CBDB:268138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268138）
          source: &a1
            id: s_DQ75yHAZBFY3rbLu7KmB8b
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 268138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268138&o=json
            external_identifier: CBDB:268138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uD5cGAXcJF6bVMdofUWAsa
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒，明人物。弘治九年進士，籍贯鄠縣，曾任府學教授。（中国历代人物传记资料库 CBDB 268138）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__Q4S-bw6yvM6gBtHjmEP7z
          claim_id: c_uD5cGAXcJF6bVMdofUWAsa
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
          stance: supports
          locator: CBDB:268138
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jbM0GrY0LbfZ-8u9Z63tMz
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sIXqOL1qTg6fbIEdHRFCF2
          claim_id: c_jbM0GrY0LbfZ-8u9Z63tMz
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
    - claim:
        id: c_Ce3oxoYSZAmZeFKCrhBrl0
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kebu9paBMzhwM6J5F5Feut
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p5ACJnhIwe2JOywVaaplNA
          claim_id: c_Ce3oxoYSZAmZeFKCrhBrl0
          source_id: s_Ikwh3lF9uzBL6xv774zb7w
          stance: supports
          locator: CBDB：兄弟 王九思（126440）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王九峰 与 王九思 为同胞（CBDB 记「兄」），王九思 之父／母即 王九峰 之父／母。
          source:
            id: s_Ikwh3lF9uzBL6xv774zb7w
            source_type: api_record
            title: 中国历代人物传记资料库：王九峰（CBDB 268144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json
            external_identifier: CBDB:268144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kebu9paBMzhwM6J5F5Feut
        status: active
        display_name: 王九峰
        merged_into_person_id: null
    - claim:
        id: c_c6TDg3oe7hjnjZGSzUylfK
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bT1dbunnbqRh1gmTTygBPY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z0XeyTxeVY9jRu2DLm9P0a
          claim_id: c_c6TDg3oe7hjnjZGSzUylfK
          source_id: s_F4MyRbNBBGwA68IQOBGAhA
          stance: supports
          locator: CBDB：兄弟 王九思（126440）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王九敘 与 王九思 为同胞（CBDB 记「兄」），王九思 之父／母即 王九敘 之父／母。
          source:
            id: s_F4MyRbNBBGwA68IQOBGAhA
            source_type: api_record
            title: 中国历代人物传记资料库：王九敘（CBDB 268142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json
            external_identifier: CBDB:268142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bT1dbunnbqRh1gmTTygBPY
        status: active
        display_name: 王九敘
        merged_into_person_id: null
    - claim:
        id: c_o8M83GyKDKH1g7Vegrrp6X
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dfvvCkvP2ETFgDkAvCrtbD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jos0cSI_X7zEpwbyP9UoND
          claim_id: c_o8M83GyKDKH1g7Vegrrp6X
          source_id: s_miN8n4HYZ4I8hRopfE9d-H
          stance: supports
          locator: CBDB：兄弟 王九思（126440）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王九皋 与 王九思 为同胞（CBDB 记「兄」），王九思 之父／母即 王九皋 之父／母。
          source:
            id: s_miN8n4HYZ4I8hRopfE9d-H
            source_type: api_record
            title: 中国历代人物传记资料库：王九皋（CBDB 268143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268143&o=json
            external_identifier: CBDB:268143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dfvvCkvP2ETFgDkAvCrtbD
        status: active
        display_name: 王九皋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | 王儒，明人物。弘治九年進士，籍贯鄠縣，曾任府學教授。（中国历代人物传记资料库 CBDB 268138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |
| children | p_Kebu9paBMzhwM6J5F5Feut | 王九峰 | accepted |
| children | p_bT1dbunnbqRh1gmTTygBPY | 王九敘 | accepted |
| children | p_dfvvCkvP2ETFgDkAvCrtbD | 王九皋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九峰（CBDB 268144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json)
- [中国历代人物传记资料库：王九皋（CBDB 268143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268143&o=json)
- [中国历代人物传记资料库：王九敘（CBDB 268142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json)
- [中国历代人物传记资料库：王儒（CBDB 268138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268138&o=json)
