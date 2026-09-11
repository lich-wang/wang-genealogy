---
schema: wang-person/v1
id: p_61HhqzU1hF9D9C1yZ2Ks56
status: active
merged_into: null
display_name: 王夢蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFARRy3Djyn2BpLPNGt71M
        subject_person_id: p_61HhqzU1hF9D9C1yZ2Ks56
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K5siADr2GN1cGEPTQHSeu5
          claim_id: c_jFARRy3Djyn2BpLPNGt71M
          source_id: s_u1ph3J7B67P94UbVCa4k4L
          stance: supports
          locator: CBDB:69593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69593）
          source: &a1
            id: s_u1ph3J7B67P94UbVCa4k4L
            source_type: api_record
            title: 中国历代人物传记资料库：王夢蘭（CBDB 69593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69593&o=json
            external_identifier: CBDB:69593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1P7WQaxEfnutGYAgssnrp
        subject_person_id: p_61HhqzU1hF9D9C1yZ2Ks56
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c71bnBQbUCts7TnNmC7Jpp
          claim_id: c_N1P7WQaxEfnutGYAgssnrp
          source_id: s_u1ph3J7B67P94UbVCa4k4L
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
  spouses:
    - claim:
        id: c_q7yP59IXx9OmG7UIVsGAZJ
        subject_person_id: p_61HhqzU1hF9D9C1yZ2Ks56
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_F8dwG6MC1pbkQ1iiynCxKh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-v24YuaGttDI_aYkV-toD
          claim_id: c_q7yP59IXx9OmG7UIVsGAZJ
          source_id: s_EpJwyuZhOaVSIc5t9Ftz8v
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1168, HuWenKai #250：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EpJwyuZhOaVSIc5t9Ftz8v
            source_type: api_record
            title: 中国历代人物传记资料库：吳淂怡（CBDB 69594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69594&o=json
            external_identifier: CBDB:69594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F8dwG6MC1pbkQ1iiynCxKh
        status: active
        display_name: 吳淂怡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王夢蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢蘭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_F8dwG6MC1pbkQ1iiynCxKh | 吳淂怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢蘭（CBDB 69593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69593&o=json)
- [中国历代人物传记资料库：吳淂怡（CBDB 69594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69594&o=json)
