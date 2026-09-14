---
schema: wang-person/v1
id: p_JTc1E7LgQAh6Uz9airZSVG
status: active
merged_into: null
display_name: 王雲鷺
cbdb_id: 205920
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fWcdvdY6aQ386GAxgbuUoK
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鷺（生于1540年），明人物。明清進士進士，籍贯夏邑，入仕進士。（中国历代人物传记资料库 CBDB 205920）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TbcM-pIWnZHHLThuaj-kBk
          claim_id: c_fWcdvdY6aQ386GAxgbuUoK
          source_id: s_Pmoi1evjPnoD9WDEVGmk5X
          stance: supports
          locator: CBDB:205920
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Pmoi1evjPnoD9WDEVGmk5X
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷺（CBDB 205920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205920&o=json
            external_identifier: CBDB:205920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t46UJNgXyWYt4oPyXoAFaA
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1540-01-01
            latest: 1540-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5NpRSjsTFy5EQm9iL8FexV
          claim_id: c_t46UJNgXyWYt4oPyXoAFaA
          source_id: s_Pmoi1evjPnoD9WDEVGmk5X
          stance: supports
          locator: CBDB:205920
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1540
          source:
            id: s_Pmoi1evjPnoD9WDEVGmk5X
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷺（CBDB 205920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205920&o=json
            external_identifier: CBDB:205920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9sBMCMT9sppADjjcsDoWtE
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鷺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9u8ztkoe77fHDoo9mUKwEa
          claim_id: c_9sBMCMT9sppADjjcsDoWtE
          source_id: s_Pmoi1evjPnoD9WDEVGmk5X
          stance: supports
          locator: CBDB:205920
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1540
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5sMBUmyahCa13LXd6ixol4
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePMt9Ic6g_UsmcY0mBSOP6
          claim_id: c_5sMBUmyahCa13LXd6ixol4
          source_id: s_dAHdotuWXxACM824shQkMJ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dAHdotuWXxACM824shQkMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王尚貞（CBDB 210676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210676&o=json
            external_identifier: CBDB:210676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uHx4oxAT9ppsKf6aRXRGJM
        status: active
        display_name: 王尚貞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XpQxw3zqqO4cW3vGeuz9PJ
        subject_person_id: p_tSboei7PeevkFbNm86EkDE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l08uS7oxul1LFZzXigmXLO
          claim_id: c_XpQxw3zqqO4cW3vGeuz9PJ
          source_id: s_Hb5mu4upFxdvgLSWq1eni7
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hb5mu4upFxdvgLSWq1eni7
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 210674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210674&o=json
            external_identifier: CBDB:210674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tSboei7PeevkFbNm86EkDE
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_TiwhVz0tXdGxS5j14VOKPz
        subject_person_id: p_EswMvP7VGuydnr4Xe2zHpk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pWLussrfFK81AcIIh7rDb
          claim_id: c_TiwhVz0tXdGxS5j14VOKPz
          source_id: s_jnqByBsv38qDMZ9SPHrGU9
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jnqByBsv38qDMZ9SPHrGU9
            source_type: api_record
            title: 中国历代人物传记资料库：王肅時（CBDB 210675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210675&o=json
            external_identifier: CBDB:210675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EswMvP7VGuydnr4Xe2zHpk
        status: active
        display_name: 王肅時
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c__-21e5QNAfro7dQYIxIdim
        subject_person_id: p_847jmYtbNaXCNUchPVYBZW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eIeL4wvxbiievZi7v2T9ex
          claim_id: c__-21e5QNAfro7dQYIxIdim
          source_id: s_Mp96U_8qbB7mw4a_LH30D7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205920 王雲鷺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Mp96U_8qbB7mw4a_LH30D7
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鸑（CBDB 210681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210681&o=json
            external_identifier: CBDB:210681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_847jmYtbNaXCNUchPVYBZW
        status: active
        display_name: 王雲鸑
        merged_into_person_id: null
    - claim:
        id: c_58ohB64IIfW7ajlpH6kkSN
        subject_person_id: p_EnLcaLS2uMczaE3AyynrjS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6z3bnUkPnhndmtw1a8SvP6
          claim_id: c_58ohB64IIfW7ajlpH6kkSN
          source_id: s_9sTQXDfkgHhPclJEEpH2Y-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205920 王雲鷺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9sTQXDfkgHhPclJEEpH2Y-
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷟（CBDB 210683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210683&o=json
            external_identifier: CBDB:210683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EnLcaLS2uMczaE3AyynrjS
        status: active
        display_name: 王雲鷟
        merged_into_person_id: null
    - claim:
        id: c_TklzfagpJN4AUXqov3Gz7T
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XAwBghomVSmXqhmJhUwUKw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rewETQdQ_CQWbr_FSYFeqo
          claim_id: c_TklzfagpJN4AUXqov3Gz7T
          source_id: s_gZIGaXqcR1ANW18fRLAC-n
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205920 王雲鷺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gZIGaXqcR1ANW18fRLAC-n
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鴈（CBDB 210680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json
            external_identifier: CBDB:210680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XAwBghomVSmXqhmJhUwUKw
        status: active
        display_name: 王雲鴈
        merged_into_person_id: null
    - claim:
        id: c_Cayrj6OJluH_YNlIJeLy5T
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zgMxPAPh9nRRPkisXUCpxq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1Ch8a7hGoA_Bp-oVbqE_c
          claim_id: c_Cayrj6OJluH_YNlIJeLy5T
          source_id: s_bpNzZMATMviwRAOIP7c7FI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205920 王雲鷺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bpNzZMATMviwRAOIP7c7FI
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷖（CBDB 210684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json
            external_identifier: CBDB:210684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zgMxPAPh9nRRPkisXUCpxq
        status: active
        display_name: 王雲鷖
        merged_into_person_id: null
---

# 王雲鷺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲鷺（生于1540年），明人物。明清進士進士，籍贯夏邑，入仕進士。（中国历代人物传记资料库 CBDB 205920） | accepted |
| birth.date | 1540年 | accepted |
| name.primary | 王雲鷺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uHx4oxAT9ppsKf6aRXRGJM | 王尚貞 | accepted |
| ancestors | p_tSboei7PeevkFbNm86EkDE | 王文 | accepted |
| ancestors | p_EswMvP7VGuydnr4Xe2zHpk | 王肅時 | accepted |
| other | p_847jmYtbNaXCNUchPVYBZW | 王雲鸑 | accepted |
| other | p_EnLcaLS2uMczaE3AyynrjS | 王雲鷟 | accepted |
| other | p_XAwBghomVSmXqhmJhUwUKw | 王雲鴈 | accepted |
| other | p_zgMxPAPh9nRRPkisXUCpxq | 王雲鷖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚貞（CBDB 210676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210676&o=json)
- [中国历代人物传记资料库：王肅時（CBDB 210675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210675&o=json)
- [中国历代人物传记资料库：王文（CBDB 210674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210674&o=json)
- [中国历代人物传记资料库：王雲鷺（CBDB 205920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205920&o=json)
- [中国历代人物传记资料库：王雲鴈（CBDB 210680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json)
- [中国历代人物传记资料库：王雲鷖（CBDB 210684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json)
- [中国历代人物传记资料库：王雲鸑（CBDB 210681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210681&o=json)
- [中国历代人物传记资料库：王雲鷟（CBDB 210683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210683&o=json)
