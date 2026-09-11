---
schema: wang-person/v1
id: p_fS9PQCqUyAKcB7s5ivqJ6H
status: active
merged_into: null
display_name: 王質卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AAFTqhQbdqivead8ukKDF3
        subject_person_id: p_fS9PQCqUyAKcB7s5ivqJ6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1RBT7oGCYXAqGRfP61jPqk
          claim_id: c_AAFTqhQbdqivead8ukKDF3
          source_id: s_6Ahk4ML96PFF75jMtDMG4r
          stance: supports
          locator: CBDB:571272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571272）
          source: &a1
            id: s_6Ahk4ML96PFF75jMtDMG4r
            source_type: api_record
            title: 中国历代人物传记资料库：王質卿（CBDB 571272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571272&o=json
            external_identifier: CBDB:571272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z173csTTF7gu79Bb6aCB13
        subject_person_id: p_fS9PQCqUyAKcB7s5ivqJ6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質卿，史料所见人物。本项目依据《中国历代人物传记资料库：王質卿（CBDB 571272）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pYsnBV8CC2nV55DTYPcT1i
          claim_id: c_z173csTTF7gu79Bb6aCB13
          source_id: s_6Ahk4ML96PFF75jMtDMG4r
          stance: supports
          locator: CBDB:571272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ew0cqUX4TddkRkd4Y30fxi
        subject_person_id: p_qALPGgh8VtugjCeKfcSDNY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fS9PQCqUyAKcB7s5ivqJ6H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSOkLjPaFnq3ycqKscNtT4
          claim_id: c_Ew0cqUX4TddkRkd4Y30fxi
          source_id: s_6Ahk4ML96PFF75jMtDMG4r
          stance: supports
          locator: 南昌府志，Igid=1203680：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qALPGgh8VtugjCeKfcSDNY
        status: active
        display_name: 王公錠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王質卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質卿 | accepted |
| bio.summary | 王質卿，史料所见人物。本项目依据《中国历代人物传记资料库：王質卿（CBDB 571272）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_qALPGgh8VtugjCeKfcSDNY | 王公錠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王質卿（CBDB 571272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571272&o=json)
