---
schema: wang-person/v1
id: p_s1G8THmnnjEDHat96956Pe
status: active
merged_into: null
display_name: 王封東
cbdb_id: 230482
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8nZXW1EwVDsRN4ZDjnBXkq
        subject_person_id: p_s1G8THmnnjEDHat96956Pe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封東，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230482）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__-V2_1oB4iIvYR8weVSOxy
          claim_id: c_8nZXW1EwVDsRN4ZDjnBXkq
          source_id: s_qku4Xn938XvCooBvxMLzW1
          stance: supports
          locator: CBDB:230482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qku4Xn938XvCooBvxMLzW1
            source_type: api_record
            title: 中国历代人物传记资料库：王封東（CBDB 230482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230482&o=json
            external_identifier: CBDB:230482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4dKX4F4o2cDpWZLaH6BD3
        subject_person_id: p_s1G8THmnnjEDHat96956Pe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封東
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZVx84xHWVBVnwYyQa4cLPJ
          claim_id: c_d4dKX4F4o2cDpWZLaH6BD3
          source_id: s_qku4Xn938XvCooBvxMLzW1
          stance: supports
          locator: CBDB:230482
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uZbjx4T-qVL-ATx6Fdm7zI
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s1G8THmnnjEDHat96956Pe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-OkdlXF-zAs9PYrNJx2lsS
          claim_id: c_uZbjx4T-qVL-ATx6Fdm7zI
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mrpj37C8DH4qVHGNGQntYM
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 207264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json
            external_identifier: CBDB:207264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王封東

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王封東，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230482） | accepted |
| name.primary | 王封東 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王封東（CBDB 230482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230482&o=json)
- [中国历代人物传记资料库：王一鳴（CBDB 207264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json)
