---
schema: wang-person/v1
id: p_V3icjXFD4Z36XyMz3tEaLj
status: active
merged_into: null
display_name: 王兌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WJxyRppPruBm3BG4hMMUuF
        subject_person_id: p_V3icjXFD4Z36XyMz3tEaLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pubB9oyZx1djkahgT4Spms
          claim_id: c_WJxyRppPruBm3BG4hMMUuF
          source_id: s_shEHfhJBMJrLFsiFYeh3u6
          stance: supports
          locator: CBDB:343719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343719）
          source: &a1
            id: s_shEHfhJBMJrLFsiFYeh3u6
            source_type: api_record
            title: 中国历代人物传记资料库：王兌（CBDB 343719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343719&o=json
            external_identifier: CBDB:343719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1pQw8TXEyu9nAzppKQi7oJ
        subject_person_id: p_V3icjXFD4Z36XyMz3tEaLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兌，清人物。明清進士進士，籍贯陝西省，入仕進士。（中国历代人物传记资料库 CBDB 343719）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Q-lmBnFBxNI9XyMVLUN0d
          claim_id: c_1pQw8TXEyu9nAzppKQi7oJ
          source_id: s_shEHfhJBMJrLFsiFYeh3u6
          stance: supports
          locator: CBDB:343719
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

# 王兌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兌 | accepted |
| bio.summary | 王兌，清人物。明清進士進士，籍贯陝西省，入仕進士。（中国历代人物传记资料库 CBDB 343719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兌（CBDB 343719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343719&o=json)
