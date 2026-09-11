---
schema: wang-person/v1
id: p_sAEpwKXDmsnQYVkj3QESam
status: active
merged_into: null
display_name: 王位清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9zEeWHg6rb3aPJaFKKGh5n
        subject_person_id: p_sAEpwKXDmsnQYVkj3QESam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王位清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sb8uTxuTLWvugt8DCn8BFj
          claim_id: c_9zEeWHg6rb3aPJaFKKGh5n
          source_id: s_UFS7GwR79N6FNFzmAi4jU8
          stance: supports
          locator: CBDB:635984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635984）
          source: &a1
            id: s_UFS7GwR79N6FNFzmAi4jU8
            source_type: api_record
            title: 中国历代人物传记资料库：王位清（CBDB 635984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635984&o=json
            external_identifier: CBDB:635984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKCYQNpfyBNgo6y56oHkN3
        subject_person_id: p_sAEpwKXDmsnQYVkj3QESam
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王位清，清人物。籍贯臨晉，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 635984）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ykh02qDN91XmGeungl_7Q
          claim_id: c_EKCYQNpfyBNgo6y56oHkN3
          source_id: s_UFS7GwR79N6FNFzmAi4jU8
          stance: supports
          locator: CBDB:635984
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

# 王位清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王位清 | accepted |
| bio.summary | 王位清，清人物。籍贯臨晉，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 635984） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王位清（CBDB 635984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635984&o=json)
