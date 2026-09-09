---
schema: wang-person/v1
id: p_KL6pD2p9SR6r7j4F89boFc
status: active
merged_into: null
display_name: 王衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7r15EMAcA867SBRRgxAf2
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WXVdFqrxwjuc67A8iv96PP
          claim_id: c_s7r15EMAcA867SBRRgxAf2
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: CBDB:126831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126831）
          source: &a1
            id: s_fXkoxige6XKe16u4aLm1LC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 126831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json
            external_identifier: CBDB:126831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_684oZaZMciL8iQDyuJ7pDF
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pc19bqLv5W5mGVKZVQcBsk
          claim_id: c_684oZaZMciL8iQDyuJ7pDF
          source_id: s_fXkoxige6XKe16u4aLm1LC
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

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衡（CBDB 126831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json)
