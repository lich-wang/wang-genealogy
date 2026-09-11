---
schema: wang-person/v1
id: p_nzk5yahvS1H1B8xUN5uPEJ
status: active
merged_into: null
display_name: 王景夑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDJc3UoMvysX7YKxsyECrM
        subject_person_id: p_nzk5yahvS1H1B8xUN5uPEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景夑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_61SoquvuEbRtCsudc5om8u
          claim_id: c_KDJc3UoMvysX7YKxsyECrM
          source_id: s_B5LFd6pMMrwTvE6D7YCSi1
          stance: supports
          locator: CBDB:638477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638477）
          source: &a1
            id: s_B5LFd6pMMrwTvE6D7YCSi1
            source_type: api_record
            title: 中国历代人物传记资料库：王景夑（CBDB 638477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638477&o=json
            external_identifier: CBDB:638477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6a3HeXffm2WBSTxnNnfbd
        subject_person_id: p_nzk5yahvS1H1B8xUN5uPEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景夑，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 638477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k8EAGrq7q4UfN-ullkFxxV
          claim_id: c_X6a3HeXffm2WBSTxnNnfbd
          source_id: s_B5LFd6pMMrwTvE6D7YCSi1
          stance: supports
          locator: CBDB:638477
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

# 王景夑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景夑 | accepted |
| bio.summary | 王景夑，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 638477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景夑（CBDB 638477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638477&o=json)
