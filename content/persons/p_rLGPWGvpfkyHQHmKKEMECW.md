---
schema: wang-person/v1
id: p_rLGPWGvpfkyHQHmKKEMECW
status: active
merged_into: null
display_name: 王縉
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kdPbbxpLR5yEJg7YRdoCeH
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DAvoeBEZaEkAeWk6y5krY
          claim_id: c_kdPbbxpLR5yEJg7YRdoCeH
          source_id: s_y5BosZXGh6a3zPCcNM7ZwN
          stance: supports
          locator: CBDB:299500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299500）
          source: &a1
            id: s_y5BosZXGh6a3zPCcNM7ZwN
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 299500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299500&o=json
            external_identifier: CBDB:299500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6GMw72WPZydQZtob7TNeqj
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 299500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KnkXXiWgO9SriRBffBJvZO
          claim_id: c_6GMw72WPZydQZtob7TNeqj
          source_id: s_y5BosZXGh6a3zPCcNM7ZwN
          stance: supports
          locator: CBDB:299500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_URqAOpyRYOCgONjQ4538Js
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rtyQa2s94J13v7lqq8S2M_
          claim_id: c_URqAOpyRYOCgONjQ4538Js
          source_id: s_y5BosZXGh6a3zPCcNM7ZwN
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VC8bBPzAyQehLYq3eBykXc
        status: active
        display_name: 王時儉
        merged_into_person_id: null
    - claim:
        id: c_J1PmZyDS27jwkp1W9gfZAM
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9R7BBNjfoUDjgA34nWBRmk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJac6qaSw2hSviG4lpZWZq
          claim_id: c_J1PmZyDS27jwkp1W9gfZAM
          source_id: s_bMOryc3CimX9AHyxVQVm-S
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時顯 与 王時儉 为同胞（CBDB 记「兄」），王時儉 之父／母即 王時顯 之父／母。
          source:
            id: s_bMOryc3CimX9AHyxVQVm-S
            source_type: api_record
            title: 中国历代人物传记资料库：王時顯（CBDB 299513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299513&o=json
            external_identifier: CBDB:299513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9R7BBNjfoUDjgA34nWBRmk
        status: active
        display_name: 王時顯
        merged_into_person_id: null
    - claim:
        id: c_Ap3DnDTHt8a9sxHZax_6lV
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GnavAdUvXuZBGBDBAB9uzm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BpHL8HLPe2hDEwu6AAE9Xz
          claim_id: c_Ap3DnDTHt8a9sxHZax_6lV
          source_id: s_pVVc33hfyf7VFnNrmVZP7r
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時揚 与 王時儉 为同胞（CBDB 记「弟」），王時儉 之父／母即 王時揚 之父／母。
          source:
            id: s_pVVc33hfyf7VFnNrmVZP7r
            source_type: api_record
            title: 中国历代人物传记资料库：王時揚（CBDB 299505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299505&o=json
            external_identifier: CBDB:299505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GnavAdUvXuZBGBDBAB9uzm
        status: active
        display_name: 王時揚
        merged_into_person_id: null
    - claim:
        id: c_nSzZZcDKZe9B9JSX8NKHKI
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P2RiNto8sumSvUL2j6eniw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxrAm0NX0rz2XKFYWja6uf
          claim_id: c_nSzZZcDKZe9B9JSX8NKHKI
          source_id: s_1zFA5ROv1xc4FSfUcDvVVG
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時溫 与 王時儉 为同胞（CBDB 记「弟」），王時儉 之父／母即 王時溫 之父／母。
          source:
            id: s_1zFA5ROv1xc4FSfUcDvVVG
            source_type: api_record
            title: 中国历代人物传记资料库：王時溫（CBDB 299506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299506&o=json
            external_identifier: CBDB:299506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P2RiNto8sumSvUL2j6eniw
        status: active
        display_name: 王時溫
        merged_into_person_id: null
    - claim:
        id: c_uospjSxpph_8huDMmIt1M7
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PGNhZa28GKyhzSRZbDwrrN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mgIMKFKM-t6AW2uO37-DTk
          claim_id: c_uospjSxpph_8huDMmIt1M7
          source_id: s_eiMVW7zgVVtzlw0UQcwYOQ
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時良 与 王時儉 为同胞（CBDB 记「弟」），王時儉 之父／母即 王時良 之父／母。
          source:
            id: s_eiMVW7zgVVtzlw0UQcwYOQ
            source_type: api_record
            title: 中国历代人物传记资料库：王時良（CBDB 299508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299508&o=json
            external_identifier: CBDB:299508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PGNhZa28GKyhzSRZbDwrrN
        status: active
        display_name: 王時良
        merged_into_person_id: null
    - claim:
        id: c_WjbQ_8SRmsR3YLbRuhZVng
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQoSzNAhnqAfC964i7cVHM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4ILiZFym92_C27UDl2fv2
          claim_id: c_WjbQ_8SRmsR3YLbRuhZVng
          source_id: s_2ni_uG4GYe-HVU8tpAY7Cw
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時恭 与 王時儉 为同胞（CBDB 记「弟」），王時儉 之父／母即 王時恭 之父／母。
          source:
            id: s_2ni_uG4GYe-HVU8tpAY7Cw
            source_type: api_record
            title: 中国历代人物传记资料库：王時恭（CBDB 299509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299509&o=json
            external_identifier: CBDB:299509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQoSzNAhnqAfC964i7cVHM
        status: active
        display_name: 王時恭
        merged_into_person_id: null
    - claim:
        id: c_Vu-FzOy4gmgIw_GSDhDDmS
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jkjMpCaRnAqGkKH8mdtFRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvPyhF1HkoeQVCnbaNzesH
          claim_id: c_Vu-FzOy4gmgIw_GSDhDDmS
          source_id: s_zvKJHlknCwVKGQ5Pn9ZcKj
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時達 与 王時儉 为同胞（CBDB 记「兄」），王時儉 之父／母即 王時達 之父／母。
          source:
            id: s_zvKJHlknCwVKGQ5Pn9ZcKj
            source_type: api_record
            title: 中国历代人物传记资料库：王時達（CBDB 299512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json
            external_identifier: CBDB:299512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jkjMpCaRnAqGkKH8mdtFRA
        status: active
        display_name: 王時達
        merged_into_person_id: null
    - claim:
        id: c_upe-jA43R16djcT5vGLQWX
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4sfaHG41AJkXB9tRtk3VD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EAnmhMPBqgI010Qqw4OAxs
          claim_id: c_upe-jA43R16djcT5vGLQWX
          source_id: s_3eDf8TWuewoKqpuj5wqUoy
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時瞻 与 王時儉 为同胞（CBDB 记「兄」），王時儉 之父／母即 王時瞻 之父／母。
          source:
            id: s_3eDf8TWuewoKqpuj5wqUoy
            source_type: api_record
            title: 中国历代人物传记资料库：王時瞻（CBDB 299510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299510&o=json
            external_identifier: CBDB:299510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m4sfaHG41AJkXB9tRtk3VD
        status: active
        display_name: 王時瞻
        merged_into_person_id: null
    - claim:
        id: c_TAzOAsYVh5WU2lirVRO9RK
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oWDXUPyv9KmoJt18dhD1fe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7H82VUN5ExToo8IWfx5qkP
          claim_id: c_TAzOAsYVh5WU2lirVRO9RK
          source_id: s_Ri9YqwnpP2ZzvM4lQwlkLL
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時讓 与 王時儉 为同胞（CBDB 记「兄」），王時儉 之父／母即 王時讓 之父／母。
          source:
            id: s_Ri9YqwnpP2ZzvM4lQwlkLL
            source_type: api_record
            title: 中国历代人物传记资料库：王時讓（CBDB 299511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299511&o=json
            external_identifier: CBDB:299511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oWDXUPyv9KmoJt18dhD1fe
        status: active
        display_name: 王時讓
        merged_into_person_id: null
    - claim:
        id: c_eXp8Sv3CRzdzQv5K4QnQmg
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ybJRugWHLcWcvTB254ssJw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U8dCyDaVUOnvSyIwdejbUe
          claim_id: c_eXp8Sv3CRzdzQv5K4QnQmg
          source_id: s_TZRg860dOl2REiXYn1hcJw
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時通 与 王時儉 为同胞（CBDB 记「弟」），王時儉 之父／母即 王時通 之父／母。
          source:
            id: s_TZRg860dOl2REiXYn1hcJw
            source_type: api_record
            title: 中国历代人物传记资料库：王時通（CBDB 299507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299507&o=json
            external_identifier: CBDB:299507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybJRugWHLcWcvTB254ssJw
        status: active
        display_name: 王時通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 299500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VC8bBPzAyQehLYq3eBykXc | 王時儉 | accepted |
| children | p_9R7BBNjfoUDjgA34nWBRmk | 王時顯 | accepted |
| children | p_GnavAdUvXuZBGBDBAB9uzm | 王時揚 | accepted |
| children | p_P2RiNto8sumSvUL2j6eniw | 王時溫 | accepted |
| children | p_PGNhZa28GKyhzSRZbDwrrN | 王時良 | accepted |
| children | p_eQoSzNAhnqAfC964i7cVHM | 王時恭 | accepted |
| children | p_jkjMpCaRnAqGkKH8mdtFRA | 王時達 | accepted |
| children | p_m4sfaHG41AJkXB9tRtk3VD | 王時瞻 | accepted |
| children | p_oWDXUPyv9KmoJt18dhD1fe | 王時讓 | accepted |
| children | p_ybJRugWHLcWcvTB254ssJw | 王時通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 299500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299500&o=json)
- [中国历代人物传记资料库：王時達（CBDB 299512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json)
- [中国历代人物传记资料库：王時恭（CBDB 299509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299509&o=json)
- [中国历代人物传记资料库：王時良（CBDB 299508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299508&o=json)
- [中国历代人物传记资料库：王時讓（CBDB 299511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299511&o=json)
- [中国历代人物传记资料库：王時通（CBDB 299507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299507&o=json)
- [中国历代人物传记资料库：王時溫（CBDB 299506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299506&o=json)
- [中国历代人物传记资料库：王時顯（CBDB 299513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299513&o=json)
- [中国历代人物传记资料库：王時揚（CBDB 299505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299505&o=json)
- [中国历代人物传记资料库：王時瞻（CBDB 299510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299510&o=json)
