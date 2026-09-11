---
schema: wang-person/v1
id: p_Qew6FkicNHBdFy2ao39B1f
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PeLf6dB9i19omdBS3C2ttJ
        subject_person_id: p_Qew6FkicNHBdFy2ao39B1f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PyN5tX2Ert5jX16epB47F6
          claim_id: c_PeLf6dB9i19omdBS3C2ttJ
          source_id: s_31rTAwKAJfQAUWhWw65F6g
          stance: supports
          locator: CBDB:245409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245409）
          source: &a1
            id: s_31rTAwKAJfQAUWhWw65F6g
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 245409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245409&o=json
            external_identifier: CBDB:245409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8aE8Wp2pVPFk5d8zTZGBce
        subject_person_id: p_Qew6FkicNHBdFy2ao39B1f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_InIIlem5yZL3MHjvTPZO1R
          claim_id: c_8aE8Wp2pVPFk5d8zTZGBce
          source_id: s_31rTAwKAJfQAUWhWw65F6g
          stance: supports
          locator: CBDB:245409
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 245409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245409&o=json)
