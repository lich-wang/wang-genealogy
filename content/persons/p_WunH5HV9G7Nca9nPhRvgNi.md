---
schema: wang-person/v1
id: p_WunH5HV9G7Nca9nPhRvgNi
status: active
merged_into: null
display_name: 王公廉
cbdb_id: 158832
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E75Q3duf59qCRZBcZKHV7z
        subject_person_id: p_WunH5HV9G7Nca9nPhRvgNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公廉，唐人物。籍贯燕薊。（中国历代人物传记资料库 CBDB 158832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gk8u4UhVGzF4D51A3forVu
          claim_id: c_E75Q3duf59qCRZBcZKHV7z
          source_id: s_BWjsEJSZgvY8tX7foSZdFt
          stance: supports
          locator: CBDB:158832
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BWjsEJSZgvY8tX7foSZdFt
            source_type: api_record
            title: 中国历代人物传记资料库：王公廉（CBDB 158832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158832&o=json
            external_identifier: CBDB:158832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X9cCKYYHMW7H9ZusprbYGh
        subject_person_id: p_WunH5HV9G7Nca9nPhRvgNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k1nfAa7wChpBGBE4xuT9pD
          claim_id: c_X9cCKYYHMW7H9ZusprbYGh
          source_id: s_BWjsEJSZgvY8tX7foSZdFt
          stance: supports
          locator: CBDB:158832
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EVzv9mp5wBXlnwgdJZMKdg
        subject_person_id: p_nDDaZpF9qvDxoedjU9EcGY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WunH5HV9G7Nca9nPhRvgNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCKc0emLQWvQM6LvBMNLrL
          claim_id: c_EVzv9mp5wBXlnwgdJZMKdg
          source_id: s_qbkVepWD94BUvMn9Z1VGK8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qbkVepWD94BUvMn9Z1VGK8
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 158830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158830&o=json
            external_identifier: CBDB:158830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nDDaZpF9qvDxoedjU9EcGY
        status: active
        display_name: 王林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公廉，唐人物。籍贯燕薊。（中国历代人物传记资料库 CBDB 158832） | accepted |
| name.primary | 王公廉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nDDaZpF9qvDxoedjU9EcGY | 王林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公廉（CBDB 158832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158832&o=json)
- [中国历代人物传记资料库：王林（CBDB 158830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158830&o=json)
