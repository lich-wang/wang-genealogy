---
schema: wang-person/v1
id: p_YCdG7XtqNcYaExuN76xqKv
status: active
merged_into: null
display_name: 王瑶
cbdb_id: 302968
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3VJPMWm6BHRXzpGAAk5TGx
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_sd1QvtA3hRvJPB9qanaJF4
          claim_id: c_3VJPMWm6BHRXzpGAAk5TGx
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_CS7y_zJifuVvDGkuCqbMT1
          claim_id: c_3VJPMWm6BHRXzpGAAk5TGx
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: CBDB:302968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p4Jc8LB9YB3bScFAx3zcwL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瑤（302968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302968&o=json
            external_identifier: CBDB:302968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rFYFYRtEE19bvDNPqEqBpT
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2eTELdtBMB19YwC6z6D5w3
          claim_id: c_rFYFYRtEE19bvDNPqEqBpT
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: Q45626878
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tLu8bZdHKFcKjvQ3hJ6TJQ
          claim_id: c_rFYFYRtEE19bvDNPqEqBpT
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: Q45626878
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KWXdZhHobTTkLwe4r4HpD9
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YCdG7XtqNcYaExuN76xqKv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmbBcQSqzGATpbzN8BGMgx
          claim_id: c_KWXdZhHobTTkLwe4r4HpD9
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_tTR1tnVGbBjKWZgRKbkyxb
          claim_id: c_KWXdZhHobTTkLwe4r4HpD9
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
      object_person:
        id: p_ptMfEt1rAT4WiPXRdKXa9c
        status: active
        display_name: 王馨
        merged_into_person_id: null
  children:
    - claim:
        id: c_Wc2jmmPM58wTQYJaVf4qxJ
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BfDfhJNJAU9EqLxGcc2wcT
          claim_id: c_Wc2jmmPM58wTQYJaVf4qxJ
          source_id: s_cLEqrKXY73DkEAFGT4PZQv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cLEqrKXY73DkEAFGT4PZQv
            source_type: api_record
            title: 维基数据：王崇古（Q15934835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934835
            external_identifier: Q15934835
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.009Z
            metadata_json: null
        - id: cs_pcfCdwCUKj9poqWhBQdRFD
          claim_id: c_Wc2jmmPM58wTQYJaVf4qxJ
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
    - claim:
        id: c_D___Dnax8e1-pdOBODstpj
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2y3zcjSddC9WuWn1GXL3w6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LE8aGn2_xZ5RhQGK5i9cBQ
          claim_id: c_D___Dnax8e1-pdOBODstpj
          source_id: s_obJvkgHi5_MiBpkSLR2806
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇雅 与 王崇古 为同胞（CBDB 记「兄」），王崇古 之父／母即 王崇雅 之父／母。
          source:
            id: s_obJvkgHi5_MiBpkSLR2806
            source_type: api_record
            title: 中国历代人物传记资料库：王崇雅（CBDB 302978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302978&o=json
            external_identifier: CBDB:302978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2y3zcjSddC9WuWn1GXL3w6
        status: active
        display_name: 王崇雅
        merged_into_person_id: null
    - claim:
        id: c_q1dYBj0yTQroMnq7Pvg64o
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_4Dt2UPpF6DsqygBNV7CYVR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeQTro0XnP0C3WwkPj5aqG
          claim_id: c_q1dYBj0yTQroMnq7Pvg64o
          source_id: s__mgJZ69xdX5COWzW_E9K7n
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇仁 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇仁 之父／母。
          source:
            id: s__mgJZ69xdX5COWzW_E9K7n
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 302973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302973&o=json
            external_identifier: CBDB:302973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Dt2UPpF6DsqygBNV7CYVR
        status: active
        display_name: 王崇仁
        merged_into_person_id: null
    - claim:
        id: c_NAo0w3WIFAT3he-5cc8BsC
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_FXmHfz5GmcJktJPe9NMK9x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ay208p9mC-wHchx2i98R6p
          claim_id: c_NAo0w3WIFAT3he-5cc8BsC
          source_id: s_AQLySqJYErgyEyYj_MIsF0
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇典 与 王崇古 为同胞（CBDB 记「兄」），王崇古 之父／母即 王崇典 之父／母。
          source:
            id: s_AQLySqJYErgyEyYj_MIsF0
            source_type: api_record
            title: 中国历代人物传记资料库：王崇典（CBDB 302979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302979&o=json
            external_identifier: CBDB:302979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FXmHfz5GmcJktJPe9NMK9x
        status: active
        display_name: 王崇典
        merged_into_person_id: null
    - claim:
        id: c_dSxZ3fZ5_LHnZDrFHIDEEy
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MQQxvxtkQ9FbXdosodW297
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3wvW6YvqLK6eJU6-YQxlRB
          claim_id: c_dSxZ3fZ5_LHnZDrFHIDEEy
          source_id: s_VP8sirict_rNzGdxEt0Irg
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇祖 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇祖 之父／母。
          source:
            id: s_VP8sirict_rNzGdxEt0Irg
            source_type: api_record
            title: 中国历代人物传记资料库：王崇祖（CBDB 302976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302976&o=json
            external_identifier: CBDB:302976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MQQxvxtkQ9FbXdosodW297
        status: active
        display_name: 王崇祖
        merged_into_person_id: null
    - claim:
        id: c_vatWVACIu-NjrgtnB6bSOZ
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_P7bDvyyRkLv8JFTFh22BX7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Ocan5HaelSNIpFLb_S6Cx
          claim_id: c_vatWVACIu-NjrgtnB6bSOZ
          source_id: s_O7wANae-wlj0luU3C86yrw
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇志 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇志 之父／母。
          source:
            id: s_O7wANae-wlj0luU3C86yrw
            source_type: api_record
            title: 中国历代人物传记资料库：王崇志（CBDB 302977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302977&o=json
            external_identifier: CBDB:302977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P7bDvyyRkLv8JFTFh22BX7
        status: active
        display_name: 王崇志
        merged_into_person_id: null
    - claim:
        id: c_0B0qmWu66pdZKsOwJ3kbpX
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_dW3m768TfqRBE8QThXUJDP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kclb6Q9DTlmZ1OTEKKU1jE
          claim_id: c_0B0qmWu66pdZKsOwJ3kbpX
          source_id: s_b2WfhldqjJ93Atgw3SbY2y
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇道 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇道 之父／母。
          source:
            id: s_b2WfhldqjJ93Atgw3SbY2y
            source_type: api_record
            title: 中国历代人物传记资料库：王崇道（CBDB 302975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json
            external_identifier: CBDB:302975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dW3m768TfqRBE8QThXUJDP
        status: active
        display_name: 王崇道
        merged_into_person_id: null
    - claim:
        id: c_wRVpQ_ufYhhfaT7nQS-LDG
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_p1M79MXzZnumAnJJwbLbqQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f7bxW1ZnarcBtVlst98hCY
          claim_id: c_wRVpQ_ufYhhfaT7nQS-LDG
          source_id: s_RfwlFHjKFQGzNTJGFs1733
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇教 与 王崇古 为同胞（CBDB 记「兄」），王崇古 之父／母即 王崇教 之父／母。
          source:
            id: s_RfwlFHjKFQGzNTJGFs1733
            source_type: api_record
            title: 中国历代人物传记资料库：王崇教（CBDB 302982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302982&o=json
            external_identifier: CBDB:302982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p1M79MXzZnumAnJJwbLbqQ
        status: active
        display_name: 王崇教
        merged_into_person_id: null
    - claim:
        id: c_ixA5FD4_cqzwgol6rwYNd6
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qCBpG4qepdttPkxR2LAfUv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5kV5TzE6ZAZJfAktjnBXFu
          claim_id: c_ixA5FD4_cqzwgol6rwYNd6
          source_id: s_f6LZy7lwNzItn6K3D-ztBb
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇義 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇義 之父／母。
          source:
            id: s_f6LZy7lwNzItn6K3D-ztBb
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 302974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302974&o=json
            external_identifier: CBDB:302974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qCBpG4qepdttPkxR2LAfUv
        status: active
        display_name: 王崇義
        merged_into_person_id: null
    - claim:
        id: c_xERKmrVM_jwjiwp4bwlWjK
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zZgusJ2bUvJAS5fN1PwxuQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hwl86WLbm-NmvJ126ZzVQv
          claim_id: c_xERKmrVM_jwjiwp4bwlWjK
          source_id: s_DF1gDnNQPX1S6_x0RKTOnQ
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇勳 与 王崇古 为同胞（CBDB 记「兄」），王崇古 之父／母即 王崇勳 之父／母。
          source:
            id: s_DF1gDnNQPX1S6_x0RKTOnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇勳（CBDB 302980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302980&o=json
            external_identifier: CBDB:302980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zZgusJ2bUvJAS5fN1PwxuQ
        status: active
        display_name: 王崇勳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑶，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302968） | accepted |
| name.primary | 王瑶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ptMfEt1rAT4WiPXRdKXa9c | 王馨 | accepted |
| children | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |
| children | p_2y3zcjSddC9WuWn1GXL3w6 | 王崇雅 | accepted |
| children | p_4Dt2UPpF6DsqygBNV7CYVR | 王崇仁 | accepted |
| children | p_FXmHfz5GmcJktJPe9NMK9x | 王崇典 | accepted |
| children | p_MQQxvxtkQ9FbXdosodW297 | 王崇祖 | accepted |
| children | p_P7bDvyyRkLv8JFTFh22BX7 | 王崇志 | accepted |
| children | p_dW3m768TfqRBE8QThXUJDP | 王崇道 | accepted |
| children | p_p1M79MXzZnumAnJJwbLbqQ | 王崇教 | accepted |
| children | p_qCBpG4qepdttPkxR2LAfUv | 王崇義 | accepted |
| children | p_zZgusJ2bUvJAS5fN1PwxuQ | 王崇勳 | accepted |

## 外部来源

- [维基数据：王崇古（Q15934835）](https://www.wikidata.org/wiki/Q15934835)
- [维基数据：王馨（Q45626817）](https://www.wikidata.org/wiki/Q45626817)
- [维基数据：王瑶（Q45626878）](https://www.wikidata.org/wiki/Q45626878)
- [中国历代人物传记资料库：王崇道（CBDB 302975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json)
- [中国历代人物传记资料库：王崇典（CBDB 302979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302979&o=json)
- [中国历代人物传记资料库：王崇教（CBDB 302982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302982&o=json)
- [中国历代人物传记资料库：王崇仁（CBDB 302973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302973&o=json)
- [中国历代人物传记资料库：王崇勳（CBDB 302980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302980&o=json)
- [中国历代人物传记资料库：王崇雅（CBDB 302978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302978&o=json)
- [中国历代人物传记资料库：王崇義（CBDB 302974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302974&o=json)
- [中国历代人物传记资料库：王崇志（CBDB 302977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302977&o=json)
- [中国历代人物传记资料库：王崇祖（CBDB 302976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302976&o=json)
- [CBDB 中国历代人物传记资料库：王瑤（302968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302968&o=json)
