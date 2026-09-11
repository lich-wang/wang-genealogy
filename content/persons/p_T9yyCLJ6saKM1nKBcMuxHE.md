---
schema: wang-person/v1
id: p_T9yyCLJ6saKM1nKBcMuxHE
status: active
merged_into: null
display_name: 王廋哥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LNDQNCUso5ouCAk2L7YpXL
        subject_person_id: p_T9yyCLJ6saKM1nKBcMuxHE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廋哥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JpvrBLVNchKUM2cQ71P8GQ
          claim_id: c_LNDQNCUso5ouCAk2L7YpXL
          source_id: s_M3q9xnVNsiwEN9FN6Lt6vc
          stance: supports
          locator: CBDB:683949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683949）
          source: &a1
            id: s_M3q9xnVNsiwEN9FN6Lt6vc
            source_type: api_record
            title: 中国历代人物传记资料库：王廋哥（CBDB 683949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683949&o=json
            external_identifier: CBDB:683949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3tn7E8kbaJdEDvR4PN1LJP
        subject_person_id: p_T9yyCLJ6saKM1nKBcMuxHE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廋哥，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683949）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qvx09PfOPFtMi8EHup7Ewv
          claim_id: c_3tn7E8kbaJdEDvR4PN1LJP
          source_id: s_M3q9xnVNsiwEN9FN6Lt6vc
          stance: supports
          locator: CBDB:683949
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

# 王廋哥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廋哥 | accepted |
| bio.summary | 王廋哥，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683949） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廋哥（CBDB 683949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683949&o=json)
