---
schema: wang-person/v1
id: p_RtbMaDgB4aPoZ2sWestmc6
status: active
merged_into: null
display_name: 王緯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nW21G7yoJX1TSFi5qTGwG
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Et5TwJDvRPuuZVHvJeCDvk
          claim_id: c_8nW21G7yoJX1TSFi5qTGwG
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
          stance: supports
          locator: CBDB:200487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200487）
          source: &a1
            id: s_TZaKAbrGgqVnEHqF7JVPrE
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 200487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200487&o=json
            external_identifier: CBDB:200487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y6SekejQA1DmA84FDkG9KP
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNStxZ2fV63JBFbYEeJqkx
          claim_id: c_y6SekejQA1DmA84FDkG9KP
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
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
        id: c_hqsHgH68GBDxCvFMnpTv3r
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
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
        - id: cs_PBbkxGGqBkfPuH1wBXdisV
          claim_id: c_hqsHgH68GBDxCvFMnpTv3r
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DwAf6mDLcgpvKyDy2XyTm1
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vOh2idUjEzVDlEDdzOhDN1
          claim_id: c_DwAf6mDLcgpvKyDy2XyTm1
          source_id: s_PuzVFzyRPrwAiF5boBQEMS
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PuzVFzyRPrwAiF5boBQEMS
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 258706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258706&o=json
            external_identifier: CBDB:258706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A34R6HSqpELVRnhSkVhaV5
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_UMXgfJxvlyx_kbf4EugSf1
        subject_person_id: p_fQ8a3a8SS5uVatavagGR7g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9We3mDkIkrTUgkVQT3lGA2
          claim_id: c_UMXgfJxvlyx_kbf4EugSf1
          source_id: s_RBdk3SWYAjm53C1jYk5Lx1
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RBdk3SWYAjm53C1jYk5Lx1
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 258704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258704&o=json
            external_identifier: CBDB:258704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fQ8a3a8SS5uVatavagGR7g
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A34R6HSqpELVRnhSkVhaV5 | 王豫 | accepted |
| ancestors | p_fQ8a3a8SS5uVatavagGR7g | 王成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 258704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258704&o=json)
- [中国历代人物传记资料库：王緯（CBDB 200487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200487&o=json)
- [中国历代人物传记资料库：王豫（CBDB 258706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258706&o=json)
