---
schema: wang-person/v1
id: p_Q8qoQm34P8nPVst2CWYzYC
status: active
merged_into: null
display_name: 王汝礪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4hJyjjcU1Pb6eAtzTKkr9v
        subject_person_id: p_Q8qoQm34P8nPVst2CWYzYC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsAmtMuMF5H1drN3HSvFyC
          claim_id: c_4hJyjjcU1Pb6eAtzTKkr9v
          source_id: s_axJsjjX1d7RZQwKg4cEQwy
          stance: supports
          locator: CBDB:339385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（339385）
          source: &a1
            id: s_axJsjjX1d7RZQwKg4cEQwy
            source_type: api_record
            title: 中国历代人物传记资料库：王汝礪（CBDB 339385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339385&o=json
            external_identifier: CBDB:339385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Nns4xGCHEiYm9MB87Sgam
        subject_person_id: p_Q8qoQm34P8nPVst2CWYzYC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礪，宋人物。籍贯龍川，入仕進士。（中国历代人物传记资料库 CBDB 339385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SHa9tySRA-ktcce3pPFowH
          claim_id: c_2Nns4xGCHEiYm9MB87Sgam
          source_id: s_axJsjjX1d7RZQwKg4cEQwy
          stance: supports
          locator: CBDB:339385
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

# 王汝礪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝礪 | accepted |
| bio.summary | 王汝礪，宋人物。籍贯龍川，入仕進士。（中国历代人物传记资料库 CBDB 339385） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝礪（CBDB 339385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339385&o=json)
