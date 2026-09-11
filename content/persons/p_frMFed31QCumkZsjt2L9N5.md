---
schema: wang-person/v1
id: p_frMFed31QCumkZsjt2L9N5
status: active
merged_into: null
display_name: 王維岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbDifPcp59DGRw7PP5dqSt
        subject_person_id: p_frMFed31QCumkZsjt2L9N5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維岳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KiWTskGNxFwYgmhgpfC3wb
          claim_id: c_hbDifPcp59DGRw7PP5dqSt
          source_id: s_A4XqFZT35CXuk1DL6PmfGs
          stance: supports
          locator: CBDB:537059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537059）
          source: &a1
            id: s_A4XqFZT35CXuk1DL6PmfGs
            source_type: api_record
            title: 中国历代人物传记资料库：王維岳（CBDB 537059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537059&o=json
            external_identifier: CBDB:537059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vK3Ne9MVkaJgdevjobiE1N
        subject_person_id: p_frMFed31QCumkZsjt2L9N5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維岳，宋人物。籍贯湘鄉，入仕進士。（中国历代人物传记资料库 CBDB 537059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LDnS4ozr3Gyb1BGBawTrFw
          claim_id: c_vK3Ne9MVkaJgdevjobiE1N
          source_id: s_A4XqFZT35CXuk1DL6PmfGs
          stance: supports
          locator: CBDB:537059
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

# 王維岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維岳 | accepted |
| bio.summary | 王維岳，宋人物。籍贯湘鄉，入仕進士。（中国历代人物传记资料库 CBDB 537059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維岳（CBDB 537059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537059&o=json)
