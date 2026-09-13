---
schema: wang-person/v1
id: p_WcmNkTx7gVawB7jtqy7mNB
status: active
merged_into: null
display_name: 王命璿
cbdb_id: 343760
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_brEpEsgbbeWAPn6SAWkQkY
        subject_person_id: p_WcmNkTx7gVawB7jtqy7mNB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命璿，明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 343760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9gfDUjZNBlIXWuU2RN7OZt
          claim_id: c_brEpEsgbbeWAPn6SAWkQkY
          source_id: s_jimAxwTrfFEQLR79mvM3w8
          stance: supports
          locator: CBDB:343760
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jimAxwTrfFEQLR79mvM3w8
            source_type: api_record
            title: 中国历代人物传记资料库：王命璿（CBDB 343760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343760&o=json
            external_identifier: CBDB:343760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MMqPUYQ5hrBDDRvs7Tzux
        subject_person_id: p_WcmNkTx7gVawB7jtqy7mNB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CyB9U6ZMdakrtram2Vz7Lx
          claim_id: c_3MMqPUYQ5hrBDDRvs7Tzux
          source_id: s_jimAxwTrfFEQLR79mvM3w8
          stance: supports
          locator: CBDB:343760
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4701-4800）｜历史性依据：CBDB 朝代 = 明
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

# 王命璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王命璿，明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 343760） | accepted |
| name.primary | 王命璿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王命璿（CBDB 343760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343760&o=json)
