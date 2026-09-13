---
schema: wang-person/v1
id: p_7rXE8F8SviWpKYUoECL3JY
status: active
merged_into: null
display_name: 王君寵
cbdb_id: 325026
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZhdcjW985ZcY8TKuBMmJ6
        subject_person_id: p_7rXE8F8SviWpKYUoECL3JY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君寵，明人物。嘉靖三十八年進士，籍贯淄川，曾任訓導。（中国历代人物传记资料库 CBDB 325026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-Tbm1AXCyX-GmHbrqnn3HQ
          claim_id: c_EZhdcjW985ZcY8TKuBMmJ6
          source_id: s_EfcS35mLamXMAjf5Zqne1L
          stance: supports
          locator: CBDB:325026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EfcS35mLamXMAjf5Zqne1L
            source_type: api_record
            title: 中国历代人物传记资料库：王君寵（CBDB 325026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325026&o=json
            external_identifier: CBDB:325026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dv97ntim4v9PNEYhFDXqHG
        subject_person_id: p_7rXE8F8SviWpKYUoECL3JY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君寵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ssH8S8wEdqfQqMz4YXrBeA
          claim_id: c_dv97ntim4v9PNEYhFDXqHG
          source_id: s_EfcS35mLamXMAjf5Zqne1L
          stance: supports
          locator: CBDB:325026
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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

# 王君寵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君寵，明人物。嘉靖三十八年進士，籍贯淄川，曾任訓導。（中国历代人物传记资料库 CBDB 325026） | accepted |
| name.primary | 王君寵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君寵（CBDB 325026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325026&o=json)
