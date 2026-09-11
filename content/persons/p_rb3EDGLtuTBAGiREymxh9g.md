---
schema: wang-person/v1
id: p_rb3EDGLtuTBAGiREymxh9g
status: active
merged_into: null
display_name: 王殿金
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j6bpR4L2QfGERAp1V12TAG
        subject_person_id: p_rb3EDGLtuTBAGiREymxh9g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HccWJ4YGpSVMd8MB5iKgNJ
          claim_id: c_j6bpR4L2QfGERAp1V12TAG
          source_id: s_Zw4iqNFt47Km9xcJJDfn4D
          stance: supports
          locator: CBDB:638939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638939）
          source: &a1
            id: s_Zw4iqNFt47Km9xcJJDfn4D
            source_type: api_record
            title: 中国历代人物传记资料库：王殿金（CBDB 638939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638939&o=json
            external_identifier: CBDB:638939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_925tjbU77bhVAd8ARUWHKR
        subject_person_id: p_rb3EDGLtuTBAGiREymxh9g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿金，清人物。籍贯台州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WwTcVeaPd9_kb6YkPC8Ye4
          claim_id: c_925tjbU77bhVAd8ARUWHKR
          source_id: s_Zw4iqNFt47Km9xcJJDfn4D
          stance: supports
          locator: CBDB:638939
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

# 王殿金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿金 | accepted |
| bio.summary | 王殿金，清人物。籍贯台州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿金（CBDB 638939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638939&o=json)
