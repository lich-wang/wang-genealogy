---
schema: wang-person/v1
id: p_6NeLUF68QoLEY6x9A2ppfc
status: active
merged_into: null
display_name: 王之夑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V5UNjQQ5pFKYfJqJ7Rkxrg
        subject_person_id: p_6NeLUF68QoLEY6x9A2ppfc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之夑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79sLRMYdZ3YY3MMpEdK58M
          claim_id: c_V5UNjQQ5pFKYfJqJ7Rkxrg
          source_id: s_pBkMKoKu2mAUa8TviAmthn
          stance: supports
          locator: CBDB:635779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635779）
          source: &a1
            id: s_pBkMKoKu2mAUa8TviAmthn
            source_type: api_record
            title: 中国历代人物传记资料库：王之夑（CBDB 635779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635779&o=json
            external_identifier: CBDB:635779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kKY4rvEWtuGuhQWU8XMuGM
        subject_person_id: p_6NeLUF68QoLEY6x9A2ppfc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之夑，清人物。籍贯懷寧，曾任典史。（中国历代人物传记资料库 CBDB 635779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bJzf-QuSISp2-_-QELMbwD
          claim_id: c_kKY4rvEWtuGuhQWU8XMuGM
          source_id: s_pBkMKoKu2mAUa8TviAmthn
          stance: supports
          locator: CBDB:635779
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

# 王之夑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之夑 | accepted |
| bio.summary | 王之夑，清人物。籍贯懷寧，曾任典史。（中国历代人物传记资料库 CBDB 635779） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之夑（CBDB 635779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635779&o=json)
