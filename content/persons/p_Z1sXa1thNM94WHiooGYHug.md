---
schema: wang-person/v1
id: p_Z1sXa1thNM94WHiooGYHug
status: active
merged_into: null
display_name: 王孟煦
cbdb_id: 207153
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iAjEf2eSnJ5uNLkqHsGPDw
        subject_person_id: p_Z1sXa1thNM94WHiooGYHug
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟煦（生于1559年），史料所见人物。本项目依据《中国历代人物传记资料库：王孟煦（CBDB 207153）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_3OG8klQnXIa52AJMuXIJiL
          claim_id: c_iAjEf2eSnJ5uNLkqHsGPDw
          source_id: s_nqL6Q2bA84FTye6FwFmPJM
          stance: supports
          locator: CBDB:207153
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nqL6Q2bA84FTye6FwFmPJM
            source_type: api_record
            title: 中国历代人物传记资料库：王孟煦（CBDB 207153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207153&o=json
            external_identifier: CBDB:207153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bMVUMdo4PS6gwFDqdn6svG
        subject_person_id: p_Z1sXa1thNM94WHiooGYHug
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1559-01-01
            latest: 1559-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xm4y3YEFKWVtKKuG1TMiVX
          claim_id: c_bMVUMdo4PS6gwFDqdn6svG
          source_id: s_nqL6Q2bA84FTye6FwFmPJM
          stance: supports
          locator: CBDB:207153
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source:
            id: s_nqL6Q2bA84FTye6FwFmPJM
            source_type: api_record
            title: 中国历代人物传记资料库：王孟煦（CBDB 207153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207153&o=json
            external_identifier: CBDB:207153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Ef3fHAykaPqQB1v297ePj
        subject_person_id: p_Z1sXa1thNM94WHiooGYHug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3MG8FF7J59UphPoFKrHJGx
          claim_id: c_2Ef3fHAykaPqQB1v297ePj
          source_id: s_nqL6Q2bA84FTye6FwFmPJM
          stance: supports
          locator: CBDB:207153
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_72umLHUu8i-h5tO77GxAle
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z1sXa1thNM94WHiooGYHug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZbqY-jgJFR8d6EuYjpzix
          claim_id: c_72umLHUu8i-h5tO77GxAle
          source_id: s_RMrektBF5JTDkVK2V5Kp3S
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RMrektBF5JTDkVK2V5Kp3S
            source_type: api_record
            title: 中国历代人物传记资料库：王士瑤（CBDB 228573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228573&o=json
            external_identifier: CBDB:228573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xAnhmoVcnedrkYag8SmuS8
        status: active
        display_name: 王士瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lfs-5VfBvqZDzRjLvga0vS
        subject_person_id: p_3QV9NMYJ2zd7jKRpFyUmus
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z1sXa1thNM94WHiooGYHug
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GufZgmAS9xNGpfgYLukCVr
          claim_id: c_lfs-5VfBvqZDzRjLvga0vS
          source_id: s_R4GMcpVWwnnjjxRjCJCR2i
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R4GMcpVWwnnjjxRjCJCR2i
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 228572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228572&o=json
            external_identifier: CBDB:228572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3QV9NMYJ2zd7jKRpFyUmus
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_xwJgB9iJbK_OlN2Kb2JQNk
        subject_person_id: p_7XFSgFj9V9fUQFp9e4eBUF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z1sXa1thNM94WHiooGYHug
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ha8tLfHRT-3gWOLKSG7F5p
          claim_id: c_xwJgB9iJbK_OlN2Kb2JQNk
          source_id: s_8H9r69eybm93dX8AZB2rp9
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8H9r69eybm93dX8AZB2rp9
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 228571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228571&o=json
            external_identifier: CBDB:228571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7XFSgFj9V9fUQFp9e4eBUF
        status: active
        display_name: 王愷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王孟煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟煦（生于1559年），史料所见人物。本项目依据《中国历代人物传记资料库：王孟煦（CBDB 207153）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1559年 | accepted |
| name.primary | 王孟煦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xAnhmoVcnedrkYag8SmuS8 | 王士瑤 | accepted |
| ancestors | p_3QV9NMYJ2zd7jKRpFyUmus | 王俊 | accepted |
| ancestors | p_7XFSgFj9V9fUQFp9e4eBUF | 王愷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 228572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228572&o=json)
- [中国历代人物传记资料库：王愷（CBDB 228571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228571&o=json)
- [中国历代人物传记资料库：王孟煦（CBDB 207153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207153&o=json)
- [中国历代人物传记资料库：王士瑤（CBDB 228573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228573&o=json)
