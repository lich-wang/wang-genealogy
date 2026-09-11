---
schema: wang-person/v1
id: p_ckci7PQJVhb9ezwjiBq18G
status: active
merged_into: null
display_name: 王奭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rpjXcxjDxZDsFx37CRzPmK
        subject_person_id: p_ckci7PQJVhb9ezwjiBq18G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oRLdeKvVx4Fm6A4XFGXSuV
          claim_id: c_rpjXcxjDxZDsFx37CRzPmK
          source_id: s_DJKugfLQqLdYEeopSewD2T
          stance: supports
          locator: CBDB:342922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342922）
          source: &a1
            id: s_DJKugfLQqLdYEeopSewD2T
            source_type: api_record
            title: 中国历代人物传记资料库：王奭（CBDB 342922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342922&o=json
            external_identifier: CBDB:342922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qKQgmSh7UV2MMs9qbF91Mw
        subject_person_id: p_ckci7PQJVhb9ezwjiBq18G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奭，清人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 342922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MYH1znEH0od3AjhhVdEmXE
          claim_id: c_qKQgmSh7UV2MMs9qbF91Mw
          source_id: s_DJKugfLQqLdYEeopSewD2T
          stance: supports
          locator: CBDB:342922
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

# 王奭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奭 | accepted |
| bio.summary | 王奭，清人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 342922） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奭（CBDB 342922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342922&o=json)
