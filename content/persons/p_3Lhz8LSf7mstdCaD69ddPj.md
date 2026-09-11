---
schema: wang-person/v1
id: p_3Lhz8LSf7mstdCaD69ddPj
status: active
merged_into: null
display_name: 王珫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cyRfMFgFvx8FyT3xSLiGCb
        subject_person_id: p_3Lhz8LSf7mstdCaD69ddPj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zXE3c5wk8XJCvzf5UhXwbu
          claim_id: c_cyRfMFgFvx8FyT3xSLiGCb
          source_id: s_1KERQ8tQVNH9Xje6xLQimB
          stance: supports
          locator: CBDB:266768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266768）
          source: &a1
            id: s_1KERQ8tQVNH9Xje6xLQimB
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 266768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266768&o=json
            external_identifier: CBDB:266768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eRB6CfkDPnchucivGmfsRQ
        subject_person_id: p_3Lhz8LSf7mstdCaD69ddPj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫，明人物。弘治九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 266768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-0jB8V_N6QCNeDYZerSNY-
          claim_id: c_eRB6CfkDPnchucivGmfsRQ
          source_id: s_1KERQ8tQVNH9Xje6xLQimB
          stance: supports
          locator: CBDB:266768
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

# 王珫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珫 | accepted |
| bio.summary | 王珫，明人物。弘治九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 266768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珫（CBDB 266768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266768&o=json)
