---
schema: wang-person/v1
id: p_Zu4RFvFeh88TJgnanzUrb8
status: active
merged_into: null
display_name: 王沔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9tGAZaJ2p5HCBx1Rudvb2n
        subject_person_id: p_Zu4RFvFeh88TJgnanzUrb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EERVZHgFRdJe6WK21A3YnF
          claim_id: c_9tGAZaJ2p5HCBx1Rudvb2n
          source_id: s_6ifmstL2kFf31AJB2BLfkF
          stance: supports
          locator: CBDB:381117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381117）
          source: &a1
            id: s_6ifmstL2kFf31AJB2BLfkF
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 381117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381117&o=json
            external_identifier: CBDB:381117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pAB6nUHxfJ21nWPPHpLoEv
        subject_person_id: p_Zu4RFvFeh88TJgnanzUrb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔，唐人物。曾任觀察使、州刺史。（中国历代人物传记资料库 CBDB 381117）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HD3cFEnrkyfJr5pfIzg45i
          claim_id: c_pAB6nUHxfJ21nWPPHpLoEv
          source_id: s_6ifmstL2kFf31AJB2BLfkF
          stance: supports
          locator: CBDB:381117
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

# 王沔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沔 | accepted |
| bio.summary | 王沔，唐人物。曾任觀察使、州刺史。（中国历代人物传记资料库 CBDB 381117） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沔（CBDB 381117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381117&o=json)
