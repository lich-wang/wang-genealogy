---
schema: wang-person/v1
id: p_mERetAWs4bJjVxMX6o2TGh
status: active
merged_into: null
display_name: 王站住
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CA944z7gQRyXU2okCCSU1J
        subject_person_id: p_mERetAWs4bJjVxMX6o2TGh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王站住
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TmnnHwx6CccTm6TyFEbP52
          claim_id: c_CA944z7gQRyXU2okCCSU1J
          source_id: s_je6FWDJVpLXm24F1f441SJ
          stance: supports
          locator: CBDB:415210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415210）
          source: &a1
            id: s_je6FWDJVpLXm24F1f441SJ
            source_type: api_record
            title: 中国历代人物传记资料库：王站住（CBDB 415210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415210&o=json
            external_identifier: CBDB:415210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uBbiiM5gsGo1Gep4596bHB
        subject_person_id: p_mERetAWs4bJjVxMX6o2TGh
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
        - id: cs_7w931Jk31AWaretkG8Q9BK
          claim_id: c_uBbiiM5gsGo1Gep4596bHB
          source_id: s_je6FWDJVpLXm24F1f441SJ
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

# 王站住

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王站住 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王站住（CBDB 415210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415210&o=json)
