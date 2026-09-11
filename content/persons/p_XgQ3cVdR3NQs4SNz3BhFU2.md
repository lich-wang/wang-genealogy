---
schema: wang-person/v1
id: p_XgQ3cVdR3NQs4SNz3BhFU2
status: active
merged_into: null
display_name: 王三恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UE1M9NQwyKCNc1RDTpJCS8
        subject_person_id: p_XgQ3cVdR3NQs4SNz3BhFU2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MEgnzWNfRH85Q6vVd26SD3
          claim_id: c_UE1M9NQwyKCNc1RDTpJCS8
          source_id: s_Pb5qfb5vjQrjzEzMj9i9qF
          stance: supports
          locator: CBDB:547210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547210）
          source: &a1
            id: s_Pb5qfb5vjQrjzEzMj9i9qF
            source_type: api_record
            title: 中国历代人物传记资料库：王三恕（CBDB 547210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547210&o=json
            external_identifier: CBDB:547210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P8yAZteyHS4PRfS1sFi1jC
        subject_person_id: p_XgQ3cVdR3NQs4SNz3BhFU2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三恕，宋人物。籍贯清江，入仕進士。（中国历代人物传记资料库 CBDB 547210）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gwHx69903yxIoYV3SNAlbn
          claim_id: c_P8yAZteyHS4PRfS1sFi1jC
          source_id: s_Pb5qfb5vjQrjzEzMj9i9qF
          stance: supports
          locator: CBDB:547210
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

# 王三恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三恕 | accepted |
| bio.summary | 王三恕，宋人物。籍贯清江，入仕進士。（中国历代人物传记资料库 CBDB 547210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三恕（CBDB 547210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547210&o=json)
