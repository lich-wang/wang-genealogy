---
schema: wang-person/v1
id: p_9B7nhDMHLM8q5E2zrDe1N7
status: active
merged_into: null
display_name: 王琨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VqQLxBjQGTWTNtQ4AC1Gax
        subject_person_id: p_9B7nhDMHLM8q5E2zrDe1N7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fksbWL6E3A2n4QXchH6Pqo
          claim_id: c_VqQLxBjQGTWTNtQ4AC1Gax
          source_id: s_Rn5uy5DGigvaTGYg8bDJn2
          stance: supports
          locator: CBDB:494493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494493）
          source: &a1
            id: s_Rn5uy5DGigvaTGYg8bDJn2
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 494493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494493&o=json
            external_identifier: CBDB:494493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KrwM88WyKSpTipzdGi8fUE
        subject_person_id: p_9B7nhDMHLM8q5E2zrDe1N7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 494493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N3pQxx6AllJux6eHpe3H1C
          claim_id: c_KrwM88WyKSpTipzdGi8fUE
          source_id: s_Rn5uy5DGigvaTGYg8bDJn2
          stance: supports
          locator: CBDB:494493
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

# 王琨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琨 | accepted |
| bio.summary | 王琨，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 494493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琨（CBDB 494493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494493&o=json)
