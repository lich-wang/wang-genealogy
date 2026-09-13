---
schema: wang-person/v1
id: p_tbB7DKgBsu4kvV55eAhJXH
status: active
merged_into: null
display_name: 王恩榮
cbdb_id: 69321
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uQqvmEsk9N1BLKR1H1EF5D
        subject_person_id: p_tbB7DKgBsu4kvV55eAhJXH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王恩榮，清人物。籍贯蓬萊，入仕學校: 生員(庠生)，曾任巡檢。（中国历代人物传记资料库 CBDB 69321）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wDHMq6iIhk2uRym74KOGc6
          claim_id: c_uQqvmEsk9N1BLKR1H1EF5D
          source_id: s_1GHt6RHUBHC5PvprJo9BQk
          stance: supports
          locator: CBDB:69321
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1GHt6RHUBHC5PvprJo9BQk
            source_type: api_record
            title: 中国历代人物传记资料库：王恩榮（CBDB 69321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69321&o=json
            external_identifier: CBDB:69321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNAtBo1TWkxsSLWpsx7ah4
        subject_person_id: p_tbB7DKgBsu4kvV55eAhJXH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KGLsj32Fynh8cW9s7wzo91
          claim_id: c_kNAtBo1TWkxsSLWpsx7ah4
          source_id: s_1GHt6RHUBHC5PvprJo9BQk
          stance: supports
          locator: CBDB:69321
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
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

# 王恩榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恩榮，清人物。籍贯蓬萊，入仕學校: 生員(庠生)，曾任巡檢。（中国历代人物传记资料库 CBDB 69321） | accepted |
| name.primary | 王恩榮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩榮（CBDB 69321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69321&o=json)
