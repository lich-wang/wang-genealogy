---
schema: wang-person/v1
id: p_6UgmescXfbbBRdbEZSjX5d
status: active
merged_into: null
display_name: 王文華
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sstvnk8G3cyE8Nt1ZqRPW7
        subject_person_id: p_6UgmescXfbbBRdbEZSjX5d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9YPQK2NkJDno9NmHCKwNnV
          claim_id: c_sstvnk8G3cyE8Nt1ZqRPW7
          source_id: s_CXANJSjF3FWodJBsmDPZ7G
          stance: supports
          locator: CBDB:314486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314486）
          source: &a1
            id: s_CXANJSjF3FWodJBsmDPZ7G
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 314486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json
            external_identifier: CBDB:314486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dNpJC6TTnPNKvG15ytSoe
        subject_person_id: p_6UgmescXfbbBRdbEZSjX5d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文華，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v6Xs7t9JaevoTpVj-Jhlz2
          claim_id: c_3dNpJC6TTnPNKvG15ytSoe
          source_id: s_CXANJSjF3FWodJBsmDPZ7G
          stance: supports
          locator: CBDB:314486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Svtdczd61rb5TfX7j2gkvz
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6UgmescXfbbBRdbEZSjX5d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xoWL6KS1nHmwNlIWCVngJk
          claim_id: c_Svtdczd61rb5TfX7j2gkvz
          source_id: s_2x0eoR7kNVdLFQTa14LvuT
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文華 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文華 之父／母。
          source:
            id: s_2x0eoR7kNVdLFQTa14LvuT
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 314486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json
            external_identifier: CBDB:314486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vDgtFRNYxuxGwwcAPH4NeN
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JDLMMa3_K_iQXzOlZbnpNl
        subject_person_id: p_6UgmescXfbbBRdbEZSjX5d
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPQqs_1lQKmRtxCV31QVFa
          claim_id: c_JDLMMa3_K_iQXzOlZbnpNl
          source_id: s_2x0eoR7kNVdLFQTa14LvuT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2x0eoR7kNVdLFQTa14LvuT
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 314486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json
            external_identifier: CBDB:314486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ukJ2qr82oEuCTM4WYW3F7J
        status: active
        display_name: 王文翰
        merged_into_person_id: null
---

# 王文華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文華 | accepted |
| bio.summary | 王文華，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vDgtFRNYxuxGwwcAPH4NeN | 王繼 | accepted |
| other | p_ukJ2qr82oEuCTM4WYW3F7J | 王文翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文華（CBDB 314486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json)
