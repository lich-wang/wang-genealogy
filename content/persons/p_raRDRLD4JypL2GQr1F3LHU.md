---
schema: wang-person/v1
id: p_raRDRLD4JypL2GQr1F3LHU
status: active
merged_into: null
display_name: 王秉彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BduwviTiqh8xhfYzgwJwyN
        subject_person_id: p_raRDRLD4JypL2GQr1F3LHU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PUdg5rwfPFNApYWD8NNgqa
          claim_id: c_BduwviTiqh8xhfYzgwJwyN
          source_id: s_3n2epmMbSnL4jUWLkHLk5v
          stance: supports
          locator: CBDB:639645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639645）
          source: &a1
            id: s_3n2epmMbSnL4jUWLkHLk5v
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 639645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639645&o=json
            external_identifier: CBDB:639645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2P3VsnisTvWUqy453yAGwg
        subject_person_id: p_raRDRLD4JypL2GQr1F3LHU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SYsAw05o2a4yOWY6mgcxm0
          claim_id: c_2P3VsnisTvWUqy453yAGwg
          source_id: s_3n2epmMbSnL4jUWLkHLk5v
          stance: supports
          locator: CBDB:639645
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

# 王秉彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉彝 | accepted |
| bio.summary | 王秉彝，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 639645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639645&o=json)
