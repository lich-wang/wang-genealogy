---
schema: wang-person/v1
id: p_j4LAvVKa8XACJD9TCBh6tt
status: active
merged_into: null
display_name: 王益謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kJV4abk7S85EuiB73QyhBS
        subject_person_id: p_j4LAvVKa8XACJD9TCBh6tt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VGvfyMkuRo5cvHngSME7Fc
          claim_id: c_kJV4abk7S85EuiB73QyhBS
          source_id: s_EdfNeA4oUXs7KpP6pMbPGv
          stance: supports
          locator: CBDB:639530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639530）
          source: &a1
            id: s_EdfNeA4oUXs7KpP6pMbPGv
            source_type: api_record
            title: 中国历代人物传记资料库：王益謨（CBDB 639530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639530&o=json
            external_identifier: CBDB:639530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBf1jEMx5P5UABtpRfzKkF
        subject_person_id: p_j4LAvVKa8XACJD9TCBh6tt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益謨，清人物。籍贯盱眙，入仕武童，曾任都司、守備。（中国历代人物传记资料库 CBDB 639530）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_998Mm5iCcGjeiGJeGVY6h4
          claim_id: c_NBf1jEMx5P5UABtpRfzKkF
          source_id: s_EdfNeA4oUXs7KpP6pMbPGv
          stance: supports
          locator: CBDB:639530
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

# 王益謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益謨 | accepted |
| bio.summary | 王益謨，清人物。籍贯盱眙，入仕武童，曾任都司、守備。（中国历代人物传记资料库 CBDB 639530） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益謨（CBDB 639530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639530&o=json)
