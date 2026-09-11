---
schema: wang-person/v1
id: p_JbtcjXZxWyvVfaKYuhtp5G
status: active
merged_into: null
display_name: 王景聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDE9dj3NdKHuPqTzcS12Mr
        subject_person_id: p_JbtcjXZxWyvVfaKYuhtp5G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FYp1Y1MweunqqRRUZ7M6is
          claim_id: c_kDE9dj3NdKHuPqTzcS12Mr
          source_id: s_Uez8HGEJidP3UsyGqHJJiC
          stance: supports
          locator: CBDB:638507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638507）
          source: &a1
            id: s_Uez8HGEJidP3UsyGqHJJiC
            source_type: api_record
            title: 中国历代人物传记资料库：王景聘（CBDB 638507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638507&o=json
            external_identifier: CBDB:638507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tRQm3iZ8c96WrK7ZsBwSj9
        subject_person_id: p_JbtcjXZxWyvVfaKYuhtp5G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景聘，清人物。籍贯延津，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638507）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WS6jc-7HeF3HeQeEkr3s92
          claim_id: c_tRQm3iZ8c96WrK7ZsBwSj9
          source_id: s_Uez8HGEJidP3UsyGqHJJiC
          stance: supports
          locator: CBDB:638507
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

# 王景聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景聘 | accepted |
| bio.summary | 王景聘，清人物。籍贯延津，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638507） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景聘（CBDB 638507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638507&o=json)
