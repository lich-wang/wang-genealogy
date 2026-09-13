---
schema: wang-person/v1
id: p_WJkBnkhSHU3AjBH5FhrN4Y
status: active
merged_into: null
display_name: 王正起
cbdb_id: 65697
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f9Z4ViKGzV2rgN15kgwxJu
        subject_person_id: p_WJkBnkhSHU3AjBH5FhrN4Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正起，清人物。曾任鎮總兵。（中国历代人物传记资料库 CBDB 65697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BFmDINaydrJS99otHdW-Ap
          claim_id: c_f9Z4ViKGzV2rgN15kgwxJu
          source_id: s_185UWu64DGi5njtuY2KJhz
          stance: supports
          locator: CBDB:65697
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_185UWu64DGi5njtuY2KJhz
            source_type: api_record
            title: 中国历代人物传记资料库：王正起（CBDB 65697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65697&o=json
            external_identifier: CBDB:65697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jWtUMdVHhrMRtdwryxRJM9
        subject_person_id: p_WJkBnkhSHU3AjBH5FhrN4Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yBEgXr9k8LyuaJ3rjeDuf4
          claim_id: c_jWtUMdVHhrMRtdwryxRJM9
          source_id: s_185UWu64DGi5njtuY2KJhz
          stance: supports
          locator: CBDB:65697
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王正起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正起，清人物。曾任鎮總兵。（中国历代人物传记资料库 CBDB 65697） | accepted |
| name.primary | 王正起 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正起（CBDB 65697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65697&o=json)
