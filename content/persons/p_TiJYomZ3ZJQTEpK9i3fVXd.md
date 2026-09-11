---
schema: wang-person/v1
id: p_TiJYomZ3ZJQTEpK9i3fVXd
status: active
merged_into: null
display_name: 王伯勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2h3tE44UZdFsVWP2XF9JmZ
        subject_person_id: p_TiJYomZ3ZJQTEpK9i3fVXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CgDmALnEG4rxYWe2QiJB76
          claim_id: c_2h3tE44UZdFsVWP2XF9JmZ
          source_id: s_j74uNqei4JD4LTTTmJuBpw
          stance: supports
          locator: CBDB:101185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101185）
          source: &a1
            id: s_j74uNqei4JD4LTTTmJuBpw
            source_type: api_record
            title: 中国历代人物传记资料库：王伯勝（CBDB 101185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101185&o=json
            external_identifier: CBDB:101185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_D9M6MF9A11KBY7K6DnTZsV
        subject_person_id: p_TiJYomZ3ZJQTEpK9i3fVXd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1326年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pstywDpXTvxbwsY5FoFK6j
          claim_id: c_D9M6MF9A11KBY7K6DnTZsV
          source_id: s_j74uNqei4JD4LTTTmJuBpw
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
        id: c_5m5KHQKXYzQQLqUnphRHJi
        subject_person_id: p_TiJYomZ3ZJQTEpK9i3fVXd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯勝（卒于1326年），元人物。籍贯文安，曾任都指揮使、親軍都指揮使、宿衛。（中国历代人物传记资料库 CBDB 101185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UvLpj9bjumAVugWef1RDgf
          claim_id: c_5m5KHQKXYzQQLqUnphRHJi
          source_id: s_j74uNqei4JD4LTTTmJuBpw
          stance: supports
          locator: CBDB:101185
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

# 王伯勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯勝 | accepted |
| death.date | 1326年 | accepted |
| bio.summary | 王伯勝（卒于1326年），元人物。籍贯文安，曾任都指揮使、親軍都指揮使、宿衛。（中国历代人物传记资料库 CBDB 101185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯勝（CBDB 101185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101185&o=json)
