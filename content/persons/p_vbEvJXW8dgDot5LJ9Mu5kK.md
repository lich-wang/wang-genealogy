---
schema: wang-person/v1
id: p_vbEvJXW8dgDot5LJ9Mu5kK
status: active
merged_into: null
display_name: 王熺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7tgATZgutFghua9f7VVRUW
        subject_person_id: p_vbEvJXW8dgDot5LJ9Mu5kK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DTLsHS1PU52VEVi5sQF4aV
          claim_id: c_7tgATZgutFghua9f7VVRUW
          source_id: s_LGpicTt13nsG7hCne6je37
          stance: supports
          locator: CBDB:415084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415084）
          source: &a1
            id: s_LGpicTt13nsG7hCne6je37
            source_type: api_record
            title: 中国历代人物传记资料库：王熺（CBDB 415084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415084&o=json
            external_identifier: CBDB:415084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hiKaSzQGE2W2UrkFhTtCVt
        subject_person_id: p_vbEvJXW8dgDot5LJ9Mu5kK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熺，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 415084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VlGKnU0H-QrfyUjnnKLQ_D
          claim_id: c_hiKaSzQGE2W2UrkFhTtCVt
          source_id: s_LGpicTt13nsG7hCne6je37
          stance: supports
          locator: CBDB:415084
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

# 王熺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熺 | accepted |
| bio.summary | 王熺，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 415084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熺（CBDB 415084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415084&o=json)
