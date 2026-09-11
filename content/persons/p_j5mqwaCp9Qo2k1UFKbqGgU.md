---
schema: wang-person/v1
id: p_j5mqwaCp9Qo2k1UFKbqGgU
status: active
merged_into: null
display_name: 王師宗
cbdb_id: 157992
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5kBDQA6LVikfRZgnWpyW1J
        subject_person_id: p_j5mqwaCp9Qo2k1UFKbqGgU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師宗，唐人物。中国历代人物传记资料库（CBDB）以人物编号 157992 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_AwdSfWJoZKkOT8OIwsJUrz
          claim_id: c_5kBDQA6LVikfRZgnWpyW1J
          source_id: s_TaiCcAzVTx79rcrpu8H5NQ
          stance: supports
          locator: CBDB:157992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_TaiCcAzVTx79rcrpu8H5NQ
            source_type: api_record
            title: 中国历代人物传记资料库：王師宗（CBDB 157992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157992&o=json
            external_identifier: CBDB:157992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CN15Hx9ByVzhcwwk2cmAEc
        subject_person_id: p_j5mqwaCp9Qo2k1UFKbqGgU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4YH9LP9ynBTiCUeqymCFtU
          claim_id: c_CN15Hx9ByVzhcwwk2cmAEc
          source_id: s_TaiCcAzVTx79rcrpu8H5NQ
          stance: supports
          locator: CBDB:157992
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_TaiCcAzVTx79rcrpu8H5NQ
            source_type: api_record
            title: 中国历代人物传记资料库：王師宗（CBDB 157992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157992&o=json
            external_identifier: CBDB:157992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4dDFuyFllut9Qup9YbzDo4
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j5mqwaCp9Qo2k1UFKbqGgU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ClEw1VUzGqON98FpZ1NOyK
          claim_id: c_4dDFuyFllut9Qup9YbzDo4
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Bi4MKHXFWwTnY4wZFRhfrS
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 141655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json
            external_identifier: CBDB:141655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3Q3HvcLsmxqfDq9R1nBQXi
        status: active
        display_name: 王振
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師宗，唐人物。中国历代人物传记资料库（CBDB）以人物编号 157992 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王師宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3Q3HvcLsmxqfDq9R1nBQXi | 王振 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師宗（CBDB 157992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157992&o=json)
- [中国历代人物传记资料库：王振（CBDB 141655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json)
