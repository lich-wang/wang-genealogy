---
schema: wang-person/v1
id: p_JEG7f9jBKZ25rC68wvi4AB
status: active
merged_into: null
display_name: 王雲騰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_feZHQZiEnvRbadUUeKZgk2
        subject_person_id: p_JEG7f9jBKZ25rC68wvi4AB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲騰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DMsDhRA2JegSHuqwwpc5NL
          claim_id: c_feZHQZiEnvRbadUUeKZgk2
          source_id: s_mKLUf7GEFnsDnS2nYqz8GM
          stance: supports
          locator: CBDB:640822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640822）
          source: &a1
            id: s_mKLUf7GEFnsDnS2nYqz8GM
            source_type: api_record
            title: 中国历代人物传记资料库：王雲騰（CBDB 640822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640822&o=json
            external_identifier: CBDB:640822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1hvvv4DcCzq1LDpW3Vp6eE
        subject_person_id: p_JEG7f9jBKZ25rC68wvi4AB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲騰，清人物。籍贯開封府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640822）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lE1mg5SXRnJF9t_8xu172w
          claim_id: c_1hvvv4DcCzq1LDpW3Vp6eE
          source_id: s_mKLUf7GEFnsDnS2nYqz8GM
          stance: supports
          locator: CBDB:640822
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

# 王雲騰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲騰 | accepted |
| bio.summary | 王雲騰，清人物。籍贯開封府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲騰（CBDB 640822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640822&o=json)
