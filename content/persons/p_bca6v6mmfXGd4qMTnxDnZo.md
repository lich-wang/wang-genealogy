---
schema: wang-person/v1
id: p_bca6v6mmfXGd4qMTnxDnZo
status: active
merged_into: null
display_name: 王長民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SZnPCtUw6EnCEj3JSbeFe7
        subject_person_id: p_bca6v6mmfXGd4qMTnxDnZo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z7rRyNnpyUqDRaxbFuY3Th
          claim_id: c_SZnPCtUw6EnCEj3JSbeFe7
          source_id: s_WvvbTRTLCdLTfzyQZ46MWi
          stance: supports
          locator: CBDB:25080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25080）
          source: &a1
            id: s_WvvbTRTLCdLTfzyQZ46MWi
            source_type: api_record
            title: 中国历代人物传记资料库：王長民（CBDB 25080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25080&o=json
            external_identifier: CBDB:25080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AsHpvw8EQbV1xQVTDKjEkr
        subject_person_id: p_bca6v6mmfXGd4qMTnxDnZo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長民，宋人物。身份为入元祐黨籍者。（中国历代人物传记资料库 CBDB 25080）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9lZrnQjc8oupfes2sCQxB9
          claim_id: c_AsHpvw8EQbV1xQVTDKjEkr
          source_id: s_WvvbTRTLCdLTfzyQZ46MWi
          stance: supports
          locator: CBDB:25080
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

# 王長民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長民 | accepted |
| bio.summary | 王長民，宋人物。身份为入元祐黨籍者。（中国历代人物传记资料库 CBDB 25080） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長民（CBDB 25080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25080&o=json)
