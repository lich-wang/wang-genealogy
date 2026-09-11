---
schema: wang-person/v1
id: p_nHXKdxAGBGyzvmK2TG3RbQ
status: active
merged_into: null
display_name: 王森長
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PcxApG3NsR2tDEuCYNXQWZ
        subject_person_id: p_nHXKdxAGBGyzvmK2TG3RbQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UJiSRFiZyr5P8Y1HqZeCpf
          claim_id: c_PcxApG3NsR2tDEuCYNXQWZ
          source_id: s_hvep5hzG4aa4bjKL4hfAJF
          stance: supports
          locator: CBDB:343041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343041）
          source: &a1
            id: s_hvep5hzG4aa4bjKL4hfAJF
            source_type: api_record
            title: 中国历代人物传记资料库：王森長（CBDB 343041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343041&o=json
            external_identifier: CBDB:343041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t7UtjQURSfKJyQUh2BDtzu
        subject_person_id: p_nHXKdxAGBGyzvmK2TG3RbQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森長，清人物。明清進士進士，籍贯福山，入仕進士。（中国历代人物传记资料库 CBDB 343041）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QWCDB6Xv4suc9wqeMcUPvd
          claim_id: c_t7UtjQURSfKJyQUh2BDtzu
          source_id: s_hvep5hzG4aa4bjKL4hfAJF
          stance: supports
          locator: CBDB:343041
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

# 王森長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森長 | accepted |
| bio.summary | 王森長，清人物。明清進士進士，籍贯福山，入仕進士。（中国历代人物传记资料库 CBDB 343041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森長（CBDB 343041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343041&o=json)
