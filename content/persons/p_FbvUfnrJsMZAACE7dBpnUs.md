---
schema: wang-person/v1
id: p_FbvUfnrJsMZAACE7dBpnUs
status: active
merged_into: null
display_name: 王胤賢
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HHwsMGUpC7iQv7HLrz2NSx
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZM3TDPN4cT74afmzSnKutR
          claim_id: c_HHwsMGUpC7iQv7HLrz2NSx
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: CBDB:201978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201978）
          source: &a1
            id: s_Ee5YLNRT2rhjRFBBFroTte
            source_type: api_record
            title: 中国历代人物传记资料库：王胤賢（CBDB 201978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json
            external_identifier: CBDB:201978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MPoQ3FL7wkMSJy6dCdiFPh
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NJKZYd8JTwwHEX9TYgPMp
          claim_id: c_MPoQ3FL7wkMSJy6dCdiFPh
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
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
        id: c_BXXmMe5Gi4aFCBY943rKVL
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤賢（生于1492年），明人物。明清進士進士，籍贯中牟，入仕進士。（中国历代人物传记资料库 CBDB 201978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lnTaLlwms4xGvAdeHUGBXN
          claim_id: c_BXXmMe5Gi4aFCBY943rKVL
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: CBDB:201978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dt5J2y3tkayt_nny68JiX2
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8X1Xpr9Xqsk0v8Co95E3O
          claim_id: c_dt5J2y3tkayt_nny68JiX2
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tHYCzriS6LnJ4HHGiVfcHQ
        status: active
        display_name: 王汝清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JT66W9c5GnDcHeOwSsHINO
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XBNq8oM2TMXDbFogqf7k7g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ws3Wvy8d6e1Gse2_QJcYhl
          claim_id: c_JT66W9c5GnDcHeOwSsHINO
          source_id: s_I3sKnvHEMpB5C8Wo6sabLc
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_I3sKnvHEMpB5C8Wo6sabLc
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王胤賢妻)（CBDB 281436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281436&o=json
            external_identifier: CBDB:281436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XBNq8oM2TMXDbFogqf7k7g
        status: active
        display_name: 蔡氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_PIgoGpNqAATA__l9mubd-r
        subject_person_id: p_QogBPUoy6ogb9CeCDBCCo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5yyNMWomNZQjMHwIkd4VB
          claim_id: c_PIgoGpNqAATA__l9mubd-r
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QogBPUoy6ogb9CeCDBCCo9
        status: active
        display_name: 王翰
        merged_into_person_id: null
    - claim:
        id: c_PQlT2TlW9P5JV_m7gvy5JZ
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dbb4cGip20tOPjzAhlZd4V
          claim_id: c_PQlT2TlW9P5JV_m7gvy5JZ
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uKE1GZcJjjWN4cHRBMP9aK
        status: active
        display_name: 王璿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_VLT-ND0dHhZpxFIOX1X-rv
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iR6ghYs4fGeWgymwd4mhPE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jCbz7FKR_8iEqXDGP2mZK8
          claim_id: c_VLT-ND0dHhZpxFIOX1X-rv
          source_id: s_ns2RMEEq5aPQ0uF_SrTpkh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201978 王胤賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ns2RMEEq5aPQ0uF_SrTpkh
            source_type: api_record
            title: 中国历代人物传记资料库：王胤明（CBDB 281437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json
            external_identifier: CBDB:281437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iR6ghYs4fGeWgymwd4mhPE
        status: active
        display_name: 王胤明
        merged_into_person_id: null
    - claim:
        id: c_1s2qXf9SlLAzN2BlKbbuEW
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tB2GKH36Qa99v4obBzfSMp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tMPPGwjQYsFQtY3CAy6RUi
          claim_id: c_1s2qXf9SlLAzN2BlKbbuEW
          source_id: s_US-czxC7m-BKNAwNRZcC-V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201978 王胤賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_US-czxC7m-BKNAwNRZcC-V
            source_type: api_record
            title: 中国历代人物传记资料库：王胤勤（CBDB 281438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281438&o=json
            external_identifier: CBDB:281438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tB2GKH36Qa99v4obBzfSMp
        status: active
        display_name: 王胤勤
        merged_into_person_id: null
---

# 王胤賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胤賢 | accepted |
| birth.date | 1492年 | accepted |
| bio.summary | 王胤賢（生于1492年），明人物。明清進士進士，籍贯中牟，入仕進士。（中国历代人物传记资料库 CBDB 201978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tHYCzriS6LnJ4HHGiVfcHQ | 王汝清 | accepted |
| spouses | p_XBNq8oM2TMXDbFogqf7k7g | 蔡氏 | accepted |
| ancestors | p_QogBPUoy6ogb9CeCDBCCo9 | 王翰 | accepted |
| ancestors | p_uKE1GZcJjjWN4cHRBMP9aK | 王璿 | accepted |
| other | p_iR6ghYs4fGeWgymwd4mhPE | 王胤明 | accepted |
| other | p_tB2GKH36Qa99v4obBzfSMp | 王胤勤 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王胤賢妻)（CBDB 281436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281436&o=json)
- [中国历代人物传记资料库：王胤明（CBDB 281437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json)
- [中国历代人物传记资料库：王胤勤（CBDB 281438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281438&o=json)
- [中国历代人物传记资料库：王胤賢（CBDB 201978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json)
