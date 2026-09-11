---
schema: wang-person/v1
id: p_rdX5atPXBtda16Kr3tzjNZ
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DqrpqmCSqWwhK9qBm5vs9s
        subject_person_id: p_rdX5atPXBtda16Kr3tzjNZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XdV2144sDtmhHnncFapApp
          claim_id: c_DqrpqmCSqWwhK9qBm5vs9s
          source_id: s_xqh5HG3R2XWzUFYrjzer2o
          stance: supports
          locator: CBDB:343475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343475）
          source: &a1
            id: s_xqh5HG3R2XWzUFYrjzer2o
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 343475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343475&o=json
            external_identifier: CBDB:343475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qj5pVsAxwi6gf2FyCKGCDB
        subject_person_id: p_rdX5atPXBtda16Kr3tzjNZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。明清進士進士，籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 343475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xPRzg1m7Y86g8fbvc1x-0b
          claim_id: c_qj5pVsAxwi6gf2FyCKGCDB
          source_id: s_xqh5HG3R2XWzUFYrjzer2o
          stance: supports
          locator: CBDB:343475
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。明清進士進士，籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 343475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 343475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343475&o=json)
