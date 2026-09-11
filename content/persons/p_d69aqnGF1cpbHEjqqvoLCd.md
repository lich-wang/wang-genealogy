---
schema: wang-person/v1
id: p_d69aqnGF1cpbHEjqqvoLCd
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QtuQCJJ3E3pQAw57MJN7C7
        subject_person_id: p_d69aqnGF1cpbHEjqqvoLCd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nM6WCHL5Uhc844MBHTcnc9
          claim_id: c_QtuQCJJ3E3pQAw57MJN7C7
          source_id: s_aaaD1FfgtgSqGdKKDf2jtK
          stance: supports
          locator: CBDB:224132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224132）
          source: &a1
            id: s_aaaD1FfgtgSqGdKKDf2jtK
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 224132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224132&o=json
            external_identifier: CBDB:224132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iMJQ1fYVMk6XGxAzqNA1LF
        subject_person_id: p_d69aqnGF1cpbHEjqqvoLCd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，明人物。萬曆十一年進士，籍贯孝義。（中国历代人物传记资料库 CBDB 224132）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sI3sUG-kfQX89SOss0Fw60
          claim_id: c_iMJQ1fYVMk6XGxAzqNA1LF
          source_id: s_aaaD1FfgtgSqGdKKDf2jtK
          stance: supports
          locator: CBDB:224132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，明人物。萬曆十一年進士，籍贯孝義。（中国历代人物传记资料库 CBDB 224132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 224132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224132&o=json)
