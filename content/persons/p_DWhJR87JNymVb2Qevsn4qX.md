---
schema: wang-person/v1
id: p_DWhJR87JNymVb2Qevsn4qX
status: active
merged_into: null
display_name: 王鍾瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ws9gZA9DHfPKFJMNNA1iZ2
        subject_person_id: p_DWhJR87JNymVb2Qevsn4qX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25KaqpZ7EgXP5PcxKU4WXF
          claim_id: c_ws9gZA9DHfPKFJMNNA1iZ2
          source_id: s_Mt9E6Jo5FB7B3paKPd8CRc
          stance: supports
          locator: CBDB:640680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640680）
          source: &a1
            id: s_Mt9E6Jo5FB7B3paKPd8CRc
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾瑞（CBDB 640680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640680&o=json
            external_identifier: CBDB:640680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E1BJRakcSN7DU5iZNGoJqU
        subject_person_id: p_DWhJR87JNymVb2Qevsn4qX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾瑞，清人物。籍贯諸城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jH1-IK9pFbAUJyQfRkfPOX
          claim_id: c_E1BJRakcSN7DU5iZNGoJqU
          source_id: s_Mt9E6Jo5FB7B3paKPd8CRc
          stance: supports
          locator: CBDB:640680
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

# 王鍾瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾瑞 | accepted |
| bio.summary | 王鍾瑞，清人物。籍贯諸城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾瑞（CBDB 640680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640680&o=json)
