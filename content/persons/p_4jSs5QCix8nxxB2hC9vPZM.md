---
schema: wang-person/v1
id: p_4jSs5QCix8nxxB2hC9vPZM
status: active
merged_into: null
display_name: 王道純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JLEtQGfQsUETw1x5x2Bu1G
        subject_person_id: p_4jSs5QCix8nxxB2hC9vPZM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JAjQ2yANUJE9ChJAWEwB9f
          claim_id: c_JLEtQGfQsUETw1x5x2Bu1G
          source_id: s_mQXrCZPw9Tmw7EN121ETTe
          stance: supports
          locator: CBDB:61047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61047）
          source: &a1
            id: s_mQXrCZPw9Tmw7EN121ETTe
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 61047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61047&o=json
            external_identifier: CBDB:61047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EScK7g5Q6PnxDuwNWx46QF
        subject_person_id: p_4jSs5QCix8nxxB2hC9vPZM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純，明人物。明清進士進士，籍贯蒲城，入仕進士，曾任巡按御史、御史、中書舍人。（中国历代人物传记资料库 CBDB 61047）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hg7U0FcIKAUNOfzXZK-3qC
          claim_id: c_EScK7g5Q6PnxDuwNWx46QF
          source_id: s_mQXrCZPw9Tmw7EN121ETTe
          stance: supports
          locator: CBDB:61047
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

# 王道純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道純 | accepted |
| bio.summary | 王道純，明人物。明清進士進士，籍贯蒲城，入仕進士，曾任巡按御史、御史、中書舍人。（中国历代人物传记资料库 CBDB 61047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道純（CBDB 61047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61047&o=json)
