---
schema: wang-person/v1
id: p_qrK88EX9LG8dwbXJKkMS7t
status: active
merged_into: null
display_name: 王福娘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCMuJviyEG6xjCMSnAj3tu
        subject_person_id: p_qrK88EX9LG8dwbXJKkMS7t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cNpAEoVZjwQQr2ANMREtPy
          claim_id: c_cCMuJviyEG6xjCMSnAj3tu
          source_id: s_fshDqxmqGaoW1KBRb3wD62
          stance: supports
          locator: CBDB:92105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92105）
          source: &a1
            id: s_fshDqxmqGaoW1KBRb3wD62
            source_type: api_record
            title: 中国历代人物传记资料库：王福娘（CBDB 92105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92105&o=json
            external_identifier: CBDB:92105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZun2CYHLHWD6pQJuqszKL
        subject_person_id: p_qrK88EX9LG8dwbXJKkMS7t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福娘，唐人物。籍贯臨晉，身份为詩人。（中国历代人物传记资料库 CBDB 92105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3EjBlsEwnsBlYBRpPoFDD4
          claim_id: c_tZun2CYHLHWD6pQJuqszKL
          source_id: s_fshDqxmqGaoW1KBRb3wD62
          stance: supports
          locator: CBDB:92105
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

# 王福娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福娘 | accepted |
| bio.summary | 王福娘，唐人物。籍贯臨晉，身份为詩人。（中国历代人物传记资料库 CBDB 92105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福娘（CBDB 92105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92105&o=json)
