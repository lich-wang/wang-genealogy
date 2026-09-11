---
schema: wang-person/v1
id: p_YYQnCBp7FS3vBjewmN77Bq
status: active
merged_into: null
display_name: 王士興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fD5QWw8DSDJdLspHJ99XWg
        subject_person_id: p_YYQnCBp7FS3vBjewmN77Bq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UEVUkYbe2ZNYAMHLvRGnxu
          claim_id: c_fD5QWw8DSDJdLspHJ99XWg
          source_id: s_PPgtEJ6s7yuePJt1H7BuEs
          stance: supports
          locator: CBDB:636817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636817）
          source: &a1
            id: s_PPgtEJ6s7yuePJt1H7BuEs
            source_type: api_record
            title: 中国历代人物传记资料库：王士興（CBDB 636817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636817&o=json
            external_identifier: CBDB:636817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AGYuRMvrAMKiCGEYGhkK6n
        subject_person_id: p_YYQnCBp7FS3vBjewmN77Bq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士興，清人物。籍贯金華，曾任訓導。（中国历代人物传记资料库 CBDB 636817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lj2yuOu8prELcDyKA8ppPe
          claim_id: c_AGYuRMvrAMKiCGEYGhkK6n
          source_id: s_PPgtEJ6s7yuePJt1H7BuEs
          stance: supports
          locator: CBDB:636817
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

# 王士興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士興 | accepted |
| bio.summary | 王士興，清人物。籍贯金華，曾任訓導。（中国历代人物传记资料库 CBDB 636817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士興（CBDB 636817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636817&o=json)
