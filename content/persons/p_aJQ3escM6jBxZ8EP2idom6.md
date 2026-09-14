---
schema: wang-person/v1
id: p_aJQ3escM6jBxZ8EP2idom6
status: active
merged_into: null
display_name: 王玉汝
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPCBF31aG97Ry2EE5ytBBE
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3TeMfv7aYvjDMj4MEExaqX
          claim_id: c_jPCBF31aG97Ry2EE5ytBBE
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: CBDB:202795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202795）
          source: &a1
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FH5b9rWC32ySSHLAxTJF2J
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvtWHANDDhQWEFK9T3q24k
          claim_id: c_FH5b9rWC32ySSHLAxTJF2J
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
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
        id: c_9qbxjLuHzLcE7iBP2UqEN3
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉汝（生于1488年），明人物。嘉靖十一年進士，籍贯東莞，入仕進士，曾任工部主事、都察院觀政。（中国历代人物传记资料库 CBDB 202795）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LtwnQBr3YWwL0dxjzUsapm
          claim_id: c_9qbxjLuHzLcE7iBP2UqEN3
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: CBDB:202795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z81Pcfo5JJEnNISP9eu5ll
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eLQNn25BSZNhp9859vDP5
          claim_id: c_z81Pcfo5JJEnNISP9eu5ll
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DkL4KAP3Vyt4DGq87NkgHu
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  children:
    - claim:
        id: c_VBMLvQk7e9bdWkQT1zbXu5
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i4PxeuDCARRognnmhzQLN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p4r0hZYJ_sgjeaoRdGmYoO
          claim_id: c_VBMLvQk7e9bdWkQT1zbXu5
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i4PxeuDCARRognnmhzQLN6
        status: active
        display_name: 王所
        merged_into_person_id: null
    - claim:
        id: c_K7ipHaBFCwFGzWZ-ImtecX
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbRX9VDen2ibv9yFfhqCNU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLuvw_r1RNRXoPzc8YgP42
          claim_id: c_K7ipHaBFCwFGzWZ-ImtecX
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bbRX9VDen2ibv9yFfhqCNU
        status: active
        display_name: 王前
        merged_into_person_id: null
    - claim:
        id: c_zCMFgrLkn9aR9SruTRcZB4
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eB9fimtnJCXW45zJ6gbMuD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGY398h8h_72NIZv34gpGz
          claim_id: c_zCMFgrLkn9aR9SruTRcZB4
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eB9fimtnJCXW45zJ6gbMuD
        status: active
        display_name: 王在
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_N01bXvbsuZIRF0v_AzLa8v
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WLy46FT22LhNj15c6qQBvE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqsOJkiI6NaWpJvBckD4mA
          claim_id: c_N01bXvbsuZIRF0v_AzLa8v
          source_id: s_Ao7yvkBQNsGTaUG-YoVoez
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ao7yvkBQNsGTaUG-YoVoez
            source_type: api_record
            title: 中国历代人物传记资料库：鄧氏(王玉汝妻)（CBDB 294541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294541&o=json
            external_identifier: CBDB:294541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WLy46FT22LhNj15c6qQBvE
        status: active
        display_name: 鄧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_JSGLjUB3q0UbSV2W0Gg1B8
        subject_person_id: p_RkUXHPuBh1QAWmMcbEHgCo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGoq2CSguwGs_IXjYGj33e
          claim_id: c_JSGLjUB3q0UbSV2W0Gg1B8
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RkUXHPuBh1QAWmMcbEHgCo
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_Vm9QbJHAVewhG9rvE10ttb
        subject_person_id: p_e2QAybS7Rx5BKwEFZeMJDa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_doCPYYR9ImqLDB_kNY-XaW
          claim_id: c_Vm9QbJHAVewhG9rvE10ttb
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e2QAybS7Rx5BKwEFZeMJDa
        status: active
        display_name: 王貞
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_pqv6xgaHS4wCQ98Sar97gO
        subject_person_id: p_2415asAcUVyLyfd79JjPmQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tgOYmgnkOfSWLUORAfrHwq
          claim_id: c_pqv6xgaHS4wCQ98Sar97gO
          source_id: s_dyK34MsAz8cCbwLDabK808
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dyK34MsAz8cCbwLDabK808
            source_type: api_record
            title: 中国历代人物传记资料库：王士鳳（CBDB 294545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json
            external_identifier: CBDB:294545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2415asAcUVyLyfd79JjPmQ
        status: active
        display_name: 王士鳳
        merged_into_person_id: null
    - claim:
        id: c_4V_GdBKvZq6LKI4uKBqufL
        subject_person_id: p_3og8Ykbn24Asu288von2ma
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uVR5g2ieMZc59EV0EMPnCu
          claim_id: c_4V_GdBKvZq6LKI4uKBqufL
          source_id: s_F6hy_QlYgmONZJ2IUhrBGm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F6hy_QlYgmONZJ2IUhrBGm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 294544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json
            external_identifier: CBDB:294544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3og8Ykbn24Asu288von2ma
        status: active
        display_name: 王用汝
        merged_into_person_id: null
    - claim:
        id: c_S1veOXNY8Jo_vohbbh7HXO
        subject_person_id: p_JtMZbN3npmxduN2y4UXNK8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2CharKx1ybDMikVQgMd11
          claim_id: c_S1veOXNY8Jo_vohbbh7HXO
          source_id: s_dj9icWwY1oAkZ8w6M-llS9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dj9icWwY1oAkZ8w6M-llS9
            source_type: api_record
            title: 中国历代人物传记资料库：王士鵬（CBDB 294542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294542&o=json
            external_identifier: CBDB:294542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JtMZbN3npmxduN2y4UXNK8
        status: active
        display_name: 王士鵬
        merged_into_person_id: null
    - claim:
        id: c_VRd0M8svxnuTE6I7GvSWc-
        subject_person_id: p_S2b3QdFBLGeU8i6k4mbu98
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eC86GGzgDLbh1OjZxF927w
          claim_id: c_VRd0M8svxnuTE6I7GvSWc-
          source_id: s_eDuZjee28P_aoTnmyszWAy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eDuZjee28P_aoTnmyszWAy
            source_type: api_record
            title: 中国历代人物传记资料库：王士鶚（CBDB 294546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294546&o=json
            external_identifier: CBDB:294546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S2b3QdFBLGeU8i6k4mbu98
        status: active
        display_name: 王士鶚
        merged_into_person_id: null
    - claim:
        id: c_Mn7t76nsDQwZRWEaD77cTK
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ayW5qG1vMKBQxPjRXZf4bJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R9tyhEZGUXcWdBGIHJkobl
          claim_id: c_Mn7t76nsDQwZRWEaD77cTK
          source_id: s_Yn3DSW3gkDun6k59Tc8Dzj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yn3DSW3gkDun6k59Tc8Dzj
            source_type: api_record
            title: 中国历代人物传记资料库：王與汝（CBDB 294547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json
            external_identifier: CBDB:294547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ayW5qG1vMKBQxPjRXZf4bJ
        status: active
        display_name: 王與汝
        merged_into_person_id: null
    - claim:
        id: c_z5OZU5qVEkPK-qScUjvk2N
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vWV3VtwRtV5Ab4UPTVqiof
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_koW6UWFpb3PKJzqVVR79c4
          claim_id: c_z5OZU5qVEkPK-qScUjvk2N
          source_id: s_Pnv28j9mdVEVd2sIl6W3Vb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Pnv28j9mdVEVd2sIl6W3Vb
            source_type: api_record
            title: 中国历代人物传记资料库：王士鸞（CBDB 294543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294543&o=json
            external_identifier: CBDB:294543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vWV3VtwRtV5Ab4UPTVqiof
        status: active
        display_name: 王士鸞
        merged_into_person_id: null
---

# 王玉汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉汝 | accepted |
| birth.date | 1488年 | accepted |
| bio.summary | 王玉汝（生于1488年），明人物。嘉靖十一年進士，籍贯東莞，入仕進士，曾任工部主事、都察院觀政。（中国历代人物传记资料库 CBDB 202795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DkL4KAP3Vyt4DGq87NkgHu | 王尚學 | accepted |
| children | p_i4PxeuDCARRognnmhzQLN6 | 王所 | accepted |
| children | p_bbRX9VDen2ibv9yFfhqCNU | 王前 | accepted |
| children | p_eB9fimtnJCXW45zJ6gbMuD | 王在 | accepted |
| spouses | p_WLy46FT22LhNj15c6qQBvE | 鄧氏 | accepted |
| ancestors | p_RkUXHPuBh1QAWmMcbEHgCo | 王純 | accepted |
| ancestors | p_e2QAybS7Rx5BKwEFZeMJDa | 王貞 | accepted |
| other | p_2415asAcUVyLyfd79JjPmQ | 王士鳳 | accepted |
| other | p_3og8Ykbn24Asu288von2ma | 王用汝 | accepted |
| other | p_JtMZbN3npmxduN2y4UXNK8 | 王士鵬 | accepted |
| other | p_S2b3QdFBLGeU8i6k4mbu98 | 王士鶚 | accepted |
| other | p_ayW5qG1vMKBQxPjRXZf4bJ | 王與汝 | accepted |
| other | p_vWV3VtwRtV5Ab4UPTVqiof | 王士鸞 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄧氏(王玉汝妻)（CBDB 294541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294541&o=json)
- [中国历代人物传记资料库：王士鶚（CBDB 294546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294546&o=json)
- [中国历代人物传记资料库：王士鳳（CBDB 294545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json)
- [中国历代人物传记资料库：王士鸞（CBDB 294543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294543&o=json)
- [中国历代人物传记资料库：王士鵬（CBDB 294542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294542&o=json)
- [中国历代人物传记资料库：王用汝（CBDB 294544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json)
- [中国历代人物传记资料库：王與汝（CBDB 294547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
