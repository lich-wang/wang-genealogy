---
schema: wang-person/v1
id: p_WgkE2g72HAo5sgWjoiKKJR
status: active
merged_into: null
display_name: 王洽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VPEjQApyrJo4aBPb262e1H
        subject_person_id: p_WgkE2g72HAo5sgWjoiKKJR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nXbv2MVW52cCQDJyjDnKLJ
          claim_id: c_VPEjQApyrJo4aBPb262e1H
          source_id: s_awx3vZVm19GnPsMq5HYh5w
          stance: supports
          locator: CBDB:64613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（64613）
          source: &a1
            id: s_awx3vZVm19GnPsMq5HYh5w
            source_type: api_record
            title: 中国历代人物传记资料库：王洽（CBDB 64613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64613&o=json
            external_identifier: CBDB:64613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ru14Y7vsTjPzkXaqhiiC4i
        subject_person_id: p_WgkE2g72HAo5sgWjoiKKJR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1629年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5urtP2k1RdPHEkCMtfrGJ
          claim_id: c_ru14Y7vsTjPzkXaqhiiC4i
          source_id: s_awx3vZVm19GnPsMq5HYh5w
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
        id: c_d1ZDyMAE3QdTM9QxqXcB8D
        subject_person_id: p_WgkE2g72HAo5sgWjoiKKJR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洽（卒于1629年），明人物。明清進士進士，籍贯臨邑，入仕進士，曾任兵部尚書、工部右侍郎、工部左侍郎。（中国历代人物传记资料库 CBDB 64613）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ZUBI0zNJXn5Zw0H5NjbmJ
          claim_id: c_d1ZDyMAE3QdTM9QxqXcB8D
          source_id: s_awx3vZVm19GnPsMq5HYh5w
          stance: supports
          locator: CBDB:64613
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

# 王洽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洽 | accepted |
| death.date | 1629年 | accepted |
| bio.summary | 王洽（卒于1629年），明人物。明清進士進士，籍贯臨邑，入仕進士，曾任兵部尚書、工部右侍郎、工部左侍郎。（中国历代人物传记资料库 CBDB 64613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洽（CBDB 64613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64613&o=json)
