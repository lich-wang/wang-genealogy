---
schema: wang-person/v1
id: p_NfVYYG7aC993nZohPs46Tb
status: active
merged_into: null
display_name: 王綱
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nzB3h6QYudLCwC1zgJnneq
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aVNFymVn6YPDW4HZMggsUu
          claim_id: c_nzB3h6QYudLCwC1zgJnneq
          source_id: s_WpjzphdLGVxmNyJz4aD98K
          stance: supports
          locator: CBDB:278547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278547）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f6JZY1U7RZLCuY6KfcZpdP
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278547）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_40ZZeToj_xLJ5sfFLNyLK9
          claim_id: c_f6JZY1U7RZLCuY6KfcZpdP
          source_id: s_WpjzphdLGVxmNyJz4aD98K
          stance: supports
          locator: CBDB:278547
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
    - claim:
        id: c_HeWvIyoUnX3-jNWDq64C42
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_auUhNekvWoDgkDA8iM7roV
          claim_id: c_HeWvIyoUnX3-jNWDq64C42
          source_id: s_dnY0iEEbz_6mDZnKfgptFp
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗濬 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗濬 之父／母。
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
        id: c_3JOV4vo1RJEOzTLbU2LKxn
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8uohEQpv8MDzTxiML7A4oX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lzZ6uoEbyqHf3srXXdyBy4
          claim_id: c_3JOV4vo1RJEOzTLbU2LKxn
          source_id: s_Gznr6nm8ZXLIPQ0pP8TqIF
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓清 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王賓清 之父／母。
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
        id: c_KSbxHX_ykvXa-j3vw7jwnR
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5stHnMK82gdFnbGia9fRP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iMAOo_Y31oV6cn3AFzKk42
          claim_id: c_KSbxHX_ykvXa-j3vw7jwnR
          source_id: s_CCQCs1MfxWa9wRFZlgvuoo
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗河 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗河 之父／母。
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
        id: c_-KRVqry6fPvWTjLQfP-4Bn
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MVCxMYLyvhH9pkCobaMmoP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWOgURRD_O6KNvv0JoVq4N
          claim_id: c_-KRVqry6fPvWTjLQfP-4Bn
          source_id: s_fwgEdgmc2ANoDs8Dm6-wtk
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗澄 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗澄 之父／母。
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
        id: c_5uN46DKPaLQv7F4S794jMb
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eq2Zn9xpsUnKPLk2HV59uR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOrq0407RbaYps4EvZZKui
          claim_id: c_5uN46DKPaLQv7F4S794jMb
          source_id: s_bUtiTGxPiir5b8R5a3Bo_t
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗淮 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗淮 之父／母。
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
        id: c_i5Sxpgbk1tqQRuJfz8NOCq
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tMr34CzpVkibnHR2Pz11ZD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nMU99hp_Hmy54YGfJf6Gjk
          claim_id: c_i5Sxpgbk1tqQRuJfz8NOCq
          source_id: s_qyC87AIcLDGvV0R_NOmgLE
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗漢 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗漢 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278547） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |
| children | p_3VLxF8MJR5mpJh2S4AzoMr | 王宗濬 | accepted |
| children | p_8uohEQpv8MDzTxiML7A4oX | 王賓清 | accepted |
| children | p_G5stHnMK82gdFnbGia9fRP | 王宗河 | accepted |
| children | p_MVCxMYLyvhH9pkCobaMmoP | 王宗澄 | accepted |
| children | p_eq2Zn9xpsUnKPLk2HV59uR | 王宗淮 | accepted |
| children | p_tMr34CzpVkibnHR2Pz11ZD | 王宗漢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓清（CBDB 278550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json)
- [中国历代人物传记资料库：王綱（CBDB 278547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278547&o=json)
- [中国历代人物传记资料库：王宗澄（CBDB 278552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278552&o=json)
- [中国历代人物传记资料库：王宗漢（CBDB 278556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278556&o=json)
- [中国历代人物传记资料库：王宗河（CBDB 278555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json)
- [中国历代人物传记资料库：王宗淮（CBDB 278554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json)
- [中国历代人物传记资料库：王宗濬（CBDB 278551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json)
