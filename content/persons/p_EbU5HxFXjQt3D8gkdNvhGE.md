---
schema: wang-person/v1
id: p_EbU5HxFXjQt3D8gkdNvhGE
status: active
merged_into: null
display_name: 王之麟
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLHJhtSqBn8UKPxTNQLGbM
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nrdJca1PZx9wfF31nYBXtU
          claim_id: c_aLHJhtSqBn8UKPxTNQLGbM
          source_id: s_6wYDcFGgooCmPR7ygpHoMH
          stance: supports
          locator: CBDB:338691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338691）
          source: &a1
            id: s_6wYDcFGgooCmPR7ygpHoMH
            source_type: api_record
            title: 中国历代人物传记资料库：王之麟（CBDB 338691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338691&o=json
            external_identifier: CBDB:338691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mj928nNtf4yHAfdLD8PJkb
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5e8X3zUKTTp8jTDEYaFEX
          claim_id: c_mj928nNtf4yHAfdLD8PJkb
          source_id: s_6wYDcFGgooCmPR7ygpHoMH
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
        id: c_9e6PaeE2Fc2WTnvYMruGLA
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麟（生于1546年），明人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 338691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TgWPR-3LkLK7VWHtwT2luO
          claim_id: c_9e6PaeE2Fc2WTnvYMruGLA
          source_id: s_6wYDcFGgooCmPR7ygpHoMH
          stance: supports
          locator: CBDB:338691
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kZlUa_q-Q1gXTLuU9cCga5
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyywGft4yrSmxST3DdCWyK
          claim_id: c_kZlUa_q-Q1gXTLuU9cCga5
          source_id: s_GrB2at1R9xCZSMfT2FEm5X
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GrB2at1R9xCZSMfT2FEm5X
            source_type: api_record
            title: 中国历代人物传记资料库：王萬齡（CBDB 216054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216054&o=json
            external_identifier: CBDB:216054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ACyEmNR3JYfTVCeFjd3Md9
        status: active
        display_name: 王萬齡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dp-2e34sMixmTRrYndyyb_
        subject_person_id: p_RZu8FUK4T6DppZ6UkLp2fJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdC18t3JDO9k8Olx0TqFk-
          claim_id: c_dp-2e34sMixmTRrYndyyb_
          source_id: s_uYtdjwrZsaCBP22Z2x9cH5
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uYtdjwrZsaCBP22Z2x9cH5
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 216053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216053&o=json
            external_identifier: CBDB:216053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RZu8FUK4T6DppZ6UkLp2fJ
        status: active
        display_name: 王寶
        merged_into_person_id: null
    - claim:
        id: c_50SaxX_rMi_Ra3f_7mZLCr
        subject_person_id: p_ZjkaBvUPn3V9BYvGQFwbCC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TRqlnaYw9qPv629Etanm8
          claim_id: c_50SaxX_rMi_Ra3f_7mZLCr
          source_id: s_tK5DGgKwKPkEPzYhMjfGNq
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tK5DGgKwKPkEPzYhMjfGNq
            source_type: api_record
            title: 中国历代人物传记资料库：王允學（CBDB 216052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216052&o=json
            external_identifier: CBDB:216052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ZjkaBvUPn3V9BYvGQFwbCC
        status: active
        display_name: 王允學
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_jlODoiIhuoecPBICRBq-6o
        subject_person_id: p_CHog6Gg49iPBZ4PDZt6JT5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3Ggmk0jPDTnKWtMOAASpT
          claim_id: c_jlODoiIhuoecPBICRBq-6o
          source_id: s_N9MVhb8TveovNLEXlosjE5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N9MVhb8TveovNLEXlosjE5
            source_type: api_record
            title: 中国历代人物传记资料库：王之龍（CBDB 216060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216060&o=json
            external_identifier: CBDB:216060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CHog6Gg49iPBZ4PDZt6JT5
        status: active
        display_name: 王之龍
        merged_into_person_id: null
    - claim:
        id: c_TRXf-4im_5iWZoyMtQDuB1
        subject_person_id: p_Ch8G8ysWFs91khUE5LQNnF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v72f7N2_K9Rq4nx-e85_Fg
          claim_id: c_TRXf-4im_5iWZoyMtQDuB1
          source_id: s_kndW3iyTzHxivoAPaOnGe_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kndW3iyTzHxivoAPaOnGe_
            source_type: api_record
            title: 中国历代人物传记资料库：王之鰲（CBDB 216062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216062&o=json
            external_identifier: CBDB:216062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ch8G8ysWFs91khUE5LQNnF
        status: active
        display_name: 王之鰲
        merged_into_person_id: null
    - claim:
        id: c_Bm1gzhOr6H24cONyYbxVG1
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P4zetjKiqY2BGdpFP8duKp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XjpcQeRnW8hdC10Gas9en8
          claim_id: c_Bm1gzhOr6H24cONyYbxVG1
          source_id: s_bhOMx88nSv8iEbWbbKwclu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bhOMx88nSv8iEbWbbKwclu
            source_type: api_record
            title: 中国历代人物传记资料库：王之麒（CBDB 216057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json
            external_identifier: CBDB:216057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4zetjKiqY2BGdpFP8duKp
        status: active
        display_name: 王之麒
        merged_into_person_id: null
    - claim:
        id: c_tM9o9mpf-kb8B3_q2Q2xH_
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4mUP0qR1vxgSmN5uLKv3Uw
          claim_id: c_tM9o9mpf-kb8B3_q2Q2xH_
          source_id: s_Qq554z1Ig8pgW-Ih0l_KLE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qq554z1Ig8pgW-Ih0l_KLE
            source_type: api_record
            title: 中国历代人物传记资料库：王之鵬（CBDB 216061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json
            external_identifier: CBDB:216061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        status: active
        display_name: 王之鵬
        merged_into_person_id: null
    - claim:
        id: c_Emzc6Ykm3REjsBbkhkRJy9
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sGWjQA12UW9TGko7zM1mPi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q60xMFXbfI-OXP-lzvs3dm
          claim_id: c_Emzc6Ykm3REjsBbkhkRJy9
          source_id: s_CWRO5HIyJgispsI3O15O7V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CWRO5HIyJgispsI3O15O7V
            source_type: api_record
            title: 中国历代人物传记资料库：王之鳳（CBDB 216058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216058&o=json
            external_identifier: CBDB:216058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sGWjQA12UW9TGko7zM1mPi
        status: active
        display_name: 王之鳳
        merged_into_person_id: null
---

# 王之麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之麟 | accepted |
| birth.date | 1546年 | accepted |
| bio.summary | 王之麟（生于1546年），明人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 338691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ACyEmNR3JYfTVCeFjd3Md9 | 王萬齡 | accepted |
| ancestors | p_RZu8FUK4T6DppZ6UkLp2fJ | 王寶 | accepted |
| ancestors | p_ZjkaBvUPn3V9BYvGQFwbCC | 王允學 | accepted |
| other | p_CHog6Gg49iPBZ4PDZt6JT5 | 王之龍 | accepted |
| other | p_Ch8G8ysWFs91khUE5LQNnF | 王之鰲 | accepted |
| other | p_P4zetjKiqY2BGdpFP8duKp | 王之麒 | accepted |
| other | p_Vgq6Br2pMNYPqGyMJ8HTAx | 王之鵬 | accepted |
| other | p_sGWjQA12UW9TGko7zM1mPi | 王之鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 216053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216053&o=json)
- [中国历代人物传记资料库：王萬齡（CBDB 216054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216054&o=json)
- [中国历代人物传记资料库：王允學（CBDB 216052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216052&o=json)
- [中国历代人物传记资料库：王之鰲（CBDB 216062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216062&o=json)
- [中国历代人物传记资料库：王之鳳（CBDB 216058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216058&o=json)
- [中国历代人物传记资料库：王之麟（CBDB 338691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338691&o=json)
- [中国历代人物传记资料库：王之龍（CBDB 216060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216060&o=json)
- [中国历代人物传记资料库：王之鵬（CBDB 216061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json)
- [中国历代人物传记资料库：王之麒（CBDB 216057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json)
