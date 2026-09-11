---
schema: wang-person/v1
id: p_XoHfYYdbggdFF5AfAPZeC6
status: active
merged_into: null
display_name: 王序
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kRt19j77e3D89r4bDkKWnL
        subject_person_id: p_XoHfYYdbggdFF5AfAPZeC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ppvg5tg1Vv96M25Y9NmHb
          claim_id: c_kRt19j77e3D89r4bDkKWnL
          source_id: s_PbB3nMKNHA8JXRzCoP9SSi
          stance: supports
          locator: CBDB:473976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473976）
          source: &a1
            id: s_PbB3nMKNHA8JXRzCoP9SSi
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 473976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473976&o=json
            external_identifier: CBDB:473976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDFrqoNKS2nVHhHM986iA1
        subject_person_id: p_XoHfYYdbggdFF5AfAPZeC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 473976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0DrhBwvod0zqrqJ1YvmNd5
          claim_id: c_CDFrqoNKS2nVHhHM986iA1
          source_id: s_PbB3nMKNHA8JXRzCoP9SSi
          stance: supports
          locator: CBDB:473976
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

# 王序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序 | accepted |
| bio.summary | 王序，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 473976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王序（CBDB 473976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473976&o=json)
