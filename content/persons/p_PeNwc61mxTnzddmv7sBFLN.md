---
schema: wang-person/v1
id: p_PeNwc61mxTnzddmv7sBFLN
status: active
merged_into: null
display_name: 王延
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j1t8LMeGBMt8XsYUGRem2J
        subject_person_id: p_PeNwc61mxTnzddmv7sBFLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jmowFERLR6E4B5k9gdiKGm
          claim_id: c_j1t8LMeGBMt8XsYUGRem2J
          source_id: s_LBxKsF4Y9srRgov37fFHe1
          stance: supports
          locator: CBDB:205861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205861）
          source: &a1
            id: s_LBxKsF4Y9srRgov37fFHe1
            source_type: api_record
            title: 中国历代人物传记资料库：王延（CBDB 205861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205861&o=json
            external_identifier: CBDB:205861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CkV8nMt1q35aHoKkpxoNWz
        subject_person_id: p_PeNwc61mxTnzddmv7sBFLN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fXKLgEbEuRTwSvq2GyM9C
          claim_id: c_CkV8nMt1q35aHoKkpxoNWz
          source_id: s_LBxKsF4Y9srRgov37fFHe1
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
        id: c_Z68Yyr9J2Ltf1tQMQDUAZ8
        subject_person_id: p_PeNwc61mxTnzddmv7sBFLN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5SiVL2A4p7oz8tKz2ALejk
          claim_id: c_Z68Yyr9J2Ltf1tQMQDUAZ8
          source_id: s_LBxKsF4Y9srRgov37fFHe1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ITKQCyz89pS-LlyKL7IKsM
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PeNwc61mxTnzddmv7sBFLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bJeiUuB-9FGIocVQ5Y2K5H
          claim_id: c_ITKQCyz89pS-LlyKL7IKsM
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FrwWZRDBNt6pNGFBizNerf
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 209884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json
            external_identifier: CBDB:209884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Fu8C3PKU-_EFvpOddk8fnY
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PeNwc61mxTnzddmv7sBFLN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbY5fw4YUoQrofgG8Z6JR9
          claim_id: c_Fu8C3PKU-_EFvpOddk8fnY
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SUs9UsZEYNukhuLWGV3uqc
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 209880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json
            external_identifier: CBDB:209880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6AWFkDwvMEx3gmWMnZMPwe
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_DVh8e755yIShypPFZIKQ3B
        subject_person_id: p_tqtMHz3Bi98PexrAqccU5a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PeNwc61mxTnzddmv7sBFLN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yutf70ClmrPXdL-JSrcDG5
          claim_id: c_DVh8e755yIShypPFZIKQ3B
          source_id: s_TRrWG2yR1ucUC1wGBA4Qit
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TRrWG2yR1ucUC1wGBA4Qit
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 209883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209883&o=json
            external_identifier: CBDB:209883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tqtMHz3Bi98PexrAqccU5a
        status: active
        display_name: 王銳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| ancestors | p_6AWFkDwvMEx3gmWMnZMPwe | 王昺 | accepted |
| ancestors | p_tqtMHz3Bi98PexrAqccU5a | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 209880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json)
- [中国历代人物传记资料库：王銳（CBDB 209883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209883&o=json)
- [中国历代人物传记资料库：王希文（CBDB 209884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json)
- [中国历代人物传记资料库：王延（CBDB 205861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205861&o=json)
