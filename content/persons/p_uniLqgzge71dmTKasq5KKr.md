---
schema: wang-person/v1
id: p_uniLqgzge71dmTKasq5KKr
status: active
merged_into: null
display_name: 王三
cbdb_id: 253006
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4QB1YnP3YyZpprEHu1Cfk
        subject_person_id: p_uniLqgzge71dmTKasq5KKr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三，史料所见人物。本项目依据《中国历代人物传记资料库：王三（CBDB 253006）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_HzmBtFbxx4pmXfGa82UB0v
          claim_id: c_u4QB1YnP3YyZpprEHu1Cfk
          source_id: s_GWo1aTQGU6Q1v516zK3Vdp
          stance: supports
          locator: CBDB:253006
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GWo1aTQGU6Q1v516zK3Vdp
            source_type: api_record
            title: 中国历代人物传记资料库：王三（CBDB 253006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253006&o=json
            external_identifier: CBDB:253006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJ8AUNG1f3MG1it5ZxHdcy
        subject_person_id: p_uniLqgzge71dmTKasq5KKr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cwsHCHJVkGPAB9M4LKcpNm
          claim_id: c_SJ8AUNG1f3MG1it5ZxHdcy
          source_id: s_GWo1aTQGU6Q1v516zK3Vdp
          stance: supports
          locator: CBDB:253006
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_AwF1NUr49v9M_heH0oqi47
        subject_person_id: p_uniLqgzge71dmTKasq5KKr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Jv1V_impgYOJm0ZcX6ugw
          claim_id: c_AwF1NUr49v9M_heH0oqi47
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NXxFJQ5QppEL8W3nndMu23
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 200038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json
            external_identifier: CBDB:200038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eMDP1q9C4pkhGjAYDKDRYY
        status: active
        display_name: 王相
        merged_into_person_id: null
  other: []
---

# 王三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三，史料所见人物。本项目依据《中国历代人物传记资料库：王三（CBDB 253006）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王三 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eMDP1q9C4pkhGjAYDKDRYY | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三（CBDB 253006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253006&o=json)
- [中国历代人物传记资料库：王相（CBDB 200038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json)
