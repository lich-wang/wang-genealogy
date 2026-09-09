---
schema: wang-person/v1
id: p_w98fNCKfsDVLeqhH6CzWwH
status: active
merged_into: null
display_name: 王涇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VUTqaQNB5ETy5oZLDnr2E5
        subject_person_id: p_w98fNCKfsDVLeqhH6CzWwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JS4dzoXWCtM3PHaeELu4Ki
          claim_id: c_VUTqaQNB5ETy5oZLDnr2E5
          source_id: s_xtMm32QVJL4KnSBbX5j5h1
          stance: supports
          locator: CBDB:134177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134177）
          source: &a1
            id: s_xtMm32QVJL4KnSBbX5j5h1
            source_type: api_record
            title: 中国历代人物传记资料库：王涇（CBDB 134177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134177&o=json
            external_identifier: CBDB:134177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T91kxD4fWVSjG2sna62qnU
        subject_person_id: p_w98fNCKfsDVLeqhH6CzWwH
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
        - id: cs_iKuJt2Z7v6f5MddfY1LJkT
          claim_id: c_T91kxD4fWVSjG2sna62qnU
          source_id: s_xtMm32QVJL4KnSBbX5j5h1
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

# 王涇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王涇（CBDB 134177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134177&o=json)
