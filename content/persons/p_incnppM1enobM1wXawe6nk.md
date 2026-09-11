---
schema: wang-person/v1
id: p_incnppM1enobM1wXawe6nk
status: active
merged_into: null
display_name: 王韋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T9tL8D73W694RM3D9KHNEx
        subject_person_id: p_incnppM1enobM1wXawe6nk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TcCNk75c3M6VjYAnn7ffKE
          claim_id: c_T9tL8D73W694RM3D9KHNEx
          source_id: s_eoJin4cHyoBQ4XsQN8a81x
          stance: supports
          locator: CBDB:547132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547132）
          source: &a1
            id: s_eoJin4cHyoBQ4XsQN8a81x
            source_type: api_record
            title: 中国历代人物传记资料库：王韋（CBDB 547132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547132&o=json
            external_identifier: CBDB:547132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_owbTQor1bu9FNuvNBcLPGN
        subject_person_id: p_incnppM1enobM1wXawe6nk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韋，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 547132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J3PMKfjbIPPEilGLIAFDdV
          claim_id: c_owbTQor1bu9FNuvNBcLPGN
          source_id: s_eoJin4cHyoBQ4XsQN8a81x
          stance: supports
          locator: CBDB:547132
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

# 王韋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韋 | accepted |
| bio.summary | 王韋，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 547132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韋（CBDB 547132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547132&o=json)
