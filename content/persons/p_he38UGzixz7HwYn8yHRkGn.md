---
schema: wang-person/v1
id: p_he38UGzixz7HwYn8yHRkGn
status: active
merged_into: null
display_name: 王寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mmp18JAcsojqFrR7bykKdm
        subject_person_id: p_he38UGzixz7HwYn8yHRkGn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xW9Jimu14AsfgXcC1QcnQv
          claim_id: c_Mmp18JAcsojqFrR7bykKdm
          source_id: s_euDJ93D1WZD6mEdxkWa4Ax
          stance: supports
          locator: CBDB:229666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229666）
          source: &a1
            id: s_euDJ93D1WZD6mEdxkWa4Ax
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 229666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229666&o=json
            external_identifier: CBDB:229666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jzRBQGfLa56qDit7jBUGTi
        subject_person_id: p_he38UGzixz7HwYn8yHRkGn
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
        - id: cs_dbhBPKN9K4GCzjKtqpBhdZ
          claim_id: c_jzRBQGfLa56qDit7jBUGTi
          source_id: s_euDJ93D1WZD6mEdxkWa4Ax
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
        id: c_rery2fNnHRHkgfEQDTt6gh
        subject_person_id: p_he38UGzixz7HwYn8yHRkGn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGvV34PWM_AXYOoimhidLQ
          claim_id: c_rery2fNnHRHkgfEQDTt6gh
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PjKW2LD3C685H4gfMHYoKL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 207214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json
            external_identifier: CBDB:207214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
  other: []
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 229666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229666&o=json)
- [中国历代人物传记资料库：王嘉謨（CBDB 207214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json)
