---
schema: wang-person/v1
id: p_fngUDbgD5w2bFevKYCEogv
status: active
merged_into: null
display_name: 王霽
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XTjcGcp4K6dQon22BySFGA
        subject_person_id: p_fngUDbgD5w2bFevKYCEogv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MR58MFrAjzD3dMKqQRtrAE
          claim_id: c_XTjcGcp4K6dQon22BySFGA
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: CBDB:126885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126885）
          source: &a1
            id: s_CU91xn6DkLaeRJP93mtoUf
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 126885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126885&o=json
            external_identifier: CBDB:126885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4XQpsLZN34zQxzhrt2cvxB
        subject_person_id: p_fngUDbgD5w2bFevKYCEogv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkZBsBDStv19xRXMyRxNZL
          claim_id: c_4XQpsLZN34zQxzhrt2cvxB
          source_id: s_CU91xn6DkLaeRJP93mtoUf
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
        id: c_C2AJBxnrxJSfkBXYcLNfCv
        subject_person_id: p_fngUDbgD5w2bFevKYCEogv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1496年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gocg7AjKCLpq4AofrNSSDK
          claim_id: c_C2AJBxnrxJSfkBXYcLNfCv
          source_id: s_CU91xn6DkLaeRJP93mtoUf
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
        id: c_KDaNd9LkUFsiyMavSE34NC
        subject_person_id: p_fngUDbgD5w2bFevKYCEogv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽（1436年—1496年），明人物。明清進士進士，籍贯上海，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3GtYR-XFH3JsRf3yuYbagy
          claim_id: c_KDaNd9LkUFsiyMavSE34NC
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: CBDB:126885
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__5R5OZIaoy4eApRGk7Q0wQ
        subject_person_id: p_FX65EqFKSpj3D1AsBT3bfb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRN5zSz8_uA51c_YrnlNwH
          claim_id: c__5R5OZIaoy4eApRGk7Q0wQ
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FX65EqFKSpj3D1AsBT3bfb
        status: active
        display_name: 王顯忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iHmx6SecX27XfTNZiQe1VR
        subject_person_id: p_fngUDbgD5w2bFevKYCEogv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_K8PCCktUckGkJGwiDHGjzh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Crm9_fM_k71eDy0TNpVDza
          claim_id: c_iHmx6SecX27XfTNZiQe1VR
          source_id: s_T-wyj4Nmkktkblll0xQ1TI
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T-wyj4Nmkktkblll0xQ1TI
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王霽妻)（CBDB 322919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322919&o=json
            external_identifier: CBDB:322919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K8PCCktUckGkJGwiDHGjzh
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_lpK_-Qm74mkH2d9p949JPx
        subject_person_id: p_ZP8SgXw3whHEPcVoNmGd6m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q2bIDRHYt2EoWQTZDai50K
          claim_id: c_lpK_-Qm74mkH2d9p949JPx
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZP8SgXw3whHEPcVoNmGd6m
        status: active
        display_name: 王道亨
        merged_into_person_id: null
    - claim:
        id: c_FbMi0Oy5b_E4c_fsCuINez
        subject_person_id: p_SvPgtAZ6xmVpkyCuSarwR8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LzQsyRl46LRGAyX4DJCZrC
          claim_id: c_FbMi0Oy5b_E4c_fsCuINez
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SvPgtAZ6xmVpkyCuSarwR8
        status: active
        display_name: 王以誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_YckJht8Mp3zn-4BR5Vm0pk
        subject_person_id: p_4DGDkGJgcpuqghUCMBnc46
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H_VlpQnaR5Sp8if2NTs2dE
          claim_id: c_YckJht8Mp3zn-4BR5Vm0pk
          source_id: s_1J9RnCQvBQIEKAAsrKpLH1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126885 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1J9RnCQvBQIEKAAsrKpLH1
            source_type: api_record
            title: 中国历代人物传记资料库：王霦（CBDB 322941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322941&o=json
            external_identifier: CBDB:322941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4DGDkGJgcpuqghUCMBnc46
        status: active
        display_name: 王霦
        merged_into_person_id: null
    - claim:
        id: c_OKG8WtPVqgmOjefg6pA46z
        subject_person_id: p_PL2SY4EQHDnNU8dabbF1mF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_g28gs_kt4RfQxGN9xBig
          claim_id: c_OKG8WtPVqgmOjefg6pA46z
          source_id: s_kMZFLmvgeIh4VuNz3E91IN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126885 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kMZFLmvgeIh4VuNz3E91IN
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 322930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322930&o=json
            external_identifier: CBDB:322930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PL2SY4EQHDnNU8dabbF1mF
        status: active
        display_name: 王雲
        merged_into_person_id: null
---

# 王霽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霽 | accepted |
| birth.date | 1436年 | accepted |
| death.date | 1496年 | accepted |
| bio.summary | 王霽（1436年—1496年），明人物。明清進士進士，籍贯上海，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FX65EqFKSpj3D1AsBT3bfb | 王顯忠 | accepted |
| spouses | p_K8PCCktUckGkJGwiDHGjzh | 曹氏 | accepted |
| ancestors | p_ZP8SgXw3whHEPcVoNmGd6m | 王道亨 | accepted |
| ancestors | p_SvPgtAZ6xmVpkyCuSarwR8 | 王以誠 | accepted |
| other | p_4DGDkGJgcpuqghUCMBnc46 | 王霦 | accepted |
| other | p_PL2SY4EQHDnNU8dabbF1mF | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王霽妻)（CBDB 322919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322919&o=json)
- [中国历代人物传记资料库：王霦（CBDB 322941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322941&o=json)
- [中国历代人物传记资料库：王霽（CBDB 126885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126885&o=json)
- [中国历代人物传记资料库：王雲（CBDB 322930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322930&o=json)
