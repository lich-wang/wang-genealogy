---
schema: wang-person/v1
id: p_BxRbp6ipDUmBGAnJn4ozzk
status: active
merged_into: null
display_name: 王克誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p1RnTbysTuHX2DAbghHpfU
        subject_person_id: p_BxRbp6ipDUmBGAnJn4ozzk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jq3bCSefzNmdLmB62otdui
          claim_id: c_p1RnTbysTuHX2DAbghHpfU
          source_id: s_FkXCjT9nyQQuK6rvT5Ei8U
          stance: supports
          locator: CBDB:101200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101200）
          source: &a1
            id: s_FkXCjT9nyQQuK6rvT5Ei8U
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 101200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101200&o=json
            external_identifier: CBDB:101200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9d56wnvL8nXhy6ZCJDmkB
        subject_person_id: p_BxRbp6ipDUmBGAnJn4ozzk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克誠，元人物。曾任縣尉。（中国历代人物传记资料库 CBDB 101200）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PtB-4tVZV9ZL8-9Wcg-SHt
          claim_id: c_i9d56wnvL8nXhy6ZCJDmkB
          source_id: s_FkXCjT9nyQQuK6rvT5Ei8U
          stance: supports
          locator: CBDB:101200
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

# 王克誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克誠 | accepted |
| bio.summary | 王克誠，元人物。曾任縣尉。（中国历代人物传记资料库 CBDB 101200） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克誠（CBDB 101200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101200&o=json)
