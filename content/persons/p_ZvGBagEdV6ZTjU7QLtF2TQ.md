---
schema: wang-person/v1
id: p_ZvGBagEdV6ZTjU7QLtF2TQ
status: active
merged_into: null
display_name: 王萬亨
cbdb_id: 415357
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sFZU9aEP4jezHYuUx66J67
        subject_person_id: p_ZvGBagEdV6ZTjU7QLtF2TQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬亨，明人物。曾任典史。（中国历代人物传记资料库 CBDB 415357）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_b_cIJtwl7UR4TBrjv-BsjK
          claim_id: c_sFZU9aEP4jezHYuUx66J67
          source_id: s_Rg1bV4gYgeTBoJ73GNZwdH
          stance: supports
          locator: CBDB:415357
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Rg1bV4gYgeTBoJ73GNZwdH
            source_type: api_record
            title: 中国历代人物传记资料库：王萬亨（CBDB 415357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415357&o=json
            external_identifier: CBDB:415357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:53.628Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7mAExXQdMER6PM2bbXnma
        subject_person_id: p_ZvGBagEdV6ZTjU7QLtF2TQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9yUjJdB1GkfMEof7ErqZFt
          claim_id: c_g7mAExXQdMER6PM2bbXnma
          source_id: s_Rg1bV4gYgeTBoJ73GNZwdH
          stance: supports
          locator: CBDB:415357
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6201-6300）｜历史性依据：CBDB 朝代 = 明
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

# 王萬亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王萬亨，明人物。曾任典史。（中国历代人物传记资料库 CBDB 415357） | accepted |
| name.primary | 王萬亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬亨（CBDB 415357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415357&o=json)
