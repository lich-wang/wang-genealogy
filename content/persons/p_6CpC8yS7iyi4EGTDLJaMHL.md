---
schema: wang-person/v1
id: p_6CpC8yS7iyi4EGTDLJaMHL
status: active
merged_into: null
display_name: 余氏
revision: 1
cbdb_id: 39062
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_er9T5FetBkRyqtHrwIPcNF
        subject_person_id: p_6CpC8yS7iyi4EGTDLJaMHL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 余氏，宋人物。曾任令人。（中国历代人物传记资料库 CBDB 39062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhhoilnaRE7s3k1Qcg-Xmd
          claim_id: c_er9T5FetBkRyqtHrwIPcNF
          source_id: s_XnqJDanHJw-wJYDI1E8mRS
          stance: supports
          locator: CBDB:39062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XnqJDanHJw-wJYDI1E8mRS
            source_type: api_record
            title: 中国历代人物传记资料库：余氏(王仁恕妻)（CBDB 39062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39062&o=json
            external_identifier: CBDB:39062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D-N4ojRlDDIoQBW6btJNcB
        subject_person_id: p_6CpC8yS7iyi4EGTDLJaMHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 余氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfstaAAvKQ6XEN8Z7mMqGL
          claim_id: c_D-N4ojRlDDIoQBW6btJNcB
          source_id: s_XnqJDanHJw-wJYDI1E8mRS
          stance: supports
          locator: CBDB:39062
          quotation: null
          interpretation_note: CBDB 明确记录的王仁恕配偶
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
        id: c_8Cpmzc9JgXgKlGvM8X12tP
        subject_person_id: p_gNwTGaNMJK1Vu7DHJdjpVk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6CpC8yS7iyi4EGTDLJaMHL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bj3V_-YIZ73xgzxp0_SCBV
          claim_id: c_8Cpmzc9JgXgKlGvM8X12tP
          source_id: s_XnqJDanHJw-wJYDI1E8mRS
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gNwTGaNMJK1Vu7DHJdjpVk
        status: active
        display_name: 王仁恕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 余氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 余氏，宋人物。曾任令人。（中国历代人物传记资料库 CBDB 39062） | accepted |
| name.primary | 余氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gNwTGaNMJK1Vu7DHJdjpVk | 王仁恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：余氏(王仁恕妻)（CBDB 39062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39062&o=json)
