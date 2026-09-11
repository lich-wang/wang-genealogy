---
schema: wang-person/v1
id: p_JNQ6oHtYYzQE49rMohL5df
status: active
merged_into: null
display_name: 王運開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Evt4nZfnZKCVnnqDsi6nzh
        subject_person_id: p_JNQ6oHtYYzQE49rMohL5df
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iX3hfFzm4iRiNe2SJBNQkN
          claim_id: c_Evt4nZfnZKCVnnqDsi6nzh
          source_id: s_tGjBVhhgCPw4mGj8MJW2Xt
          stance: supports
          locator: CBDB:342818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342818）
          source: &a1
            id: s_tGjBVhhgCPw4mGj8MJW2Xt
            source_type: api_record
            title: 中国历代人物传记资料库：王運開（CBDB 342818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342818&o=json
            external_identifier: CBDB:342818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xrhiM6qsLTmwQv4ojj65i7
        subject_person_id: p_JNQ6oHtYYzQE49rMohL5df
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運開，清人物。明清進士進士，籍贯長垣，入仕進士。（中国历代人物传记资料库 CBDB 342818）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zXGvvrbBJRLdy5y-TB-y_8
          claim_id: c_xrhiM6qsLTmwQv4ojj65i7
          source_id: s_tGjBVhhgCPw4mGj8MJW2Xt
          stance: supports
          locator: CBDB:342818
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

# 王運開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運開 | accepted |
| bio.summary | 王運開，清人物。明清進士進士，籍贯長垣，入仕進士。（中国历代人物传记资料库 CBDB 342818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運開（CBDB 342818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342818&o=json)
