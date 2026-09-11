---
schema: wang-person/v1
id: p_k2ZvAkJZUZfQyV5fjL7P2c
status: active
merged_into: null
display_name: 王京祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R6WdLPkA7p32jZ1efe52dr
        subject_person_id: p_k2ZvAkJZUZfQyV5fjL7P2c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GL5kEcxHDGA9F534XiFp57
          claim_id: c_R6WdLPkA7p32jZ1efe52dr
          source_id: s_H8YHG6i4vKACvs3f4Fov6L
          stance: supports
          locator: CBDB:578774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578774）
          source: &a1
            id: s_H8YHG6i4vKACvs3f4Fov6L
            source_type: api_record
            title: 中国历代人物传记资料库：王京祥（CBDB 578774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578774&o=json
            external_identifier: CBDB:578774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76ybKtvtMMvctd1hrg3vsA
        subject_person_id: p_k2ZvAkJZUZfQyV5fjL7P2c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京祥，明人物。籍贯祁門，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 578774）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n2i9A6QgM1HD-33JNAeAJE
          claim_id: c_76ybKtvtMMvctd1hrg3vsA
          source_id: s_H8YHG6i4vKACvs3f4Fov6L
          stance: supports
          locator: CBDB:578774
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

# 王京祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京祥 | accepted |
| bio.summary | 王京祥，明人物。籍贯祁門，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 578774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京祥（CBDB 578774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578774&o=json)
