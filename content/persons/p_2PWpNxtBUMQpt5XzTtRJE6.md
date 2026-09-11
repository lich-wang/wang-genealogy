---
schema: wang-person/v1
id: p_2PWpNxtBUMQpt5XzTtRJE6
status: active
merged_into: null
display_name: 王之才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NwsbTgtPLWExA1JU3XkRm8
        subject_person_id: p_2PWpNxtBUMQpt5XzTtRJE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDecAjUABGQGJkESca1PFP
          claim_id: c_NwsbTgtPLWExA1JU3XkRm8
          source_id: s_ij2HUarzDA8F4aS2JNQUz6
          stance: supports
          locator: CBDB:686998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686998）
          source: &a1
            id: s_ij2HUarzDA8F4aS2JNQUz6
            source_type: api_record
            title: 中国历代人物传记资料库：王之才（CBDB 686998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686998&o=json
            external_identifier: CBDB:686998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZcJDU15sSeiQaoNeUNAbpZ
        subject_person_id: p_2PWpNxtBUMQpt5XzTtRJE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才，宋人物。籍贯柳州，入仕進士。（中国历代人物传记资料库 CBDB 686998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dDXYvkxWefi9P6Zt2W8XxI
          claim_id: c_ZcJDU15sSeiQaoNeUNAbpZ
          source_id: s_ij2HUarzDA8F4aS2JNQUz6
          stance: supports
          locator: CBDB:686998
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

# 王之才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之才 | accepted |
| bio.summary | 王之才，宋人物。籍贯柳州，入仕進士。（中国历代人物传记资料库 CBDB 686998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之才（CBDB 686998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686998&o=json)
