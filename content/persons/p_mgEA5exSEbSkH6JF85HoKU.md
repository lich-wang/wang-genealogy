---
schema: wang-person/v1
id: p_mgEA5exSEbSkH6JF85HoKU
status: active
merged_into: null
display_name: 王以寬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cf16qC4hFHfKne1rVm7aef
        subject_person_id: p_mgEA5exSEbSkH6JF85HoKU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r7EBdnNyE7QbPg77yqwK9B
          claim_id: c_Cf16qC4hFHfKne1rVm7aef
          source_id: s_Tgn5SfHAbjvL7HUf4X3gP6
          stance: supports
          locator: CBDB:694493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694493）
          source: &a1
            id: s_Tgn5SfHAbjvL7HUf4X3gP6
            source_type: api_record
            title: 中国历代人物传记资料库：王以寬（CBDB 694493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694493&o=json
            external_identifier: CBDB:694493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XxtBPxhtAUAXX25PFFA7Eg
        subject_person_id: p_mgEA5exSEbSkH6JF85HoKU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以寬，清人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 694493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wGz_svQrdQunU4uWXUMKnH
          claim_id: c_XxtBPxhtAUAXX25PFFA7Eg
          source_id: s_Tgn5SfHAbjvL7HUf4X3gP6
          stance: supports
          locator: CBDB:694493
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
        id: c_sCnLakAFHsiHVb9_W77fG9
        subject_person_id: p_SCJjaGcbE3Xjfax8EU8Qd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mgEA5exSEbSkH6JF85HoKU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mcyvBaafSHTy0Q07iH54dI
          claim_id: c_sCnLakAFHsiHVb9_W77fG9
          source_id: s_qONO69NZ5ROp6DGPhnbAdE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 694493 王以寬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qONO69NZ5ROp6DGPhnbAdE
            source_type: api_record
            title: 中国历代人物传记资料库：王以誠（CBDB 693846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693846&o=json
            external_identifier: CBDB:693846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SCJjaGcbE3Xjfax8EU8Qd4
        status: active
        display_name: 王以誠
        merged_into_person_id: null
---

# 王以寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以寬 | accepted |
| bio.summary | 王以寬，清人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 694493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_SCJjaGcbE3Xjfax8EU8Qd4 | 王以誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以誠（CBDB 693846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693846&o=json)
- [中国历代人物传记资料库：王以寬（CBDB 694493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694493&o=json)
