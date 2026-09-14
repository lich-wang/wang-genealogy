---
schema: wang-person/v1
id: p_mfkbALKA619DdyfJ7MisdA
status: active
merged_into: null
display_name: 王倫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fnHbVhxWcCbj2vyog2tjNA
        subject_person_id: p_mfkbALKA619DdyfJ7MisdA
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
        - id: cs_NwspjUbGGyEWTUEGZGsXpA
          claim_id: c_fnHbVhxWcCbj2vyog2tjNA
          source_id: s_ahRBeRAJwPPrbYuT3DBhoJ
          stance: supports
          locator: CBDB:262452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262452）
          source: &a1
            id: s_ahRBeRAJwPPrbYuT3DBhoJ
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json
            external_identifier: CBDB:262452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.588Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P4Ehv9ftCkwzTCqw6MESgV
        subject_person_id: p_mfkbALKA619DdyfJ7MisdA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_orX2nfhbf3CYcPeO6WONdg
          claim_id: c_P4Ehv9ftCkwzTCqw6MESgV
          source_id: s_ahRBeRAJwPPrbYuT3DBhoJ
          stance: supports
          locator: CBDB:262452
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kMBkyaSEk7l26NQulroH2h
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mfkbALKA619DdyfJ7MisdA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ft_usZ74RksKsyt4YN2rw1
          claim_id: c_kMBkyaSEk7l26NQulroH2h
          source_id: s_dtOErnHYuX3eKdQgdPIhjD
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王时中 为同胞（CBDB 记「弟」），王时中 之父／母即 王倫 之父／母。
          source:
            id: s_dtOErnHYuX3eKdQgdPIhjD
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json
            external_identifier: CBDB:262452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVznNBP2hMh6tDWAzv1nG9
        status: active
        display_name: 王钻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FklH3bjJm2ZPUCJV8gCm1J
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mfkbALKA619DdyfJ7MisdA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HQcvyXJYSOrYhWFiSbt9uV
          claim_id: c_FklH3bjJm2ZPUCJV8gCm1J
          source_id: s_dtOErnHYuX3eKdQgdPIhjD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dtOErnHYuX3eKdQgdPIhjD
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json
            external_identifier: CBDB:262452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | 王倫，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVznNBP2hMh6tDWAzv1nG9 | 王钻 | accepted |
| other | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 262452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json)
