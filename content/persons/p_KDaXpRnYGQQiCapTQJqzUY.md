---
schema: wang-person/v1
id: p_KDaXpRnYGQQiCapTQJqzUY
status: active
merged_into: null
display_name: 王學典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VguhQTLvDa1Smd3Cczpiim
        subject_person_id: p_KDaXpRnYGQQiCapTQJqzUY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AtSJvPuCSV7PCD4Ko6FMWY
          claim_id: c_VguhQTLvDa1Smd3Cczpiim
          source_id: s_JH4hjm8KghinAMFe7kZMya
          stance: supports
          locator: CBDB:637026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637026）
          source: &a1
            id: s_JH4hjm8KghinAMFe7kZMya
            source_type: api_record
            title: 中国历代人物传记资料库：王學典（CBDB 637026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637026&o=json
            external_identifier: CBDB:637026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6CF42ehq9iD1VUQZ7Dp6zo
        subject_person_id: p_KDaXpRnYGQQiCapTQJqzUY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學典，清人物。籍贯黃州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637026）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e05VwcgOsKxd8_hzP74sXN
          claim_id: c_6CF42ehq9iD1VUQZ7Dp6zo
          source_id: s_JH4hjm8KghinAMFe7kZMya
          stance: supports
          locator: CBDB:637026
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

# 王學典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學典 | accepted |
| bio.summary | 王學典，清人物。籍贯黃州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學典（CBDB 637026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637026&o=json)
