---
schema: wang-person/v1
id: p_VV4VNr2EUbP7eMEPBsU1QA
status: active
merged_into: null
display_name: 王倫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nuFCzFYMRwYrv6Nsj3Q7qk
        subject_person_id: p_VV4VNr2EUbP7eMEPBsU1QA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xBqqS5HAv8CLqMHKmnRmAz
          claim_id: c_nuFCzFYMRwYrv6Nsj3Q7qk
          source_id: s_6nje3YU4V7zYGyqLEpcBbE
          stance: supports
          locator: CBDB:282017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282017）
          source: &a1
            id: s_6nje3YU4V7zYGyqLEpcBbE
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 282017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282017&o=json
            external_identifier: CBDB:282017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2iKChYfHdXUtn9XWKoV4Ms
        subject_person_id: p_VV4VNr2EUbP7eMEPBsU1QA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MxxAALxvAxoSpjPdW6beHf
          claim_id: c_2iKChYfHdXUtn9XWKoV4Ms
          source_id: s_6nje3YU4V7zYGyqLEpcBbE
          stance: supports
          locator: CBDB:282017
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
  descendants:
    - claim:
        id: c_ppCHLP4jhNN2IquDqrrmRW
        subject_person_id: p_VV4VNr2EUbP7eMEPBsU1QA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGONSq9fPQ1u4sq_pVzsR_
          claim_id: c_ppCHLP4jhNN2IquDqrrmRW
          source_id: s_e4gn9sbVUfNayyCtQbAqLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e4gn9sbVUfNayyCtQbAqLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 126692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126692&o=json
            external_identifier: CBDB:126692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fsfzbsXi2CKQ2Y6QzQVevK
        status: active
        display_name: 王莘
        merged_into_person_id: null
  other: []
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | 王倫，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fsfzbsXi2CKQ2Y6QzQVevK | 王莘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 282017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282017&o=json)
- [中国历代人物传记资料库：王莘（CBDB 126692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126692&o=json)
