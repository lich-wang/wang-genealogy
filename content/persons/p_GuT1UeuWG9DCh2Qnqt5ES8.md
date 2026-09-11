---
schema: wang-person/v1
id: p_GuT1UeuWG9DCh2Qnqt5ES8
status: active
merged_into: null
display_name: 王注
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nPEpQzp84s4iUtENeuH3Ny
        subject_person_id: p_GuT1UeuWG9DCh2Qnqt5ES8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MFDWC1N6JoBU6TKcEevxCZ
          claim_id: c_nPEpQzp84s4iUtENeuH3Ny
          source_id: s_J5NZdK7Cqx5hys4gtXvC7c
          stance: supports
          locator: CBDB:342480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342480）
          source: &a1
            id: s_J5NZdK7Cqx5hys4gtXvC7c
            source_type: api_record
            title: 中国历代人物传记资料库：王注（CBDB 342480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342480&o=json
            external_identifier: CBDB:342480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_25KGsjmJFcehnqarvfVgyW
        subject_person_id: p_GuT1UeuWG9DCh2Qnqt5ES8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注，清人物。明清進士進士，籍贯蒲城，入仕進士。（中国历代人物传记资料库 CBDB 342480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f_VwKYy1g8nqmHH0hflmly
          claim_id: c_25KGsjmJFcehnqarvfVgyW
          source_id: s_J5NZdK7Cqx5hys4gtXvC7c
          stance: supports
          locator: CBDB:342480
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

# 王注

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王注 | accepted |
| bio.summary | 王注，清人物。明清進士進士，籍贯蒲城，入仕進士。（中国历代人物传记资料库 CBDB 342480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王注（CBDB 342480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342480&o=json)
