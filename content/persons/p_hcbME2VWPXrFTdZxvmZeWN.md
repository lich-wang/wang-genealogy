---
schema: wang-person/v1
id: p_hcbME2VWPXrFTdZxvmZeWN
status: active
merged_into: null
display_name: 王宗望
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C1QjedEm7HJoH6ot2LpVMs
        subject_person_id: p_hcbME2VWPXrFTdZxvmZeWN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZcZNEw2MxJpg2LKSPAxZtG
          claim_id: c_C1QjedEm7HJoH6ot2LpVMs
          source_id: s_uMb65cWJ7XC4TjMCPNVxi7
          stance: supports
          locator: CBDB:37629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37629）
          source: &a1
            id: s_uMb65cWJ7XC4TjMCPNVxi7
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 37629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37629&o=json
            external_identifier: CBDB:37629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8AQShKHnPaDYSBrJreqVCk
        subject_person_id: p_hcbME2VWPXrFTdZxvmZeWN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望，宋人物。籍贯長溪，曾任都監。（中国历代人物传记资料库 CBDB 37629）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R7pcr9gQVeyQJpmLdhRzD3
          claim_id: c_8AQShKHnPaDYSBrJreqVCk
          source_id: s_uMb65cWJ7XC4TjMCPNVxi7
          stance: supports
          locator: CBDB:37629
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
  other:
    - claim:
        id: c_-RUByL4cHBg0yoGIaZFoCK
        subject_person_id: p_PYM7TF8n5zz54ZhKXXXqUT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hcbME2VWPXrFTdZxvmZeWN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_StW55cYeWZ1POe1DVnqyD1
          claim_id: c_-RUByL4cHBg0yoGIaZFoCK
          source_id: s_4iuSFE0_g_X_mG9HGv81Av
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 37631 王萬章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4iuSFE0_g_X_mG9HGv81Av
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 37629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37629&o=json
            external_identifier: CBDB:37629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PYM7TF8n5zz54ZhKXXXqUT
        status: active
        display_name: 王萬章
        merged_into_person_id: null
---

# 王宗望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗望 | accepted |
| bio.summary | 王宗望，宋人物。籍贯長溪，曾任都監。（中国历代人物传记资料库 CBDB 37629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_PYM7TF8n5zz54ZhKXXXqUT | 王萬章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗望（CBDB 37629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37629&o=json)
