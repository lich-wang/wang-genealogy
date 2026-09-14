---
schema: wang-person/v1
id: p_tuf6Y9AXWQN6kvcQsy6Eb8
status: active
merged_into: null
display_name: 王宗源
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J41b7ecv3PteBej3jUHS99
        subject_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RQJn4V7MjfVADQ7SNQT95w
          claim_id: c_J41b7ecv3PteBej3jUHS99
          source_id: s_pQKX4VAq7vJn1vwFebqWCr
          stance: supports
          locator: CBDB:126561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126561）
          source: &a1
            id: s_pQKX4VAq7vJn1vwFebqWCr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗源（CBDB 126561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126561&o=json
            external_identifier: CBDB:126561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C3cAE7EEZpoSw1ip142ABy
        subject_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源，明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 126561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0kfNZxRwsRduXOU406sTYS
          claim_id: c_C3cAE7EEZpoSw1ip142ABy
          source_id: s_pQKX4VAq7vJn1vwFebqWCr
          stance: supports
          locator: CBDB:126561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_chB6R7rFCF-ZTAbp6tHgpe
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_1-JWMeFVNu14bq32byrE
          claim_id: c_chB6R7rFCF-ZTAbp6tHgpe
          source_id: s_WpjzphdLGVxmNyJz4aD98K
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WpjzphdLGVxmNyJz4aD98K
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 278547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278547&o=json
            external_identifier: CBDB:278547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XqQxrf3jawispPQsy1tr3X
        subject_person_id: p_KJHVQ18CXp8JnPpw1kCNjQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EGSQruOAvdwA43JM3YQd8
          claim_id: c_XqQxrf3jawispPQsy1tr3X
          source_id: s_gC8FP3LtB48EcQP9A7GPeo
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gC8FP3LtB48EcQP9A7GPeo
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 278545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278545&o=json
            external_identifier: CBDB:278545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KJHVQ18CXp8JnPpw1kCNjQ
        status: active
        display_name: 王彝
        merged_into_person_id: null
    - claim:
        id: c_zCvVpMLQLGniAtZE6GX2MF
        subject_person_id: p_yzuZCewrFTdswMjbGtR11p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9FNcRmxr7fdvDuauZZ9azk
          claim_id: c_zCvVpMLQLGniAtZE6GX2MF
          source_id: s_3xuYChrBqBB937oQUtGGSk
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xuYChrBqBB937oQUtGGSk
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 278546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278546&o=json
            external_identifier: CBDB:278546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yzuZCewrFTdswMjbGtR11p
        status: active
        display_name: 王寬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_m8hxwaNmACj41HOL_DgQAV
        subject_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e53W5dAv1_yaK50IiuXnY3
          claim_id: c_m8hxwaNmACj41HOL_DgQAV
          source_id: s_dnY0iEEbz_6mDZnKfgptFp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dnY0iEEbz_6mDZnKfgptFp
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濬（CBDB 278551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json
            external_identifier: CBDB:278551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3VLxF8MJR5mpJh2S4AzoMr
        status: active
        display_name: 王宗濬
        merged_into_person_id: null
    - claim:
        id: c_06ZcDxPIy6wK6rBuK7F2s2
        subject_person_id: p_8uohEQpv8MDzTxiML7A4oX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tshCVJf6Qj8yS4xtgdzQp5
          claim_id: c_06ZcDxPIy6wK6rBuK7F2s2
          source_id: s_Gznr6nm8ZXLIPQ0pP8TqIF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gznr6nm8ZXLIPQ0pP8TqIF
            source_type: api_record
            title: 中国历代人物传记资料库：王賓清（CBDB 278550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json
            external_identifier: CBDB:278550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8uohEQpv8MDzTxiML7A4oX
        status: active
        display_name: 王賓清
        merged_into_person_id: null
    - claim:
        id: c_p6-C6-RQAfeDrl6vnj_1R1
        subject_person_id: p_G5stHnMK82gdFnbGia9fRP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7ZFLBTRJST3knHpPvB_DZ
          claim_id: c_p6-C6-RQAfeDrl6vnj_1R1
          source_id: s_CCQCs1MfxWa9wRFZlgvuoo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CCQCs1MfxWa9wRFZlgvuoo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗河（CBDB 278555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json
            external_identifier: CBDB:278555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G5stHnMK82gdFnbGia9fRP
        status: active
        display_name: 王宗河
        merged_into_person_id: null
    - claim:
        id: c_7EFTVUTfgaXMnNexjjF_LL
        subject_person_id: p_MVCxMYLyvhH9pkCobaMmoP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4p917aJGHcHcSoxKUqy7Gv
          claim_id: c_7EFTVUTfgaXMnNexjjF_LL
          source_id: s_fwgEdgmc2ANoDs8Dm6-wtk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fwgEdgmc2ANoDs8Dm6-wtk
            source_type: api_record
            title: 中国历代人物传记资料库：王宗澄（CBDB 278552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json
            external_identifier: CBDB:278552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MVCxMYLyvhH9pkCobaMmoP
        status: active
        display_name: 王宗澄
        merged_into_person_id: null
    - claim:
        id: c_Sot4ukjio2QGqRyifzt2hj
        subject_person_id: p_eq2Zn9xpsUnKPLk2HV59uR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odPRdklb7oXBXyQi_qV6oJ
          claim_id: c_Sot4ukjio2QGqRyifzt2hj
          source_id: s_bUtiTGxPiir5b8R5a3Bo_t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bUtiTGxPiir5b8R5a3Bo_t
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淮（CBDB 278554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json
            external_identifier: CBDB:278554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eq2Zn9xpsUnKPLk2HV59uR
        status: active
        display_name: 王宗淮
        merged_into_person_id: null
    - claim:
        id: c_z3In4iLg5SPljNBILEYL-p
        subject_person_id: p_tMr34CzpVkibnHR2Pz11ZD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IEGFepD4TiU2XHEWCNEKgU
          claim_id: c_z3In4iLg5SPljNBILEYL-p
          source_id: s_qyC87AIcLDGvV0R_NOmgLE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qyC87AIcLDGvV0R_NOmgLE
            source_type: api_record
            title: 中国历代人物传记资料库：王宗漢（CBDB 278556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json
            external_identifier: CBDB:278556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tMr34CzpVkibnHR2Pz11ZD
        status: active
        display_name: 王宗漢
        merged_into_person_id: null
---

# 王宗源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗源 | accepted |
| bio.summary | 王宗源，明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 126561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| ancestors | p_KJHVQ18CXp8JnPpw1kCNjQ | 王彝 | accepted |
| ancestors | p_yzuZCewrFTdswMjbGtR11p | 王寬 | accepted |
| other | p_3VLxF8MJR5mpJh2S4AzoMr | 王宗濬 | accepted |
| other | p_8uohEQpv8MDzTxiML7A4oX | 王賓清 | accepted |
| other | p_G5stHnMK82gdFnbGia9fRP | 王宗河 | accepted |
| other | p_MVCxMYLyvhH9pkCobaMmoP | 王宗澄 | accepted |
| other | p_eq2Zn9xpsUnKPLk2HV59uR | 王宗淮 | accepted |
| other | p_tMr34CzpVkibnHR2Pz11ZD | 王宗漢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓清（CBDB 278550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json)
- [中国历代人物传记资料库：王綱（CBDB 278547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278547&o=json)
- [中国历代人物传记资料库：王寬（CBDB 278546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278546&o=json)
- [中国历代人物传记资料库：王彝（CBDB 278545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278545&o=json)
- [中国历代人物传记资料库：王宗澄（CBDB 278552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json)
- [中国历代人物传记资料库：王宗漢（CBDB 278556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json)
- [中国历代人物传记资料库：王宗河（CBDB 278555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json)
- [中国历代人物传记资料库：王宗淮（CBDB 278554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json)
- [中国历代人物传记资料库：王宗濬（CBDB 278551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json)
- [中国历代人物传记资料库：王宗源（CBDB 126561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126561&o=json)
