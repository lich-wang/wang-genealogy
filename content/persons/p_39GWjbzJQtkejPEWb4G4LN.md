---
schema: wang-person/v1
id: p_39GWjbzJQtkejPEWb4G4LN
status: active
merged_into: null
display_name: 陈树勷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4U91sVb0vovUS3k68BGStw
        subject_person_id: p_39GWjbzJQtkejPEWb4G4LN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈树勷，明人物。中国历代人物传记资料库（CBDB）以人物编号 55734 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BhQxoaFqMJuxcw2cJ0aD_M
          claim_id: c_4U91sVb0vovUS3k68BGStw
          source_id: s_gJ5QQs2J1za1EPMkDa5BLa
          stance: supports
          locator: CBDB:55734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gJ5QQs2J1za1EPMkDa5BLa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳樹勷（55734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55734&o=json
            external_identifier: CBDB:55734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:17.951Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9caDXVe69JwDEVmsCo8cG
        subject_person_id: p_39GWjbzJQtkejPEWb4G4LN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈树勷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JyCm8ghwTFBQ3xHHMDTkFb
          claim_id: c_c9caDXVe69JwDEVmsCo8cG
          source_id: s_TeSZTvrheVTa7PgrrzU9ny
          stance: supports
          locator: Q45486010
          quotation: null
          interpretation_note: null
          source:
            id: s_TeSZTvrheVTa7PgrrzU9ny
            source_type: api_record
            title: 维基数据：陈树勷（Q45486010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45486010
            external_identifier: Q45486010
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
        - id: cs_YBrgRmM39qx5xG8zfB8hFo
          claim_id: c_c9caDXVe69JwDEVmsCo8cG
          source_id: s_gJ5QQs2J1za1EPMkDa5BLa
          stance: supports
          locator: Q45486010
          quotation: null
          interpretation_note: null
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

# 陈树勷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈树勷，明人物。中国历代人物传记资料库（CBDB）以人物编号 55734 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈树勷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：陈树勷（Q45486010）](https://www.wikidata.org/wiki/Q45486010)
- [CBDB 中国历代人物传记资料库：陳樹勷（55734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55734&o=json)
