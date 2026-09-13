---
schema: wang-person/v1
id: p_L1xJcebV4e7ZmLgBivAJo4
status: active
merged_into: null
display_name: 王錩
cbdb_id: 415541
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J9oQLGy6sw5kcoEG57iSPq
        subject_person_id: p_L1xJcebV4e7ZmLgBivAJo4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錩，史料所见人物。本项目依据《中国历代人物传记资料库：王錩（CBDB 415541）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_mwVs4NHeOivY0QTzYo16Tb
          claim_id: c_J9oQLGy6sw5kcoEG57iSPq
          source_id: s_HTBPQ7zwQrzjjzX4qTau6w
          stance: supports
          locator: CBDB:415541
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HTBPQ7zwQrzjjzX4qTau6w
            source_type: api_record
            title: 中国历代人物传记资料库：王錩（CBDB 415541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415541&o=json
            external_identifier: CBDB:415541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:03.710Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cr7t4oq3Nodhc7B2s2L618
        subject_person_id: p_L1xJcebV4e7ZmLgBivAJo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fWJQj4RsszfqUYE3vNioH9
          claim_id: c_cr7t4oq3Nodhc7B2s2L618
          source_id: s_HTBPQ7zwQrzjjzX4qTau6w
          stance: supports
          locator: CBDB:415541
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6401-6500）｜历史性依据：CBDB 朝代 = 清
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

# 王錩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錩，史料所见人物。本项目依据《中国历代人物传记资料库：王錩（CBDB 415541）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王錩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錩（CBDB 415541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415541&o=json)
