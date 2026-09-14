---
schema: wang-person/v1
id: p_7c3xzxcv5fZA64mUkpAEfE
status: active
merged_into: null
display_name: 王伯昌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AsXNFEXxPzRwGrJbeWvPfm
        subject_person_id: p_7c3xzxcv5fZA64mUkpAEfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQSP958Gr8pxxp8cNF8eZR
          claim_id: c_AsXNFEXxPzRwGrJbeWvPfm
          source_id: s_HH1KdHChaEikNcs6nvLECX
          stance: supports
          locator: CBDB:274043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274043）
          source: &a1
            id: s_HH1KdHChaEikNcs6nvLECX
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 274043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274043&o=json
            external_identifier: CBDB:274043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gpom4nrge1o9G9gj75m1B8
        subject_person_id: p_7c3xzxcv5fZA64mUkpAEfE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯昌，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274043）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sjklhqbp0NQ0nux4UCc7Ae
          claim_id: c_Gpom4nrge1o9G9gj75m1B8
          source_id: s_HH1KdHChaEikNcs6nvLECX
          stance: supports
          locator: CBDB:274043
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OlhxfQhwf8ADy6p3VBnglG
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7c3xzxcv5fZA64mUkpAEfE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MKCLZMHZluVNSAzXsYrYj
          claim_id: c_OlhxfQhwf8ADy6p3VBnglG
          source_id: s_FMDhGcccRWtaAuTdkNy16_
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯昌 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯昌 之父／母。
          source:
            id: s_FMDhGcccRWtaAuTdkNy16_
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 274043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274043&o=json
            external_identifier: CBDB:274043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dPbUUoQEGcRs5zuUF67Td8
        status: active
        display_name: 王坤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GNkSDeWRC_Km3zu-KnyvDx
        subject_person_id: p_7c3xzxcv5fZA64mUkpAEfE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ppm2BmXZslCZj4KMM2G7Hg
          claim_id: c_GNkSDeWRC_Km3zu-KnyvDx
          source_id: s_FMDhGcccRWtaAuTdkNy16_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201540 王一麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FMDhGcccRWtaAuTdkNy16_
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 274043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274043&o=json
            external_identifier: CBDB:274043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zypfM9LtT1QVxbd1JRHGna
        status: active
        display_name: 王一麟
        merged_into_person_id: null
---

# 王伯昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯昌 | accepted |
| bio.summary | 王伯昌，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274043） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dPbUUoQEGcRs5zuUF67Td8 | 王坤 | accepted |
| other | p_zypfM9LtT1QVxbd1JRHGna | 王一麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯昌（CBDB 274043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274043&o=json)
