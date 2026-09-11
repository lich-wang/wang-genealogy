---
schema: wang-person/v1
id: p_oso25NA1MrnQEGH7zsmqHQ
status: active
merged_into: null
display_name: 王化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_11Qnt1qibn8nJAq8M6KuDu
        subject_person_id: p_oso25NA1MrnQEGH7zsmqHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7v2mWrLaCGn6XeruuQBt8w
          claim_id: c_11Qnt1qibn8nJAq8M6KuDu
          source_id: s_9Jj7QnNPhjRAkNrAopvGWG
          stance: supports
          locator: CBDB:459487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459487）
          source: &a1
            id: s_9Jj7QnNPhjRAkNrAopvGWG
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 459487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459487&o=json
            external_identifier: CBDB:459487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bSGdPPotDm9hkSTMh2W6hH
        subject_person_id: p_oso25NA1MrnQEGH7zsmqHQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 459487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tL5MggxdeBwtt6X7EAhYBC
          claim_id: c_bSGdPPotDm9hkSTMh2W6hH
          source_id: s_9Jj7QnNPhjRAkNrAopvGWG
          stance: supports
          locator: CBDB:459487
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

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 459487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 459487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459487&o=json)
