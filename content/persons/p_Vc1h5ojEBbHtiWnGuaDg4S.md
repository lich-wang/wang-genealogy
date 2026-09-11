---
schema: wang-person/v1
id: p_Vc1h5ojEBbHtiWnGuaDg4S
status: active
merged_into: null
display_name: 王騭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FbG32xVrKdAWNLjFutDUJ4
        subject_person_id: p_Vc1h5ojEBbHtiWnGuaDg4S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hwJMMo4J1ag2A72Seouc1Y
          claim_id: c_FbG32xVrKdAWNLjFutDUJ4
          source_id: s_cb6eHDeDLeDGTiaBMCWdbR
          stance: supports
          locator: CBDB:1782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1782）
          source: &a1
            id: s_cb6eHDeDLeDGTiaBMCWdbR
            source_type: api_record
            title: 中国历代人物传记资料库：王騭（CBDB 1782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1782&o=json
            external_identifier: CBDB:1782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LMZk9YadwsueWN71eALksm
        subject_person_id: p_Vc1h5ojEBbHtiWnGuaDg4S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騭，宋人物。曾任轉運使。（中国历代人物传记资料库 CBDB 1782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z2kORST7WibM4sA0hs0fxG
          claim_id: c_LMZk9YadwsueWN71eALksm
          source_id: s_cb6eHDeDLeDGTiaBMCWdbR
          stance: supports
          locator: CBDB:1782
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

# 王騭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騭 | accepted |
| bio.summary | 王騭，宋人物。曾任轉運使。（中国历代人物传记资料库 CBDB 1782） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騭（CBDB 1782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1782&o=json)
