---
schema: wang-person/v1
id: p_XT2mdTfSzGjAbobC1chTex
status: active
merged_into: null
display_name: 王民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YZPArFGYB2VqCZsDHKUcmp
        subject_person_id: p_XT2mdTfSzGjAbobC1chTex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bKUysDxqWosPAv5DAq7NvW
          claim_id: c_YZPArFGYB2VqCZsDHKUcmp
          source_id: s_tT1xJbzyW7Z6uKAzZd9xcE
          stance: supports
          locator: CBDB:343677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343677）
          source: &a1
            id: s_tT1xJbzyW7Z6uKAzZd9xcE
            source_type: api_record
            title: 中国历代人物传记资料库：王民（CBDB 343677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343677&o=json
            external_identifier: CBDB:343677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vNBWJ69rwYpq8X6bTm8dvD
        subject_person_id: p_XT2mdTfSzGjAbobC1chTex
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民，明人物。明清進士進士，籍贯故城，入仕進士。（中国历代人物传记资料库 CBDB 343677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nBcO2PSBh03k12D58KQ_P8
          claim_id: c_vNBWJ69rwYpq8X6bTm8dvD
          source_id: s_tT1xJbzyW7Z6uKAzZd9xcE
          stance: supports
          locator: CBDB:343677
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

# 王民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民 | accepted |
| bio.summary | 王民，明人物。明清進士進士，籍贯故城，入仕進士。（中国历代人物传记资料库 CBDB 343677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王民（CBDB 343677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343677&o=json)
