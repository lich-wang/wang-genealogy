---
schema: wang-person/v1
id: p_fmcwGpgYC811Z6sa5E9hbt
status: active
merged_into: null
display_name: 王丙南
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KrMVpHv7mBHX7RyyT4Hd2i
        subject_person_id: p_fmcwGpgYC811Z6sa5E9hbt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R6TdEYqyTAUJ1HDTTub5ds
          claim_id: c_KrMVpHv7mBHX7RyyT4Hd2i
          source_id: s_yjknsfysAGforNoL34Xe3P
          stance: supports
          locator: CBDB:635728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635728）
          source: &a1
            id: s_yjknsfysAGforNoL34Xe3P
            source_type: api_record
            title: 中国历代人物传记资料库：王丙南（CBDB 635728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635728&o=json
            external_identifier: CBDB:635728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vPuGzPpEgNkKBibvec4oF5
        subject_person_id: p_fmcwGpgYC811Z6sa5E9hbt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙南，清人物。籍贯永平府，曾任訓導。（中国历代人物传记资料库 CBDB 635728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MiwntF8CX6l3RTHgt3uP-Y
          claim_id: c_vPuGzPpEgNkKBibvec4oF5
          source_id: s_yjknsfysAGforNoL34Xe3P
          stance: supports
          locator: CBDB:635728
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

# 王丙南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丙南 | accepted |
| bio.summary | 王丙南，清人物。籍贯永平府，曾任訓導。（中国历代人物传记资料库 CBDB 635728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丙南（CBDB 635728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635728&o=json)
