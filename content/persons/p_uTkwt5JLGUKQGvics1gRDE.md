---
schema: wang-person/v1
id: p_uTkwt5JLGUKQGvics1gRDE
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 386294
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thhQHC6vrzqsSgSlRLsm6N
        subject_person_id: p_uTkwt5JLGUKQGvics1gRDE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王沂妻)（CBDB 386294）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yMrPxOrvvgI5II6RySzaSW
          claim_id: c_thhQHC6vrzqsSgSlRLsm6N
          source_id: s_njsOR7JvsAf5b3hHOREhgO
          stance: supports
          locator: CBDB:386294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_njsOR7JvsAf5b3hHOREhgO
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王沂妻)（CBDB 386294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386294&o=json
            external_identifier: CBDB:386294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UYt2fK34XNUJnl0aohSQMW
        subject_person_id: p_uTkwt5JLGUKQGvics1gRDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cLL9bl5hwUTw23zRQNXbSj
          claim_id: c_UYt2fK34XNUJnl0aohSQMW
          source_id: s_njsOR7JvsAf5b3hHOREhgO
          stance: supports
          locator: CBDB:386294
          quotation: null
          interpretation_note: CBDB 明确记录的王沂配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_J6deDSvpaJpP-Vj1DgykvB
        subject_person_id: p_XAia9hn1X1Mgc36T67v666
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uTkwt5JLGUKQGvics1gRDE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YVF-sQdE2SJlsJ31QLUXIQ
          claim_id: c_J6deDSvpaJpP-Vj1DgykvB
          source_id: s_njsOR7JvsAf5b3hHOREhgO
          stance: supports
          locator: CBDB 双向互证（妻子 張氏(王沂妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XAia9hn1X1Mgc36T67v666
        status: active
        display_name: 王沂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王沂妻)（CBDB 386294）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_XAia9hn1X1Mgc36T67v666 | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王沂妻)（CBDB 386294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386294&o=json)
