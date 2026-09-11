---
schema: wang-person/v1
id: p_iSJjQpa7zzjfPYP39saeVb
status: active
merged_into: null
display_name: 王守樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yrSJQoenFt391jLTK8Akds
        subject_person_id: p_iSJjQpa7zzjfPYP39saeVb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsrqzZmvWjfeacF36GtaKP
          claim_id: c_yrSJQoenFt391jLTK8Akds
          source_id: s_NPmgh5VraNeRs34J8R5U22
          stance: supports
          locator: CBDB:637068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637068）
          source: &a1
            id: s_NPmgh5VraNeRs34J8R5U22
            source_type: api_record
            title: 中国历代人物传记资料库：王守樞（CBDB 637068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637068&o=json
            external_identifier: CBDB:637068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JivcXwE1depibuF4a6Q3LS
        subject_person_id: p_iSJjQpa7zzjfPYP39saeVb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守樞，清人物。籍贯秀水，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637068）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-d-YBKE6aYTr-xU712VwrF
          claim_id: c_JivcXwE1depibuF4a6Q3LS
          source_id: s_NPmgh5VraNeRs34J8R5U22
          stance: supports
          locator: CBDB:637068
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

# 王守樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守樞 | accepted |
| bio.summary | 王守樞，清人物。籍贯秀水，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637068） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守樞（CBDB 637068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637068&o=json)
