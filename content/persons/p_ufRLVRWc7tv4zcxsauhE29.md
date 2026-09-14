---
schema: wang-person/v1
id: p_ufRLVRWc7tv4zcxsauhE29
status: active
merged_into: null
display_name: 王京
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1st4DaiRXp2yPBn3JPYhbX
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C1x1QepZLLtvhqm9L63wQy
          claim_id: c_1st4DaiRXp2yPBn3JPYhbX
          source_id: s_MA26ipnwCgcZSWdtGfA6Jk
          stance: supports
          locator: CBDB:202664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202664）
          source: &a1
            id: s_MA26ipnwCgcZSWdtGfA6Jk
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 202664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202664&o=json
            external_identifier: CBDB:202664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DRaYpsb3x1CeqFWcJHN6tt
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ad389zB39LmQRHvNPRZZ3Z
          claim_id: c_DRaYpsb3x1CeqFWcJHN6tt
          source_id: s_MA26ipnwCgcZSWdtGfA6Jk
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
        id: c_7EUHKEhokzAyB2sTDAGA8j
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京（生于1497年），明人物。明清進士進士，籍贯高郵州，入仕進士，曾任布政使司照磨、太僕寺丞、通判。（中国历代人物传记资料库 CBDB 202664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_25r3V3_4_yldnnTQ590CV8
          claim_id: c_7EUHKEhokzAyB2sTDAGA8j
          source_id: s_MA26ipnwCgcZSWdtGfA6Jk
          stance: supports
          locator: CBDB:202664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Cwwy8uJKiR5S4wOz-quoCp
        subject_person_id: p_ni93rzedW8HywjRcLfPSGG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nxrc2rSyJ2hhrnwM2YO0Yq
          claim_id: c_Cwwy8uJKiR5S4wOz-quoCp
          source_id: s_Ezt3Na7tG3g8JumS7oJ3ZU
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ezt3Na7tG3g8JumS7oJ3ZU
            source_type: api_record
            title: 中国历代人物传记资料库：王民（CBDB 291943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291943&o=json
            external_identifier: CBDB:291943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ni93rzedW8HywjRcLfPSGG
        status: active
        display_name: 王民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_i8cMJ6Znu0F3iIT2Wau0ce
        subject_person_id: p_b7v4ZZ3QYXR6v61rExDyBG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tIKe7hHbQ4Z8U9jhS21W-9
          claim_id: c_i8cMJ6Znu0F3iIT2Wau0ce
          source_id: s_gzgKAKtBMFdN226FUpf7XL
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gzgKAKtBMFdN226FUpf7XL
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 291941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291941&o=json
            external_identifier: CBDB:291941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b7v4ZZ3QYXR6v61rExDyBG
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_km9pMNoIXjedtkHha0xh8k
        subject_person_id: p_VLGqy9ktakD4B6mxkUvcHL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZhDaFYDAClBkWOtZhVbl3
          claim_id: c_km9pMNoIXjedtkHha0xh8k
          source_id: s_bkPDk8zybgMC4wUK4mSPwM
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bkPDk8zybgMC4wUK4mSPwM
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 291942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291942&o=json
            external_identifier: CBDB:291942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VLGqy9ktakD4B6mxkUvcHL
        status: active
        display_name: 王業
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Lo6IQUKddq7U-f98HhOG1D
        subject_person_id: p_bUysoeJPPingc7y8SLHBRy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zl4kKTNjrRpSQM_WVYfRS0
          claim_id: c_Lo6IQUKddq7U-f98HhOG1D
          source_id: s_uqU37Mo2aUo1xXXAx6AjZU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202664 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uqU37Mo2aUo1xXXAx6AjZU
            source_type: api_record
            title: 中国历代人物传记资料库：王雲瑞（CBDB 291949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291949&o=json
            external_identifier: CBDB:291949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bUysoeJPPingc7y8SLHBRy
        status: active
        display_name: 王雲瑞
        merged_into_person_id: null
    - claim:
        id: c_MyIyVJwgBw-L7vcaxQ0-iV
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4Mdr3UfYSQJlAimXpemJL
          claim_id: c_MyIyVJwgBw-L7vcaxQ0-iV
          source_id: s_8mgTM_yYkecl2s1vFvPvlV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202664 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8mgTM_yYkecl2s1vFvPvlV
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 291948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json
            external_identifier: CBDB:291948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w9FC1F4e2g1itRnVQLmLPk
        status: active
        display_name: 王雲鵬
        merged_into_person_id: null
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 1497年 | accepted |
| bio.summary | 王京（生于1497年），明人物。明清進士進士，籍贯高郵州，入仕進士，曾任布政使司照磨、太僕寺丞、通判。（中国历代人物传记资料库 CBDB 202664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ni93rzedW8HywjRcLfPSGG | 王民 | accepted |
| ancestors | p_b7v4ZZ3QYXR6v61rExDyBG | 王紀 | accepted |
| ancestors | p_VLGqy9ktakD4B6mxkUvcHL | 王業 | accepted |
| other | p_bUysoeJPPingc7y8SLHBRy | 王雲瑞 | accepted |
| other | p_w9FC1F4e2g1itRnVQLmLPk | 王雲鵬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 291941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291941&o=json)
- [中国历代人物传记资料库：王京（CBDB 202664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202664&o=json)
- [中国历代人物传记资料库：王民（CBDB 291943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291943&o=json)
- [中国历代人物传记资料库：王業（CBDB 291942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291942&o=json)
- [中国历代人物传记资料库：王雲鵬（CBDB 291948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json)
- [中国历代人物传记资料库：王雲瑞（CBDB 291949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291949&o=json)
