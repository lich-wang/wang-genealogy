---
schema: wang-person/v1
id: p_ZXrQ1fTpKHnb6v8k9QauhD
status: active
merged_into: null
display_name: 王標
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HcG8BrrLp4M9Lne5Ljz8Zn
        subject_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YkxMc7BaRqQ2V7m97t1coX
          claim_id: c_HcG8BrrLp4M9Lne5Ljz8Zn
          source_id: s_3sgUnw1Lh6VmDE9ywBHweD
          stance: supports
          locator: CBDB:274259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274259）
          source: &a1
            id: s_3sgUnw1Lh6VmDE9ywBHweD
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 274259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json
            external_identifier: CBDB:274259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CA8GyXWh3jJ8f4dp1EzxRs
        subject_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZJNtKy1PHVH_lTvfvbeuIF
          claim_id: c_CA8GyXWh3jJ8f4dp1EzxRs
          source_id: s_3sgUnw1Lh6VmDE9ywBHweD
          stance: supports
          locator: CBDB:274259
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

# 王標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王標 | accepted |
| bio.summary | 王標，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 274259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json)
