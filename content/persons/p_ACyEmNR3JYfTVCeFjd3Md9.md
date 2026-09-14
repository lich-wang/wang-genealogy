---
schema: wang-person/v1
id: p_ACyEmNR3JYfTVCeFjd3Md9
status: active
merged_into: null
display_name: 王萬齡
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jznNFxZEQY25oFeSssLktM
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtebQ4cyDUDwvDwQ51oU36
          claim_id: c_jznNFxZEQY25oFeSssLktM
          source_id: s_GrB2at1R9xCZSMfT2FEm5X
          stance: supports
          locator: CBDB:216054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216054）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mos1MHnJFy89qUzTxvBZ1E
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齡，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216054）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GRK7_Q8hJRl6FJ0baOEe_H
          claim_id: c_Mos1MHnJFy89qUzTxvBZ1E
          source_id: s_GrB2at1R9xCZSMfT2FEm5X
          stance: supports
          locator: CBDB:216054
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_EbU5HxFXjQt3D8gkdNvhGE
        status: active
        display_name: 王之麟
        merged_into_person_id: null
    - claim:
        id: c_EXN9MSzZg9LUWUOi1HHIMu
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CHog6Gg49iPBZ4PDZt6JT5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rH6smEDVs4flbJ6Py0iOJF
          claim_id: c_EXN9MSzZg9LUWUOi1HHIMu
          source_id: s_N9MVhb8TveovNLEXlosjE5
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之龍 与 王之麟 为同胞（CBDB 记「兄」），王之麟 之父／母即 王之龍 之父／母。
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
        id: c_oslg7wvMTlK8RwZDLjVcPW
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ch8G8ysWFs91khUE5LQNnF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NILyGASsRX6HFPOJYhDlZY
          claim_id: c_oslg7wvMTlK8RwZDLjVcPW
          source_id: s_kndW3iyTzHxivoAPaOnGe_
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之鰲 与 王之麟 为同胞（CBDB 记「兄」），王之麟 之父／母即 王之鰲 之父／母。
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
        id: c_5zmHsLUxIwkOlQEGgrtF0E
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P4zetjKiqY2BGdpFP8duKp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJ-3sNYvhOwjOm5wHUw8H9
          claim_id: c_5zmHsLUxIwkOlQEGgrtF0E
          source_id: s_bhOMx88nSv8iEbWbbKwclu
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之麒 与 王之麟 为同胞（CBDB 记「弟」），王之麟 之父／母即 王之麒 之父／母。
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
        id: c_i4XIwhQ831xf6v7XqKbtXW
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWd3h0j8p3JfHDzz18RQeQ
          claim_id: c_i4XIwhQ831xf6v7XqKbtXW
          source_id: s_Qq554z1Ig8pgW-Ih0l_KLE
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之鵬 与 王之麟 为同胞（CBDB 记「兄」），王之麟 之父／母即 王之鵬 之父／母。
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
        id: c_o7CRzqWPqAOmXIItupXyf7
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sGWjQA12UW9TGko7zM1mPi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cbjpHsPZeC0M_IoUSStzLO
          claim_id: c_o7CRzqWPqAOmXIItupXyf7
          source_id: s_CWRO5HIyJgispsI3O15O7V
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之鳳 与 王之麟 为同胞（CBDB 记「兄」），王之麟 之父／母即 王之鳳 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬齡 | accepted |
| bio.summary | 王萬齡，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216054） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EbU5HxFXjQt3D8gkdNvhGE | 王之麟 | accepted |
| children | p_CHog6Gg49iPBZ4PDZt6JT5 | 王之龍 | accepted |
| children | p_Ch8G8ysWFs91khUE5LQNnF | 王之鰲 | accepted |
| children | p_P4zetjKiqY2BGdpFP8duKp | 王之麒 | accepted |
| children | p_Vgq6Br2pMNYPqGyMJ8HTAx | 王之鵬 | accepted |
| children | p_sGWjQA12UW9TGko7zM1mPi | 王之鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬齡（CBDB 216054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216054&o=json)
- [中国历代人物传记资料库：王之鰲（CBDB 216062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216062&o=json)
- [中国历代人物传记资料库：王之鳳（CBDB 216058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216058&o=json)
- [中国历代人物传记资料库：王之龍（CBDB 216060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216060&o=json)
- [中国历代人物传记资料库：王之鵬（CBDB 216061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json)
- [中国历代人物传记资料库：王之麒（CBDB 216057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json)
