---
schema: wang-person/v1
id: p_7oi8UQasAYTF7fxG6eiSJS
status: active
merged_into: null
display_name: 王璜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2bZGGihdPo8LP4SK32aprE
        subject_person_id: p_7oi8UQasAYTF7fxG6eiSJS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPe1GuTcY55A1173JPtLRT
          claim_id: c_2bZGGihdPo8LP4SK32aprE
          source_id: s_qp5QxuMSKFvQM8Q6dLHC6J
          stance: supports
          locator: CBDB:476963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476963）
          source: &a1
            id: s_qp5QxuMSKFvQM8Q6dLHC6J
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 476963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476963&o=json
            external_identifier: CBDB:476963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EdeQJfhGNJEWMG6bHY4BPC
        subject_person_id: p_7oi8UQasAYTF7fxG6eiSJS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璜，明人物。曾任同知。（中国历代人物传记资料库 CBDB 476963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xT6EpcuSNS6dGAUavV7hvW
          claim_id: c_EdeQJfhGNJEWMG6bHY4BPC
          source_id: s_qp5QxuMSKFvQM8Q6dLHC6J
          stance: supports
          locator: CBDB:476963
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

# 王璜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璜 | accepted |
| bio.summary | 王璜，明人物。曾任同知。（中国历代人物传记资料库 CBDB 476963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璜（CBDB 476963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476963&o=json)
