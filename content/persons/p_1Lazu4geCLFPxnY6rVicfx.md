---
schema: wang-person/v1
id: p_1Lazu4geCLFPxnY6rVicfx
status: active
merged_into: null
display_name: 王獻民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_45hF6LLGpJNqf39jMdRqFH
        subject_person_id: p_1Lazu4geCLFPxnY6rVicfx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1GBMPfHYWDEEUPbGxNp4rt
          claim_id: c_45hF6LLGpJNqf39jMdRqFH
          source_id: s_Tq7vbkQC7Kzp6EUQ6NNxD3
          stance: supports
          locator: CBDB:547345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547345）
          source: &a1
            id: s_Tq7vbkQC7Kzp6EUQ6NNxD3
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 547345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547345&o=json
            external_identifier: CBDB:547345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dHpBmBZ8kJ8WKZEj9e9zL9
        subject_person_id: p_1Lazu4geCLFPxnY6rVicfx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻民，宋人物。籍贯歸安，入仕進士。（中国历代人物传记资料库 CBDB 547345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TqBBw3LDNPt5V3jIFQyGsq
          claim_id: c_dHpBmBZ8kJ8WKZEj9e9zL9
          source_id: s_Tq7vbkQC7Kzp6EUQ6NNxD3
          stance: supports
          locator: CBDB:547345
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

# 王獻民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻民 | accepted |
| bio.summary | 王獻民，宋人物。籍贯歸安，入仕進士。（中国历代人物传记资料库 CBDB 547345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻民（CBDB 547345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547345&o=json)
