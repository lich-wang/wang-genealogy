---
schema: wang-person/v1
id: p_WMMyKgYG468eYfuybPAE71
status: active
merged_into: null
display_name: 王春藻
cbdb_id: 343354
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_erpJsoxuk9GrwYi1Vaj9Pb
        subject_person_id: p_WMMyKgYG468eYfuybPAE71
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春藻，清人物。明清進士進士，籍贯麗江，入仕進士。（中国历代人物传记资料库 CBDB 343354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MYoDr-vEbcX-HFE0T08Biv
          claim_id: c_erpJsoxuk9GrwYi1Vaj9Pb
          source_id: s_K36srPCVyDErUCmQZcwL8v
          stance: supports
          locator: CBDB:343354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_K36srPCVyDErUCmQZcwL8v
            source_type: api_record
            title: 中国历代人物传记资料库：王春藻（CBDB 343354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343354&o=json
            external_identifier: CBDB:343354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:15.941Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZxaDy4xzMGmzBExAMkxpBS
        subject_person_id: p_WMMyKgYG468eYfuybPAE71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3jtiUuYsgdMQkJV7yWHJoN
          claim_id: c_ZxaDy4xzMGmzBExAMkxpBS
          source_id: s_K36srPCVyDErUCmQZcwL8v
          stance: supports
          locator: CBDB:343354
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4501-4600）｜历史性依据：CBDB 朝代 = 清
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

# 王春藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王春藻，清人物。明清進士進士，籍贯麗江，入仕進士。（中国历代人物传记资料库 CBDB 343354） | accepted |
| name.primary | 王春藻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春藻（CBDB 343354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343354&o=json)
