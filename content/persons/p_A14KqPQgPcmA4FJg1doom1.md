---
schema: wang-person/v1
id: p_A14KqPQgPcmA4FJg1doom1
status: active
merged_into: null
display_name: 王夢有
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c8UxTg4K52reGrb4UedCm3
        subject_person_id: p_A14KqPQgPcmA4FJg1doom1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_51exsSUstuRTBPMHZsyUSE
          claim_id: c_c8UxTg4K52reGrb4UedCm3
          source_id: s_QUaLDHVK8nvd6tPSbk3PQb
          stance: supports
          locator: CBDB:545660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545660）
          source: &a1
            id: s_QUaLDHVK8nvd6tPSbk3PQb
            source_type: api_record
            title: 中国历代人物传记资料库：王夢有（CBDB 545660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545660&o=json
            external_identifier: CBDB:545660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QrhT3Agg5MR5KxeNZ9LT13
        subject_person_id: p_A14KqPQgPcmA4FJg1doom1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢有，宋人物。籍贯連江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 545660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zTG6IB5tPVVmcN94W-G3Ri
          claim_id: c_QrhT3Agg5MR5KxeNZ9LT13
          source_id: s_QUaLDHVK8nvd6tPSbk3PQb
          stance: supports
          locator: CBDB:545660
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

# 王夢有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢有 | accepted |
| bio.summary | 王夢有，宋人物。籍贯連江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 545660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢有（CBDB 545660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545660&o=json)
