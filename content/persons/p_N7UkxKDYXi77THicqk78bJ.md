---
schema: wang-person/v1
id: p_N7UkxKDYXi77THicqk78bJ
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RMgAYQmnzwq2MdYi2a2dC8
        subject_person_id: p_N7UkxKDYXi77THicqk78bJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2kcMibtHFPUDoUaFGfhAxQ
          claim_id: c_RMgAYQmnzwq2MdYi2a2dC8
          source_id: s_zUYwds6CXQVTh53TS113y3
          stance: supports
          locator: CBDB:100748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100748）
          source: &a1
            id: s_zUYwds6CXQVTh53TS113y3
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 100748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100748&o=json
            external_identifier: CBDB:100748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Vxnra5MCpF9Lz59BPLZ1He
        subject_person_id: p_N7UkxKDYXi77THicqk78bJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1274年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TDo7gM5md6U6g5Kp7CeoaE
          claim_id: c_Vxnra5MCpF9Lz59BPLZ1He
          source_id: s_zUYwds6CXQVTh53TS113y3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_atpY1Ti3EWnC86LVCpvejB
        subject_person_id: p_N7UkxKDYXi77THicqk78bJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1331年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cjczkf67twr8JRXK1Wm6rc
          claim_id: c_atpY1Ti3EWnC86LVCpvejB
          source_id: s_zUYwds6CXQVTh53TS113y3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZFBsEgYmJ7ms493oKppxn1
        subject_person_id: p_N7UkxKDYXi77THicqk78bJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述（1274年—1331年），元人物。籍贯大都路，曾任資用庫提點、同知都漕運司事。（中国历代人物传记资料库 CBDB 100748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lHr53k1ckvtaT2zgOTwsa-
          claim_id: c_ZFBsEgYmJ7ms493oKppxn1
          source_id: s_zUYwds6CXQVTh53TS113y3
          stance: supports
          locator: CBDB:100748
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

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| birth.date | 1274年 | accepted |
| death.date | 1331年 | accepted |
| bio.summary | 王述（1274年—1331年），元人物。籍贯大都路，曾任資用庫提點、同知都漕運司事。（中国历代人物传记资料库 CBDB 100748） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 100748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100748&o=json)
