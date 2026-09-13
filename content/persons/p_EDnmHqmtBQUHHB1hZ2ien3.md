---
schema: wang-person/v1
id: p_EDnmHqmtBQUHHB1hZ2ien3
status: active
merged_into: null
display_name: 王公柔
cbdb_id: 264214
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UY6hg74EubmfYK3Vpj7gke
        subject_person_id: p_EDnmHqmtBQUHHB1hZ2ien3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公柔，史料所见人物。本项目依据《中国历代人物传记资料库：王公柔（CBDB 264214）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_0U1FH7yMcxTucgy7Yx90GP
          claim_id: c_UY6hg74EubmfYK3Vpj7gke
          source_id: s_XHHYfBAeBB1z4cU62x2Gup
          stance: supports
          locator: CBDB:264214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XHHYfBAeBB1z4cU62x2Gup
            source_type: api_record
            title: 中国历代人物传记资料库：王公柔（CBDB 264214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264214&o=json
            external_identifier: CBDB:264214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lyg2TpJDWKWN3txieMK8Lu
        subject_person_id: p_EDnmHqmtBQUHHB1hZ2ien3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L219Hs9VM4LFexXFt99FUs
          claim_id: c_Lyg2TpJDWKWN3txieMK8Lu
          source_id: s_XHHYfBAeBB1z4cU62x2Gup
          stance: supports
          locator: CBDB:264214
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_5JnrxxYLPWl-aLF0rMuXt7
        subject_person_id: p_EDnmHqmtBQUHHB1hZ2ien3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKnLijo1iw3tLOTgYmdnqV
          claim_id: c_5JnrxxYLPWl-aLF0rMuXt7
          source_id: s_XHHYfBAeBB1z4cU62x2Gup
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XHHYfBAeBB1z4cU62x2Gup
            source_type: api_record
            title: 中国历代人物传记资料库：王公柔（CBDB 264214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264214&o=json
            external_identifier: CBDB:264214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GBJny92BjTJrCUatL2dF1X
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  other: []
---

# 王公柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公柔，史料所见人物。本项目依据《中国历代人物传记资料库：王公柔（CBDB 264214）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王公柔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GBJny92BjTJrCUatL2dF1X | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公柔（CBDB 264214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264214&o=json)
