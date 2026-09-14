---
schema: wang-person/v1
id: p_tHYCzriS6LnJ4HHGiVfcHQ
status: active
merged_into: null
display_name: 王汝清
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAVTVWuitFPpL1gw4eWWeD
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zABjm4jV5pL8TSRiRnJdZm
          claim_id: c_dAVTVWuitFPpL1gw4eWWeD
          source_id: s_H4iDGZJiekNbnssCEsjJsY
          stance: supports
          locator: CBDB:201079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201079）
          source: &a1
            id: s_H4iDGZJiekNbnssCEsjJsY
            source_type: api_record
            title: 中国历代人物传记资料库：王汝清（CBDB 201079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201079&o=json
            external_identifier: CBDB:201079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rw6mr42i4zLZLiJ1CtYFiX
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5tawGnEN1ZytTxbuKqxwQP
          claim_id: c_rw6mr42i4zLZLiJ1CtYFiX
          source_id: s_H4iDGZJiekNbnssCEsjJsY
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
        id: c_WFwHLQ6m6yPHqFfb5E8eaA
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝清（生于1460年），明人物。弘治六年進士，籍贯中牟，入仕進士，曾任兵部主事。（中国历代人物传记资料库 CBDB 201079）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q8BIAglOsqzPBUnklv6XrJ
          claim_id: c_WFwHLQ6m6yPHqFfb5E8eaA
          source_id: s_H4iDGZJiekNbnssCEsjJsY
          stance: supports
          locator: CBDB:201079
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e5jrA5Nhmi3Juazf3lvV0R
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z9izPYn7qcp5ylTylnYQC
          claim_id: c_e5jrA5Nhmi3Juazf3lvV0R
          source_id: s_Yn8KP1n61f6yGwukEqwKKr
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Yn8KP1n61f6yGwukEqwKKr
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 266711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266711&o=json
            external_identifier: CBDB:266711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uKE1GZcJjjWN4cHRBMP9aK
        status: active
        display_name: 王璿
        merged_into_person_id: null
  children:
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
          source:
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
      object_person:
        id: p_FbvUfnrJsMZAACE7dBpnUs
        status: active
        display_name: 王胤賢
        merged_into_person_id: null
    - claim:
        id: c_Tdwk-Hwb1RYhzjhu8761KB
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iR6ghYs4fGeWgymwd4mhPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NoHUPsazU4YY2b0-8DUB6
          claim_id: c_Tdwk-Hwb1RYhzjhu8761KB
          source_id: s_ns2RMEEq5aPQ0uF_SrTpkh
          stance: supports
          locator: CBDB：兄弟 王胤賢（201978）之父／母 王汝清
          quotation: null
          interpretation_note: 由兄弟关系推断：王胤明 与 王胤賢 为同胞（CBDB 记「兄」），王胤賢 之父／母即 王胤明 之父／母。
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
        id: c_Dj96bYcgApL-iIs6drOdgA
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tB2GKH36Qa99v4obBzfSMp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vw1DCxCF0GxkWp7fn8pUwO
          claim_id: c_Dj96bYcgApL-iIs6drOdgA
          source_id: s_US-czxC7m-BKNAwNRZcC-V
          stance: supports
          locator: CBDB：兄弟 王胤賢（201978）之父／母 王汝清
          quotation: null
          interpretation_note: 由兄弟关系推断：王胤勤 与 王胤賢 为同胞（CBDB 记「兄」），王胤賢 之父／母即 王胤勤 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nfXhNCUE-DYICYGlfq0SG8
        subject_person_id: p_QogBPUoy6ogb9CeCDBCCo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5VI43fxMtPkL2vusgeWcvZ
          claim_id: c_nfXhNCUE-DYICYGlfq0SG8
          source_id: s_azDg5oRp8H68tqdEHuMs3b
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_azDg5oRp8H68tqdEHuMs3b
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 266710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266710&o=json
            external_identifier: CBDB:266710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QogBPUoy6ogb9CeCDBCCo9
        status: active
        display_name: 王翰
        merged_into_person_id: null
    - claim:
        id: c_Nmp4TfiVBFCuVSl8H8Y70c
        subject_person_id: p_icAExCAPzEDDYhxquU8A5n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JlXZVPF99MfkwBJH8aK6K1
          claim_id: c_Nmp4TfiVBFCuVSl8H8Y70c
          source_id: s_sSDkUYf8Yf9ngfxvnTSX6Y
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sSDkUYf8Yf9ngfxvnTSX6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王翯（CBDB 266709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266709&o=json
            external_identifier: CBDB:266709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_icAExCAPzEDDYhxquU8A5n
        status: active
        display_name: 王翯
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_KG7jr3qpvuqel7c3zlUiY1
        subject_person_id: p_gWoRusN1yZ4Gkp9hmVUDgp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qRYc8C-3ZSl4Rg7bhY99G5
          claim_id: c_KG7jr3qpvuqel7c3zlUiY1
          source_id: s_bcHEI74KYWJjvFER5kizJ9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201079 王汝清）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bcHEI74KYWJjvFER5kizJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洪（CBDB 266714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266714&o=json
            external_identifier: CBDB:266714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gWoRusN1yZ4Gkp9hmVUDgp
        status: active
        display_name: 王汝洪
        merged_into_person_id: null
---

# 王汝清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝清 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | 王汝清（生于1460年），明人物。弘治六年進士，籍贯中牟，入仕進士，曾任兵部主事。（中国历代人物传记资料库 CBDB 201079） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uKE1GZcJjjWN4cHRBMP9aK | 王璿 | accepted |
| children | p_FbvUfnrJsMZAACE7dBpnUs | 王胤賢 | accepted |
| children | p_iR6ghYs4fGeWgymwd4mhPE | 王胤明 | accepted |
| children | p_tB2GKH36Qa99v4obBzfSMp | 王胤勤 | accepted |
| ancestors | p_QogBPUoy6ogb9CeCDBCCo9 | 王翰 | accepted |
| ancestors | p_icAExCAPzEDDYhxquU8A5n | 王翯 | accepted |
| other | p_gWoRusN1yZ4Gkp9hmVUDgp | 王汝洪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 266710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266710&o=json)
- [中国历代人物传记资料库：王翯（CBDB 266709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266709&o=json)
- [中国历代人物传记资料库：王汝洪（CBDB 266714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266714&o=json)
- [中国历代人物传记资料库：王汝清（CBDB 201079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201079&o=json)
- [中国历代人物传记资料库：王璿（CBDB 266711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266711&o=json)
- [中国历代人物传记资料库：王胤明（CBDB 281437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json)
- [中国历代人物传记资料库：王胤勤（CBDB 281438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281438&o=json)
- [中国历代人物传记资料库：王胤賢（CBDB 201978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json)
