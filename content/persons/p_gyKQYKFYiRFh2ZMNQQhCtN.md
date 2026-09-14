---
schema: wang-person/v1
id: p_gyKQYKFYiRFh2ZMNQQhCtN
status: active
merged_into: null
display_name: 王鼎
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3f7Mgo6ax5SEwGZgfXxb51
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hx1GfjK8w8BKytKofcNEja
          claim_id: c_3f7Mgo6ax5SEwGZgfXxb51
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: CBDB:247835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247835）
          source: &a1
            id: s_ZPcP2xH4Y4hnxAihVeKS3n
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 247835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247835&o=json
            external_identifier: CBDB:247835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tKKcw7dZxiKLRD8ekCvoti
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。成化十一年進士，籍贯慈溪，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 247835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ezW-3FlOo5JqO9hkS-jJHk
          claim_id: c_tKKcw7dZxiKLRD8ekCvoti
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: CBDB:247835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7S9B0nRR_Nt552O7Y4OlqJ
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdL8oxnH6I3BT8AlityvOB
          claim_id: c_7S9B0nRR_Nt552O7Y4OlqJ
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
    - claim:
        id: c_jbDt396z3bAFtke3G_6_gz
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_55xEZhj724uNRKr93TgaRB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QooWkmugxubIxq9XxAW8-r
          claim_id: c_jbDt396z3bAFtke3G_6_gz
          source_id: s_GBVGajtdGBWdEoTEc_54EA
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍊 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王鍊 之父／母。
          source:
            id: s_GBVGajtdGBWdEoTEc_54EA
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 247843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247843&o=json
            external_identifier: CBDB:247843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_55xEZhj724uNRKr93TgaRB
        status: active
        display_name: 王鍊
        merged_into_person_id: null
    - claim:
        id: c__OWSUkeDDwX-O_dUsCTd43
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A1rGAZCMMfWMfybx9mSqau
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Xwa1dG3FnK0ltRVSzqyor
          claim_id: c__OWSUkeDDwX-O_dUsCTd43
          source_id: s_-TZhrlz-iC40Fr3UoADRsN
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王錥 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王錥 之父／母。
          source:
            id: s_-TZhrlz-iC40Fr3UoADRsN
            source_type: api_record
            title: 中国历代人物传记资料库：王錥（CBDB 247848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json
            external_identifier: CBDB:247848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A1rGAZCMMfWMfybx9mSqau
        status: active
        display_name: 王錥
        merged_into_person_id: null
    - claim:
        id: c_m1Mat7DGZEq1ZMRenl5T3m
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EHZKGF4FH9JFRqQEosFwci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KKNkZGmLKLc8Er2ezp61KZ
          claim_id: c_m1Mat7DGZEq1ZMRenl5T3m
          source_id: s_ftAg57M41EEHTcrbV8eqAE
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鋘 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王鋘 之父／母。
          source:
            id: s_ftAg57M41EEHTcrbV8eqAE
            source_type: api_record
            title: 中国历代人物传记资料库：王鋘（CBDB 247846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json
            external_identifier: CBDB:247846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EHZKGF4FH9JFRqQEosFwci
        status: active
        display_name: 王鋘
        merged_into_person_id: null
    - claim:
        id: c_hYd8B7UXjN6b4kBrRA9Q02
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HUa84XWDNujDpsdaNdZ2Ys
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wbtdzCLDGOiYqiwHLwUUof
          claim_id: c_hYd8B7UXjN6b4kBrRA9Q02
          source_id: s_rlxeLYW5Dve1OjDEzDc6Zz
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王錦 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王錦 之父／母。
          source:
            id: s_rlxeLYW5Dve1OjDEzDc6Zz
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 247844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json
            external_identifier: CBDB:247844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HUa84XWDNujDpsdaNdZ2Ys
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_fd6B3NeSuv_eTctXAyvA8z
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Js51emuVCs9EH4s4W7BXTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__fzNFkuu42vdJ2PUh4z_Rj
          claim_id: c_fd6B3NeSuv_eTctXAyvA8z
          source_id: s_OqXxhcAA9GAttQE9dwRDU2
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉉 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王鉉 之父／母。
          source:
            id: s_OqXxhcAA9GAttQE9dwRDU2
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 247849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json
            external_identifier: CBDB:247849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Js51emuVCs9EH4s4W7BXTR
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_KH4q2d52T2dHHenlZvNANO
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCUgiWasKpCG1soTZ2QcFB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKFxVEMThaY6EQvFawn5d8
          claim_id: c_KH4q2d52T2dHHenlZvNANO
          source_id: s_NxUy5kE6XVQ9zA8LYSVDXn
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎬 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王鎬 之父／母。
          source:
            id: s_NxUy5kE6XVQ9zA8LYSVDXn
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 247840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json
            external_identifier: CBDB:247840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NCUgiWasKpCG1soTZ2QcFB
        status: active
        display_name: 王鎬
        merged_into_person_id: null
    - claim:
        id: c_CUS0EN9t0hoTQokjA5k05i
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XTPQLKJJmF45fkXfXdssNp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u0MB8D4MugkIWWDKxQTgBB
          claim_id: c_CUS0EN9t0hoTQokjA5k05i
          source_id: s_3Diwk7A8qSN_9sSU4XpQ_H
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王銳 之父／母。
          source:
            id: s_3Diwk7A8qSN_9sSU4XpQ_H
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 247847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json
            external_identifier: CBDB:247847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XTPQLKJJmF45fkXfXdssNp
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_GaZELmJkdfY_gZxFxJ-f0j
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g22PHPpya8TKAiPuSDpXaf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UeBFRUmC701JY6F1-KTB2S
          claim_id: c_GaZELmJkdfY_gZxFxJ-f0j
          source_id: s_qwp7waz_no74P3mAgZZegk
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王鐸 之父／母。
          source:
            id: s_qwp7waz_no74P3mAgZZegk
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 247839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247839&o=json
            external_identifier: CBDB:247839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g22PHPpya8TKAiPuSDpXaf
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_fDbw5jVYOHHwMyre7rRbXB
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nAUNQxetZCDDk4ZynrR94s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GTzsavE-B2jAp0QzZ7ypn0
          claim_id: c_fDbw5jVYOHHwMyre7rRbXB
          source_id: s_GFb1mNCXQgiEL1XlY8AHkH
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍈 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王鍈 之父／母。
          source:
            id: s_GFb1mNCXQgiEL1XlY8AHkH
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 247845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json
            external_identifier: CBDB:247845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nAUNQxetZCDDk4ZynrR94s
        status: active
        display_name: 王鍈
        merged_into_person_id: null
    - claim:
        id: c_GB2owB8q8Lft_2njWSTY5-
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s82ECNPB7fnFjYkrxsywhE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0RyCnIPHcXE3NbSMZxNIB_
          claim_id: c_GB2owB8q8Lft_2njWSTY5-
          source_id: s_Gr__sDHf5Cp-_K1Ykb26PP
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王鑰 之父／母。
          source:
            id: s_Gr__sDHf5Cp-_K1Ykb26PP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 247841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247841&o=json
            external_identifier: CBDB:247841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s82ECNPB7fnFjYkrxsywhE
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。成化十一年進士，籍贯慈溪，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 247835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |
| children | p_55xEZhj724uNRKr93TgaRB | 王鍊 | accepted |
| children | p_A1rGAZCMMfWMfybx9mSqau | 王錥 | accepted |
| children | p_EHZKGF4FH9JFRqQEosFwci | 王鋘 | accepted |
| children | p_HUa84XWDNujDpsdaNdZ2Ys | 王錦 | accepted |
| children | p_Js51emuVCs9EH4s4W7BXTR | 王鉉 | accepted |
| children | p_NCUgiWasKpCG1soTZ2QcFB | 王鎬 | accepted |
| children | p_XTPQLKJJmF45fkXfXdssNp | 王銳 | accepted |
| children | p_g22PHPpya8TKAiPuSDpXaf | 王鐸 | accepted |
| children | p_nAUNQxetZCDDk4ZynrR94s | 王鍈 | accepted |
| children | p_s82ECNPB7fnFjYkrxsywhE | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 247835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247835&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 247839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247839&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 247840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json)
- [中国历代人物传记资料库：王鋘（CBDB 247846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json)
- [中国历代人物传记资料库：王錦（CBDB 247844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 247843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247843&o=json)
- [中国历代人物传记资料库：王銳（CBDB 247847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 247849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 247841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247841&o=json)
- [中国历代人物传记资料库：王鍈（CBDB 247845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json)
- [中国历代人物传记资料库：王錥（CBDB 247848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json)
