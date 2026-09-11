---
schema: wang-person/v1
id: p_KpwjiDq1nakXSPKYsDcNfY
status: active
merged_into: null
display_name: 王承基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzodKtuoBWN78548QyYZJA
        subject_person_id: p_KpwjiDq1nakXSPKYsDcNfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z15Q5agZeeFHdP5fv4rTBC
          claim_id: c_fzodKtuoBWN78548QyYZJA
          source_id: s_yepfwrmPHDqQiNuEjKL2jF
          stance: supports
          locator: CBDB:342049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342049）
          source: &a1
            id: s_yepfwrmPHDqQiNuEjKL2jF
            source_type: api_record
            title: 中国历代人物传记资料库：王承基（CBDB 342049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342049&o=json
            external_identifier: CBDB:342049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KBgYwNMdTtE3NJ8DeAmNos
        subject_person_id: p_KpwjiDq1nakXSPKYsDcNfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承基，清人物。明清進士進士，籍贯漢軍正黃旗，入仕繙譯進士。（中国历代人物传记资料库 CBDB 342049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B035J1My41adVNnz4hUsbT
          claim_id: c_KBgYwNMdTtE3NJ8DeAmNos
          source_id: s_yepfwrmPHDqQiNuEjKL2jF
          stance: supports
          locator: CBDB:342049
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

# 王承基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承基 | accepted |
| bio.summary | 王承基，清人物。明清進士進士，籍贯漢軍正黃旗，入仕繙譯進士。（中国历代人物传记资料库 CBDB 342049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承基（CBDB 342049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342049&o=json)
