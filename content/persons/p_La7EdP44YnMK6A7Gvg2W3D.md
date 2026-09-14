---
schema: wang-person/v1
id: p_La7EdP44YnMK6A7Gvg2W3D
status: active
merged_into: null
display_name: 王積
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dNXQVrbXmQWTP22wrXzNhU
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTEyNAhQaCbPVoTbY2vQme
          claim_id: c_dNXQVrbXmQWTP22wrXzNhU
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: CBDB:126838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126838）
          source: &a1
            id: s_UzrMNYt4hLiXQhrsqJ6zWr
            source_type: api_record
            title: 中国历代人物传记资料库：王積（CBDB 126838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126838&o=json
            external_identifier: CBDB:126838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uCvX1NwN9m9WXrBj6RvNsf
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qr3FssStQeeWQvTDNFvG3r
          claim_id: c_uCvX1NwN9m9WXrBj6RvNsf
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_J5LSfaBEKkE83TSQ3U8brZ
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1567年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9JpvvLeXGgm2xbgTF9GmyG
          claim_id: c_J5LSfaBEKkE83TSQ3U8brZ
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CEgdGoqWw4tNokL5uoVCgp
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積（1492年—1567年），明人物。明清進士進士，籍贯儀真，入仕進士。（中国历代人物传记资料库 CBDB 126838）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_toQ-Ri_ZQv15Ll4T8LtO17
          claim_id: c_CEgdGoqWw4tNokL5uoVCgp
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: CBDB:126838
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3AEjgCYLevwPoA7VA2SbQK
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpUncYFEauUm8D5Afsn7EC
          claim_id: c_3AEjgCYLevwPoA7VA2SbQK
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kAVHW2hxxC3wMci6HBMCKk
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 283097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json
            external_identifier: CBDB:283097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VJQopdY7QNQGYKuXURfXDN
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YTkoFJM30gSPx3lT_Fiv7N
        subject_person_id: p_buzH1NmLD49b66Y4shHBhR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_36N4TG0MA3PqJcSWXctLLO
          claim_id: c_YTkoFJM30gSPx3lT_Fiv7N
          source_id: s_dSKDE722uR62vkAtww1rD9
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dSKDE722uR62vkAtww1rD9
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 283095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283095&o=json
            external_identifier: CBDB:283095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_buzH1NmLD49b66Y4shHBhR
        status: active
        display_name: 王海
        merged_into_person_id: null
    - claim:
        id: c_rmqGl9HXql9SnQrf6bYT3t
        subject_person_id: p_pYCAbF1Xi98jKsuGW8vvJD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jofEk6W8dI9YMeEYiTf8FP
          claim_id: c_rmqGl9HXql9SnQrf6bYT3t
          source_id: s_1tBQZ3dKy7F72oNjnmvv7m
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1tBQZ3dKy7F72oNjnmvv7m
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 283096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283096&o=json
            external_identifier: CBDB:283096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pYCAbF1Xi98jKsuGW8vvJD
        status: active
        display_name: 王原
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_l4NC2z6cUBFz0GO_Bz7JE1
        subject_person_id: p_6gpvLErUHEXtWLgjNjQ5ZU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vFR-BmIk3XGhLzkg4bpK7K
          claim_id: c_l4NC2z6cUBFz0GO_Bz7JE1
          source_id: s_mTf3W9M3f9f9Skj6p7O0Fa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mTf3W9M3f9f9Skj6p7O0Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 283103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283103&o=json
            external_identifier: CBDB:283103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6gpvLErUHEXtWLgjNjQ5ZU
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_CrpnuAisVIXfF0ckF5dpJT
        subject_person_id: p_H9Rpr53dFuM8LR7ax8zzUM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e7q0E9J9WQLm9lYqcO1zsv
          claim_id: c_CrpnuAisVIXfF0ckF5dpJT
          source_id: s_NoyW6WNBhIeiVUgvrUj_O-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NoyW6WNBhIeiVUgvrUj_O-
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 283105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json
            external_identifier: CBDB:283105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H9Rpr53dFuM8LR7ax8zzUM
        status: active
        display_name: 王科
        merged_into_person_id: null
    - claim:
        id: c_W8jA3VstXLUXKYxRSZo-kf
        subject_person_id: p_JBfhfH4dA4NkK2ez3Y8XwV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgusJ6vTalzn06CAzNrq9e
          claim_id: c_W8jA3VstXLUXKYxRSZo-kf
          source_id: s_TL7CNjwCDx0R2Y8uOCJZsi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TL7CNjwCDx0R2Y8uOCJZsi
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 283102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283102&o=json
            external_identifier: CBDB:283102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JBfhfH4dA4NkK2ez3Y8XwV
        status: active
        display_name: 王和
        merged_into_person_id: null
    - claim:
        id: c_4KfvUutLD4NL3dBump1qJe
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hJJLEhppC8FDu4f7rWgWtJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__VBhYqWrUuYiztI49R0Shs
          claim_id: c_4KfvUutLD4NL3dBump1qJe
          source_id: s_BlWtt4VSDmr9kWwPPEMHOr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BlWtt4VSDmr9kWwPPEMHOr
            source_type: api_record
            title: 中国历代人物传记资料库：王种（CBDB 283104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283104&o=json
            external_identifier: CBDB:283104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hJJLEhppC8FDu4f7rWgWtJ
        status: active
        display_name: 王种
        merged_into_person_id: null
    - claim:
        id: c_wb9zV7SnPe9t7iCFwKVn8l
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y9smKs2u7Lz2K5nQmCcuvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmyfpb0zlIrgXMrKBjJrAY
          claim_id: c_wb9zV7SnPe9t7iCFwKVn8l
          source_id: s_ai5_s99r-JSCLCsckw3H5K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ai5_s99r-JSCLCsckw3H5K
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 283106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283106&o=json
            external_identifier: CBDB:283106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y9smKs2u7Lz2K5nQmCcuvj
        status: active
        display_name: 王秩
        merged_into_person_id: null
---

# 王積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積 | accepted |
| birth.date | 1492年 | accepted |
| death.date | 1567年 | accepted |
| bio.summary | 王積（1492年—1567年），明人物。明清進士進士，籍贯儀真，入仕進士。（中国历代人物传记资料库 CBDB 126838） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VJQopdY7QNQGYKuXURfXDN | 王成 | accepted |
| ancestors | p_buzH1NmLD49b66Y4shHBhR | 王海 | accepted |
| ancestors | p_pYCAbF1Xi98jKsuGW8vvJD | 王原 | accepted |
| other | p_6gpvLErUHEXtWLgjNjQ5ZU | 王穆 | accepted |
| other | p_H9Rpr53dFuM8LR7ax8zzUM | 王科 | accepted |
| other | p_JBfhfH4dA4NkK2ez3Y8XwV | 王和 | accepted |
| other | p_hJJLEhppC8FDu4f7rWgWtJ | 王种 | accepted |
| other | p_y9smKs2u7Lz2K5nQmCcuvj | 王秩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 283097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json)
- [中国历代人物传记资料库：王海（CBDB 283095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283095&o=json)
- [中国历代人物传记资料库：王和（CBDB 283102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283102&o=json)
- [中国历代人物传记资料库：王積（CBDB 126838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126838&o=json)
- [中国历代人物传记资料库：王科（CBDB 283105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json)
- [中国历代人物传记资料库：王穆（CBDB 283103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283103&o=json)
- [中国历代人物传记资料库：王原（CBDB 283096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283096&o=json)
- [中国历代人物传记资料库：王秩（CBDB 283106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283106&o=json)
- [中国历代人物传记资料库：王种（CBDB 283104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283104&o=json)
