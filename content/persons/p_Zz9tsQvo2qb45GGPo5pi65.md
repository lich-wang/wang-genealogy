---
schema: wang-person/v1
id: p_Zz9tsQvo2qb45GGPo5pi65
status: active
merged_into: null
display_name: 王文炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZ1W1CTNtcNJemZHQnU1wq
        subject_person_id: p_Zz9tsQvo2qb45GGPo5pi65
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JT3B1wrufxRFWmwNWyLBGF
          claim_id: c_AZ1W1CTNtcNJemZHQnU1wq
          source_id: s_E6fuAfa8GDUm1X8RzDPMUQ
          stance: supports
          locator: CBDB:458941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458941）
          source: &a1
            id: s_E6fuAfa8GDUm1X8RzDPMUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文炳（CBDB 458941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458941&o=json
            external_identifier: CBDB:458941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WMkc2Bd2N5k28VsHaJRT4G
        subject_person_id: p_Zz9tsQvo2qb45GGPo5pi65
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 458941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zG6gSfNQd4wL11Ay1Lw0BZ
          claim_id: c_WMkc2Bd2N5k28VsHaJRT4G
          source_id: s_E6fuAfa8GDUm1X8RzDPMUQ
          stance: supports
          locator: CBDB:458941
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

# 王文炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文炳 | accepted |
| bio.summary | 王文炳，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 458941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文炳（CBDB 458941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458941&o=json)
