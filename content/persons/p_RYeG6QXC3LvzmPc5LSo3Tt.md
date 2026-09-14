---
schema: wang-person/v1
id: p_RYeG6QXC3LvzmPc5LSo3Tt
status: active
merged_into: null
display_name: 王澍
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWs5vZGC6NmLiHhSRngq4E
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kBLsNr56Tc97XcoELpP7Jy
          claim_id: c_KWs5vZGC6NmLiHhSRngq4E
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: CBDB:219569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219569）
          source: &a1
            id: s_4oPXT5i77e8Jgr9bqR3YfP
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 219569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219569&o=json
            external_identifier: CBDB:219569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkLsmt78W9jQWHcqZF47Xn
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219569）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mv_VjoPygWkMIwJVy3gMfM
          claim_id: c_EkLsmt78W9jQWHcqZF47Xn
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: CBDB:219569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_G1qtdfhXiC6hcvi1ipdyxl
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfn6RTjudN38mHGMoyvEdk
          claim_id: c_G1qtdfhXiC6hcvi1ipdyxl
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZbuHXnqm4wRFTtwvCX7hA
        status: active
        display_name: 王道增
        merged_into_person_id: null
    - claim:
        id: c_Nc8ZH-NGmMYI5b5SNidOLC
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8pPxm7tTE3UAyfsqs6g4EQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUjNRVtxLenKCoJ_g6MaIB
          claim_id: c_Nc8ZH-NGmMYI5b5SNidOLC
          source_id: s_sCKGTNVFQrSZFiPtFicbxI
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道方 与 王道增 为同胞（CBDB 记「兄」），王道增 之父／母即 王道方 之父／母。
          source:
            id: s_sCKGTNVFQrSZFiPtFicbxI
            source_type: api_record
            title: 中国历代人物传记资料库：王道方（CBDB 219575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219575&o=json
            external_identifier: CBDB:219575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8pPxm7tTE3UAyfsqs6g4EQ
        status: active
        display_name: 王道方
        merged_into_person_id: null
    - claim:
        id: c_8YtN0r1nHOdpuq85LUyVou
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CrYhBqZZ3D8DBHyd9AsvWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ckre2MJ6phUrotinZADd5B
          claim_id: c_8YtN0r1nHOdpuq85LUyVou
          source_id: s_dhnx3NfsgF23ShozeuseXv
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道行 与 王道增 为同胞（CBDB 记「弟」），王道增 之父／母即 王道行 之父／母。
          source:
            id: s_dhnx3NfsgF23ShozeuseXv
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 219573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219573&o=json
            external_identifier: CBDB:219573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CrYhBqZZ3D8DBHyd9AsvWX
        status: active
        display_name: 王道行
        merged_into_person_id: null
    - claim:
        id: c_7JJbmPUfA4cffprHh_eLqY
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JNrTzr7Vvg5pW7gELNDzWA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K-WoSrVBsQ3HntgfQg6h7z
          claim_id: c_7JJbmPUfA4cffprHh_eLqY
          source_id: s_SfrWcJh6VHQyrbfXxSllkO
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道立 与 王道增 为同胞（CBDB 记「兄」），王道增 之父／母即 王道立 之父／母。
          source:
            id: s_SfrWcJh6VHQyrbfXxSllkO
            source_type: api_record
            title: 中国历代人物传记资料库：王道立（CBDB 219577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219577&o=json
            external_identifier: CBDB:219577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JNrTzr7Vvg5pW7gELNDzWA
        status: active
        display_name: 王道立
        merged_into_person_id: null
    - claim:
        id: c_BEoAJhKN4vZYv87sniD5Gg
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ez-FGIsqyypXbF1xqcPNhf
          claim_id: c_BEoAJhKN4vZYv87sniD5Gg
          source_id: s_pSYkmH7SOJa-XFAWdT65zL
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道成 与 王道增 为同胞（CBDB 记「兄」），王道增 之父／母即 王道成 之父／母。
          source:
            id: s_pSYkmH7SOJa-XFAWdT65zL
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 219576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json
            external_identifier: CBDB:219576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e6hZfnHu9F2Qd2GTzWkfjg
        status: active
        display_name: 王道成
        merged_into_person_id: null
    - claim:
        id: c_ZxOsj_Rb7sqrsQ91DECHU4
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hKdPByG821ALMEdoQo4ac5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S1QSxFvM2304JLSzBhNNIQ
          claim_id: c_ZxOsj_Rb7sqrsQ91DECHU4
          source_id: s_YRe1RZeLbx_5XbDjjPUK48
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道得 与 王道增 为同胞（CBDB 记「弟」），王道增 之父／母即 王道得 之父／母。
          source:
            id: s_YRe1RZeLbx_5XbDjjPUK48
            source_type: api_record
            title: 中国历代人物传记资料库：王道得（CBDB 219574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219574&o=json
            external_identifier: CBDB:219574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hKdPByG821ALMEdoQo4ac5
        status: active
        display_name: 王道得
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | 王澍，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zZbuHXnqm4wRFTtwvCX7hA | 王道增 | accepted |
| children | p_8pPxm7tTE3UAyfsqs6g4EQ | 王道方 | accepted |
| children | p_CrYhBqZZ3D8DBHyd9AsvWX | 王道行 | accepted |
| children | p_JNrTzr7Vvg5pW7gELNDzWA | 王道立 | accepted |
| children | p_e6hZfnHu9F2Qd2GTzWkfjg | 王道成 | accepted |
| children | p_hKdPByG821ALMEdoQo4ac5 | 王道得 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 219576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json)
- [中国历代人物传记资料库：王道得（CBDB 219574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219574&o=json)
- [中国历代人物传记资料库：王道方（CBDB 219575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219575&o=json)
- [中国历代人物传记资料库：王道立（CBDB 219577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219577&o=json)
- [中国历代人物传记资料库：王道行（CBDB 219573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219573&o=json)
- [中国历代人物传记资料库：王澍（CBDB 219569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219569&o=json)
