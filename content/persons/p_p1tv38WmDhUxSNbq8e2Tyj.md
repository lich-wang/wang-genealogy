---
schema: wang-person/v1
id: p_p1tv38WmDhUxSNbq8e2Tyj
status: active
merged_into: null
display_name: 王守基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_27MFrWBLL8U11AZLKC1dNT
        subject_person_id: p_p1tv38WmDhUxSNbq8e2Tyj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_716pS5bWBubzLiPWUprK9f
          claim_id: c_27MFrWBLL8U11AZLKC1dNT
          source_id: s_nh2rJbDD2Fs5NEpiDqtqzF
          stance: supports
          locator: CBDB:71712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71712）
          source: &a1
            id: s_nh2rJbDD2Fs5NEpiDqtqzF
            source_type: api_record
            title: 中国历代人物传记资料库：王守基（CBDB 71712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71712&o=json
            external_identifier: CBDB:71712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Kh2AnN7KuZachhyJ5WamWU
        subject_person_id: p_p1tv38WmDhUxSNbq8e2Tyj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1823年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjcgWJSuoTCUELd61XJc8Z
          claim_id: c_Kh2AnN7KuZachhyJ5WamWU
          source_id: s_nh2rJbDD2Fs5NEpiDqtqzF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zk5xQjvkPHRKQM5TEvSRjQ
        subject_person_id: p_p1tv38WmDhUxSNbq8e2Tyj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守基（生于1823年），清人物。籍贯密縣。（中国历代人物传记资料库 CBDB 71712）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TkOAjpsEs4fYfXUaBYEdPc
          claim_id: c_Zk5xQjvkPHRKQM5TEvSRjQ
          source_id: s_nh2rJbDD2Fs5NEpiDqtqzF
          stance: supports
          locator: CBDB:71712
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

# 王守基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守基 | accepted |
| birth.date | 1823年 | accepted |
| bio.summary | 王守基（生于1823年），清人物。籍贯密縣。（中国历代人物传记资料库 CBDB 71712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守基（CBDB 71712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71712&o=json)
