---
schema: wang-person/v1
id: p_JH4BbkUiP1596o23ZnJrxB
status: active
merged_into: null
display_name: 王梁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aQqBybdmLZqeMwzCAw4TvD
        subject_person_id: p_JH4BbkUiP1596o23ZnJrxB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_81qsjRJCZMPLXEbx6SSUFD
          claim_id: c_aQqBybdmLZqeMwzCAw4TvD
          source_id: s_wXqymLuMi6kEvgdL8hKAHN
          stance: supports
          locator: CBDB:687007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687007）
          source: &a1
            id: s_wXqymLuMi6kEvgdL8hKAHN
            source_type: api_record
            title: 中国历代人物传记资料库：王梁（CBDB 687007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687007&o=json
            external_identifier: CBDB:687007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RB2kHyZTCNrCzqkaLhKARg
        subject_person_id: p_JH4BbkUiP1596o23ZnJrxB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梁，宋人物。入仕武舉進士。（中国历代人物传记资料库 CBDB 687007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__aO2e1OVC_qyOxq0NSOGK4
          claim_id: c_RB2kHyZTCNrCzqkaLhKARg
          source_id: s_wXqymLuMi6kEvgdL8hKAHN
          stance: supports
          locator: CBDB:687007
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

# 王梁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梁 | accepted |
| bio.summary | 王梁，宋人物。入仕武舉進士。（中国历代人物传记资料库 CBDB 687007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梁（CBDB 687007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687007&o=json)
