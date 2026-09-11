---
schema: wang-person/v1
id: p_WhCBSSK9o6DL2UPqDz6DAx
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hCGBCF6HX6yCLFf2H5zGvK
        subject_person_id: p_WhCBSSK9o6DL2UPqDz6DAx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2KRb6erhyDnmxzd63TYx75
          claim_id: c_hCGBCF6HX6yCLFf2H5zGvK
          source_id: s_FVnitHJH9gaqK1QLoxAL3V
          stance: supports
          locator: CBDB:499825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499825）
          source: &a1
            id: s_FVnitHJH9gaqK1QLoxAL3V
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 499825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499825&o=json
            external_identifier: CBDB:499825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vKA9sr5uM1ntJ7FsuUUsuc
        subject_person_id: p_WhCBSSK9o6DL2UPqDz6DAx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。曾任千戶。（中国历代人物传记资料库 CBDB 499825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__dVcb_3zDmPge2aJphyTV7
          claim_id: c_vKA9sr5uM1ntJ7FsuUUsuc
          source_id: s_FVnitHJH9gaqK1QLoxAL3V
          stance: supports
          locator: CBDB:499825
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。曾任千戶。（中国历代人物传记资料库 CBDB 499825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 499825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499825&o=json)
