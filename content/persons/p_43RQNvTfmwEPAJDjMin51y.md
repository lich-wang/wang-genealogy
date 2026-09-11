---
schema: wang-person/v1
id: p_43RQNvTfmwEPAJDjMin51y
status: active
merged_into: null
display_name: 王鑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CVDnQnLhBbsUrQbne6MM3b
        subject_person_id: p_43RQNvTfmwEPAJDjMin51y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xKuz9qXFCW4vdLUU3ZbsFC
          claim_id: c_CVDnQnLhBbsUrQbne6MM3b
          source_id: s_XyohnrqT39TGKNBmZPZQ4L
          stance: supports
          locator: CBDB:685119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685119）
          source: &a1
            id: s_XyohnrqT39TGKNBmZPZQ4L
            source_type: api_record
            title: 中国历代人物传记资料库：王鑄（CBDB 685119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685119&o=json
            external_identifier: CBDB:685119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_voE8Qe3JdUfdPsQueQ74dw
        subject_person_id: p_43RQNvTfmwEPAJDjMin51y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄，宋人物。籍贯臨安府，入仕進士。（中国历代人物传记资料库 CBDB 685119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AMsUeayYVRSXEcd3x3e3t6
          claim_id: c_voE8Qe3JdUfdPsQueQ74dw
          source_id: s_XyohnrqT39TGKNBmZPZQ4L
          stance: supports
          locator: CBDB:685119
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

# 王鑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑄 | accepted |
| bio.summary | 王鑄，宋人物。籍贯臨安府，入仕進士。（中国历代人物传记资料库 CBDB 685119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑄（CBDB 685119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685119&o=json)
