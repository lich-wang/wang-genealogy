---
schema: wang-person/v1
id: p_ZsFfSk4TfZmpG8b8ZBc2BY
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FAYnAkJKGKDazsAfKtRvYM
        subject_person_id: p_ZsFfSk4TfZmpG8b8ZBc2BY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RHsNhsZEmTfTS4sttaG8pr
          claim_id: c_FAYnAkJKGKDazsAfKtRvYM
          source_id: s_x2hBdcqu83rDAmyy4ebNcT
          stance: supports
          locator: CBDB:45820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45820）
          source: &a1
            id: s_x2hBdcqu83rDAmyy4ebNcT
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 45820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45820&o=json
            external_identifier: CBDB:45820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r26dgmYF2ES7qBWBbE3sdY
        subject_person_id: p_ZsFfSk4TfZmpG8b8ZBc2BY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1027年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wgAGUStXLUjMDDvE5dASMv
          claim_id: c_r26dgmYF2ES7qBWBbE3sdY
          source_id: s_x2hBdcqu83rDAmyy4ebNcT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R4FiwoEVuNMMp1rRfmM64K
        subject_person_id: p_ZsFfSk4TfZmpG8b8ZBc2BY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬（卒于1027年），宋人物。籍贯開德府，身份为道士。（中国历代人物传记资料库 CBDB 45820）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_td3JYg_mJgJ4wdn7PF5KAA
          claim_id: c_R4FiwoEVuNMMp1rRfmM64K
          source_id: s_x2hBdcqu83rDAmyy4ebNcT
          stance: supports
          locator: CBDB:45820
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| death.date | 1027年 | accepted |
| bio.summary | 王鎬（卒于1027年），宋人物。籍贯開德府，身份为道士。（中国历代人物传记资料库 CBDB 45820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 45820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45820&o=json)
