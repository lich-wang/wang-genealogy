---
schema: wang-person/v1
id: p_uCgNBQtizBhCTbtVkbfcwR
status: active
merged_into: null
display_name: 王齊海
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tAJ1pLcviDsA2EvQRDuUVs
        subject_person_id: p_uCgNBQtizBhCTbtVkbfcwR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w4isypC6Xssp431y5iYRz1
          claim_id: c_tAJ1pLcviDsA2EvQRDuUVs
          source_id: s_Sp2YYpqCPbVYscs8Wh4jBd
          stance: supports
          locator: CBDB:341540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341540）
          source: &a1
            id: s_Sp2YYpqCPbVYscs8Wh4jBd
            source_type: api_record
            title: 中国历代人物传记资料库：王齊海（CBDB 341540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341540&o=json
            external_identifier: CBDB:341540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QVzdFe1dQtiDQoCGQh6FoN
        subject_person_id: p_uCgNBQtizBhCTbtVkbfcwR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊海，清人物。明清進士進士，籍贯羅田，入仕進士。（中国历代人物传记资料库 CBDB 341540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kUaKHPTXA9seFSO4jolAhq
          claim_id: c_QVzdFe1dQtiDQoCGQh6FoN
          source_id: s_Sp2YYpqCPbVYscs8Wh4jBd
          stance: supports
          locator: CBDB:341540
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

# 王齊海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊海 | accepted |
| bio.summary | 王齊海，清人物。明清進士進士，籍贯羅田，入仕進士。（中国历代人物传记资料库 CBDB 341540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齊海（CBDB 341540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341540&o=json)
