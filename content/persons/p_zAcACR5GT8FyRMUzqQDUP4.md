---
schema: wang-person/v1
id: p_zAcACR5GT8FyRMUzqQDUP4
status: active
merged_into: null
display_name: 王應瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QVVVFtdCk1AkgL5G7P1rkW
        subject_person_id: p_zAcACR5GT8FyRMUzqQDUP4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MPzuDTf4N8pwU69KjMrvHD
          claim_id: c_QVVVFtdCk1AkgL5G7P1rkW
          source_id: s_CraFAbst3y8vgJ16qtqgwP
          stance: supports
          locator: CBDB:414648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414648）
          source: &a1
            id: s_CraFAbst3y8vgJ16qtqgwP
            source_type: api_record
            title: 中国历代人物传记资料库：王應瑞（CBDB 414648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414648&o=json
            external_identifier: CBDB:414648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uWQU51G45EJ3r1f6yH4ENR
        subject_person_id: p_zAcACR5GT8FyRMUzqQDUP4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應瑞，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 414648）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zd0uMVFTbnTWzkT-jKXrF1
          claim_id: c_uWQU51G45EJ3r1f6yH4ENR
          source_id: s_CraFAbst3y8vgJ16qtqgwP
          stance: supports
          locator: CBDB:414648
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

# 王應瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應瑞 | accepted |
| bio.summary | 王應瑞，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 414648） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應瑞（CBDB 414648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414648&o=json)
