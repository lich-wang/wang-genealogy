---
schema: wang-person/v1
id: p_E3PvaHQS1jRj1ZUffQpSAX
status: active
merged_into: null
display_name: 王卜臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91otLkm17D73LfsAEiAdhV
        subject_person_id: p_E3PvaHQS1jRj1ZUffQpSAX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卜臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qZpPt6XmaiQh6a248J7J7T
          claim_id: c_91otLkm17D73LfsAEiAdhV
          source_id: s_yUUEc9GwAvNWt3SiYu3c4p
          stance: supports
          locator: CBDB:636435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636435）
          source: &a1
            id: s_yUUEc9GwAvNWt3SiYu3c4p
            source_type: api_record
            title: 中国历代人物传记资料库：王卜臣（CBDB 636435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636435&o=json
            external_identifier: CBDB:636435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tBKyhCEsuLngQyyLbbCHD
        subject_person_id: p_E3PvaHQS1jRj1ZUffQpSAX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王卜臣，清人物。籍贯合州，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636435）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sz0WjwneI2oqKJHzZY5DU0
          claim_id: c_2tBKyhCEsuLngQyyLbbCHD
          source_id: s_yUUEc9GwAvNWt3SiYu3c4p
          stance: supports
          locator: CBDB:636435
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

# 王卜臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卜臣 | accepted |
| bio.summary | 王卜臣，清人物。籍贯合州，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卜臣（CBDB 636435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636435&o=json)
