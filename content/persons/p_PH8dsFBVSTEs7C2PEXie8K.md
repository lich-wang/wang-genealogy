---
schema: wang-person/v1
id: p_PH8dsFBVSTEs7C2PEXie8K
status: active
merged_into: null
display_name: 王芮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aCM3e66aQMh5Nik4Sp4uh5
        subject_person_id: p_PH8dsFBVSTEs7C2PEXie8K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jX1RLKtZPqMuU9sxqssqvo
          claim_id: c_aCM3e66aQMh5Nik4Sp4uh5
          source_id: s_9imnVzstH2vCrHtpavNY6s
          stance: supports
          locator: CBDB:222177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222177）
          source: &a1
            id: s_9imnVzstH2vCrHtpavNY6s
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 222177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json
            external_identifier: CBDB:222177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p2PX4XvPp9KK8qdcksn2Xh
        subject_person_id: p_PH8dsFBVSTEs7C2PEXie8K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芮，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222177）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jys3QEScNYb_XNd1ih-dHJ
          claim_id: c_p2PX4XvPp9KK8qdcksn2Xh
          source_id: s_9imnVzstH2vCrHtpavNY6s
          stance: supports
          locator: CBDB:222177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KtCK3Wk-NHtboMPUW_cgZ_
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PH8dsFBVSTEs7C2PEXie8K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BImSRylGWEptX3IIlMCvPZ
          claim_id: c_KtCK3Wk-NHtboMPUW_cgZ_
          source_id: s_sv-sPklfppPR_ecoHQoXuF
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王芮 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王芮 之父／母。
          source:
            id: s_sv-sPklfppPR_ecoHQoXuF
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 222177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json
            external_identifier: CBDB:222177
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
        id: c_JK2p2ezTn6SqYbbFlKzVNf
        subject_person_id: p_PH8dsFBVSTEs7C2PEXie8K
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
        - id: cs_kkemvJNogydPNbCIKBG7vR
          claim_id: c_JK2p2ezTn6SqYbbFlKzVNf
          source_id: s_sv-sPklfppPR_ecoHQoXuF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sv-sPklfppPR_ecoHQoXuF
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 222177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json
            external_identifier: CBDB:222177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王芮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芮 | accepted |
| bio.summary | 王芮，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芮（CBDB 222177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json)
