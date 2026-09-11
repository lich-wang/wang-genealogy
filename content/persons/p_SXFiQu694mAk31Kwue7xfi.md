---
schema: wang-person/v1
id: p_SXFiQu694mAk31Kwue7xfi
status: active
merged_into: null
display_name: 王立禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6KQHCTZ4eWuyWAhXTeYDx
        subject_person_id: p_SXFiQu694mAk31Kwue7xfi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E94dknTZY7CG8jmjmB62Fz
          claim_id: c_e6KQHCTZ4eWuyWAhXTeYDx
          source_id: s_55sRsCYqGPWeaBD2WU1R8L
          stance: supports
          locator: CBDB:701739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701739）
          source: &a1
            id: s_55sRsCYqGPWeaBD2WU1R8L
            source_type: api_record
            title: 中国历代人物传记资料库：王立禮（CBDB 701739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701739&o=json
            external_identifier: CBDB:701739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GCWocLVNnwi9Vsqr6KzfVj
        subject_person_id: p_SXFiQu694mAk31Kwue7xfi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立禮，清人物。籍贯元和，入仕副榜，曾任縣學訓導。（中国历代人物传记资料库 CBDB 701739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WJQ1QaYgn7pwheQF7GT7-K
          claim_id: c_GCWocLVNnwi9Vsqr6KzfVj
          source_id: s_55sRsCYqGPWeaBD2WU1R8L
          stance: supports
          locator: CBDB:701739
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

# 王立禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立禮 | accepted |
| bio.summary | 王立禮，清人物。籍贯元和，入仕副榜，曾任縣學訓導。（中国历代人物传记资料库 CBDB 701739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立禮（CBDB 701739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701739&o=json)
