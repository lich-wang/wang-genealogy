---
schema: wang-person/v1
id: p_DETEvzeBubX45FgE9jDjJB
status: active
merged_into: null
display_name: 王邁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9izTd6rXjk5dCjK3Fxu6bP
        subject_person_id: p_DETEvzeBubX45FgE9jDjJB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HSBCKP6dFL4AQqHpqQLRPX
          claim_id: c_9izTd6rXjk5dCjK3Fxu6bP
          source_id: s_hrY2DAAezNtn3qEARUCtdD
          stance: supports
          locator: CBDB:290821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290821）
          source: &a1
            id: s_hrY2DAAezNtn3qEARUCtdD
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 290821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json
            external_identifier: CBDB:290821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1pdz6GsBQXY18GfBDmD8A
        subject_person_id: p_DETEvzeBubX45FgE9jDjJB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_248IHmmfJZREtnewgzvlVP
          claim_id: c_D1pdz6GsBQXY18GfBDmD8A
          source_id: s_hrY2DAAezNtn3qEARUCtdD
          stance: supports
          locator: CBDB:290821
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0XllfvcFBrkOqT_BYx4pi3
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DETEvzeBubX45FgE9jDjJB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZ4ZdZ10XrG2euMEJUCUST
          claim_id: c_0XllfvcFBrkOqT_BYx4pi3
          source_id: s_ZnYlEhSpijw83RTOtCcBTK
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王邁 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王邁 之父／母。
          source:
            id: s_ZnYlEhSpijw83RTOtCcBTK
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 290821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json
            external_identifier: CBDB:290821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XQh8OkFdqGCaOCZUCsnBFc
        subject_person_id: p_DETEvzeBubX45FgE9jDjJB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wijIm4fIXgsD4oChvv-5QP
          claim_id: c_XQh8OkFdqGCaOCZUCsnBFc
          source_id: s_ZnYlEhSpijw83RTOtCcBTK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZnYlEhSpijw83RTOtCcBTK
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 290821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json
            external_identifier: CBDB:290821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
---

# 王邁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁 | accepted |
| bio.summary | 王邁，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| other | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邁（CBDB 290821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json)
