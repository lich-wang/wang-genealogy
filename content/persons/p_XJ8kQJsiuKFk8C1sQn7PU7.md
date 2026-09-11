---
schema: wang-person/v1
id: p_XJ8kQJsiuKFk8C1sQn7PU7
status: active
merged_into: null
display_name: 王甸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HVE6gPrJEK3p4BnZ3bzx1S
        subject_person_id: p_XJ8kQJsiuKFk8C1sQn7PU7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LfgN5US9pHJzdzU3HsZw44
          claim_id: c_HVE6gPrJEK3p4BnZ3bzx1S
          source_id: s_rNGjABKZDAL5LkAfNSxwdk
          stance: supports
          locator: CBDB:39029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39029）
          source: &a1
            id: s_rNGjABKZDAL5LkAfNSxwdk
            source_type: api_record
            title: 中国历代人物传记资料库：王甸（CBDB 39029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39029&o=json
            external_identifier: CBDB:39029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E6Z7fowyPRFr3fLkWuuyL9
        subject_person_id: p_XJ8kQJsiuKFk8C1sQn7PU7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甸，宋人物。籍贯黃巖，曾任殿中省尚衣奉御、判官。（中国历代人物传记资料库 CBDB 39029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8hMyvEUrNXeyqZNfXPPYWS
          claim_id: c_E6Z7fowyPRFr3fLkWuuyL9
          source_id: s_rNGjABKZDAL5LkAfNSxwdk
          stance: supports
          locator: CBDB:39029
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

# 王甸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甸 | accepted |
| bio.summary | 王甸，宋人物。籍贯黃巖，曾任殿中省尚衣奉御、判官。（中国历代人物传记资料库 CBDB 39029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王甸（CBDB 39029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39029&o=json)
