---
schema: wang-person/v1
id: p_4hFZ7CF7nVNBAwpCfnBPHP
status: active
merged_into: null
display_name: 王静
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U3KKKpquGGQWpBGQiMeg2v
        subject_person_id: p_4hFZ7CF7nVNBAwpCfnBPHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王静
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8oNThrLTocdNRnkqkqErRc
          claim_id: c_U3KKKpquGGQWpBGQiMeg2v
          source_id: s_TdvDRaP7DYFyFr3Z3ZmoVt
          stance: supports
          locator: CBDB:415598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415598）
          source: &a1
            id: s_TdvDRaP7DYFyFr3Z3ZmoVt
            source_type: api_record
            title: 中国历代人物传记资料库：王静（CBDB 415598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415598&o=json
            external_identifier: CBDB:415598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rod17xcEtNL9CDEt6UA6F2
        subject_person_id: p_4hFZ7CF7nVNBAwpCfnBPHP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王静，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 415598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jUoVoPHvT10Fsc9ee4Om-f
          claim_id: c_Rod17xcEtNL9CDEt6UA6F2
          source_id: s_TdvDRaP7DYFyFr3Z3ZmoVt
          stance: supports
          locator: CBDB:415598
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

# 王静

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王静 | accepted |
| bio.summary | 王静，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 415598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王静（CBDB 415598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415598&o=json)
