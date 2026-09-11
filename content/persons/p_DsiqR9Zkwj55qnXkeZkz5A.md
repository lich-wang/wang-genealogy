---
schema: wang-person/v1
id: p_DsiqR9Zkwj55qnXkeZkz5A
status: active
merged_into: null
display_name: 王應斗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_atyXY6FCXYbPEkC2VAdsPw
        subject_person_id: p_DsiqR9Zkwj55qnXkeZkz5A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應斗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r4SKD4bFeJr2Ji6X4utHGk
          claim_id: c_atyXY6FCXYbPEkC2VAdsPw
          source_id: s_k6W7c4J6Pd5EWDovQMGGtH
          stance: supports
          locator: CBDB:232195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232195）
          source: &a1
            id: s_k6W7c4J6Pd5EWDovQMGGtH
            source_type: api_record
            title: 中国历代人物传记资料库：王應斗（CBDB 232195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232195&o=json
            external_identifier: CBDB:232195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Hb7KfTSK1or5BfG25WEop
        subject_person_id: p_DsiqR9Zkwj55qnXkeZkz5A
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
        - id: cs_cy1bBV1V7yamn1yAFPE2kx
          claim_id: c_6Hb7KfTSK1or5BfG25WEop
          source_id: s_k6W7c4J6Pd5EWDovQMGGtH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_tBlqGjHzUrNQ8KoEjKh5Zk
        subject_person_id: p_DsiqR9Zkwj55qnXkeZkz5A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NNN6o899F1M8yyQuHKMbNz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7qEpThL8ErF4iVTnUBJ3z7
          claim_id: c_tBlqGjHzUrNQ8KoEjKh5Zk
          source_id: s_k6W7c4J6Pd5EWDovQMGGtH
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NNN6o899F1M8yyQuHKMbNz
        status: active
        display_name: 王演疇
        merged_into_person_id: null
  other: []
---

# 王應斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應斗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NNN6o899F1M8yyQuHKMbNz | 王演疇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應斗（CBDB 232195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232195&o=json)
