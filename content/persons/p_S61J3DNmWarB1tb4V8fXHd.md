---
schema: wang-person/v1
id: p_S61J3DNmWarB1tb4V8fXHd
status: active
merged_into: null
display_name: 王累仁
cbdb_id: 221773
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q8spDHj3yUNyBFcoiDXzua
        subject_person_id: p_S61J3DNmWarB1tb4V8fXHd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王累仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221773）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VEEDenbGA-jm3WpilJVbwL
          claim_id: c_q8spDHj3yUNyBFcoiDXzua
          source_id: s_nnTyzEPhNAyJdQ2JwKeFQK
          stance: supports
          locator: CBDB:221773
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nnTyzEPhNAyJdQ2JwKeFQK
            source_type: api_record
            title: 中国历代人物传记资料库：王累仁（CBDB 221773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221773&o=json
            external_identifier: CBDB:221773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_48oMMerV4V4AF91GRcM96F
        subject_person_id: p_S61J3DNmWarB1tb4V8fXHd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王累仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w9BGLiwEtGPmZqTd6tzCAG
          claim_id: c_48oMMerV4V4AF91GRcM96F
          source_id: s_nnTyzEPhNAyJdQ2JwKeFQK
          stance: supports
          locator: CBDB:221773
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GidboOyq7wcqisCidfGIyG
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S61J3DNmWarB1tb4V8fXHd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IGV3RFim4HjzkU5PaITIT3
          claim_id: c_GidboOyq7wcqisCidfGIyG
          source_id: s_y9_VPBJFoXkPoiEyNSW4gu
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王累仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王累仁 之父／母。
          source:
            id: s_y9_VPBJFoXkPoiEyNSW4gu
            source_type: api_record
            title: 中国历代人物传记资料库：王累仁（CBDB 221773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221773&o=json
            external_identifier: CBDB:221773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_15qsr1gIw2KDFLYXDlJruQ
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S61J3DNmWarB1tb4V8fXHd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F8V4kXeS1d932ih2kuRDzb
          claim_id: c_15qsr1gIw2KDFLYXDlJruQ
          source_id: s_y9_VPBJFoXkPoiEyNSW4gu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206702 王顯仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y9_VPBJFoXkPoiEyNSW4gu
            source_type: api_record
            title: 中国历代人物传记资料库：王累仁（CBDB 221773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221773&o=json
            external_identifier: CBDB:221773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
---

# 王累仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王累仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221773） | accepted |
| name.primary | 王累仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| other | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王累仁（CBDB 221773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221773&o=json)
