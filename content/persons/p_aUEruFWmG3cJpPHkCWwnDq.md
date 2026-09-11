---
schema: wang-person/v1
id: p_aUEruFWmG3cJpPHkCWwnDq
status: active
merged_into: null
display_name: 王世傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8r5gLC5r6oLRxL375JKAA
        subject_person_id: p_aUEruFWmG3cJpPHkCWwnDq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sAMCEpLg3npd7nobAcLVWC
          claim_id: c_z8r5gLC5r6oLRxL375JKAA
          source_id: s_wemspfwbxaqqtPTamHzJ95
          stance: supports
          locator: CBDB:38464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38464）
          source: &a1
            id: s_wemspfwbxaqqtPTamHzJ95
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 38464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38464&o=json
            external_identifier: CBDB:38464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pAtdv7STisZwHojGAwom7G
        subject_person_id: p_aUEruFWmG3cJpPHkCWwnDq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑，宋人物。籍贯義烏，身份为理學家，入仕進士，曾任殿中省尚乘奉御、殿中省尚輦奉御、宗子博士。（中国历代人物传记资料库 CBDB 38464）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y7hPOksGJcKmk3EK_0Ippp
          claim_id: c_pAtdv7STisZwHojGAwom7G
          source_id: s_wemspfwbxaqqtPTamHzJ95
          stance: supports
          locator: CBDB:38464
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

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | 王世傑，宋人物。籍贯義烏，身份为理學家，入仕進士，曾任殿中省尚乘奉御、殿中省尚輦奉御、宗子博士。（中国历代人物传记资料库 CBDB 38464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世傑（CBDB 38464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38464&o=json)
