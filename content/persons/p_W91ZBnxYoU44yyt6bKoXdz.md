---
schema: wang-person/v1
id: p_W91ZBnxYoU44yyt6bKoXdz
status: active
merged_into: null
display_name: 王高
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bi9YTDPhJFKkG1DpARDgY2
        subject_person_id: p_W91ZBnxYoU44yyt6bKoXdz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3zPvNDZYcHncbJbNXS22Ak
          claim_id: c_Bi9YTDPhJFKkG1DpARDgY2
          source_id: s_SHVn4t8DmEq1mA6z8Jfr4C
          stance: supports
          locator: CBDB:341549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341549）
          source: &a1
            id: s_SHVn4t8DmEq1mA6z8Jfr4C
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 341549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341549&o=json
            external_identifier: CBDB:341549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1rDrEzCA1P32rk2qEo6Ehe
        subject_person_id: p_W91ZBnxYoU44yyt6bKoXdz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高，明人物。明清進士進士，籍贯安福，入仕進士，曾任右布政使。（中国历代人物传记资料库 CBDB 341549）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jkxTTa8yN35IK-4ZJ7QA7L
          claim_id: c_1rDrEzCA1P32rk2qEo6Ehe
          source_id: s_SHVn4t8DmEq1mA6z8Jfr4C
          stance: supports
          locator: CBDB:341549
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ydpBxh5mx-g-wp5nzLmeGC
        subject_person_id: p_LcgNtVu2ryJBwpbQVAHghX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W91ZBnxYoU44yyt6bKoXdz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jlRy62bQW_54mmGU7dB2tC
          claim_id: c_ydpBxh5mx-g-wp5nzLmeGC
          source_id: s_LaKU6QN9kWmAVQW6vzN1rf
          stance: supports
          locator: 江西通志，lgid=1197552：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaKU6QN9kWmAVQW6vzN1rf
            source_type: api_record
            title: 中国历代人物传记资料库：王芳孫（CBDB 556526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556526&o=json
            external_identifier: CBDB:556526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LcgNtVu2ryJBwpbQVAHghX
        status: active
        display_name: 王芳孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | 王高，明人物。明清進士進士，籍贯安福，入仕進士，曾任右布政使。（中国历代人物传记资料库 CBDB 341549） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LcgNtVu2ryJBwpbQVAHghX | 王芳孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳孫（CBDB 556526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556526&o=json)
- [中国历代人物传记资料库：王高（CBDB 341549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341549&o=json)
