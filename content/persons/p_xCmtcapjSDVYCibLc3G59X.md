---
schema: wang-person/v1
id: p_xCmtcapjSDVYCibLc3G59X
status: active
merged_into: null
display_name: 王袤
cbdb_id: 38049
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iTjZsQ5YiqdmAxePmV9MBj
        subject_person_id: p_xCmtcapjSDVYCibLc3G59X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袤，宋人物。籍贯樂平，曾任監酒。（中国历代人物传记资料库 CBDB 38049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fRTHE5nldP5-TR-wI_ANpP
          claim_id: c_iTjZsQ5YiqdmAxePmV9MBj
          source_id: s_Lni1TnpfBtj7Mwz87UYfmp
          stance: supports
          locator: CBDB:38049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Lni1TnpfBtj7Mwz87UYfmp
            source_type: api_record
            title: 中国历代人物传记资料库：王袤（CBDB 38049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38049&o=json
            external_identifier: CBDB:38049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_byGQkRhHiHXQCAjfEtEEw5
        subject_person_id: p_xCmtcapjSDVYCibLc3G59X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CgBg9WeLUDcTuPHLpCDEpg
          claim_id: c_byGQkRhHiHXQCAjfEtEEw5
          source_id: s_Lni1TnpfBtj7Mwz87UYfmp
          stance: supports
          locator: CBDB:38049
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YtKF1Ww6q_MPRPucmxCRJC
        subject_person_id: p_xCmtcapjSDVYCibLc3G59X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3MbEMAW55u6U6jAMg3FnFg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NL4nhNNyxrdsrC5DU6fQG5
          claim_id: c_YtKF1Ww6q_MPRPucmxCRJC
          source_id: s_ArBk0NwfrEc8L-EpTjaxdy
          stance: supports
          locator: 宋人傳記資料索引(電子版)，884：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ArBk0NwfrEc8L-EpTjaxdy
            source_type: api_record
            title: 中国历代人物传记资料库：任惟則（CBDB 884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=884&o=json
            external_identifier: CBDB:884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3MbEMAW55u6U6jAMg3FnFg
        status: active
        display_name: 任惟則
        merged_into_person_id: null
    - claim:
        id: c_xoJhRI2QQ_oQis8SzIdUxJ
        subject_person_id: p_xCmtcapjSDVYCibLc3G59X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KXq1hduVe52cAs86EXwmGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtkN7ghJA2-HQ-1p_vmS2j
          claim_id: c_xoJhRI2QQ_oQis8SzIdUxJ
          source_id: s_Oxs8idanVMOLGjW2PUnR7O
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Oxs8idanVMOLGjW2PUnR7O
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王袤妻)（CBDB 38051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38051&o=json
            external_identifier: CBDB:38051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KXq1hduVe52cAs86EXwmGw
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王袤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王袤，宋人物。籍贯樂平，曾任監酒。（中国历代人物传记资料库 CBDB 38049） | accepted |
| name.primary | 王袤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3MbEMAW55u6U6jAMg3FnFg | 任惟則 | accepted |
| spouses | p_KXq1hduVe52cAs86EXwmGw | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：任惟則（CBDB 884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=884&o=json)
- [中国历代人物传记资料库：王袤（CBDB 38049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38049&o=json)
- [中国历代人物传记资料库：趙氏(王袤妻)（CBDB 38051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38051&o=json)
