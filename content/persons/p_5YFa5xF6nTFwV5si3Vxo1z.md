---
schema: wang-person/v1
id: p_5YFa5xF6nTFwV5si3Vxo1z
status: active
merged_into: null
display_name: 王遵文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1iQVk9vRAq2ULEqmayoDp
        subject_person_id: p_5YFa5xF6nTFwV5si3Vxo1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULLd9omv31NZedv85zvqtJ
          claim_id: c_W1iQVk9vRAq2ULEqmayoDp
          source_id: s_Ews56sg67Fhr5haQZKKx3w
          stance: supports
          locator: CBDB:640473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640473）
          source: &a1
            id: s_Ews56sg67Fhr5haQZKKx3w
            source_type: api_record
            title: 中国历代人物传记资料库：王遵文（CBDB 640473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640473&o=json
            external_identifier: CBDB:640473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dnTpGBFgRoz4qs9AvbdiyR
        subject_person_id: p_5YFa5xF6nTFwV5si3Vxo1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王遵文，清人物。籍贯靈石，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 640473）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MW4pNMdP0VpW3MWIMvyQT3
          claim_id: c_dnTpGBFgRoz4qs9AvbdiyR
          source_id: s_Ews56sg67Fhr5haQZKKx3w
          stance: supports
          locator: CBDB:640473
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

# 王遵文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵文 | accepted |
| bio.summary | 王遵文，清人物。籍贯靈石，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 640473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵文（CBDB 640473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640473&o=json)
