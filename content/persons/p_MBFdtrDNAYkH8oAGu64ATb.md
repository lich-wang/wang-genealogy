---
schema: wang-person/v1
id: p_MBFdtrDNAYkH8oAGu64ATb
status: active
merged_into: null
display_name: 王三才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZTB6faKi4r3cb1mz3E4F3B
        subject_person_id: p_MBFdtrDNAYkH8oAGu64ATb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nn6wKwkF8DSZQu2sRFFThD
          claim_id: c_ZTB6faKi4r3cb1mz3E4F3B
          source_id: s_hBp3X3a25YJECBKuLFMv9G
          stance: supports
          locator: CBDB:214235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214235）
          source: &a1
            id: s_hBp3X3a25YJECBKuLFMv9G
            source_type: api_record
            title: 中国历代人物传记资料库：王三才（CBDB 214235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214235&o=json
            external_identifier: CBDB:214235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p2393qSQa8yZdeV1JQJD5X
        subject_person_id: p_MBFdtrDNAYkH8oAGu64ATb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三才，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214235）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qy2nQCs_0hnhbDGVhW8EEm
          claim_id: c_p2393qSQa8yZdeV1JQJD5X
          source_id: s_hBp3X3a25YJECBKuLFMv9G
          stance: supports
          locator: CBDB:214235
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

# 王三才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三才 | accepted |
| bio.summary | 王三才，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三才（CBDB 214235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214235&o=json)
