---
schema: wang-person/v1
id: p_M2v5kGiTjn2kdMjWJsPa86
status: active
merged_into: null
display_name: 王符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFxxhQs6fYp6LeUKvZJgmt
        subject_person_id: p_M2v5kGiTjn2kdMjWJsPa86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MmUUkDMCRubWiGbWHEsUF8
          claim_id: c_fFxxhQs6fYp6LeUKvZJgmt
          source_id: s_jJVqWbhC5WxcEB8xhL59Jn
          stance: supports
          locator: CBDB:539639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539639）
          source: &a1
            id: s_jJVqWbhC5WxcEB8xhL59Jn
            source_type: api_record
            title: 中国历代人物传记资料库：王符（CBDB 539639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539639&o=json
            external_identifier: CBDB:539639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kUDMMG9CEVYRSXLSpf46zh
        subject_person_id: p_M2v5kGiTjn2kdMjWJsPa86
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 539639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7dHf5xyxAt2zfRa1bgCdVP
          claim_id: c_kUDMMG9CEVYRSXLSpf46zh
          source_id: s_jJVqWbhC5WxcEB8xhL59Jn
          stance: supports
          locator: CBDB:539639
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

# 王符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王符 | accepted |
| bio.summary | 王符，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 539639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王符（CBDB 539639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539639&o=json)
