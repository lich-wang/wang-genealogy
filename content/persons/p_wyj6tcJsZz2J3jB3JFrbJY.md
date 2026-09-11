---
schema: wang-person/v1
id: p_wyj6tcJsZz2J3jB3JFrbJY
status: active
merged_into: null
display_name: 王詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LpF6RcaCFi4Ka3HWgJHpQB
        subject_person_id: p_wyj6tcJsZz2J3jB3JFrbJY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k58P69brHiMNg1S4Q4N1xw
          claim_id: c_LpF6RcaCFi4Ka3HWgJHpQB
          source_id: s_1LhdwiAzjHF5RNooj8s1er
          stance: supports
          locator: CBDB:490799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490799）
          source: &a1
            id: s_1LhdwiAzjHF5RNooj8s1er
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 490799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490799&o=json
            external_identifier: CBDB:490799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJ9fFd7FLmQDHaQk1ZDBL5
        subject_person_id: p_wyj6tcJsZz2J3jB3JFrbJY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任儒學訓導。（中国历代人物传记资料库 CBDB 490799）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m2grLZFbqgx2avrFGjECgs
          claim_id: c_JJ9fFd7FLmQDHaQk1ZDBL5
          source_id: s_1LhdwiAzjHF5RNooj8s1er
          stance: supports
          locator: CBDB:490799
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

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | 王詔，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任儒學訓導。（中国历代人物传记资料库 CBDB 490799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 490799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490799&o=json)
