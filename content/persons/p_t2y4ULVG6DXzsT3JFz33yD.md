---
schema: wang-person/v1
id: p_t2y4ULVG6DXzsT3JFz33yD
status: active
merged_into: null
display_name: 王儀德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zP24jTU4saSkBRhShTYrnS
        subject_person_id: p_t2y4ULVG6DXzsT3JFz33yD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6dk2GN2Wf2eqDbB2XS2eZW
          claim_id: c_zP24jTU4saSkBRhShTYrnS
          source_id: s_MSTaxLH4RdNJyxMUz3cTQ5
          stance: supports
          locator: CBDB:636098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636098）
          source: &a1
            id: s_MSTaxLH4RdNJyxMUz3cTQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王儀德（CBDB 636098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636098&o=json
            external_identifier: CBDB:636098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aq2bH6967KzV2SvANQLKQj
        subject_person_id: p_t2y4ULVG6DXzsT3JFz33yD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀德，清人物。籍贯潼川府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W8oSGaIspKctLKNa5Gu91D
          claim_id: c_aq2bH6967KzV2SvANQLKQj
          source_id: s_MSTaxLH4RdNJyxMUz3cTQ5
          stance: supports
          locator: CBDB:636098
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

# 王儀德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀德 | accepted |
| bio.summary | 王儀德，清人物。籍贯潼川府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儀德（CBDB 636098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636098&o=json)
