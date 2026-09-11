---
schema: wang-person/v1
id: p_jagHc8ijJ1Cq9AVECD6tD9
status: active
merged_into: null
display_name: 韓氏
revision: 1
cbdb_id: 42678
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oB3YjqPlBdWSWL83pfm8Cy
        subject_person_id: p_jagHc8ijJ1Cq9AVECD6tD9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏，宋人物。籍贯宜興。（中国历代人物传记资料库 CBDB 42678）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsyV76qs_1YhZTk_pWb9EN
          claim_id: c_oB3YjqPlBdWSWL83pfm8Cy
          source_id: s_AJoxNSkTHVCR372IWbYE-O
          stance: supports
          locator: CBDB:42678
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AJoxNSkTHVCR372IWbYE-O
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王藉妻)（CBDB 42678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=42678&o=json
            external_identifier: CBDB:42678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wtSVVRO-YLkbHC9WxI6kbE
        subject_person_id: p_jagHc8ijJ1Cq9AVECD6tD9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__pO5VNl-UfB7hejiBm1STh
          claim_id: c_wtSVVRO-YLkbHC9WxI6kbE
          source_id: s_AJoxNSkTHVCR372IWbYE-O
          stance: supports
          locator: CBDB:42678
          quotation: null
          interpretation_note: CBDB 明确记录的王藉配偶
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
        id: c_3JlmY7ppsheVE7ls3sNm9z
        subject_person_id: p_xZGCFs81JGTvnDtaeirAXU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jagHc8ijJ1Cq9AVECD6tD9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P9sWCCFVjB-Tu-9XWmwLT-
          claim_id: c_3JlmY7ppsheVE7ls3sNm9z
          source_id: s_AJoxNSkTHVCR372IWbYE-O
          stance: supports
          locator: CBDB 双向互证（妻子 韓氏(王藉妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xZGCFs81JGTvnDtaeirAXU
        status: active
        display_name: 王藉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韓氏，宋人物。籍贯宜興。（中国历代人物传记资料库 CBDB 42678） | accepted |
| name.primary | 韓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xZGCFs81JGTvnDtaeirAXU | 王藉 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王藉妻)（CBDB 42678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=42678&o=json)
