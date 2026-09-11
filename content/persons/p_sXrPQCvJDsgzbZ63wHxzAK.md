---
schema: wang-person/v1
id: p_sXrPQCvJDsgzbZ63wHxzAK
status: active
merged_into: null
display_name: 王韞章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mj26m1TPYSovzXSJG21uni
        subject_person_id: p_sXrPQCvJDsgzbZ63wHxzAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A76PD9nPWrxq87MCEcijdA
          claim_id: c_Mj26m1TPYSovzXSJG21uni
          source_id: s_WH6e2C9Fybw7J2Qd9uQmww
          stance: supports
          locator: CBDB:640856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640856）
          source: &a1
            id: s_WH6e2C9Fybw7J2Qd9uQmww
            source_type: api_record
            title: 中国历代人物传记资料库：王韞章（CBDB 640856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640856&o=json
            external_identifier: CBDB:640856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rCLLoKpwovGGH3TvhdbfSp
        subject_person_id: p_sXrPQCvJDsgzbZ63wHxzAK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞章，清人物。籍贯會稽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640856）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VT7eq8L3nDpQFZ5jtHXAQ_
          claim_id: c_rCLLoKpwovGGH3TvhdbfSp
          source_id: s_WH6e2C9Fybw7J2Qd9uQmww
          stance: supports
          locator: CBDB:640856
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

# 王韞章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韞章 | accepted |
| bio.summary | 王韞章，清人物。籍贯會稽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韞章（CBDB 640856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640856&o=json)
