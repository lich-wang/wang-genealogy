---
schema: wang-person/v1
id: p_F4TvNBX2MG96q5zMnLQmVQ
status: active
merged_into: null
display_name: 王應奎
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6CdSLN7rxdyuCq3hK8UyeG
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hHAvraJ1VCwF74k5gyDfnQ
          claim_id: c_6CdSLN7rxdyuCq3hK8UyeG
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: CBDB:198790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198790）
          source: &a1
            id: s_rpD9Xzyu7fDvD4yopAp4vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 198790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json
            external_identifier: CBDB:198790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tjuG1HLrsNgpp3wyP74nYH
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iY7Cddtb2EWrg5jximX8XJ
          claim_id: c_tjuG1HLrsNgpp3wyP74nYH
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
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
        id: c_e21JLHrq595sXKV7av8iHd
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎（生于1428年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 198790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AFBhld-69XJjgyHwX8vedv
          claim_id: c_e21JLHrq595sXKV7av8iHd
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: CBDB:198790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8w8x6k8zuNUBAha1eShPIK
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVZ9wjgG1zX0-H9qzdN5zD
          claim_id: c_8w8x6k8zuNUBAha1eShPIK
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Vv43N2CuZqbv1NMT55dzSf
        status: active
        display_name: 王琴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Lw-ieJ5wQ2FJiwtO7Stgyk
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7w8kW3ENHn7vAk7SQmuv6H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FjffQ5jzGSi5CojjzzsMj
          claim_id: c_Lw-ieJ5wQ2FJiwtO7Stgyk
          source_id: s_aJRxrfkelIlvrvNr8f2KCt
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aJRxrfkelIlvrvNr8f2KCt
            source_type: api_record
            title: 中国历代人物传记资料库：應氏(王應奎妻)（CBDB 317074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317074&o=json
            external_identifier: CBDB:317074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7w8kW3ENHn7vAk7SQmuv6H
        status: active
        display_name: 應氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_298_gun6D2m3X_Y0-V1rbN
        subject_person_id: p_4fgWRd3JMryEEoWDYe3SxD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s0CY11ooDL-YQC20uFKJZG
          claim_id: c_298_gun6D2m3X_Y0-V1rbN
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4fgWRd3JMryEEoWDYe3SxD
        status: active
        display_name: 王世達
        merged_into_person_id: null
    - claim:
        id: c_nQTFmSRay16hzwev-eDAoM
        subject_person_id: p_qQjh9wkA8nRsb7YY9rMuFw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTLMXfrEl_ctwN0TlWngri
          claim_id: c_nQTFmSRay16hzwev-eDAoM
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qQjh9wkA8nRsb7YY9rMuFw
        status: active
        display_name: 王思明
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_fFSWKFgt4TevEQuMCvxPId
        subject_person_id: p_4KBLPdpwaAyQ1o3o67oTLB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2RGkERccC9z5ymDwNQJ7r
          claim_id: c_fFSWKFgt4TevEQuMCvxPId
          source_id: s_UooVwaK_T-6eSUvrsI26yI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UooVwaK_T-6eSUvrsI26yI
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 317130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json
            external_identifier: CBDB:317130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4KBLPdpwaAyQ1o3o67oTLB
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_5IUt5mQCP0qaUHrNt8tWyI
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XedJnKJk2RGeVWFwqE4yLN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6beUvdNQktaF3t_GAErBk
          claim_id: c_5IUt5mQCP0qaUHrNt8tWyI
          source_id: s_rh-PahDpmqXzRTuqtqsoGp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rh-PahDpmqXzRTuqtqsoGp
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 317108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317108&o=json
            external_identifier: CBDB:317108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XedJnKJk2RGeVWFwqE4yLN
        status: active
        display_name: 王鍾
        merged_into_person_id: null
    - claim:
        id: c_AegRuqTfUdshw9CBCrQRyF
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bLj13qjFdTAK8aLLhZB8U1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAhKb1Vk3Qt0Gfhrd8F2_p
          claim_id: c_AegRuqTfUdshw9CBCrQRyF
          source_id: s_pSD5Z58eDbpWHZr25H6wBf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pSD5Z58eDbpWHZr25H6wBf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 317096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json
            external_identifier: CBDB:317096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bLj13qjFdTAK8aLLhZB8U1
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_Dv0821TxsFVfJnKbNJwom5
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gBC6XPRMAndtaDdxk88s6H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oM-Twk95QgDuauJwdBVaow
          claim_id: c_Dv0821TxsFVfJnKbNJwom5
          source_id: s_l-oHxyR0gynK8V5FYCH7a3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l-oHxyR0gynK8V5FYCH7a3
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 317119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317119&o=json
            external_identifier: CBDB:317119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gBC6XPRMAndtaDdxk88s6H
        status: active
        display_name: 王命
        merged_into_person_id: null
    - claim:
        id: c_BVQR2L3LPm7rXVynLfSGEU
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oa39NuZE1nyVRBptY6w8ss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_waHob0LYcZb4kNYardNA9n
          claim_id: c_BVQR2L3LPm7rXVynLfSGEU
          source_id: s_g6WTPcmK2bv_jlcOMhUe6z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g6WTPcmK2bv_jlcOMhUe6z
            source_type: api_record
            title: 中国历代人物传记资料库：王新（CBDB 317085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317085&o=json
            external_identifier: CBDB:317085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oa39NuZE1nyVRBptY6w8ss
        status: active
        display_name: 王新
        merged_into_person_id: null
---

# 王應奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應奎 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | 王應奎（生于1428年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 198790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vv43N2CuZqbv1NMT55dzSf | 王琴 | accepted |
| spouses | p_7w8kW3ENHn7vAk7SQmuv6H | 應氏 | accepted |
| ancestors | p_4fgWRd3JMryEEoWDYe3SxD | 王世達 | accepted |
| ancestors | p_qQjh9wkA8nRsb7YY9rMuFw | 王思明 | accepted |
| other | p_4KBLPdpwaAyQ1o3o67oTLB | 王永 | accepted |
| other | p_XedJnKJk2RGeVWFwqE4yLN | 王鍾 | accepted |
| other | p_bLj13qjFdTAK8aLLhZB8U1 | 王鑑 | accepted |
| other | p_gBC6XPRMAndtaDdxk88s6H | 王命 | accepted |
| other | p_oa39NuZE1nyVRBptY6w8ss | 王新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 317096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json)
- [中国历代人物传记资料库：王命（CBDB 317119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317119&o=json)
- [中国历代人物传记资料库：王新（CBDB 317085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317085&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 198790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json)
- [中国历代人物传记资料库：王永（CBDB 317130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json)
- [中国历代人物传记资料库：王鍾（CBDB 317108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317108&o=json)
- [中国历代人物传记资料库：應氏(王應奎妻)（CBDB 317074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317074&o=json)
