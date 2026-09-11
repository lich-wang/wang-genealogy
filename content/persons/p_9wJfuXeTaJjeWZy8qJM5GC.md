---
schema: wang-person/v1
id: p_9wJfuXeTaJjeWZy8qJM5GC
status: active
merged_into: null
display_name: 王訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DNYsKKoEjHSzEoFJCN6rJ1
        subject_person_id: p_9wJfuXeTaJjeWZy8qJM5GC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3hC33VgcNzn9xjiJrq2Yc
          claim_id: c_DNYsKKoEjHSzEoFJCN6rJ1
          source_id: s_rGE6NUp9cfFqapNhmkb5Fa
          stance: supports
          locator: CBDB:459628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459628）
          source: &a1
            id: s_rGE6NUp9cfFqapNhmkb5Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 459628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459628&o=json
            external_identifier: CBDB:459628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_egUEV6jtnENhCFk5NtzBes
        subject_person_id: p_9wJfuXeTaJjeWZy8qJM5GC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 459628）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cT9Hq2YEWxImH_0xzd4b1H
          claim_id: c_egUEV6jtnENhCFk5NtzBes
          source_id: s_rGE6NUp9cfFqapNhmkb5Fa
          stance: supports
          locator: CBDB:459628
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

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | 王訓，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 459628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 459628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459628&o=json)
