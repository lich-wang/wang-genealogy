---
schema: wang-person/v1
id: p_C1ni7FDPinJKxjXAZVkM9Q
status: active
merged_into: null
display_name: 王顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HghFmP8dfS97SzpGbj4Yd
        subject_person_id: p_C1ni7FDPinJKxjXAZVkM9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FStfqJNbjJPho3Mzxq1rgx
          claim_id: c_4HghFmP8dfS97SzpGbj4Yd
          source_id: s_neXGvNq6jYTAseNwbLrbC7
          stance: supports
          locator: CBDB:509996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509996）
          source: &a1
            id: s_neXGvNq6jYTAseNwbLrbC7
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 509996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509996&o=json
            external_identifier: CBDB:509996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JXDF7eWMr7yLo7f5RdKDKe
        subject_person_id: p_C1ni7FDPinJKxjXAZVkM9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯，清人物。入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 509996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cp4-ythLF8JCJEhdWq9WxA
          claim_id: c_JXDF7eWMr7yLo7f5RdKDKe
          source_id: s_neXGvNq6jYTAseNwbLrbC7
          stance: supports
          locator: CBDB:509996
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

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | 王顯，清人物。入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 509996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 509996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509996&o=json)
