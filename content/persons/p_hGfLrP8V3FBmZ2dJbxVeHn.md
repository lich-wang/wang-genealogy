---
schema: wang-person/v1
id: p_hGfLrP8V3FBmZ2dJbxVeHn
status: active
merged_into: null
display_name: 王時可
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QeTEvrg81Bj54EfwYK2uB4
        subject_person_id: p_hGfLrP8V3FBmZ2dJbxVeHn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKVimsTRVnsPFx65H18r7M
          claim_id: c_QeTEvrg81Bj54EfwYK2uB4
          source_id: s_NQCsFHxE2EL7o3EBeYbRNG
          stance: supports
          locator: CBDB:101312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101312）
          source: &a1
            id: s_NQCsFHxE2EL7o3EBeYbRNG
            source_type: api_record
            title: 中国历代人物传记资料库：王時可（CBDB 101312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101312&o=json
            external_identifier: CBDB:101312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9HeakSB2PNyJ1JJhBtMRq
        subject_person_id: p_hGfLrP8V3FBmZ2dJbxVeHn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時可，元人物。籍贯河間路，曾任縣尹、南臺架閣庫管勾。（中国历代人物传记资料库 CBDB 101312）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p7ZPYqOsFX_cok4Q_CWzNb
          claim_id: c_E9HeakSB2PNyJ1JJhBtMRq
          source_id: s_NQCsFHxE2EL7o3EBeYbRNG
          stance: supports
          locator: CBDB:101312
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

# 王時可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時可 | accepted |
| bio.summary | 王時可，元人物。籍贯河間路，曾任縣尹、南臺架閣庫管勾。（中国历代人物传记资料库 CBDB 101312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時可（CBDB 101312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101312&o=json)
