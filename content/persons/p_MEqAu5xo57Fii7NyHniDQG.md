---
schema: wang-person/v1
id: p_MEqAu5xo57Fii7NyHniDQG
status: active
merged_into: null
display_name: 王陸恭
cbdb_id: 281039
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8oAoho7pv727ULFcZHVzWa
        subject_person_id: p_MEqAu5xo57Fii7NyHniDQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陸恭，史料所见人物。本项目依据《中国历代人物传记资料库：王陸恭（CBDB 281039）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Btu7XI_KuffoQ6C7x0_2Te
          claim_id: c_8oAoho7pv727ULFcZHVzWa
          source_id: s_M1zMcS5sPXJjSHqyHr6ff2
          stance: supports
          locator: CBDB:281039
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_M1zMcS5sPXJjSHqyHr6ff2
            source_type: api_record
            title: 中国历代人物传记资料库：王陸恭（CBDB 281039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281039&o=json
            external_identifier: CBDB:281039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUiGv33uFGw3M6oBujx1Go
        subject_person_id: p_MEqAu5xo57Fii7NyHniDQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陸恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2AHqyMwt7MMQ2D484NTM6V
          claim_id: c_jUiGv33uFGw3M6oBujx1Go
          source_id: s_M1zMcS5sPXJjSHqyHr6ff2
          stance: supports
          locator: CBDB:281039
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_tOWD3whHw2q8bGnlOJZwsh
        subject_person_id: p_MEqAu5xo57Fii7NyHniDQG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rgz4hu6JJsHZiAePou0tN8
          claim_id: c_tOWD3whHw2q8bGnlOJZwsh
          source_id: s_M1zMcS5sPXJjSHqyHr6ff2
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M1zMcS5sPXJjSHqyHr6ff2
            source_type: api_record
            title: 中国历代人物传记资料库：王陸恭（CBDB 281039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281039&o=json
            external_identifier: CBDB:281039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_z4K3ehvdbQWDKCv3VLhZDK
        status: active
        display_name: 王可學
        merged_into_person_id: null
  other: []
---

# 王陸恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王陸恭，史料所见人物。本项目依据《中国历代人物传记资料库：王陸恭（CBDB 281039）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王陸恭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_z4K3ehvdbQWDKCv3VLhZDK | 王可學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陸恭（CBDB 281039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281039&o=json)
