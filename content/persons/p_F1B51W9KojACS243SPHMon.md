---
schema: wang-person/v1
id: p_F1B51W9KojACS243SPHMon
status: active
merged_into: null
display_name: 王機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rB7c16aVp9cxLBaSrjGg55
        subject_person_id: p_F1B51W9KojACS243SPHMon
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GoNVkypRN26vJa9QA9Ls9E
          claim_id: c_rB7c16aVp9cxLBaSrjGg55
          source_id: s_WnMsrnGBKRGN1EKppX9bVa
          stance: supports
          locator: CBDB:35625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35625）
          source: &a1
            id: s_WnMsrnGBKRGN1EKppX9bVa
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 35625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35625&o=json
            external_identifier: CBDB:35625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pFeBXfkoYZM8hGkjuoYhq4
        subject_person_id: p_F1B51W9KojACS243SPHMon
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35625）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Or1OH1275ZdS5VWseE0lym
          claim_id: c_pFeBXfkoYZM8hGkjuoYhq4
          source_id: s_WnMsrnGBKRGN1EKppX9bVa
          stance: supports
          locator: CBDB:35625
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

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| bio.summary | 王機，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35625） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 35625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35625&o=json)
