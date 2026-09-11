---
schema: wang-person/v1
id: p_gNwTGaNMJK1Vu7DHJdjpVk
status: active
merged_into: null
display_name: 王仁恕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3k6YSDQ1z9Q6CYs1MMTaeL
        subject_person_id: p_gNwTGaNMJK1Vu7DHJdjpVk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3MT7MVQjjvCABaeESyoADQ
          claim_id: c_3k6YSDQ1z9Q6CYs1MMTaeL
          source_id: s_ZJBpqSHqGdRzB56cnYZxXM
          stance: supports
          locator: CBDB:39057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39057）
          source: &a1
            id: s_ZJBpqSHqGdRzB56cnYZxXM
            source_type: api_record
            title: 中国历代人物传记资料库：王仁恕（CBDB 39057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39057&o=json
            external_identifier: CBDB:39057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EfKVRZeK1wH1NEdL3F4bA
        subject_person_id: p_gNwTGaNMJK1Vu7DHJdjpVk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁恕，宋人物。籍贯潁昌府，曾任承議郎。（中国历代人物传记资料库 CBDB 39057）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UyRpFBrbCzV-RQqdnlyK5Z
          claim_id: c_7EfKVRZeK1wH1NEdL3F4bA
          source_id: s_ZJBpqSHqGdRzB56cnYZxXM
          stance: supports
          locator: CBDB:39057
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FS6xOc4KB3ehnTsfJH1SNl
        subject_person_id: p_gNwTGaNMJK1Vu7DHJdjpVk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQ1NPztzy6yb3AG9acPENM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2xTWSEUo0Fp8mbZ8aKQ_Mr
          claim_id: c_FS6xOc4KB3ehnTsfJH1SNl
          source_id: s_ZJBpqSHqGdRzB56cnYZxXM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1085;1086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YQ1NPztzy6yb3AG9acPENM
        status: active
        display_name: 王鉌
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_6CpC8yS7iyi4EGTDLJaMHL
        status: active
        display_name: 余氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王仁恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁恕 | accepted |
| bio.summary | 王仁恕，宋人物。籍贯潁昌府，曾任承議郎。（中国历代人物传记资料库 CBDB 39057） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YQ1NPztzy6yb3AG9acPENM | 王鉌 | accepted |
| spouses | p_6CpC8yS7iyi4EGTDLJaMHL | 余氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁恕（CBDB 39057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39057&o=json)
- [中国历代人物传记资料库：余氏(王仁恕妻)（CBDB 39062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39062&o=json)
