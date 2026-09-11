---
schema: wang-person/v1
id: p_ydmoqyLGsMAVtykKXaCE6P
status: active
merged_into: null
display_name: 王瓘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LrJXyLKba5sVVmLGKiTtY3
        subject_person_id: p_ydmoqyLGsMAVtykKXaCE6P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ji8VCMwTJxdG91PP36DzE3
          claim_id: c_LrJXyLKba5sVVmLGKiTtY3
          source_id: s_QoJ47ugP4TXy7FDZeFq832
          stance: supports
          locator: CBDB:560346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560346）
          source: &a1
            id: s_QoJ47ugP4TXy7FDZeFq832
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 560346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560346&o=json
            external_identifier: CBDB:560346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RSe9vsh96M2GJoHgtCRozu
        subject_person_id: p_ydmoqyLGsMAVtykKXaCE6P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘，明人物。籍贯內鄉。（中国历代人物传记资料库 CBDB 560346）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nPm3L6nnzh2f1GOu0NROyp
          claim_id: c_RSe9vsh96M2GJoHgtCRozu
          source_id: s_QoJ47ugP4TXy7FDZeFq832
          stance: supports
          locator: CBDB:560346
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
  spouses:
    - claim:
        id: c_2odQ6BIrYB0USmk4ozmOxp
        subject_person_id: p_ydmoqyLGsMAVtykKXaCE6P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nfkGGoTDR8jmUGN2irkigp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AO6EIbw6e4-rVKePUpV8BY
          claim_id: c_2odQ6BIrYB0USmk4ozmOxp
          source_id: s_WpUBqGzf5xiXLTU2sfYqpf
          stance: supports
          locator: 南陽府志，lgid=878853：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WpUBqGzf5xiXLTU2sfYqpf
            source_type: api_record
            title: 中国历代人物传记资料库：曾氏(王瓘妻)（CBDB 560347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560347&o=json
            external_identifier: CBDB:560347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nfkGGoTDR8jmUGN2irkigp
        status: active
        display_name: 曾氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓘 | accepted |
| bio.summary | 王瓘，明人物。籍贯內鄉。（中国历代人物传记资料库 CBDB 560346） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nfkGGoTDR8jmUGN2irkigp | 曾氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾氏(王瓘妻)（CBDB 560347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560347&o=json)
- [中国历代人物传记资料库：王瓘（CBDB 560346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560346&o=json)
