---
schema: wang-person/v1
id: p_2jdktdsRNXVjVNwJ9S8ZeA
status: active
merged_into: null
display_name: 王應兆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SrHcfwbri6UN6BBHvAfjSU
        subject_person_id: p_2jdktdsRNXVjVNwJ9S8ZeA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4XWxaTV4wWWdzeoGaCoBe
          claim_id: c_SrHcfwbri6UN6BBHvAfjSU
          source_id: s_ny8WAJ6b1qe3oWRgQcq89N
          stance: supports
          locator: CBDB:221976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221976）
          source: &a1
            id: s_ny8WAJ6b1qe3oWRgQcq89N
            source_type: api_record
            title: 中国历代人物传记资料库：王應兆（CBDB 221976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221976&o=json
            external_identifier: CBDB:221976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n2w5ZLFVBbfMSTeGk41UD4
        subject_person_id: p_2jdktdsRNXVjVNwJ9S8ZeA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應兆，明人物。萬曆八年進士，籍贯文安。（中国历代人物传记资料库 CBDB 221976）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x1joqIzQa2AlbpCvEj2WYp
          claim_id: c_n2w5ZLFVBbfMSTeGk41UD4
          source_id: s_ny8WAJ6b1qe3oWRgQcq89N
          stance: supports
          locator: CBDB:221976
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

# 王應兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應兆 | accepted |
| bio.summary | 王應兆，明人物。萬曆八年進士，籍贯文安。（中国历代人物传记资料库 CBDB 221976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應兆（CBDB 221976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221976&o=json)
