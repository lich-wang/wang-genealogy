---
schema: wang-person/v1
id: p_5Tki3X7b3uZwpKYgeDvFy6
status: active
merged_into: null
display_name: 王策登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4d1y5nghv9WW9jCVFHQH2e
        subject_person_id: p_5Tki3X7b3uZwpKYgeDvFy6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王策登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t97F5jX6v6obQi8bJZzXML
          claim_id: c_4d1y5nghv9WW9jCVFHQH2e
          source_id: s_Ptv85fZm4A8DvTMJL51JVM
          stance: supports
          locator: CBDB:538991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538991）
          source: &a1
            id: s_Ptv85fZm4A8DvTMJL51JVM
            source_type: api_record
            title: 中国历代人物传记资料库：王策登（CBDB 538991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538991&o=json
            external_identifier: CBDB:538991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gwxYPADF2rrRuJAXPVPCWq
        subject_person_id: p_5Tki3X7b3uZwpKYgeDvFy6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王策登，宋人物。籍贯嘉定，入仕進士。（中国历代人物传记资料库 CBDB 538991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2mxCbf_NuG7BHtsMczrUIU
          claim_id: c_gwxYPADF2rrRuJAXPVPCWq
          source_id: s_Ptv85fZm4A8DvTMJL51JVM
          stance: supports
          locator: CBDB:538991
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

# 王策登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王策登 | accepted |
| bio.summary | 王策登，宋人物。籍贯嘉定，入仕進士。（中国历代人物传记资料库 CBDB 538991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王策登（CBDB 538991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538991&o=json)
