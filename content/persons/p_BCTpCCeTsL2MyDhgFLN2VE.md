---
schema: wang-person/v1
id: p_BCTpCCeTsL2MyDhgFLN2VE
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UXGi8KXLSG2c8EMiiW1izX
        subject_person_id: p_BCTpCCeTsL2MyDhgFLN2VE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfqKQ4k2YyTrpkgx71YVh1
          claim_id: c_UXGi8KXLSG2c8EMiiW1izX
          source_id: s_rvHGcpMGMPPmLWUPrE48Nv
          stance: supports
          locator: CBDB:285656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285656）
          source: &a1
            id: s_rvHGcpMGMPPmLWUPrE48Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 285656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285656&o=json
            external_identifier: CBDB:285656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k7AuCq8WKoUUWcepJjDeb3
        subject_person_id: p_BCTpCCeTsL2MyDhgFLN2VE
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
        - id: cs_b88rnJFFv4FcfVebG2tmqa
          claim_id: c_k7AuCq8WKoUUWcepJjDeb3
          source_id: s_rvHGcpMGMPPmLWUPrE48Nv
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

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 285656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285656&o=json)
