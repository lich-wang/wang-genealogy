---
schema: wang-person/v1
id: p_gJBDbRBCxbnfxx3U6Meh48
status: active
merged_into: null
display_name: 王士賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1M63QzjtDZUs82FQFRzesm
        subject_person_id: p_gJBDbRBCxbnfxx3U6Meh48
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HR1H7fiDgSkFXYxPC7Dfaw
          claim_id: c_1M63QzjtDZUs82FQFRzesm
          source_id: s_3kxL3diy9GzpDxptE55dSp
          stance: supports
          locator: CBDB:257373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257373）
          source: &a1
            id: s_3kxL3diy9GzpDxptE55dSp
            source_type: api_record
            title: 中国历代人物传记资料库：王士賢（CBDB 257373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257373&o=json
            external_identifier: CBDB:257373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DukfzNxWSDR1gtHkC9F9pf
        subject_person_id: p_gJBDbRBCxbnfxx3U6Meh48
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
        - id: cs_h76okT8o468yhAoq2YBch4
          claim_id: c_DukfzNxWSDR1gtHkC9F9pf
          source_id: s_3kxL3diy9GzpDxptE55dSp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_p6xY8LL2x4prQRxhjqqAVR
        subject_person_id: p_gJBDbRBCxbnfxx3U6Meh48
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JRQW3d5WhLnec0UMTWEgqg
          claim_id: c_p6xY8LL2x4prQRxhjqqAVR
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_56Pt143yiZ578FsUUdFHTb
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 67865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json
            external_identifier: CBDB:67865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cABDg4AGMJS98TZaoLa2HU
        status: active
        display_name: 王佑
        merged_into_person_id: null
  other: []
---

# 王士賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cABDg4AGMJS98TZaoLa2HU | 王佑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士賢（CBDB 257373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257373&o=json)
- [中国历代人物传记资料库：王佑（CBDB 67865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json)
