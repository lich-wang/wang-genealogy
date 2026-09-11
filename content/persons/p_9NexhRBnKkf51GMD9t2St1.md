---
schema: wang-person/v1
id: p_9NexhRBnKkf51GMD9t2St1
status: active
merged_into: null
display_name: 王政岐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LN6BN9Zk9w7EKcvcRc5euG
        subject_person_id: p_9NexhRBnKkf51GMD9t2St1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政岐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8f76242gMBvHV6K99fD44j
          claim_id: c_LN6BN9Zk9w7EKcvcRc5euG
          source_id: s_FQH6vCNKekwcBVvtJteHSn
          stance: supports
          locator: CBDB:557434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557434）
          source: &a1
            id: s_FQH6vCNKekwcBVvtJteHSn
            source_type: api_record
            title: 中国历代人物传记资料库：王政岐（CBDB 557434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557434&o=json
            external_identifier: CBDB:557434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SXjZhBF3kvsQQgqHJ71j9S
        subject_person_id: p_9NexhRBnKkf51GMD9t2St1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政岐，明人物。籍贯臨川，入仕薦舉 (保任,保舉)，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 557434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HkOQAIKihNIplfn1oz9oVX
          claim_id: c_SXjZhBF3kvsQQgqHJ71j9S
          source_id: s_FQH6vCNKekwcBVvtJteHSn
          stance: supports
          locator: CBDB:557434
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

# 王政岐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政岐 | accepted |
| bio.summary | 王政岐，明人物。籍贯臨川，入仕薦舉 (保任,保舉)，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 557434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政岐（CBDB 557434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557434&o=json)
