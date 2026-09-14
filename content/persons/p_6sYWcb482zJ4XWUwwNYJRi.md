---
schema: wang-person/v1
id: p_6sYWcb482zJ4XWUwwNYJRi
status: active
merged_into: null
display_name: 王士先
cbdb_id: 329624
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x7fXmD17AHobpYwdgiRkh6
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士先，明人物。嘉靖四十四年進士，籍贯登州府。（中国历代人物传记资料库 CBDB 329624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_j6G2w08SQo8v-ZiOgbEKeK
          claim_id: c_x7fXmD17AHobpYwdgiRkh6
          source_id: s_LsJRMtGNnaXWFhCvmWCGFM
          stance: supports
          locator: CBDB:329624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LsJRMtGNnaXWFhCvmWCGFM
            source_type: api_record
            title: 中国历代人物传记资料库：王士先（CBDB 329624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329624&o=json
            external_identifier: CBDB:329624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nk48XjZ1pzdy952Mbg7FA
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ed8F4HHF66CQdZuSZSxrsw
          claim_id: c_8nk48XjZ1pzdy952Mbg7FA
          source_id: s_LsJRMtGNnaXWFhCvmWCGFM
          stance: supports
          locator: CBDB:329624
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cEI5XvJmbpE_3F2X2XhYCn
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYLaNFoc8qmbuMHgI1ukgD
          claim_id: c_cEI5XvJmbpE_3F2X2XhYCn
          source_id: s_LsJRMtGNnaXWFhCvmWCGFM
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LsJRMtGNnaXWFhCvmWCGFM
            source_type: api_record
            title: 中国历代人物传记资料库：王士先（CBDB 329624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329624&o=json
            external_identifier: CBDB:329624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Lha1sy2QN5ZZFX6JESvChc
        status: active
        display_name: 王基
        merged_into_person_id: null
    - claim:
        id: c_AbmwUAlUdy_bC-A_73oe8S
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QRnnDR27ftNKQGRE1MogD3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EK10vYa-wa-9_v3K297et8
          claim_id: c_AbmwUAlUdy_bC-A_73oe8S
          source_id: s_W2G6bqKZbH-HIA2ciHEOVD
          stance: supports
          locator: CBDB：兄弟 王基（126676）之父／母 王士先
          quotation: null
          interpretation_note: 由兄弟关系推断：王堪 与 王基 为同胞（CBDB 记「兄」），王基 之父／母即 王堪 之父／母。
          source:
            id: s_W2G6bqKZbH-HIA2ciHEOVD
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 329629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json
            external_identifier: CBDB:329629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QRnnDR27ftNKQGRE1MogD3
        status: active
        display_name: 王堪
        merged_into_person_id: null
    - claim:
        id: c_AbqAVC7hchz5AUd5GZQzLL
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZH788UkFLmZjivN3xNAjbZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gZNM7IjnEQlAG3uHe8wYYd
          claim_id: c_AbqAVC7hchz5AUd5GZQzLL
          source_id: s_1Qf40-YVIhUyyXQOZlmcpT
          stance: supports
          locator: CBDB：兄弟 王基（126676）之父／母 王士先
          quotation: null
          interpretation_note: 由兄弟关系推断：王業 与 王基 为同胞（CBDB 记「兄」），王基 之父／母即 王業 之父／母。
          source:
            id: s_1Qf40-YVIhUyyXQOZlmcpT
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 329628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json
            external_identifier: CBDB:329628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZH788UkFLmZjivN3xNAjbZ
        status: active
        display_name: 王業
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士先，明人物。嘉靖四十四年進士，籍贯登州府。（中国历代人物传记资料库 CBDB 329624） | accepted |
| name.primary | 王士先 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Lha1sy2QN5ZZFX6JESvChc | 王基 | accepted |
| children | p_QRnnDR27ftNKQGRE1MogD3 | 王堪 | accepted |
| children | p_ZH788UkFLmZjivN3xNAjbZ | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堪（CBDB 329629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json)
- [中国历代人物传记资料库：王士先（CBDB 329624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329624&o=json)
- [中国历代人物传记资料库：王業（CBDB 329628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json)
