---
schema: wang-person/v1
id: p_5AUJjM5DJaTK73XoVdx2Mm
status: active
merged_into: null
display_name: 王縉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLH4HYB8HyTAuytBs3H6Js
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
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
        - id: cs_htMA8AZkCMmTG4yuCZ2Ded
          claim_id: c_mLH4HYB8HyTAuytBs3H6Js
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: CBDB:201041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201041）
          source: &a1
            id: s_5KJAr2EEoaMkEH3WrA7h4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 201041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json
            external_identifier: CBDB:201041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PLJnn7AkdzUZvnvevZEb4Y
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqsjCGsLtjFzQs2HWMktvD
          claim_id: c_PLJnn7AkdzUZvnvevZEb4Y
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
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
        id: c_g12xAFefNkt4fybkFbvwDZ
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉（生于1464年），明人物。明清進士進士，籍贯西安後衛，入仕進士。（中国历代人物传记资料库 CBDB 201041）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pckp5ndFSHG74Kf3dkbBH8
          claim_id: c_g12xAFefNkt4fybkFbvwDZ
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: CBDB:201041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LWQJzOucK00n3N_-NXafsh
        subject_person_id: p_SJjQ21YN1YzyR8g9cC1ZRj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_teQY4rbxsOiGpMiya5S6zY
          claim_id: c_LWQJzOucK00n3N_-NXafsh
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SJjQ21YN1YzyR8g9cC1ZRj
        status: active
        display_name: 王旻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bYF_st-HNMlOb2fT-BEqYQ
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_W8pJKSbJ29viQBFYPNGKPo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ti5ZPyVjUgUNCzofiZNFSD
          claim_id: c_bYF_st-HNMlOb2fT-BEqYQ
          source_id: s_xKyAKrFa2K51m5a73YtSAA
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xKyAKrFa2K51m5a73YtSAA
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王縉妻)（CBDB 266258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266258&o=json
            external_identifier: CBDB:266258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W8pJKSbJ29viQBFYPNGKPo
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_vaMkQmcxFLn-NY40l5AAXu
        subject_person_id: p_yFv1UscRtN27XsgPhNidJU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3e3C2LBIWa5D0W4-QqD5G
          claim_id: c_vaMkQmcxFLn-NY40l5AAXu
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yFv1UscRtN27XsgPhNidJU
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_LiquCCNw7WuRU2jL2KqWpG
        subject_person_id: p_NkHNKQEGBGM2L8QVxJbe8U
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nY6NoT3OazNtpGfmZ9urck
          claim_id: c_LiquCCNw7WuRU2jL2KqWpG
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NkHNKQEGBGM2L8QVxJbe8U
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_sPaedT6rptaGkq1s0Epu28
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GGvBfRTcsyF3cmnrENyGsK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6EUs-QfqGQ67ZP6lTU_2Q
          claim_id: c_sPaedT6rptaGkq1s0Epu28
          source_id: s_SnonyjwmyVpxtrDGFyVDDj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201041 王縉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SnonyjwmyVpxtrDGFyVDDj
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 266259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266259&o=json
            external_identifier: CBDB:266259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGvBfRTcsyF3cmnrENyGsK
        status: active
        display_name: 王經
        merged_into_person_id: null
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | 王縉（生于1464年），明人物。明清進士進士，籍贯西安後衛，入仕進士。（中国历代人物传记资料库 CBDB 201041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJjQ21YN1YzyR8g9cC1ZRj | 王旻 | accepted |
| spouses | p_W8pJKSbJ29viQBFYPNGKPo | 郭氏 | accepted |
| ancestors | p_yFv1UscRtN27XsgPhNidJU | 王禎 | accepted |
| ancestors | p_NkHNKQEGBGM2L8QVxJbe8U | 王英 | accepted |
| other | p_GGvBfRTcsyF3cmnrENyGsK | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王縉妻)（CBDB 266258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266258&o=json)
- [中国历代人物传记资料库：王縉（CBDB 201041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json)
- [中国历代人物传记资料库：王經（CBDB 266259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266259&o=json)
