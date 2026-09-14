---
schema: wang-person/v1
id: p_8hjEV1vNP9UBEPtxdtug6c
status: active
merged_into: null
display_name: 王苕
cbdb_id: 222176
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KPchYS9RDL9NL6tPZApuLs
        subject_person_id: p_8hjEV1vNP9UBEPtxdtug6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苕，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222176）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2oIuCEIDfOJzhb9w4dz9wi
          claim_id: c_KPchYS9RDL9NL6tPZApuLs
          source_id: s_ADg4KKp8v3d4Ci5FukLPmY
          stance: supports
          locator: CBDB:222176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ADg4KKp8v3d4Ci5FukLPmY
            source_type: api_record
            title: 中国历代人物传记资料库：王苕（CBDB 222176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json
            external_identifier: CBDB:222176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RkX4NKQPEHzR25vYB74RzE
        subject_person_id: p_8hjEV1vNP9UBEPtxdtug6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CcJsc6YBwVjdwpK6F6q7Pk
          claim_id: c_RkX4NKQPEHzR25vYB74RzE
          source_id: s_ADg4KKp8v3d4Ci5FukLPmY
          stance: supports
          locator: CBDB:222176
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WT3shUkcAcUjWh5uCpcpxt
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8hjEV1vNP9UBEPtxdtug6c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w0V7bZV1wXWeLnVRZXmUGN
          claim_id: c_WT3shUkcAcUjWh5uCpcpxt
          source_id: s_eOgczC7R3Hu-Eq7iVTbORX
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王苕 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王苕 之父／母。
          source:
            id: s_eOgczC7R3Hu-Eq7iVTbORX
            source_type: api_record
            title: 中国历代人物传记资料库：王苕（CBDB 222176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json
            external_identifier: CBDB:222176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UaGZcr1-Bplk_w-xWnC0Af
        subject_person_id: p_8hjEV1vNP9UBEPtxdtug6c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2iGWmj4v9Tg48fJ4ED7SWp
          claim_id: c_UaGZcr1-Bplk_w-xWnC0Af
          source_id: s_eOgczC7R3Hu-Eq7iVTbORX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eOgczC7R3Hu-Eq7iVTbORX
            source_type: api_record
            title: 中国历代人物传记资料库：王苕（CBDB 222176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json
            external_identifier: CBDB:222176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王苕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王苕，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222176） | accepted |
| name.primary | 王苕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王苕（CBDB 222176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json)
