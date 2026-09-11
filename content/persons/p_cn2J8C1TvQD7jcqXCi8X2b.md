---
schema: wang-person/v1
id: p_cn2J8C1TvQD7jcqXCi8X2b
status: active
merged_into: null
display_name: 王明試
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_krPis7nQBBR629p4tydNAo
        subject_person_id: p_cn2J8C1TvQD7jcqXCi8X2b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明試
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pnbZEWcoNpQ634cwLsySU8
          claim_id: c_krPis7nQBBR629p4tydNAo
          source_id: s_aXJ7aHacfVuC6a4ENM7XXA
          stance: supports
          locator: CBDB:343533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343533）
          source: &a1
            id: s_aXJ7aHacfVuC6a4ENM7XXA
            source_type: api_record
            title: 中国历代人物传记资料库：王明試（CBDB 343533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343533&o=json
            external_identifier: CBDB:343533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oouP8ZdBMXDpeAapTcC78k
        subject_person_id: p_cn2J8C1TvQD7jcqXCi8X2b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明試，清人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 343533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xH08NxGEJrNjURL064Bm16
          claim_id: c_oouP8ZdBMXDpeAapTcC78k
          source_id: s_aXJ7aHacfVuC6a4ENM7XXA
          stance: supports
          locator: CBDB:343533
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

# 王明試

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明試 | accepted |
| bio.summary | 王明試，清人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 343533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明試（CBDB 343533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343533&o=json)
