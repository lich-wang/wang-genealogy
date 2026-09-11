---
schema: wang-person/v1
id: p_5iw33cL248sw6QfTEUKPQC
status: active
merged_into: null
display_name: 王掞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nUkGvAC9eGLop7uirEaW4e
        subject_person_id: p_5iw33cL248sw6QfTEUKPQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REMJaN3JUUxM3PWXs69gzj
          claim_id: c_nUkGvAC9eGLop7uirEaW4e
          source_id: s_1773FMqJV6f26ykoAZKMiD
          stance: supports
          locator: CBDB:37906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37906）
          source: &a1
            id: s_1773FMqJV6f26ykoAZKMiD
            source_type: api_record
            title: 中国历代人物传记资料库：王掞（CBDB 37906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37906&o=json
            external_identifier: CBDB:37906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CydyxFvs49gDDVowKdK3G7
        subject_person_id: p_5iw33cL248sw6QfTEUKPQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掞，宋人物。籍贯成安，入仕恩蔭、蔭補，曾任殿中省丞、光祿寺主簿。（中国历代人物传记资料库 CBDB 37906）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AX4iZZ3jBzD2oTvtXWZ_p2
          claim_id: c_CydyxFvs49gDDVowKdK3G7
          source_id: s_1773FMqJV6f26ykoAZKMiD
          stance: supports
          locator: CBDB:37906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tFeyhgZkyRa9wCzYzxqz3s
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5iw33cL248sw6QfTEUKPQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lzLUCVmw3FGUnmKDjvrr8
          claim_id: c_tFeyhgZkyRa9wCzYzxqz3s
          source_id: s_1773FMqJV6f26ykoAZKMiD
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b2BNKpQqMbC3xJGHf9un3N
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王掞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王掞 | accepted |
| bio.summary | 王掞，宋人物。籍贯成安，入仕恩蔭、蔭補，曾任殿中省丞、光祿寺主簿。（中国历代人物传记资料库 CBDB 37906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2BNKpQqMbC3xJGHf9un3N | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王掞（CBDB 37906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37906&o=json)
