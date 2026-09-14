---
schema: wang-person/v1
id: p_Sj5SgaMTwGzvQR7d1NUC6n
status: active
merged_into: null
display_name: 王懋官
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kF5gomu4XYELaKZuh8i1AJ
        subject_person_id: p_Sj5SgaMTwGzvQR7d1NUC6n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_og8JmX1bPS6W75bQ9qSXRY
          claim_id: c_kF5gomu4XYELaKZuh8i1AJ
          source_id: s_CLGdZAFYRFJSJLxHsnx2aJ
          stance: supports
          locator: CBDB:337971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337971）
          source: &a1
            id: s_CLGdZAFYRFJSJLxHsnx2aJ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 337971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json
            external_identifier: CBDB:337971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H1842W2XiXQ7F5qBj4vMWv
        subject_person_id: p_Sj5SgaMTwGzvQR7d1NUC6n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋官，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337971）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EPz5U4XY5l8TGwj5YFxJdU
          claim_id: c_H1842W2XiXQ7F5qBj4vMWv
          source_id: s_CLGdZAFYRFJSJLxHsnx2aJ
          stance: supports
          locator: CBDB:337971
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DcPvIWAFhTd6QjAcDfJy0p
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sj5SgaMTwGzvQR7d1NUC6n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0i9jwFw6Ug2tREWw02mnGN
          claim_id: c_DcPvIWAFhTd6QjAcDfJy0p
          source_id: s_nPcu-8mauZFeE6h6EO37oc
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋官 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋官 之父／母。
          source:
            id: s_nPcu-8mauZFeE6h6EO37oc
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 337971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json
            external_identifier: CBDB:337971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_P8S0ioDu4wVSrMHh5gxw-8
        subject_person_id: p_Sj5SgaMTwGzvQR7d1NUC6n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SPNUnSWI5v-Erml_BhINm
          claim_id: c_P8S0ioDu4wVSrMHh5gxw-8
          source_id: s_nPcu-8mauZFeE6h6EO37oc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nPcu-8mauZFeE6h6EO37oc
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 337971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json
            external_identifier: CBDB:337971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋官 | accepted |
| bio.summary | 王懋官，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| other | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋官（CBDB 337971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337971&o=json)
