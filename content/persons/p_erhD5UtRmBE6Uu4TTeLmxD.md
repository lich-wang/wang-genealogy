---
schema: wang-person/v1
id: p_erhD5UtRmBE6Uu4TTeLmxD
status: active
merged_into: null
display_name: 王穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tX2ADGcAkRzT6yqRqLy3eY
        subject_person_id: p_erhD5UtRmBE6Uu4TTeLmxD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTAjo1Lor6yBUAPGv6hbFq
          claim_id: c_tX2ADGcAkRzT6yqRqLy3eY
          source_id: s_s7AV9S7QoENVVHTzLcFgR5
          stance: supports
          locator: CBDB:37872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37872）
          source: &a1
            id: s_s7AV9S7QoENVVHTzLcFgR5
            source_type: api_record
            title: 中国历代人物传记资料库：王穀（CBDB 37872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37872&o=json
            external_identifier: CBDB:37872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JySQ6xXHQ8gAAbfEbGKUPn
        subject_person_id: p_erhD5UtRmBE6Uu4TTeLmxD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀，宋人物。籍贯郾城，身份为儒學、畫家，曾任大理寺卿。（中国历代人物传记资料库 CBDB 37872）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SSTEwt0jv4XAPqQt224XWT
          claim_id: c_JySQ6xXHQ8gAAbfEbGKUPn
          source_id: s_s7AV9S7QoENVVHTzLcFgR5
          stance: supports
          locator: CBDB:37872
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

# 王穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穀 | accepted |
| bio.summary | 王穀，宋人物。籍贯郾城，身份为儒學、畫家，曾任大理寺卿。（中国历代人物传记资料库 CBDB 37872） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穀（CBDB 37872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37872&o=json)
