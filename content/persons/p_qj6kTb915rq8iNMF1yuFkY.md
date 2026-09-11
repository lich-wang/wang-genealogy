---
schema: wang-person/v1
id: p_qj6kTb915rq8iNMF1yuFkY
status: active
merged_into: null
display_name: 王其鑫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BASBwdpiNKW7ptjGcy16rC
        subject_person_id: p_qj6kTb915rq8iNMF1yuFkY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其鑫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BEfEaxwwEHomSudzHCFGvK
          claim_id: c_BASBwdpiNKW7ptjGcy16rC
          source_id: s_6mPC5C16MiqV1GUMzqF6RM
          stance: supports
          locator: CBDB:636339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636339）
          source: &a1
            id: s_6mPC5C16MiqV1GUMzqF6RM
            source_type: api_record
            title: 中国历代人物传记资料库：王其鑫（CBDB 636339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636339&o=json
            external_identifier: CBDB:636339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_88pMgMVXL2joGmWp5c19Lt
        subject_person_id: p_qj6kTb915rq8iNMF1yuFkY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其鑫，清人物。籍贯海豐，入仕監生，曾任河捕同知。（中国历代人物传记资料库 CBDB 636339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_88xcbJ2PqevWkdYp6mjSnU
          claim_id: c_88pMgMVXL2joGmWp5c19Lt
          source_id: s_6mPC5C16MiqV1GUMzqF6RM
          stance: supports
          locator: CBDB:636339
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

# 王其鑫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其鑫 | accepted |
| bio.summary | 王其鑫，清人物。籍贯海豐，入仕監生，曾任河捕同知。（中国历代人物传记资料库 CBDB 636339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其鑫（CBDB 636339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636339&o=json)
