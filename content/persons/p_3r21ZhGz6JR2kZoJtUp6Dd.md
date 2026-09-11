---
schema: wang-person/v1
id: p_3r21ZhGz6JR2kZoJtUp6Dd
status: active
merged_into: null
display_name: 王從義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4uKqdLf2Ycx1B3E8zdAqaw
        subject_person_id: p_3r21ZhGz6JR2kZoJtUp6Dd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6covX3yj8vW5jEucondRqg
          claim_id: c_4uKqdLf2Ycx1B3E8zdAqaw
          source_id: s_PajXn5PHxm1qupHyY1wEE1
          stance: supports
          locator: CBDB:305706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305706）
          source: &a1
            id: s_PajXn5PHxm1qupHyY1wEE1
            source_type: api_record
            title: 中国历代人物传记资料库：王從義（CBDB 305706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305706&o=json
            external_identifier: CBDB:305706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nN2BKaoXfSL8ZK5BU5eYBY
        subject_person_id: p_3r21ZhGz6JR2kZoJtUp6Dd
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
        - id: cs_5GA5oELbE2GVb6UprhezAE
          claim_id: c_nN2BKaoXfSL8ZK5BU5eYBY
          source_id: s_PajXn5PHxm1qupHyY1wEE1
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
        id: c_Ov5uXVBjtH1D7gUvIjtkQD
        subject_person_id: p_3r21ZhGz6JR2kZoJtUp6Dd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3h5g9NkXDMotNKCta4dEHB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fRJbWgxqFlR115M4OLL0fF
          claim_id: c_Ov5uXVBjtH1D7gUvIjtkQD
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EEE5e95wfR1tnUXaLTJN3U
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 126588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126588&o=json
            external_identifier: CBDB:126588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3h5g9NkXDMotNKCta4dEHB
        status: active
        display_name: 王秉彝
        merged_into_person_id: null
  other: []
---

# 王從義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3h5g9NkXDMotNKCta4dEHB | 王秉彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 126588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126588&o=json)
- [中国历代人物传记资料库：王從義（CBDB 305706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305706&o=json)
