---
schema: wang-person/v1
id: p_4CAyx8nzp4Ax1cCShRKKk5
status: active
merged_into: null
display_name: 王潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hjzjFiJo4eseETYSgSwikY
        subject_person_id: p_4CAyx8nzp4Ax1cCShRKKk5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6hcPEhjqaGqo5qq5LiPsMA
          claim_id: c_hjzjFiJo4eseETYSgSwikY
          source_id: s_2a8Ba2AphnUB712UfmLiG6
          stance: supports
          locator: CBDB:327942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327942）
          source: &a1
            id: s_2a8Ba2AphnUB712UfmLiG6
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 327942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json
            external_identifier: CBDB:327942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4AQqdp6Po4Ji1N6o5J6fSU
        subject_person_id: p_4CAyx8nzp4Ax1cCShRKKk5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤，明人物。嘉靖四十一年進士，籍贯臨汾。（中国历代人物传记资料库 CBDB 327942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qisF_YhYhsnomE7Ek_-EaI
          claim_id: c_4AQqdp6Po4Ji1N6o5J6fSU
          source_id: s_2a8Ba2AphnUB712UfmLiG6
          stance: supports
          locator: CBDB:327942
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

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | 王潤，明人物。嘉靖四十一年進士，籍贯臨汾。（中国历代人物传记资料库 CBDB 327942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 327942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json)
