---
schema: wang-person/v1
id: p_1qDAeDAt5f86zYt3Asj2Am
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bwF6C7TaEJGKUydTJxupWZ
        subject_person_id: p_1qDAeDAt5f86zYt3Asj2Am
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MsNMioD4NBz2TghVND8Xno
          claim_id: c_bwF6C7TaEJGKUydTJxupWZ
          source_id: s_tW39a3ca6pKX2yDXm1BMN6
          stance: supports
          locator: CBDB:342670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342670）
          source: &a1
            id: s_tW39a3ca6pKX2yDXm1BMN6
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 342670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342670&o=json
            external_identifier: CBDB:342670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JrsN4gQCAkfe5hs6nPHqWC
        subject_person_id: p_1qDAeDAt5f86zYt3Asj2Am
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄，清人物。明清進士進士，籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 342670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L6gPhw7kuxwNVUwyy0mmlb
          claim_id: c_JrsN4gQCAkfe5hs6nPHqWC
          source_id: s_tW39a3ca6pKX2yDXm1BMN6
          stance: supports
          locator: CBDB:342670
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

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| bio.summary | 王澄，清人物。明清進士進士，籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 342670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 342670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342670&o=json)
