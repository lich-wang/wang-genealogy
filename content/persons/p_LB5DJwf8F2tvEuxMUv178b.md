---
schema: wang-person/v1
id: p_LB5DJwf8F2tvEuxMUv178b
status: active
merged_into: null
display_name: 王定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_djUb4Ph6R3hhTN693SkqYX
        subject_person_id: p_LB5DJwf8F2tvEuxMUv178b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n2bqY7Aj3zgpJEWyJU9LeD
          claim_id: c_djUb4Ph6R3hhTN693SkqYX
          source_id: s_XJNrmPAefFtSvUiSTPEQ9s
          stance: supports
          locator: CBDB:278175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278175）
          source: &a1
            id: s_XJNrmPAefFtSvUiSTPEQ9s
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 278175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278175&o=json
            external_identifier: CBDB:278175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5iGKY5HCFtFsQetrnRDzXT
        subject_person_id: p_LB5DJwf8F2tvEuxMUv178b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定，明人物。景泰五年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 278175）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I1szHPeW1LkC9mrxpl7hKW
          claim_id: c_5iGKY5HCFtFsQetrnRDzXT
          source_id: s_XJNrmPAefFtSvUiSTPEQ9s
          stance: supports
          locator: CBDB:278175
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

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | 王定，明人物。景泰五年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 278175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 278175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278175&o=json)
