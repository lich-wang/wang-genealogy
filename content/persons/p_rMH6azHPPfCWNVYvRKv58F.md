---
schema: wang-person/v1
id: p_rMH6azHPPfCWNVYvRKv58F
status: active
merged_into: null
display_name: 王璲
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CdTC231D3ue7tYKN6wcrY1
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YNf1famd5zZoNPvCb2Pw3X
          claim_id: c_CdTC231D3ue7tYKN6wcrY1
          source_id: s_t3Bhwn4dLRCwysXHLohx7D
          stance: supports
          locator: CBDB:282815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282815）
          source: &a1
            id: s_t3Bhwn4dLRCwysXHLohx7D
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282815&o=json
            external_identifier: CBDB:282815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yZbNELifThAmgvNG5RgvPU
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wEAgpjnHGT2HOSR1zAFZkh
          claim_id: c_yZbNELifThAmgvNG5RgvPU
          source_id: s_t3Bhwn4dLRCwysXHLohx7D
          stance: supports
          locator: CBDB:282815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ct7lzsfSOxAbhCecVT7c7W
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkW50ZX8vZ1sXKppHEQzWc
          claim_id: c_Ct7lzsfSOxAbhCecVT7c7W
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S8PvPikNKeqv9SvZpdTNYm
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 202067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json
            external_identifier: CBDB:202067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
    - claim:
        id: c_0vtMnJItnMDxODrYxMDYoe
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_59QovxVPXCB82j7aTmqHP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FmzdXhThC3hIOisQigu5Ob
          claim_id: c_0vtMnJItnMDxODrYxMDYoe
          source_id: s_USbXKNKEoGBpbKylea6Ws1
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王祿 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王祿 之父／母。
          source:
            id: s_USbXKNKEoGBpbKylea6Ws1
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 282819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json
            external_identifier: CBDB:282819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_59QovxVPXCB82j7aTmqHP5
        status: active
        display_name: 王祿
        merged_into_person_id: null
    - claim:
        id: c_AqyhvJcmcjBFWSjgZPESEq
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8frUJ3LrDhGKx8fT6HKVXg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7Jr8XHOk38nbyT_bCzQT-
          claim_id: c_AqyhvJcmcjBFWSjgZPESEq
          source_id: s_trO5HfTRAzCPMm1Men-Gf-
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王祉 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王祉 之父／母。
          source:
            id: s_trO5HfTRAzCPMm1Men-Gf-
            source_type: api_record
            title: 中国历代人物传记资料库：王祉（CBDB 282824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json
            external_identifier: CBDB:282824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8frUJ3LrDhGKx8fT6HKVXg
        status: active
        display_name: 王祉
        merged_into_person_id: null
    - claim:
        id: c_fsSW4SxbWpAfeLHYCaTZej
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JRNXV236M9H6uA15akL81F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lFI9D42nEvQCsZ9IjaA-IX
          claim_id: c_fsSW4SxbWpAfeLHYCaTZej
          source_id: s_CkBFh1vAL1uaohcxT505F0
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王初 与 王祐 为同胞（CBDB 记「弟」），王祐 之父／母即 王初 之父／母。
          source:
            id: s_CkBFh1vAL1uaohcxT505F0
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 282818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json
            external_identifier: CBDB:282818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JRNXV236M9H6uA15akL81F
        status: active
        display_name: 王初
        merged_into_person_id: null
    - claim:
        id: c_2_76SY0U1bya9aqVUwlCuE
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrhxT7N8BdrnVPUveD5RRk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1yofo8I7b0n0sHOmLx1j9
          claim_id: c_2_76SY0U1bya9aqVUwlCuE
          source_id: s_7tcHoRPsiWBQ-ty_pesZ1o
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王祚 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王祚 之父／母。
          source:
            id: s_7tcHoRPsiWBQ-ty_pesZ1o
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 282822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282822&o=json
            external_identifier: CBDB:282822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KrhxT7N8BdrnVPUveD5RRk
        status: active
        display_name: 王祚
        merged_into_person_id: null
    - claim:
        id: c_VQPn5Hy23ep-v79j6fGmXO
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aH98rB2QEw4PBn91pBksXR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GsRFnNuqcH8GHFM3hHXCzF
          claim_id: c_VQPn5Hy23ep-v79j6fGmXO
          source_id: s_ZgI0awoOyx7FStwGRdVp3X
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王禧 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王禧 之父／母。
          source:
            id: s_ZgI0awoOyx7FStwGRdVp3X
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 282821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282821&o=json
            external_identifier: CBDB:282821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aH98rB2QEw4PBn91pBksXR
        status: active
        display_name: 王禧
        merged_into_person_id: null
    - claim:
        id: c_71I1XXbhIMFEiaelQdDYzF
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_urAcQeg5gkmYMwmfruuECn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j3eSpKC_p6frKWJHW2ouMl
          claim_id: c_71I1XXbhIMFEiaelQdDYzF
          source_id: s_JIBL0sWQtdESbTixmnKxxo
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王禟 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王禟 之父／母。
          source:
            id: s_JIBL0sWQtdESbTixmnKxxo
            source_type: api_record
            title: 中国历代人物传记资料库：王禟（CBDB 282823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282823&o=json
            external_identifier: CBDB:282823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_urAcQeg5gkmYMwmfruuECn
        status: active
        display_name: 王禟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璲 | accepted |
| bio.summary | 王璲，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |
| children | p_59QovxVPXCB82j7aTmqHP5 | 王祿 | accepted |
| children | p_8frUJ3LrDhGKx8fT6HKVXg | 王祉 | accepted |
| children | p_JRNXV236M9H6uA15akL81F | 王初 | accepted |
| children | p_KrhxT7N8BdrnVPUveD5RRk | 王祚 | accepted |
| children | p_aH98rB2QEw4PBn91pBksXR | 王禧 | accepted |
| children | p_urAcQeg5gkmYMwmfruuECn | 王禟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王初（CBDB 282818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json)
- [中国历代人物传记资料库：王祿（CBDB 282819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json)
- [中国历代人物传记资料库：王璲（CBDB 282815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282815&o=json)
- [中国历代人物传记资料库：王禟（CBDB 282823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282823&o=json)
- [中国历代人物传记资料库：王禧（CBDB 282821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282821&o=json)
- [中国历代人物传记资料库：王祐（CBDB 202067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json)
- [中国历代人物传记资料库：王祉（CBDB 282824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json)
- [中国历代人物传记资料库：王祚（CBDB 282822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282822&o=json)
