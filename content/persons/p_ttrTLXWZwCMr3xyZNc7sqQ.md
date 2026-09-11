---
schema: wang-person/v1
id: p_ttrTLXWZwCMr3xyZNc7sqQ
status: active
merged_into: null
display_name: 王怡洽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_phPhhkP83G35h4HVQiDLLs
        subject_person_id: p_ttrTLXWZwCMr3xyZNc7sqQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡洽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SfwttN2TRFpZNSJcWdA4BC
          claim_id: c_phPhhkP83G35h4HVQiDLLs
          source_id: s_7Y7haBJP7q1JFznz2F9YCu
          stance: supports
          locator: CBDB:637819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637819）
          source: &a1
            id: s_7Y7haBJP7q1JFznz2F9YCu
            source_type: api_record
            title: 中国历代人物传记资料库：王怡洽（CBDB 637819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637819&o=json
            external_identifier: CBDB:637819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gVuDN9b4CqkkZmTg87NQUC
        subject_person_id: p_ttrTLXWZwCMr3xyZNc7sqQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡洽，清人物。籍贯南城，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 637819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bjn9Xk_DTVdj60EpwG2_rl
          claim_id: c_gVuDN9b4CqkkZmTg87NQUC
          source_id: s_7Y7haBJP7q1JFznz2F9YCu
          stance: supports
          locator: CBDB:637819
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

# 王怡洽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡洽 | accepted |
| bio.summary | 王怡洽，清人物。籍贯南城，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 637819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡洽（CBDB 637819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637819&o=json)
