---
schema: wang-person/v1
id: p_wJnAf1dPfK6NuX3j1aUKFG
status: active
merged_into: null
display_name: 王宪武
cbdb_id: 333593
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U3p3oKQuMDPSpRXQRd3go4
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宪武，明人物。隆慶二年進士，籍贯山陰，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 333593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_kxBfCKQ3ZzFPH2aumG12M1
          claim_id: c_U3p3oKQuMDPSpRXQRd3go4
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_AuA2yr99XkuCuaLucat2XA
            source_type: api_record
            title: 维基数据：王宪武（Q45581425）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581425
            external_identifier: Q45581425
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_RqfMeQbAKZZrjwlEPhmkMr
          claim_id: c_U3p3oKQuMDPSpRXQRd3go4
          source_id: s_J23XJvdkBCD2w4w4zBoeDd
          stance: supports
          locator: CBDB:333593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J23XJvdkBCD2w4w4zBoeDd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王憲武（333593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333593&o=json
            external_identifier: CBDB:333593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.748Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hXSTgT7fKaxZEvNj6vrrmP
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宪武
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_24L8N52TpjVMpXkBjeaifu
          claim_id: c_hXSTgT7fKaxZEvNj6vrrmP
          source_id: s_J23XJvdkBCD2w4w4zBoeDd
          stance: supports
          locator: Q45581425
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jYr2brM31tLbDpKPjjf92p
          claim_id: c_hXSTgT7fKaxZEvNj6vrrmP
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: Q45581425
          quotation: null
          interpretation_note: null
          source:
            id: s_AuA2yr99XkuCuaLucat2XA
            source_type: api_record
            title: 维基数据：王宪武（Q45581425）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581425
            external_identifier: Q45581425
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DC45vSXiqAMJosRJYqVMM2
        subject_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M3RATJJQUiaFrCpLDLCCVd
          claim_id: c_DC45vSXiqAMJosRJYqVMM2
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AuA2yr99XkuCuaLucat2XA
            source_type: api_record
            title: 维基数据：王宪武（Q45581425）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581425
            external_identifier: Q45581425
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_CiGmnw753KN22KpT3ZiDz5
          claim_id: c_DC45vSXiqAMJosRJYqVMM2
          source_id: s_4gu4oV8XXUSSjHMASEf7Ce
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4gu4oV8XXUSSjHMASEf7Ce
            source_type: api_record
            title: 维基数据：王朝用（Q45581362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581362
            external_identifier: Q45581362
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
      object_person:
        id: p_n8gJ8LAH7u4tCjt15ALE93
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  children:
    - claim:
        id: c_rVYyyNVZ8LHRwnoMHxz8B2
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bcrM1JDUkTLmV6rQDefNJN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EvsZ1q6bUmAjRYrR3Bj6Mq
          claim_id: c_rVYyyNVZ8LHRwnoMHxz8B2
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AuA2yr99XkuCuaLucat2XA
            source_type: api_record
            title: 维基数据：王宪武（Q45581425）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581425
            external_identifier: Q45581425
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_TX5gF7DKGJQBphw4EcsF8x
          claim_id: c_rVYyyNVZ8LHRwnoMHxz8B2
          source_id: s_KpdKQDm85BhFx3TLa2zEy4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KpdKQDm85BhFx3TLa2zEy4
            source_type: api_record
            title: 维基数据：王家屏（Q15926237）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926237
            external_identifier: Q15926237
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
      object_person:
        id: p_bcrM1JDUkTLmV6rQDefNJN
        status: active
        display_name: 王家屏
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_92Q8Er9mM6EGgtSMmLeCqJ
        status: active
        display_name: 王家屛
        merged_into_person_id: null
    - claim:
        id: c_wZLpmHOmL3kmiaQlmOfc7V
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Asi7vGi3PmsBGKLCMf9RtK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W7c_T7dqXTN-rntmyf1XOD
          claim_id: c_wZLpmHOmL3kmiaQlmOfc7V
          source_id: s_bykwhKyU8fTrz4eKznTt-_
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家璽 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家璽 之父／母。
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
        id: c_0AAoEW9uE5uAOdMkWe2td0
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SudZ5K4WPbKgZ1BfPgxDJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vbd3pwvpIEUVw8BAr0r9lE
          claim_id: c_0AAoEW9uE5uAOdMkWe2td0
          source_id: s_7d80iYM2GSDZCJ8dOKZxJU
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家翰 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家翰 之父／母。
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
        id: c_bwbCfOmMggKkro5ISC_XH4
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dLeGyy2qSpAZZ8jwhGGJov
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oVy9VsR--ZWf0efVw-ic1K
          claim_id: c_bwbCfOmMggKkro5ISC_XH4
          source_id: s_9smHP5sTc2g4efAIaTJSwR
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家楫 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家楫 之父／母。
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
        id: c__3TnbVDb2YGp-jKxDiPDFx
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wLJ9gLa3MxpiXhBmyn2LNq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAhmensTekHVTsMDwwnqNP
          claim_id: c__3TnbVDb2YGp-jKxDiPDFx
          source_id: s_iMz6I2p1iyie0dXE2aSaIu
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家璧 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家璧 之父／母。
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
        id: c_bmxKkwZub4yx5sw6q5nwc0
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z6jKD949RdAtZDLSM1cjFB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g_Zuh_IBZBZzu5PDdRfI69
          claim_id: c_bmxKkwZub4yx5sw6q5nwc0
          source_id: s_FxLwRwQ9xJykZ4cagsBsLf
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家瑄 与 王家屛 为同胞（CBDB 记「弟」），王家屛 之父／母即 王家瑄 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宪武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宪武，明人物。隆慶二年進士，籍贯山陰，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 333593） | accepted |
| name.primary | 王宪武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n8gJ8LAH7u4tCjt15ALE93 | 王朝用 | accepted |
| children | p_bcrM1JDUkTLmV6rQDefNJN | 王家屏 | accepted |
| children | p_92Q8Er9mM6EGgtSMmLeCqJ | 王家屛 | accepted |
| children | p_Asi7vGi3PmsBGKLCMf9RtK | 王家璽 | accepted |
| children | p_SudZ5K4WPbKgZ1BfPgxDJa | 王家翰 | accepted |
| children | p_dLeGyy2qSpAZZ8jwhGGJov | 王家楫 | accepted |
| children | p_wLJ9gLa3MxpiXhBmyn2LNq | 王家璧 | accepted |
| children | p_z6jKD949RdAtZDLSM1cjFB | 王家瑄 | accepted |

## 外部来源

- [维基数据：王朝用（Q45581362）](https://www.wikidata.org/wiki/Q45581362)
- [维基数据：王家屏（Q15926237）](https://www.wikidata.org/wiki/Q15926237)
- [维基数据：王宪武（Q45581425）](https://www.wikidata.org/wiki/Q45581425)
- [中国历代人物传记资料库：王家璧（CBDB 333602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333602&o=json)
- [中国历代人物传记资料库：王家翰（CBDB 333601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json)
- [中国历代人物传记资料库：王家楫（CBDB 333604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333604&o=json)
- [中国历代人物传记资料库：王家屛（CBDB 126627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json)
- [中国历代人物传记资料库：王家璽（CBDB 333603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json)
- [中国历代人物传记资料库：王家瑄（CBDB 333600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json)
- [CBDB 中国历代人物传记资料库：王憲武（333593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333593&o=json)
