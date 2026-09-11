---
schema: wang-person/v1
id: p_AuvMJTzFGs5d4XX8kQYwFG
status: active
merged_into: null
display_name: 王繼文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r5sGpSuKELcn7nwSedKWBv
        subject_person_id: p_AuvMJTzFGs5d4XX8kQYwFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pn4q74D1g8igxf75TRU1F8
          claim_id: c_r5sGpSuKELcn7nwSedKWBv
          source_id: s_6Lo94Zr29kvdTAw33vL95L
          stance: supports
          locator: CBDB:17422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17422）
          source: &a1
            id: s_6Lo94Zr29kvdTAw33vL95L
            source_type: api_record
            title: 中国历代人物传记资料库：王繼文（CBDB 17422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17422&o=json
            external_identifier: CBDB:17422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ELW8drix3xu6QSWXDJfc8g
        subject_person_id: p_AuvMJTzFGs5d4XX8kQYwFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼文，宋人物。籍贯冠氏。（中国历代人物传记资料库 CBDB 17422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VwqeT2afZOJ3OQjixVjqA6
          claim_id: c_ELW8drix3xu6QSWXDJfc8g
          source_id: s_6Lo94Zr29kvdTAw33vL95L
          stance: supports
          locator: CBDB:17422
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3nu30A3IKgAJdDUjlSU7Oj
        subject_person_id: p_AuvMJTzFGs5d4XX8kQYwFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C5gdwEP6JshLSxPa5isWtq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DSD5uSn3edei7CmJp2Mb7
          claim_id: c_3nu30A3IKgAJdDUjlSU7Oj
          source_id: s_6Lo94Zr29kvdTAw33vL95L
          stance: supports
          locator: CBDB 双向互证（子 王异 ⇄ 父 王繼文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼文 | accepted |
| bio.summary | 王繼文，宋人物。籍贯冠氏。（中国历代人物传记资料库 CBDB 17422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼文（CBDB 17422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17422&o=json)
