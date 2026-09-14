---
schema: wang-person/v1
id: p_r9heHG2FojCpHTWKX5G61W
status: active
merged_into: null
display_name: 王泌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8V7Ri3AK1v2xe9pNvx6yDK
        subject_person_id: p_r9heHG2FojCpHTWKX5G61W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BATk4h8Pei9qHXWUcxL5yb
          claim_id: c_8V7Ri3AK1v2xe9pNvx6yDK
          source_id: s_Tb6hu7US98fFT3KecwZm1y
          stance: supports
          locator: CBDB:35689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35689）
          source: &a1
            id: s_Tb6hu7US98fFT3KecwZm1y
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 35689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35689&o=json
            external_identifier: CBDB:35689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PQA1sg3WjPTahRziCGQSZC
        subject_person_id: p_r9heHG2FojCpHTWKX5G61W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王泌，宋人物。籍贯鄞縣，入仕恩蔭: 遺表蔭補。（中国历代人物传记资料库 CBDB 35689）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sc19n6L0NfrNRy5XlY3UK0
          claim_id: c_PQA1sg3WjPTahRziCGQSZC
          source_id: s_Tb6hu7US98fFT3KecwZm1y
          stance: supports
          locator: CBDB:35689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jN0drFBQdbhxqQIEMex3Ax
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r9heHG2FojCpHTWKX5G61W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_lGg7pFjv0vST6ntSiRUamH
          claim_id: c_jN0drFBQdbhxqQIEMex3Ax
          source_id: s_dZjPNCND1lk1VU339fiv8c
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19876）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_dZjPNCND1lk1VU339fiv8c
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 35689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35689&o=json
            external_identifier: CBDB:35689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yoJ8xkA6RKn5KTuDeY1X7C
        status: active
        display_name: 王正功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王泌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泌 | accepted |
| bio.summary | 王泌，宋人物。籍贯鄞縣，入仕恩蔭: 遺表蔭補。（中国历代人物传记资料库 CBDB 35689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yoJ8xkA6RKn5KTuDeY1X7C | 王正功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泌（CBDB 35689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35689&o=json)
