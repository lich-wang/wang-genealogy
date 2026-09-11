---
schema: wang-person/v1
id: p_8J1QXswE7TrUcMwnxQRarj
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZU2eoVyNAYKaxUs6AbLh6q
        subject_person_id: p_8J1QXswE7TrUcMwnxQRarj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kuD5tYJmAsa2ud7xPij4YG
          claim_id: c_ZU2eoVyNAYKaxUs6AbLh6q
          source_id: s_AyEb1Axv1RGq6YKGsKK19w
          stance: supports
          locator: CBDB:92018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92018）
          source: &a1
            id: s_AyEb1Axv1RGq6YKGsKK19w
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 92018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92018&o=json
            external_identifier: CBDB:92018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCK6g7XVA5UD9ZcuA2gNNu
        subject_person_id: p_8J1QXswE7TrUcMwnxQRarj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，唐人物。籍贯齊州，身份为詩人。（中国历代人物传记资料库 CBDB 92018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J7ipLq-gxZ662Y5F4V447u
          claim_id: c_HCK6g7XVA5UD9ZcuA2gNNu
          source_id: s_AyEb1Axv1RGq6YKGsKK19w
          stance: supports
          locator: CBDB:92018
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

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，唐人物。籍贯齊州，身份为詩人。（中国历代人物传记资料库 CBDB 92018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 92018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92018&o=json)
