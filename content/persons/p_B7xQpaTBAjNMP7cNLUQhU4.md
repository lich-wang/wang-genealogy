---
schema: wang-person/v1
id: p_B7xQpaTBAjNMP7cNLUQhU4
status: active
merged_into: null
display_name: 王憲燾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qaan9DYB38Eqe6nHMDznhj
        subject_person_id: p_B7xQpaTBAjNMP7cNLUQhU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQ6JZkFeGGCpc35atN6M2V
          claim_id: c_qaan9DYB38Eqe6nHMDznhj
          source_id: s_f6hGEbqFFRrfCUAuTouF9R
          stance: supports
          locator: CBDB:637972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637972）
          source: &a1
            id: s_f6hGEbqFFRrfCUAuTouF9R
            source_type: api_record
            title: 中国历代人物传记资料库：王憲燾（CBDB 637972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637972&o=json
            external_identifier: CBDB:637972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZCAhVY1kMM6uaHJknz7GXe
        subject_person_id: p_B7xQpaTBAjNMP7cNLUQhU4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲燾，清人物。籍贯諸城，入仕優貢生，曾任內閣中書。（中国历代人物传记资料库 CBDB 637972）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5P10JTBsVsHtzELjsfzxzU
          claim_id: c_ZCAhVY1kMM6uaHJknz7GXe
          source_id: s_f6hGEbqFFRrfCUAuTouF9R
          stance: supports
          locator: CBDB:637972
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

# 王憲燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲燾 | accepted |
| bio.summary | 王憲燾，清人物。籍贯諸城，入仕優貢生，曾任內閣中書。（中国历代人物传记资料库 CBDB 637972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲燾（CBDB 637972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637972&o=json)
