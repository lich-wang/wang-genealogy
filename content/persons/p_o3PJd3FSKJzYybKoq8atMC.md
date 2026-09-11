---
schema: wang-person/v1
id: p_o3PJd3FSKJzYybKoq8atMC
status: active
merged_into: null
display_name: 王栗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ehfi3gZD71ngPwANp3nrMS
        subject_person_id: p_o3PJd3FSKJzYybKoq8atMC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZNJ75LwJC4H2dc6crFoxi1
          claim_id: c_Ehfi3gZD71ngPwANp3nrMS
          source_id: s_i9i7nC2AbNpCnzG5sFJUin
          stance: supports
          locator: CBDB:547488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547488）
          source: &a1
            id: s_i9i7nC2AbNpCnzG5sFJUin
            source_type: api_record
            title: 中国历代人物传记资料库：王栗（CBDB 547488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547488&o=json
            external_identifier: CBDB:547488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_54aoYRPH4BpjCiyK4grCZu
        subject_person_id: p_o3PJd3FSKJzYybKoq8atMC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栗，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 547488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qrkQnfvyvID9gHl1II9zVQ
          claim_id: c_54aoYRPH4BpjCiyK4grCZu
          source_id: s_i9i7nC2AbNpCnzG5sFJUin
          stance: supports
          locator: CBDB:547488
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

# 王栗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栗 | accepted |
| bio.summary | 王栗，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 547488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王栗（CBDB 547488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547488&o=json)
