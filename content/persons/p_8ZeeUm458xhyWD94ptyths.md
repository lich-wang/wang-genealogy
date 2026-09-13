---
schema: wang-person/v1
id: p_8ZeeUm458xhyWD94ptyths
status: active
merged_into: null
display_name: 王暋
cbdb_id: 237228
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ogM6PUJ6HbgB28HrGW2ELe
        subject_person_id: p_8ZeeUm458xhyWD94ptyths
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暋，明人物。正統四年進士，籍贯高平。（中国历代人物传记资料库 CBDB 237228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ve15Gv8QVnHK2UW7GeABee
          claim_id: c_ogM6PUJ6HbgB28HrGW2ELe
          source_id: s_314jy2xbMktmYdMx98zmDd
          stance: supports
          locator: CBDB:237228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_314jy2xbMktmYdMx98zmDd
            source_type: api_record
            title: 中国历代人物传记资料库：王暋（CBDB 237228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json
            external_identifier: CBDB:237228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vEsxGwrHK3ZBG565L8iYe6
        subject_person_id: p_8ZeeUm458xhyWD94ptyths
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xe9t84N7K9kEEXEpoP4PNS
          claim_id: c_vEsxGwrHK3ZBG565L8iYe6
          source_id: s_314jy2xbMktmYdMx98zmDd
          stance: supports
          locator: CBDB:237228
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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

# 王暋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暋，明人物。正統四年進士，籍贯高平。（中国历代人物传记资料库 CBDB 237228） | accepted |
| name.primary | 王暋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暋（CBDB 237228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json)
