---
schema: wang-person/v1
id: p_HAPwpvZBVPzcnguyVmhnBB
status: active
merged_into: null
display_name: 王夢熊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dd6vz2CLG8w2n1kN6XvYEU
        subject_person_id: p_HAPwpvZBVPzcnguyVmhnBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WWMpEWgQMnawLV1Y4NaFg4
          claim_id: c_dd6vz2CLG8w2n1kN6XvYEU
          source_id: s_9CLe71bU3D5XsLxq893Jv4
          stance: supports
          locator: CBDB:230386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230386）
          source: &a1
            id: s_9CLe71bU3D5XsLxq893Jv4
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 230386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230386&o=json
            external_identifier: CBDB:230386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mEMkGGN7nqyqswKgXjBxhg
        subject_person_id: p_HAPwpvZBVPzcnguyVmhnBB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢熊，明人物。萬曆丙戌科進士進士，籍贯洋縣。（中国历代人物传记资料库 CBDB 230386）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mr0KliSGvWDDO46f_VtaJ-
          claim_id: c_mEMkGGN7nqyqswKgXjBxhg
          source_id: s_9CLe71bU3D5XsLxq893Jv4
          stance: supports
          locator: CBDB:230386
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_096mqSnThmtttQyMA8yWsm
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HAPwpvZBVPzcnguyVmhnBB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ga-Y8tNCSICpAEK5RNZbpJ
          claim_id: c_096mqSnThmtttQyMA8yWsm
          source_id: s_9CLe71bU3D5XsLxq893Jv4
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVJuaQ4fqcXMz2HJX35bCQ
        status: active
        display_name: 王一魁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢熊 | accepted |
| bio.summary | 王夢熊，明人物。萬曆丙戌科進士進士，籍贯洋縣。（中国历代人物传记资料库 CBDB 230386） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DVJuaQ4fqcXMz2HJX35bCQ | 王一魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢熊（CBDB 230386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230386&o=json)
