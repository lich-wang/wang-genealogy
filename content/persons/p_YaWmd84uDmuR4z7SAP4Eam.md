---
schema: wang-person/v1
id: p_YaWmd84uDmuR4z7SAP4Eam
status: active
merged_into: null
display_name: 王崇德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pKgQDFrk4Tr4vVcESJmhb3
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HsoG5s5FLWm2NN4zjr9Axb
          claim_id: c_pKgQDFrk4Tr4vVcESJmhb3
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: CBDB:318728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318728）
          source: &a1
            id: s_hQPa37YUT1hpcYJ1GEai5p
            source_type: api_record
            title: 中国历代人物传记资料库：王崇德（CBDB 318728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318728&o=json
            external_identifier: CBDB:318728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gAvVKFZ3EA7pm7q7CM1JPM
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德，明人物。嘉靖三十二年進士，籍贯平鄉，曾任教授。（中国历代人物传记资料库 CBDB 318728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cItRqS-iB6Ndr46gF7ewx6
          claim_id: c_gAvVKFZ3EA7pm7q7CM1JPM
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: CBDB:318728
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Od3aGJSRMwW0cqM7E1PgjG
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNOgFZb3AiomKz2ArQDlox
          claim_id: c_Od3aGJSRMwW0cqM7E1PgjG
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cDtAvQGzuVZRFeJxenEh2g
        status: active
        display_name: 王可信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇德 | accepted |
| bio.summary | 王崇德，明人物。嘉靖三十二年進士，籍贯平鄉，曾任教授。（中国历代人物传记资料库 CBDB 318728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cDtAvQGzuVZRFeJxenEh2g | 王可信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇德（CBDB 318728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318728&o=json)
