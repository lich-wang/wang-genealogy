---
schema: wang-person/v1
id: p_GNKPywGf8KHy1U4hhYfQqn
status: active
merged_into: null
display_name: 王壽彭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yXs9nJMjP2Wy1ZuWBwYzoU
        subject_person_id: p_GNKPywGf8KHy1U4hhYfQqn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽彭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mvmyc2D3JSuaJE9m4WtXHk
          claim_id: c_yXs9nJMjP2Wy1ZuWBwYzoU
          source_id: s_pvXvQxmgdPibFUmqjpyoHa
          stance: supports
          locator: CBDB:71647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71647）
          source: &a1
            id: s_pvXvQxmgdPibFUmqjpyoHa
            source_type: api_record
            title: 中国历代人物传记资料库：王壽彭（CBDB 71647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71647&o=json
            external_identifier: CBDB:71647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E42iouhEvpvWVLpSZxtMqE
        subject_person_id: p_GNKPywGf8KHy1U4hhYfQqn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1874年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tv83eDP9TCqhFBm7djP65j
          claim_id: c_E42iouhEvpvWVLpSZxtMqE
          source_id: s_pvXvQxmgdPibFUmqjpyoHa
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
        id: c_dS63W14fM58uvab6fX2n2L
        subject_person_id: p_GNKPywGf8KHy1U4hhYfQqn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1929年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X884Fk46wpdNphSBsQgAM4
          claim_id: c_dS63W14fM58uvab6fX2n2L
          source_id: s_pvXvQxmgdPibFUmqjpyoHa
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
        id: c_Q5yHPR79iAs1AZLsuCMAXz
        subject_person_id: p_GNKPywGf8KHy1U4hhYfQqn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽彭（1874年—1929年），中華民國人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71647）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__LOOh8Ff1bd6SlTffuNg_A
          claim_id: c_Q5yHPR79iAs1AZLsuCMAXz
          source_id: s_pvXvQxmgdPibFUmqjpyoHa
          stance: supports
          locator: CBDB:71647
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

# 王壽彭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽彭 | accepted |
| birth.date | 1874年 | accepted |
| death.date | 1929年 | accepted |
| bio.summary | 王壽彭（1874年—1929年），中華民國人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71647） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽彭（CBDB 71647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71647&o=json)
