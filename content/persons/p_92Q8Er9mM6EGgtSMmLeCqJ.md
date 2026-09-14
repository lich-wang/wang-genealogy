---
schema: wang-person/v1
id: p_92Q8Er9mM6EGgtSMmLeCqJ
status: active
merged_into: null
display_name: 王家屛
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gQFTYE5hCkYdM7726J9T7E
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家屛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JQyRqsz7iD9yiUQEc3qM9X
          claim_id: c_gQFTYE5hCkYdM7726J9T7E
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: CBDB:126627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126627）
          source: &a1
            id: s_RZ3fqWGaHLG4UgCtfgP2Lk
            source_type: api_record
            title: 中国历代人物传记资料库：王家屛（CBDB 126627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json
            external_identifier: CBDB:126627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NQByziVWHJN74bnq4tx4US
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNoSCJjRL7KAr6uk4Uh8XY
          claim_id: c_NQByziVWHJN74bnq4tx4US
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_FgQMMyWkssVNfb5JgiWKPM
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8sWtPXnLfCZuNzXSTUTLz
          claim_id: c_FgQMMyWkssVNfb5JgiWKPM
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_hj34etLaoKjzea1jD1scF2
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家屛（1536年—1603年），明人物。籍贯山陰，身份为政治家，入仕進士。（中国历代人物传记资料库 CBDB 126627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z16fCeaFKtem0txnwkhF21
          claim_id: c_hj34etLaoKjzea1jD1scF2
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: CBDB:126627
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_udLfwxu6waoA5ummIGkrfu
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5G1UsT6u6OFHJIgvyRYMrk
          claim_id: c_udLfwxu6waoA5ummIGkrfu
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DgFygS516dQxQ0vVNWvsb6
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XviG699Sb6fixCgUv7GBKK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPXPeZehLWDmnIaPvWeN4e
          claim_id: c_DgFygS516dQxQ0vVNWvsb6
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XviG699Sb6fixCgUv7GBKK
        status: active
        display_name: 霍氏
        merged_into_person_id: null
    - claim:
        id: c_7xDKRhYaQ_QnKMl-vFDzzn
        subject_person_id: p_EkbtB6W15MsQZYuHoEPBhi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ZZ3p78TE85wUstTFz5kpO
          claim_id: c_7xDKRhYaQ_QnKMl-vFDzzn
          source_id: s_iLAQ6y62S9qsN1PYNszBH1
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iLAQ6y62S9qsN1PYNszBH1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（333598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333598&o=json
            external_identifier: CBDB:333598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:55.517Z
            metadata_json: null
      object_person:
        id: p_EkbtB6W15MsQZYuHoEPBhi
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Y3adLCWm94z5SwSwNM6ckW
        subject_person_id: p_JCJBEueLs72MMGKKFXSBqw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E3VIf-OUkYx7AQ6NCz5dwX
          claim_id: c_Y3adLCWm94z5SwSwNM6ckW
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JCJBEueLs72MMGKKFXSBqw
        status: active
        display_name: 王缙
        merged_into_person_id: null
    - claim:
        id: c_rz3AG3hLxrsX4Gtu-zIQ6V
        subject_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BMN9nhrpQ0-W58lq2h4ycy
          claim_id: c_rz3AG3hLxrsX4Gtu-zIQ6V
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n8gJ8LAH7u4tCjt15ALE93
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_gQWXtHFhl4--60iM0hjxZ7
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Asi7vGi3PmsBGKLCMf9RtK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcSJuwr2XoHGtdmP1RdoxM
          claim_id: c_gQWXtHFhl4--60iM0hjxZ7
          source_id: s_bykwhKyU8fTrz4eKznTt-_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bykwhKyU8fTrz4eKznTt-_
            source_type: api_record
            title: 中国历代人物传记资料库：王家璽（CBDB 333603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json
            external_identifier: CBDB:333603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Asi7vGi3PmsBGKLCMf9RtK
        status: active
        display_name: 王家璽
        merged_into_person_id: null
    - claim:
        id: c_k9H_VRllRRp4wFYZZUhv9I
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SudZ5K4WPbKgZ1BfPgxDJa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UOQYh8zQ4pieYeVdttRrKR
          claim_id: c_k9H_VRllRRp4wFYZZUhv9I
          source_id: s_7d80iYM2GSDZCJ8dOKZxJU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7d80iYM2GSDZCJ8dOKZxJU
            source_type: api_record
            title: 中国历代人物传记资料库：王家翰（CBDB 333601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json
            external_identifier: CBDB:333601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SudZ5K4WPbKgZ1BfPgxDJa
        status: active
        display_name: 王家翰
        merged_into_person_id: null
    - claim:
        id: c_g-o3DQNzjohYOZYj2m647v
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dLeGyy2qSpAZZ8jwhGGJov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XgTm0U1cgMhyhM4pUDyAM1
          claim_id: c_g-o3DQNzjohYOZYj2m647v
          source_id: s_9smHP5sTc2g4efAIaTJSwR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9smHP5sTc2g4efAIaTJSwR
            source_type: api_record
            title: 中国历代人物传记资料库：王家楫（CBDB 333604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333604&o=json
            external_identifier: CBDB:333604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dLeGyy2qSpAZZ8jwhGGJov
        status: active
        display_name: 王家楫
        merged_into_person_id: null
    - claim:
        id: c_EZ3c_xfasvqZTVFKP2kw-F
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wLJ9gLa3MxpiXhBmyn2LNq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SwGb4c3te80Q9EU6qhMUQF
          claim_id: c_EZ3c_xfasvqZTVFKP2kw-F
          source_id: s_iMz6I2p1iyie0dXE2aSaIu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iMz6I2p1iyie0dXE2aSaIu
            source_type: api_record
            title: 中国历代人物传记资料库：王家璧（CBDB 333602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json
            external_identifier: CBDB:333602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wLJ9gLa3MxpiXhBmyn2LNq
        status: active
        display_name: 王家璧
        merged_into_person_id: null
    - claim:
        id: c_2F7k23PjW7W6KVzF8uTM2-
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z6jKD949RdAtZDLSM1cjFB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2Qc9tpDcpAMMvJ-GP6VJz
          claim_id: c_2F7k23PjW7W6KVzF8uTM2-
          source_id: s_FxLwRwQ9xJykZ4cagsBsLf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FxLwRwQ9xJykZ4cagsBsLf
            source_type: api_record
            title: 中国历代人物传记资料库：王家瑄（CBDB 333600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json
            external_identifier: CBDB:333600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z6jKD949RdAtZDLSM1cjFB
        status: active
        display_name: 王家瑄
        merged_into_person_id: null
---

# 王家屛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家屛 | accepted |
| birth.date | 1536年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | 王家屛（1536年—1603年），明人物。籍贯山陰，身份为政治家，入仕進士。（中国历代人物传记资料库 CBDB 126627） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |
| spouses | p_XviG699Sb6fixCgUv7GBKK | 霍氏 | accepted |
| spouses | p_EkbtB6W15MsQZYuHoEPBhi | 李氏 | accepted |
| ancestors | p_JCJBEueLs72MMGKKFXSBqw | 王缙 | accepted |
| ancestors | p_n8gJ8LAH7u4tCjt15ALE93 | 王朝用 | accepted |
| other | p_Asi7vGi3PmsBGKLCMf9RtK | 王家璽 | accepted |
| other | p_SudZ5K4WPbKgZ1BfPgxDJa | 王家翰 | accepted |
| other | p_dLeGyy2qSpAZZ8jwhGGJov | 王家楫 | accepted |
| other | p_wLJ9gLa3MxpiXhBmyn2LNq | 王家璧 | accepted |
| other | p_z6jKD949RdAtZDLSM1cjFB | 王家瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家璧（CBDB 333602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json)
- [中国历代人物传记资料库：王家翰（CBDB 333601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json)
- [中国历代人物传记资料库：王家楫（CBDB 333604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333604&o=json)
- [中国历代人物传记资料库：王家屛（CBDB 126627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json)
- [中国历代人物传记资料库：王家璽（CBDB 333603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json)
- [中国历代人物传记资料库：王家瑄（CBDB 333600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json)
- [CBDB 中国历代人物传记资料库：李氏（333598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333598&o=json)
