---
schema: wang-person/v1
id: p_kAp4jgFVdUZGBRH4zNTPTY
status: active
merged_into: null
display_name: 王承芳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsbK2osRNyR9ZBYJbL1X7x
        subject_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D2DszpRzBj6cTHPyzEY1qB
          claim_id: c_gsbK2osRNyR9ZBYJbL1X7x
          source_id: s_NwTHLUHuHjRBf68MtQM1U9
          stance: supports
          locator: CBDB:205124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205124）
          source: &a1
            id: s_NwTHLUHuHjRBf68MtQM1U9
            source_type: api_record
            title: 中国历代人物传记资料库：王承芳（CBDB 205124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205124&o=json
            external_identifier: CBDB:205124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T61nMWj1Gjf4VULSLz4L4s
        subject_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4G7yQT51UKzk5ontF9VMu
          claim_id: c_T61nMWj1Gjf4VULSLz4L4s
          source_id: s_NwTHLUHuHjRBf68MtQM1U9
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
        id: c_Kyfvpp49Mxk24Kf3WQmmTE
        subject_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承芳（生于1524年），明人物。明清進士進士，籍贯醴泉，入仕進士。（中国历代人物传记资料库 CBDB 205124）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xOQH9NZPEkvT-Zu408JXAy
          claim_id: c_Kyfvpp49Mxk24Kf3WQmmTE
          source_id: s_NwTHLUHuHjRBf68MtQM1U9
          stance: supports
          locator: CBDB:205124
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9-fEapURkTST3HbPQaaQv4
        subject_person_id: p_FPuXLEGAJYG7bRWewEjk1X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4izBbGSxfT5zIAnuQKNYg
          claim_id: c_9-fEapURkTST3HbPQaaQv4
          source_id: s_1uV6KejwwsLF4cJJE2a1mk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1uV6KejwwsLF4cJJE2a1mk
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 328625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328625&o=json
            external_identifier: CBDB:328625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FPuXLEGAJYG7bRWewEjk1X
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fM2imRz-HaBxjAem72AhJa
        subject_person_id: p_fTmpC1A5d2U7VnChtChQKk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxY4E668j6VgLK-6M87LUY
          claim_id: c_fM2imRz-HaBxjAem72AhJa
          source_id: s_yEPE58AsCaLaoNFBLcu9KY
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yEPE58AsCaLaoNFBLcu9KY
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 328624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328624&o=json
            external_identifier: CBDB:328624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fTmpC1A5d2U7VnChtChQKk
        status: active
        display_name: 王洪
        merged_into_person_id: null
    - claim:
        id: c_fuaWEiw1qUszxg6oFU_2yt
        subject_person_id: p_yRGraErZ5A7i1QDEexds8s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1pgcTeM_d02eKyy5aIzyzQ
          claim_id: c_fuaWEiw1qUszxg6oFU_2yt
          source_id: s_Hx1M7rhAPKtXXrsMPa9HBA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hx1M7rhAPKtXXrsMPa9HBA
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 328623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328623&o=json
            external_identifier: CBDB:328623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yRGraErZ5A7i1QDEexds8s
        status: active
        display_name: 王讓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_y7QshHXO_GGoYX3Nl4v5Zf
        subject_person_id: p_JyHxqfkSLbRgJ5iEEiGf3n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rYczeDuRUUbF60f-9ZPA6u
          claim_id: c_y7QshHXO_GGoYX3Nl4v5Zf
          source_id: s_xQz_BN8-k1GrbHuLRA-fPX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205124 王承芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xQz_BN8-k1GrbHuLRA-fPX
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賓（CBDB 328628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328628&o=json
            external_identifier: CBDB:328628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JyHxqfkSLbRgJ5iEEiGf3n
        status: active
        display_name: 王惟賓
        merged_into_person_id: null
---

# 王承芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承芳 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | 王承芳（生于1524年），明人物。明清進士進士，籍贯醴泉，入仕進士。（中国历代人物传记资料库 CBDB 205124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPuXLEGAJYG7bRWewEjk1X | 王義 | accepted |
| ancestors | p_fTmpC1A5d2U7VnChtChQKk | 王洪 | accepted |
| ancestors | p_yRGraErZ5A7i1QDEexds8s | 王讓 | accepted |
| other | p_JyHxqfkSLbRgJ5iEEiGf3n | 王惟賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承芳（CBDB 205124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205124&o=json)
- [中国历代人物传记资料库：王洪（CBDB 328624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328624&o=json)
- [中国历代人物传记资料库：王讓（CBDB 328623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328623&o=json)
- [中国历代人物传记资料库：王惟賓（CBDB 328628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328628&o=json)
- [中国历代人物传记资料库：王義（CBDB 328625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328625&o=json)
