---
schema: wang-person/v1
id: p_ZtejqwcqBH1DJS6rgFUH7i
status: active
merged_into: null
display_name: 王由之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nf5eouYueKiqZpLa75p48b
        subject_person_id: p_ZtejqwcqBH1DJS6rgFUH7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WxmFdtF8q28VL4j6dneoFr
          claim_id: c_Nf5eouYueKiqZpLa75p48b
          source_id: s_FgsNJ2rVZwQxA92V3pJMLn
          stance: supports
          locator: CBDB:686007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686007）
          source: &a1
            id: s_FgsNJ2rVZwQxA92V3pJMLn
            source_type: api_record
            title: 中国历代人物传记资料库：王由之（CBDB 686007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686007&o=json
            external_identifier: CBDB:686007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75QRvYB4VH1Wg2KVL6L4QB
        subject_person_id: p_ZtejqwcqBH1DJS6rgFUH7i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AE7JdBYnAXv5DzFmwxbEoU
          claim_id: c_75QRvYB4VH1Wg2KVL6L4QB
          source_id: s_FgsNJ2rVZwQxA92V3pJMLn
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

# 王由之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王由之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王由之（CBDB 686007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686007&o=json)
