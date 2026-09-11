---
schema: wang-person/v1
id: p_xq77ND3Yirb2ZWfhHcArnK
status: active
merged_into: null
display_name: 王德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJ22Dk2VA3iLsLoSM1atnW
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_es7mMSZjTEAd6qdcSRnkL4
          claim_id: c_SJ22Dk2VA3iLsLoSM1atnW
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: CBDB:68161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68161）
          source: &a1
            id: s_Cw2hEETiUKegMyTEr9G5M1
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 68161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json
            external_identifier: CBDB:68161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aLwud7gSeHvejojgaVnuTK
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CmR84t4pFazmXMYGT4cAQx
          claim_id: c_aLwud7gSeHvejojgaVnuTK
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
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
        id: c_YJEX5S7JwP85QpnrZVNcPe
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G7yj2HiNoc17CJ34Qx4S47
          claim_id: c_YJEX5S7JwP85QpnrZVNcPe
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
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
        id: c_obqsEx2bQhX58y6uyEpoDe
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rbdi1PNkHQVVFuxe39d9Em
          claim_id: c_obqsEx2bQhX58y6uyEpoDe
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WfSsAuPR6MP7zRi5eEyFH-
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9koZ1Nf7PuHsNm7lv2qTOn
          claim_id: c_WfSsAuPR6MP7zRi5eEyFH-
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rdQpvSEbMvzFVt6su4bz6E
        status: active
        display_name: 王浥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dZF9UW0BtuvZai2W84h1mU
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_scSJvCky2iFx6GRTpEFNgW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQKWZrXjZIWhprZo-_s1Sv
          claim_id: c_dZF9UW0BtuvZai2W84h1mU
          source_id: s_7iCh_Up9UZNqJBZFxKxuiw
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7iCh_Up9UZNqJBZFxKxuiw
            source_type: api_record
            title: 中国历代人物传记资料库：邵氏(王德妻)（CBDB 301184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301184&o=json
            external_identifier: CBDB:301184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_scSJvCky2iFx6GRTpEFNgW
        status: active
        display_name: 邵氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_jzw6Rj3GFnZZWZ86ScNz4m
        subject_person_id: p_zjAp5GG3WSvDfuHDHGpQQJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wha989vdgE6GkXqn-xAe4j
          claim_id: c_jzw6Rj3GFnZZWZ86ScNz4m
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zjAp5GG3WSvDfuHDHGpQQJ
        status: active
        display_name: 王廷芳
        merged_into_person_id: null
    - claim:
        id: c_F4r386s4rIJCuQe7rvXsf4
        subject_person_id: p_hCzKn1nSfNfQRLjCB3DtBQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mge2bcLxJRotiCE7Q-ZXSN
          claim_id: c_F4r386s4rIJCuQe7rvXsf4
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hCzKn1nSfNfQRLjCB3DtBQ
        status: active
        display_name: 王鐲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 1517年 | accepted |
| death.date | 1558年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rdQpvSEbMvzFVt6su4bz6E | 王浥 | accepted |
| spouses | p_scSJvCky2iFx6GRTpEFNgW | 邵氏 | accepted |
| ancestors | p_zjAp5GG3WSvDfuHDHGpQQJ | 王廷芳 | accepted |
| ancestors | p_hCzKn1nSfNfQRLjCB3DtBQ | 王鐲 | accepted |

## 外部来源

- [中国历代人物传记资料库：邵氏(王德妻)（CBDB 301184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301184&o=json)
- [中国历代人物传记资料库：王德（CBDB 68161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json)
