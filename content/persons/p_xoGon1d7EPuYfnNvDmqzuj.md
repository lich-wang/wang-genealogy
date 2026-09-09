---
schema: wang-person/v1
id: p_xoGon1d7EPuYfnNvDmqzuj
status: active
merged_into: null
display_name: 王季木
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4HrPKfBiB8ob36KwyYtQw
        subject_person_id: p_xoGon1d7EPuYfnNvDmqzuj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季木
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMgs7NhjY4KvefSbNSjz4c
          claim_id: c_K4HrPKfBiB8ob36KwyYtQw
          source_id: s_PWLu7SBwCdkP6MLWJDNbPe
          stance: supports
          locator: CBDB:530370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（530370）
          source: &a1
            id: s_PWLu7SBwCdkP6MLWJDNbPe
            source_type: api_record
            title: 中国历代人物传记资料库：王季木（CBDB 530370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530370&o=json
            external_identifier: CBDB:530370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KK9ZF1DM46oDtwUERvQrFE
        subject_person_id: p_xoGon1d7EPuYfnNvDmqzuj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k7he8TKHvmaxnrQZnycJo6
          claim_id: c_KK9ZF1DM46oDtwUERvQrFE
          source_id: s_PWLu7SBwCdkP6MLWJDNbPe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王季木

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季木 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王季木（CBDB 530370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530370&o=json)
