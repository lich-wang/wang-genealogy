---
schema: wang-person/v1
id: p_xmkqssZLoj8LftLRofiQaa
status: active
merged_into: null
display_name: 王時楷
cbdb_id: 280640
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TjuEewTb9Pxn4kXSGoc1f1
        subject_person_id: p_xmkqssZLoj8LftLRofiQaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時楷，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280640）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RTvJZhDl7OVgT3G01J_osl
          claim_id: c_TjuEewTb9Pxn4kXSGoc1f1
          source_id: s_rsmoUaja9shD6rw5sMHDui
          stance: supports
          locator: CBDB:280640
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rsmoUaja9shD6rw5sMHDui
            source_type: api_record
            title: 中国历代人物传记资料库：王時楷（CBDB 280640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json
            external_identifier: CBDB:280640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NxweutKNhn7mbb9zxJRfcu
        subject_person_id: p_xmkqssZLoj8LftLRofiQaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wzyuma168oY9jKP8Tus5UA
          claim_id: c_NxweutKNhn7mbb9zxJRfcu
          source_id: s_rsmoUaja9shD6rw5sMHDui
          stance: supports
          locator: CBDB:280640
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JLyssIAFPZGgkjg_VK_OaR
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xmkqssZLoj8LftLRofiQaa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMj2wqraV_rnti4Augv5Zf
          claim_id: c_JLyssIAFPZGgkjg_VK_OaR
          source_id: s__xu6FzbC3r4uPXA0AbZo00
          stance: supports
          locator: CBDB：兄弟 王時柯（68118）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王時楷 与 王時柯 为同胞（CBDB 记「兄」），王時柯 之父／母即 王時楷 之父／母。
          source:
            id: s__xu6FzbC3r4uPXA0AbZo00
            source_type: api_record
            title: 中国历代人物传记资料库：王時楷（CBDB 280640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json
            external_identifier: CBDB:280640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pTB7HsH5CT4VpfKwtjMaNH
        status: active
        display_name: 王淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E4jJGJ49wpfSMGOcAJKWH-
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xmkqssZLoj8LftLRofiQaa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2hZiWPXVXpdoVuuzVSwt-J
          claim_id: c_E4jJGJ49wpfSMGOcAJKWH-
          source_id: s__xu6FzbC3r4uPXA0AbZo00
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68118 王時柯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__xu6FzbC3r4uPXA0AbZo00
            source_type: api_record
            title: 中国历代人物传记资料库：王時楷（CBDB 280640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json
            external_identifier: CBDB:280640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pUwZmXJA98H12Cyv9Q6e5y
        status: active
        display_name: 王時柯
        merged_into_person_id: null
---

# 王時楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時楷，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280640） | accepted |
| name.primary | 王時楷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pTB7HsH5CT4VpfKwtjMaNH | 王淵 | accepted |
| other | p_pUwZmXJA98H12Cyv9Q6e5y | 王時柯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時楷（CBDB 280640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json)
