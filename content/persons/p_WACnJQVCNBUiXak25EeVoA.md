---
schema: wang-person/v1
id: p_WACnJQVCNBUiXak25EeVoA
status: active
merged_into: null
display_name: 王鍇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PzdTkxknMwVrr67k43B8Yq
        subject_person_id: p_WACnJQVCNBUiXak25EeVoA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ReBMd581SFVaHCBEDLC24Y
          claim_id: c_PzdTkxknMwVrr67k43B8Yq
          source_id: s_sL4gLTqfxbGx8a3HMH4RPM
          stance: supports
          locator: CBDB:92103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92103）
          source: &a1
            id: s_sL4gLTqfxbGx8a3HMH4RPM
            source_type: api_record
            title: 中国历代人物传记资料库：王鍇（CBDB 92103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92103&o=json
            external_identifier: CBDB:92103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dg3361isMZV4HGMymcmNCG
        subject_person_id: p_WACnJQVCNBUiXak25EeVoA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇，唐人物。身份为工於文，曾任兵部尚書、翰林學士、判六軍諸衛事。（中国历代人物传记资料库 CBDB 92103）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ymBe8qArVdnwqWjxSkm4Id
          claim_id: c_Dg3361isMZV4HGMymcmNCG
          source_id: s_sL4gLTqfxbGx8a3HMH4RPM
          stance: supports
          locator: CBDB:92103
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

# 王鍇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍇 | accepted |
| bio.summary | 王鍇，唐人物。身份为工於文，曾任兵部尚書、翰林學士、判六軍諸衛事。（中国历代人物传记资料库 CBDB 92103） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍇（CBDB 92103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92103&o=json)
