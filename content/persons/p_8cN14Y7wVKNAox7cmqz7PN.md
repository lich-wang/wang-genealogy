---
schema: wang-person/v1
id: p_8cN14Y7wVKNAox7cmqz7PN
status: active
merged_into: null
display_name: 王春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ee7YExAkGVbeujcHcLzEzH
        subject_person_id: p_8cN14Y7wVKNAox7cmqz7PN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sz7RWMGSgwDppvT7nmEhdB
          claim_id: c_Ee7YExAkGVbeujcHcLzEzH
          source_id: s_D4eSnJ1AhkVUyMHtAheAAQ
          stance: supports
          locator: CBDB:474579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474579）
          source: &a1
            id: s_D4eSnJ1AhkVUyMHtAheAAQ
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 474579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474579&o=json
            external_identifier: CBDB:474579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A1RebeXGTjpCjuRMNFuvNF
        subject_person_id: p_8cN14Y7wVKNAox7cmqz7PN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 474579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BD-0glgDrlCePkmOqAJ7Os
          claim_id: c_A1RebeXGTjpCjuRMNFuvNF
          source_id: s_D4eSnJ1AhkVUyMHtAheAAQ
          stance: supports
          locator: CBDB:474579
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

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| bio.summary | 王春，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 474579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 474579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474579&o=json)
