---
schema: wang-person/v1
id: p_4DoEiYtLovxcVEfxd27r2A
status: active
merged_into: null
display_name: 王詔
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uNqHtG3Qx7x98UUAQn1GwJ
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i2H5nZ5Wb7F8t3JNX8H5XL
          claim_id: c_uNqHtG3Qx7x98UUAQn1GwJ
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: CBDB:205634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205634）
          source: &a1
            id: s_GJZqse6PD7fsyQFLGTszyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 205634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json
            external_identifier: CBDB:205634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fjFckc5YwKodrV3MmRv2Gw
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j1P5qQFpUvn1H13QcqDmg7
          claim_id: c_fjFckc5YwKodrV3MmRv2Gw
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jzwgngFnF76zVGXitpBmKC
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔（生于1528年），明人物。明清進士進士，籍贯博野，入仕進士。（中国历代人物传记资料库 CBDB 205634）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ACdQARwKeq9wzAoB3aJ5W7
          claim_id: c_jzwgngFnF76zVGXitpBmKC
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: CBDB:205634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oqgfpSBMRFSJrc7WA35bBL
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_In1K1SmCGICByCWX4Boklq
          claim_id: c_oqgfpSBMRFSJrc7WA35bBL
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_75am3pR1oJY4F4kK4X9iA5
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mxn9NJAaZFipHv2CsuVAue
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q77xKDtrUPVB6rK8MGT5c2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yih3hHsCHH8li4wR9471l5
          claim_id: c_mxn9NJAaZFipHv2CsuVAue
          source_id: s_5D-YnCi9xJtadSOgVzwSoa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5D-YnCi9xJtadSOgVzwSoa
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王詔妻)（CBDB 336273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336273&o=json
            external_identifier: CBDB:336273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_q77xKDtrUPVB6rK8MGT5c2
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_7ErGET8eFNCAV2P7fR-ElW
        subject_person_id: p_H4DK5Z2kFA82LhzNTjYgn3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EETexE_GNYiZloUeylQMjE
          claim_id: c_7ErGET8eFNCAV2P7fR-ElW
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H4DK5Z2kFA82LhzNTjYgn3
        status: active
        display_name: 王彥實
        merged_into_person_id: null
    - claim:
        id: c_CPamfZU5YN9Zbpwwhu-hfU
        subject_person_id: p_iyW16tEs3JTe2h3LSNsk98
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H7rsGvXbuWKTIvMffbW1HM
          claim_id: c_CPamfZU5YN9Zbpwwhu-hfU
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iyW16tEs3JTe2h3LSNsk98
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_N6KI6U1gTWGb4kUBCvTW-Q
        subject_person_id: p_1HkFkTf4tHoX7LaHqLF6KD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5yULRKaroCbSp33qpgVH4K
          claim_id: c_N6KI6U1gTWGb4kUBCvTW-Q
          source_id: s_qDsIr0aRHjGQ69qg6rP6F4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205634 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qDsIr0aRHjGQ69qg6rP6F4
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 336275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json
            external_identifier: CBDB:336275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1HkFkTf4tHoX7LaHqLF6KD
        status: active
        display_name: 王來聘
        merged_into_person_id: null
    - claim:
        id: c_NbDegZlsQkiSw0uGKLISeb
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zzu-ElNTZ3J8Ul-_gfZyBC
          claim_id: c_NbDegZlsQkiSw0uGKLISeb
          source_id: s_gS0lzVXDIWLXwXkBAvACmd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205634 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gS0lzVXDIWLXwXkBAvACmd
            source_type: api_record
            title: 中国历代人物传记资料库：王來徵（CBDB 336276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json
            external_identifier: CBDB:336276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PPNZnTHWQZoFJFBeBGWT9K
        status: active
        display_name: 王來徵
        merged_into_person_id: null
    - claim:
        id: c_HjMMgs_EEFulCIoOwylIzu
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jye57mE6Xx3PfuTCK5QS1h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YYQonGaY11X_gzr2F_-_J2
          claim_id: c_HjMMgs_EEFulCIoOwylIzu
          source_id: s_wFqyzYEU-4zDlSU75IpOBo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205634 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wFqyzYEU-4zDlSU75IpOBo
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 336278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336278&o=json
            external_identifier: CBDB:336278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jye57mE6Xx3PfuTCK5QS1h
        status: active
        display_name: 王來問
        merged_into_person_id: null
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| birth.date | 1528年 | accepted |
| bio.summary | 王詔（生于1528年），明人物。明清進士進士，籍贯博野，入仕進士。（中国历代人物传记资料库 CBDB 205634） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_75am3pR1oJY4F4kK4X9iA5 | 王崇德 | accepted |
| spouses | p_q77xKDtrUPVB6rK8MGT5c2 | 趙氏 | accepted |
| ancestors | p_H4DK5Z2kFA82LhzNTjYgn3 | 王彥實 | accepted |
| ancestors | p_iyW16tEs3JTe2h3LSNsk98 | 王智 | accepted |
| other | p_1HkFkTf4tHoX7LaHqLF6KD | 王來聘 | accepted |
| other | p_PPNZnTHWQZoFJFBeBGWT9K | 王來徵 | accepted |
| other | p_jye57mE6Xx3PfuTCK5QS1h | 王來問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來聘（CBDB 336275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json)
- [中国历代人物传记资料库：王來問（CBDB 336278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336278&o=json)
- [中国历代人物传记资料库：王來徵（CBDB 336276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json)
- [中国历代人物传记资料库：王詔（CBDB 205634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json)
- [中国历代人物传记资料库：趙氏(王詔妻)（CBDB 336273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336273&o=json)
