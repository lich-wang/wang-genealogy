---
schema: wang-person/v1
id: p_uniLqgzge71dmTKasq5KKr
status: active
merged_into: null
display_name: 王三
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4QB1YnP3YyZpprEHu1Cfk
        subject_person_id: p_uniLqgzge71dmTKasq5KKr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三，明人物。中国历代人物传记资料库（CBDB）以人物编号 253006 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HzmBtFbxx4pmXfGa82UB0v
          claim_id: c_u4QB1YnP3YyZpprEHu1Cfk
          source_id: s_GWo1aTQGU6Q1v516zK3Vdp
          stance: supports
          locator: CBDB:253006
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_GWo1aTQGU6Q1v516zK3Vdp
            source_type: api_record
            title: 中国历代人物传记资料库：王三（CBDB 253006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253006&o=json
            external_identifier: CBDB:253006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJ8AUNG1f3MG1it5ZxHdcy
        subject_person_id: p_uniLqgzge71dmTKasq5KKr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cwsHCHJVkGPAB9M4LKcpNm
          claim_id: c_SJ8AUNG1f3MG1it5ZxHdcy
          source_id: s_GWo1aTQGU6Q1v516zK3Vdp
          stance: supports
          locator: CBDB:253006
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_GWo1aTQGU6Q1v516zK3Vdp
            source_type: api_record
            title: 中国历代人物传记资料库：王三（CBDB 253006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253006&o=json
            external_identifier: CBDB:253006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
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

# 王三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三，明人物。中国历代人物传记资料库（CBDB）以人物编号 253006 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王三 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三（CBDB 253006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253006&o=json)
