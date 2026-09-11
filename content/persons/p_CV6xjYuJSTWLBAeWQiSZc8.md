---
schema: wang-person/v1
id: p_CV6xjYuJSTWLBAeWQiSZc8
status: active
merged_into: null
display_name: 王謩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M5UMjM1CajGcBy5g1VuuAw
        subject_person_id: p_CV6xjYuJSTWLBAeWQiSZc8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3RnioULAByzfmSWBMUsL6K
          claim_id: c_M5UMjM1CajGcBy5g1VuuAw
          source_id: s_jZotEuBKTK9AfZ8ZcLFNwH
          stance: supports
          locator: CBDB:499874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499874）
          source: &a1
            id: s_jZotEuBKTK9AfZ8ZcLFNwH
            source_type: api_record
            title: 中国历代人物传记资料库：王謩（CBDB 499874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499874&o=json
            external_identifier: CBDB:499874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wQ7dZpd11Zt4k6SKWaMcvc
        subject_person_id: p_CV6xjYuJSTWLBAeWQiSZc8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謩，清人物。入仕進士，曾任布政使司布政使、總督。（中国历代人物传记资料库 CBDB 499874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WfJV1cZQlSPI1fTa4ziUh1
          claim_id: c_wQ7dZpd11Zt4k6SKWaMcvc
          source_id: s_jZotEuBKTK9AfZ8ZcLFNwH
          stance: supports
          locator: CBDB:499874
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

# 王謩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謩 | accepted |
| bio.summary | 王謩，清人物。入仕進士，曾任布政使司布政使、總督。（中国历代人物传记资料库 CBDB 499874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謩（CBDB 499874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499874&o=json)
