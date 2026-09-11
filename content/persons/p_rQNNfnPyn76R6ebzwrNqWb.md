---
schema: wang-person/v1
id: p_rQNNfnPyn76R6ebzwrNqWb
status: active
merged_into: null
display_name: 王思曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B52KKu61KRjMZEfmiFEy4q
        subject_person_id: p_rQNNfnPyn76R6ebzwrNqWb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAW1V3wfA25yV8FCps4eSo
          claim_id: c_B52KKu61KRjMZEfmiFEy4q
          source_id: s_cH2AC1Exa6Xi21n4h3EmYU
          stance: supports
          locator: CBDB:637801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637801）
          source: &a1
            id: s_cH2AC1Exa6Xi21n4h3EmYU
            source_type: api_record
            title: 中国历代人物传记资料库：王思曾（CBDB 637801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637801&o=json
            external_identifier: CBDB:637801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RDLQmXZ9aEuCp6pTsknooP
        subject_person_id: p_rQNNfnPyn76R6ebzwrNqWb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王思曾，清人物。籍贯太原，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 637801）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_junRiQrQev766cKIzznpWe
          claim_id: c_RDLQmXZ9aEuCp6pTsknooP
          source_id: s_cH2AC1Exa6Xi21n4h3EmYU
          stance: supports
          locator: CBDB:637801
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

# 王思曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思曾 | accepted |
| bio.summary | 王思曾，清人物。籍贯太原，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 637801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思曾（CBDB 637801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637801&o=json)
