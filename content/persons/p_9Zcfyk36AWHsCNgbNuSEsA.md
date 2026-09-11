---
schema: wang-person/v1
id: p_9Zcfyk36AWHsCNgbNuSEsA
status: active
merged_into: null
display_name: 王恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s6iy7bbqYMdPps5ABzJ96q
        subject_person_id: p_9Zcfyk36AWHsCNgbNuSEsA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LGQCxBPoym11yPHzTVQ6Dt
          claim_id: c_s6iy7bbqYMdPps5ABzJ96q
          source_id: s_kuN4jANUMz1QviWpTJqoNA
          stance: supports
          locator: CBDB:458715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458715）
          source: &a1
            id: s_kuN4jANUMz1QviWpTJqoNA
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 458715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458715&o=json
            external_identifier: CBDB:458715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jEeNXR5Aht3NB5MgGEvqnP
        subject_person_id: p_9Zcfyk36AWHsCNgbNuSEsA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 458715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xv9zLjCZcq9QyQiCIGoFio
          claim_id: c_jEeNXR5Aht3NB5MgGEvqnP
          source_id: s_kuN4jANUMz1QviWpTJqoNA
          stance: supports
          locator: CBDB:458715
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

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| bio.summary | 王恩，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 458715） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 458715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458715&o=json)
