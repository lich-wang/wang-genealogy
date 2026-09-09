---
schema: wang-person/v1
id: p_YkCBfocqcfMMFjecm8R39M
status: active
merged_into: null
display_name: 王觀國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RSiMSJW3LxEgTT3K1TzG5s
        subject_person_id: p_YkCBfocqcfMMFjecm8R39M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWZaZDnLe1TX9TArnVUkJP
          claim_id: c_RSiMSJW3LxEgTT3K1TzG5s
          source_id: s_g7LVpcvA6CemDyJYKF22j1
          stance: supports
          locator: CBDB:38501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38501）
          source: &a1
            id: s_g7LVpcvA6CemDyJYKF22j1
            source_type: api_record
            title: 中国历代人物传记资料库：王觀國（CBDB 38501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38501&o=json
            external_identifier: CBDB:38501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d5HWBF6e7H3Ku7RLYXheBD
        subject_person_id: p_YkCBfocqcfMMFjecm8R39M
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
        - id: cs_p6utN7cLW2enMGwQeB7NVL
          claim_id: c_d5HWBF6e7H3Ku7RLYXheBD
          source_id: s_g7LVpcvA6CemDyJYKF22j1
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

# 王觀國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀國 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀國（CBDB 38501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38501&o=json)
