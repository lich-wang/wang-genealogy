---
schema: wang-person/v1
id: p_tHoiEntMGmGPthtv91CRs5
status: active
merged_into: null
display_name: 王霈蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TBxkQPmBvBL1HTH733yotW
        subject_person_id: p_tHoiEntMGmGPthtv91CRs5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霈蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sqFKntXTGbd5pBFP6uGs8K
          claim_id: c_TBxkQPmBvBL1HTH733yotW
          source_id: s_C4W9NaTPgspJea1JPN8a6X
          stance: supports
          locator: CBDB:640832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640832）
          source: &a1
            id: s_C4W9NaTPgspJea1JPN8a6X
            source_type: api_record
            title: 中国历代人物传记资料库：王霈蘭（CBDB 640832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640832&o=json
            external_identifier: CBDB:640832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yFFXXn64ANNwM39KqwVwDc
        subject_person_id: p_tHoiEntMGmGPthtv91CRs5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霈蘭，清人物。籍贯思南府直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9eVe9jbM6IlCMz1q_bLYKy
          claim_id: c_yFFXXn64ANNwM39KqwVwDc
          source_id: s_C4W9NaTPgspJea1JPN8a6X
          stance: supports
          locator: CBDB:640832
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

# 王霈蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霈蘭 | accepted |
| bio.summary | 王霈蘭，清人物。籍贯思南府直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霈蘭（CBDB 640832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640832&o=json)
