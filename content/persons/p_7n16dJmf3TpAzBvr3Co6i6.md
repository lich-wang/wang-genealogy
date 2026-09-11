---
schema: wang-person/v1
id: p_7n16dJmf3TpAzBvr3Co6i6
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jaGVW47Cta5fVTcGripEGN
        subject_person_id: p_7n16dJmf3TpAzBvr3Co6i6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UeFyZcep8Sr7WxKadVmbov
          claim_id: c_jaGVW47Cta5fVTcGripEGN
          source_id: s_r3u5VE9bdYx2mHeK6aKYVk
          stance: supports
          locator: CBDB:699743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699743）
          source: &a1
            id: s_r3u5VE9bdYx2mHeK6aKYVk
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 699743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699743&o=json
            external_identifier: CBDB:699743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Agvva216Uufp6ADighHyZV
        subject_person_id: p_7n16dJmf3TpAzBvr3Co6i6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳，宋人物。籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 699743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5O-xdS572EruvZvazkTyCM
          claim_id: c_Agvva216Uufp6ADighHyZV
          source_id: s_r3u5VE9bdYx2mHeK6aKYVk
          stance: supports
          locator: CBDB:699743
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| bio.summary | 王勳，宋人物。籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 699743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 699743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699743&o=json)
