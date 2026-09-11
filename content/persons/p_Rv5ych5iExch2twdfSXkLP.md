---
schema: wang-person/v1
id: p_Rv5ych5iExch2twdfSXkLP
status: active
merged_into: null
display_name: 王世蔭
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9jwxbaMsNDLb99uRrgSNfH
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EeJ11fqVvFwfUrhXw2QbM2
          claim_id: c_9jwxbaMsNDLb99uRrgSNfH
          source_id: s_FMBi4Hj6ZEW9tZUiB8FQuZ
          stance: supports
          locator: CBDB:207683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207683）
          source: &a1
            id: s_FMBi4Hj6ZEW9tZUiB8FQuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王世蔭（CBDB 207683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207683&o=json
            external_identifier: CBDB:207683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vbxphWYH9FdxLavSVfhhPK
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1578年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wNEgU2A7J4gBx8s7S1vH2p
          claim_id: c_vbxphWYH9FdxLavSVfhhPK
          source_id: s_FMBi4Hj6ZEW9tZUiB8FQuZ
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
        id: c_oxVGPJGMYJt9a49hN4FUrm
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fEab4hrA3xi98kAtLzwrG2
          claim_id: c_oxVGPJGMYJt9a49hN4FUrm
          source_id: s_FMBi4Hj6ZEW9tZUiB8FQuZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_byQ7xgViwGOZFxw0yshR7n
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eDSSwkzuEM8oekJRmk1epj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_depRCSWgEH4wpCZCVHqqns
          claim_id: c_byQ7xgViwGOZFxw0yshR7n
          source_id: s_9qaJoJUFDcH2PMZdqnWn3N
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9qaJoJUFDcH2PMZdqnWn3N
            source_type: api_record
            title: 中国历代人物传记资料库：王調（CBDB 233810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233810&o=json
            external_identifier: CBDB:233810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eDSSwkzuEM8oekJRmk1epj
        status: active
        display_name: 王調
        merged_into_person_id: null
    - claim:
        id: c_eQEOfAehIVtOEKhWYWSaG-
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J2YJG4dKdMaVwpUoTA4Qfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIZU2M6a7YDCqdcW1NBauC
          claim_id: c_eQEOfAehIVtOEKhWYWSaG-
          source_id: s_VsmL2iTSdi9CRY6gzd8GoJ
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VsmL2iTSdi9CRY6gzd8GoJ
            source_type: api_record
            title: 中国历代人物传记资料库：王讜（CBDB 233807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233807&o=json
            external_identifier: CBDB:233807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J2YJG4dKdMaVwpUoTA4Qfa
        status: active
        display_name: 王讜
        merged_into_person_id: null
    - claim:
        id: c_wT7PB0DGYAlFf-nqH-WZw1
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UoMDZsZpFgXYrFuvEAGZCc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nhbR_92FrxGXZHg961PYHE
          claim_id: c_wT7PB0DGYAlFf-nqH-WZw1
          source_id: s_8PE8a6yWPUDbAJAj4gCTLp
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8PE8a6yWPUDbAJAj4gCTLp
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 233811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233811&o=json
            external_identifier: CBDB:233811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UoMDZsZpFgXYrFuvEAGZCc
        status: active
        display_name: 王訥
        merged_into_person_id: null
    - claim:
        id: c_y6BD7D4u41lMsxshsPtp6p
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vLtTux5M5PfXd1yQbcbVhi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FwR-5EoHFp4vMrjncwspoo
          claim_id: c_y6BD7D4u41lMsxshsPtp6p
          source_id: s_H75HwKkwLCyRKH5i9sKatq
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H75HwKkwLCyRKH5i9sKatq
            source_type: api_record
            title: 中国历代人物传记资料库：王諏（CBDB 233808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233808&o=json
            external_identifier: CBDB:233808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vLtTux5M5PfXd1yQbcbVhi
        status: active
        display_name: 王諏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dYPNt-VvnRLcHZ6cLsRoM4
        subject_person_id: p_2e5u4A1FFSG9TbzmvAvbtq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUPgJPee-Pxd4vGbHgFpw6
          claim_id: c_dYPNt-VvnRLcHZ6cLsRoM4
          source_id: s_aYwBVW1RZ5EANyE9cL5Thv
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aYwBVW1RZ5EANyE9cL5Thv
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 233796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233796&o=json
            external_identifier: CBDB:233796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2e5u4A1FFSG9TbzmvAvbtq
        status: active
        display_name: 王養賢
        merged_into_person_id: null
    - claim:
        id: c_MJ2htvYVvhhIKYVcEkdiqg
        subject_person_id: p_V1kMbKxMmncWoHQsKhN4jA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kkxL0bfszb9UG2ZG0-0WU_
          claim_id: c_MJ2htvYVvhhIKYVcEkdiqg
          source_id: s_FWdxsYMUTwWXtMeURoh75h
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FWdxsYMUTwWXtMeURoh75h
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 233795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233795&o=json
            external_identifier: CBDB:233795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V1kMbKxMmncWoHQsKhN4jA
        status: active
        display_name: 王璠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世蔭 | accepted |
| birth.date | 1578年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eDSSwkzuEM8oekJRmk1epj | 王調 | accepted |
| children | p_J2YJG4dKdMaVwpUoTA4Qfa | 王讜 | accepted |
| children | p_UoMDZsZpFgXYrFuvEAGZCc | 王訥 | accepted |
| children | p_vLtTux5M5PfXd1yQbcbVhi | 王諏 | accepted |
| ancestors | p_2e5u4A1FFSG9TbzmvAvbtq | 王養賢 | accepted |
| ancestors | p_V1kMbKxMmncWoHQsKhN4jA | 王璠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讜（CBDB 233807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233807&o=json)
- [中国历代人物传记资料库：王調（CBDB 233810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233810&o=json)
- [中国历代人物传记资料库：王璠（CBDB 233795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233795&o=json)
- [中国历代人物传记资料库：王訥（CBDB 233811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233811&o=json)
- [中国历代人物传记资料库：王世蔭（CBDB 207683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207683&o=json)
- [中国历代人物传记资料库：王養賢（CBDB 233796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233796&o=json)
- [中国历代人物传记资料库：王諏（CBDB 233808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233808&o=json)
