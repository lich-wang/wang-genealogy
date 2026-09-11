---
schema: wang-person/v1
id: p_yLx83RnHcixF3ib2M1YL7h
status: active
merged_into: null
display_name: 王堂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DECx46o75YzKb5qjVVZnWh
        subject_person_id: p_yLx83RnHcixF3ib2M1YL7h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c52Tg2VDDNMVKbMcmcydEY
          claim_id: c_DECx46o75YzKb5qjVVZnWh
          source_id: s_D7sDp9oysq4ixxFahyGZ2Q
          stance: supports
          locator: CBDB:336878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336878）
          source: &a1
            id: s_D7sDp9oysq4ixxFahyGZ2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 336878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336878&o=json
            external_identifier: CBDB:336878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2k4rjW2HhmX3j78ZtsbChF
        subject_person_id: p_yLx83RnHcixF3ib2M1YL7h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂，明人物。隆慶二年進士，籍贯趙城。（中国历代人物传记资料库 CBDB 336878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__GjmeqrcpteN4lsEdhEVgB
          claim_id: c_2k4rjW2HhmX3j78ZtsbChF
          source_id: s_D7sDp9oysq4ixxFahyGZ2Q
          stance: supports
          locator: CBDB:336878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QkAFJ6qFOMD1TKdPlF8f-5
        subject_person_id: p_yLx83RnHcixF3ib2M1YL7h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKQLEK9aExlqwyq4JPBSHM
          claim_id: c_QkAFJ6qFOMD1TKdPlF8f-5
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TuCs12u1K8NYTgGHWZ2uhf
            source_type: api_record
            title: 中国历代人物传记资料库：王大用（CBDB 205680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205680&o=json
            external_identifier: CBDB:205680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E7LZ9JqaeFU8tKfb1vvmx1
        status: active
        display_name: 王大用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| bio.summary | 王堂，明人物。隆慶二年進士，籍贯趙城。（中国历代人物传记资料库 CBDB 336878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_E7LZ9JqaeFU8tKfb1vvmx1 | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大用（CBDB 205680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205680&o=json)
- [中国历代人物传记资料库：王堂（CBDB 336878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336878&o=json)
