---
schema: wang-person/v1
id: p_bDAat8Debx8UXk7s77hMw6
status: active
merged_into: null
display_name: 王丙壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8WRQXfaUcunauApSs2JzU
        subject_person_id: p_bDAat8Debx8UXk7s77hMw6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ui4D3kpS4edzY8aasiaUz
          claim_id: c_w8WRQXfaUcunauApSs2JzU
          source_id: s_gDXcHLEGnz7bvMoseijrRR
          stance: supports
          locator: CBDB:635730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635730）
          source: &a1
            id: s_gDXcHLEGnz7bvMoseijrRR
            source_type: api_record
            title: 中国历代人物传记资料库：王丙壽（CBDB 635730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635730&o=json
            external_identifier: CBDB:635730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tGWp2VqZj1macBMVvYpdqE
        subject_person_id: p_bDAat8Debx8UXk7s77hMw6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙壽，清人物。籍贯安慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Jqv46JzbatA_Jl3CGlDi7
          claim_id: c_tGWp2VqZj1macBMVvYpdqE
          source_id: s_gDXcHLEGnz7bvMoseijrRR
          stance: supports
          locator: CBDB:635730
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

# 王丙壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丙壽 | accepted |
| bio.summary | 王丙壽，清人物。籍贯安慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丙壽（CBDB 635730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635730&o=json)
