---
schema: wang-person/v1
id: p_3ws3kaBtkJvq1wiLuEjVLh
status: active
merged_into: null
display_name: 王孟津
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C2C5ytsiB283iCd588X9Ff
        subject_person_id: p_3ws3kaBtkJvq1wiLuEjVLh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟津
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T991X9oXbYsUkMVFdNCA2T
          claim_id: c_C2C5ytsiB283iCd588X9Ff
          source_id: s_zPFQ9QPq4GMi6NoXd9Cn42
          stance: supports
          locator: CBDB:698106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698106）
          source: &a1
            id: s_zPFQ9QPq4GMi6NoXd9Cn42
            source_type: api_record
            title: 中国历代人物传记资料库：王孟津（CBDB 698106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698106&o=json
            external_identifier: CBDB:698106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JZsVDvbVaiDKsK5SwPK1kv
        subject_person_id: p_3ws3kaBtkJvq1wiLuEjVLh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟津，明人物。曾任兵部尚書。（中国历代人物传记资料库 CBDB 698106）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ehIXFz2lTxusJfYCnZk6ew
          claim_id: c_JZsVDvbVaiDKsK5SwPK1kv
          source_id: s_zPFQ9QPq4GMi6NoXd9Cn42
          stance: supports
          locator: CBDB:698106
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

# 王孟津

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟津 | accepted |
| bio.summary | 王孟津，明人物。曾任兵部尚書。（中国历代人物传记资料库 CBDB 698106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟津（CBDB 698106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698106&o=json)
