---
schema: wang-person/v1
id: p_BCVvp3M1wBwMRYHQN1smUR
status: active
merged_into: null
display_name: 王伯揆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JfR1BrKTxqsPYsGR61PrUX
        subject_person_id: p_BCVvp3M1wBwMRYHQN1smUR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uPDfMQyJbcaXeqYF7ppixf
          claim_id: c_JfR1BrKTxqsPYsGR61PrUX
          source_id: s_hakGMWdoJiVLSrSZqH3qS7
          stance: supports
          locator: CBDB:691012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691012）
          source: &a1
            id: s_hakGMWdoJiVLSrSZqH3qS7
            source_type: api_record
            title: 中国历代人物传记资料库：王伯揆（CBDB 691012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691012&o=json
            external_identifier: CBDB:691012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qj9Sq7yeEMg3sNvT3vARAd
        subject_person_id: p_BCVvp3M1wBwMRYHQN1smUR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯揆，明人物。身份为戲曲作家。（中国历代人物传记资料库 CBDB 691012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_COeu-RYeflamtsK9F0v_Jf
          claim_id: c_Qj9Sq7yeEMg3sNvT3vARAd
          source_id: s_hakGMWdoJiVLSrSZqH3qS7
          stance: supports
          locator: CBDB:691012
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

# 王伯揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯揆 | accepted |
| bio.summary | 王伯揆，明人物。身份为戲曲作家。（中国历代人物传记资料库 CBDB 691012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯揆（CBDB 691012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691012&o=json)
