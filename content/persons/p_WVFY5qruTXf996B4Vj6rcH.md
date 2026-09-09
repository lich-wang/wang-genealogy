---
schema: wang-person/v1
id: p_WVFY5qruTXf996B4Vj6rcH
status: active
merged_into: null
display_name: 王九如
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUc14M6ozfJTNPJ94P1KrP
        subject_person_id: p_WVFY5qruTXf996B4Vj6rcH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qh3PEefFWDRKyY7FxNYq9i
          claim_id: c_oUc14M6ozfJTNPJ94P1KrP
          source_id: s_ss7hMTg3W4tEQQQrnpPnPv
          stance: supports
          locator: CBDB:71311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71311）
          source: &a1
            id: s_ss7hMTg3W4tEQQQrnpPnPv
            source_type: api_record
            title: 中国历代人物传记资料库：王九如（CBDB 71311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71311&o=json
            external_identifier: CBDB:71311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T6pYAG1MGPgASTwW9UpPsX
        subject_person_id: p_WVFY5qruTXf996B4Vj6rcH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Xdb52DZX5UCXXwDvDgFYb
          claim_id: c_T6pYAG1MGPgASTwW9UpPsX
          source_id: s_ss7hMTg3W4tEQQQrnpPnPv
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
        id: c_yvxcYy3KpzgV1koC8JjXuX
        subject_person_id: p_WVFY5qruTXf996B4Vj6rcH
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
        - id: cs_fBsn8S6hFGkGToy6V1Rk4V
          claim_id: c_yvxcYy3KpzgV1koC8JjXuX
          source_id: s_ss7hMTg3W4tEQQQrnpPnPv
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
  descendants: []
  other: []
---

# 王九如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九如 | accepted |
| birth.date | 1781年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九如（CBDB 71311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71311&o=json)
