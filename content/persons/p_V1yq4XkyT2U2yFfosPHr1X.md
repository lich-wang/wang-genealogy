---
schema: wang-person/v1
id: p_V1yq4XkyT2U2yFfosPHr1X
status: active
merged_into: null
display_name: 王霖龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sLY1QQLGHF6agEm6J8653y
        subject_person_id: p_V1yq4XkyT2U2yFfosPHr1X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YLFLMJkMPhh7gqns8KZvJr
          claim_id: c_sLY1QQLGHF6agEm6J8653y
          source_id: s_gYdA5UdG1F9tLLvbcGzEHP
          stance: supports
          locator: CBDB:686627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686627）
          source: &a1
            id: s_gYdA5UdG1F9tLLvbcGzEHP
            source_type: api_record
            title: 中国历代人物传记资料库：王霖龍（CBDB 686627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686627&o=json
            external_identifier: CBDB:686627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B1H8UT3dmJ6f1VnSbj9GmZ
        subject_person_id: p_V1yq4XkyT2U2yFfosPHr1X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖龍，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 686627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EEe0LdckQarza0h09VYi-E
          claim_id: c_B1H8UT3dmJ6f1VnSbj9GmZ
          source_id: s_gYdA5UdG1F9tLLvbcGzEHP
          stance: supports
          locator: CBDB:686627
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王霖龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖龍 | accepted |
| bio.summary | 王霖龍，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 686627） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖龍（CBDB 686627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686627&o=json)
