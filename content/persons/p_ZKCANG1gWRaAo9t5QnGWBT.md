---
schema: wang-person/v1
id: p_ZKCANG1gWRaAo9t5QnGWBT
status: active
merged_into: null
display_name: 王汝弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H43D19PALZTU2M5nRkRUm9
        subject_person_id: p_ZKCANG1gWRaAo9t5QnGWBT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yR2WGMKUEVpq3TNrhaMUN6
          claim_id: c_H43D19PALZTU2M5nRkRUm9
          source_id: s_StvuRpGLHb67oYJos7cXP7
          stance: supports
          locator: CBDB:690641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690641）
          source: &a1
            id: s_StvuRpGLHb67oYJos7cXP7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝弼（CBDB 690641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690641&o=json
            external_identifier: CBDB:690641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ACQjiMEiDJPoH1BgzHpAyD
        subject_person_id: p_ZKCANG1gWRaAo9t5QnGWBT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1263年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7PohyWs1zmF6gx1BBVhS5
          claim_id: c_ACQjiMEiDJPoH1BgzHpAyD
          source_id: s_StvuRpGLHb67oYJos7cXP7
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
        id: c_8kx595KBwRSF7tRgZyU6xC
        subject_person_id: p_ZKCANG1gWRaAo9t5QnGWBT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SvHsXEHbsCBmLdE2EDbRFL
          claim_id: c_8kx595KBwRSF7tRgZyU6xC
          source_id: s_StvuRpGLHb67oYJos7cXP7
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
        id: c_pD89uECx5ettBBkM8q4ZVf
        subject_person_id: p_ZKCANG1gWRaAo9t5QnGWBT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝弼（1263年—1314年），元人物。籍贯東莞。（中国历代人物传记资料库 CBDB 690641）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tFgh7lsVbWXHlycxIGBaDv
          claim_id: c_pD89uECx5ettBBkM8q4ZVf
          source_id: s_StvuRpGLHb67oYJos7cXP7
          stance: supports
          locator: CBDB:690641
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

# 王汝弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝弼 | accepted |
| birth.date | 1263年 | accepted |
| death.date | 1314年 | accepted |
| bio.summary | 王汝弼（1263年—1314年），元人物。籍贯東莞。（中国历代人物传记资料库 CBDB 690641） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝弼（CBDB 690641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690641&o=json)
