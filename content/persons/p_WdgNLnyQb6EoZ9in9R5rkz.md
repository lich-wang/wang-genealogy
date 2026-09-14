---
schema: wang-person/v1
id: p_WdgNLnyQb6EoZ9in9R5rkz
status: active
merged_into: null
display_name: 王勉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJdDngcuX2MdZ9v21oCycX
        subject_person_id: p_WdgNLnyQb6EoZ9in9R5rkz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MGvyxAoLNUtU6ZFmQ9EZ4o
          claim_id: c_uJdDngcuX2MdZ9v21oCycX
          source_id: s_7bFSEERFzBLjQ875EEKmbt
          stance: supports
          locator: CBDB:281050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281050）
          source: &a1
            id: s_7bFSEERFzBLjQ875EEKmbt
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 281050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281050&o=json
            external_identifier: CBDB:281050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6QGGtQ6WxABWx2Eh4xhaK5
        subject_person_id: p_WdgNLnyQb6EoZ9in9R5rkz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D_FjmX223fmU0VCYcIPpWU
          claim_id: c_6QGGtQ6WxABWx2Eh4xhaK5
          source_id: s_7bFSEERFzBLjQ875EEKmbt
          stance: supports
          locator: CBDB:281050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7lnGkdQzJCxpnlp3Cil5Vt
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdgNLnyQb6EoZ9in9R5rkz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAqVS8F3r51b6_pwdRnNYE
          claim_id: c_7lnGkdQzJCxpnlp3Cil5Vt
          source_id: s_QoP9e6SCoywN08qk9Ghhdw
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王勉 与 王可學 为同胞（CBDB 记「弟」），王可學 之父／母即 王勉 之父／母。
          source:
            id: s_QoP9e6SCoywN08qk9Ghhdw
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 281050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281050&o=json
            external_identifier: CBDB:281050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XaytARoatp4GyyU4wEdtEn
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CzK4R8fvRzQWpD-wbARk-F
        subject_person_id: p_WdgNLnyQb6EoZ9in9R5rkz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqoj0tttc0dwUgCuDQJNU5
          claim_id: c_CzK4R8fvRzQWpD-wbARk-F
          source_id: s_QoP9e6SCoywN08qk9Ghhdw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201954 王可學）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QoP9e6SCoywN08qk9Ghhdw
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 281050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281050&o=json
            external_identifier: CBDB:281050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z4K3ehvdbQWDKCv3VLhZDK
        status: active
        display_name: 王可學
        merged_into_person_id: null
---

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| bio.summary | 王勉，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XaytARoatp4GyyU4wEdtEn | 王鑑 | accepted |
| other | p_z4K3ehvdbQWDKCv3VLhZDK | 王可學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 281050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281050&o=json)
