---
schema: wang-person/v1
id: p_4ZETKjsYh4WsJfvBKJa2WY
status: active
merged_into: null
display_name: 王綆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pKRtJLbMknNHj2XP8uoW8H
        subject_person_id: p_4ZETKjsYh4WsJfvBKJa2WY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CKyrzxZ3C5Fv3fx8vSBjo4
          claim_id: c_pKRtJLbMknNHj2XP8uoW8H
          source_id: s_jDN3zWCDFDa4QhQ9YxPu6Z
          stance: supports
          locator: CBDB:639789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639789）
          source: &a1
            id: s_jDN3zWCDFDa4QhQ9YxPu6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王綆（CBDB 639789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639789&o=json
            external_identifier: CBDB:639789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N3ww62FquEdYJRvBZ6WNZt
        subject_person_id: p_4ZETKjsYh4WsJfvBKJa2WY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綆，清人物。籍贯同州府，入仕鄉貢舉人，曾任教授、學正、訓導。（中国历代人物传记资料库 CBDB 639789）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iJEsm2xlWMuSKhQCucpjB2
          claim_id: c_N3ww62FquEdYJRvBZ6WNZt
          source_id: s_jDN3zWCDFDa4QhQ9YxPu6Z
          stance: supports
          locator: CBDB:639789
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

# 王綆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綆 | accepted |
| bio.summary | 王綆，清人物。籍贯同州府，入仕鄉貢舉人，曾任教授、學正、訓導。（中国历代人物传记资料库 CBDB 639789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綆（CBDB 639789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639789&o=json)
