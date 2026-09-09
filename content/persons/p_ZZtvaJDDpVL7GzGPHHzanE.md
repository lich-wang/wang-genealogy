---
schema: wang-person/v1
id: p_ZZtvaJDDpVL7GzGPHHzanE
status: active
merged_into: null
display_name: 王大年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q9E6gDh5A3pQThQaLsiLGk
        subject_person_id: p_ZZtvaJDDpVL7GzGPHHzanE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qWSqYz7A8reWttGmcszxT1
          claim_id: c_Q9E6gDh5A3pQThQaLsiLGk
          source_id: s_VQAP5Nz2zSXeyVinA3seS6
          stance: supports
          locator: CBDB:471074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471074）
          source: &a1
            id: s_VQAP5Nz2zSXeyVinA3seS6
            source_type: api_record
            title: 中国历代人物传记资料库：王大年（CBDB 471074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471074&o=json
            external_identifier: CBDB:471074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aV4fSY2wB7xx94V81vFcAa
        subject_person_id: p_ZZtvaJDDpVL7GzGPHHzanE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DCNBKjJA3AX9LfsTHrKvk1
          claim_id: c_aV4fSY2wB7xx94V81vFcAa
          source_id: s_VQAP5Nz2zSXeyVinA3seS6
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
  descendants: []
  other: []
---

# 王大年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大年（CBDB 471074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471074&o=json)
