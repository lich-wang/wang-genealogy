---
schema: wang-person/v1
id: p_AuBzhjc4qE3UKz6442WPta
status: active
merged_into: null
display_name: 王怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7udEwh2pjz853QDFZjynMb
        subject_person_id: p_AuBzhjc4qE3UKz6442WPta
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zj3mhpZWKgE21x2wPnCkkj
          claim_id: c_7udEwh2pjz853QDFZjynMb
          source_id: s_xuHZuLCKzv2TSte1CcPkUB
          stance: supports
          locator: CBDB:637816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637816）
          source: &a1
            id: s_xuHZuLCKzv2TSte1CcPkUB
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 637816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637816&o=json
            external_identifier: CBDB:637816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r8Y5sWCWdfLTwUnPxw5CVZ
        subject_person_id: p_AuBzhjc4qE3UKz6442WPta
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡，清人物。籍贯酆都，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5POajKxMakfb4DnxW0eVG
          claim_id: c_r8Y5sWCWdfLTwUnPxw5CVZ
          source_id: s_xuHZuLCKzv2TSte1CcPkUB
          stance: supports
          locator: CBDB:637816
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

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| bio.summary | 王怡，清人物。籍贯酆都，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 637816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637816&o=json)
