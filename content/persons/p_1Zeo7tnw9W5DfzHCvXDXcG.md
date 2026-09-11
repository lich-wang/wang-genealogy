---
schema: wang-person/v1
id: p_1Zeo7tnw9W5DfzHCvXDXcG
status: active
merged_into: null
display_name: 王光魯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8yfYBvtmp1QeDxvgEmamVS
        subject_person_id: p_1Zeo7tnw9W5DfzHCvXDXcG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ucqDTv98CKJKLBEmozxEV8
          claim_id: c_8yfYBvtmp1QeDxvgEmamVS
          source_id: s_ydyzL3VFLtbJWEMcrWEmLy
          stance: supports
          locator: CBDB:551004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551004）
          source: &a1
            id: s_ydyzL3VFLtbJWEMcrWEmLy
            source_type: api_record
            title: 中国历代人物传记资料库：王光魯（CBDB 551004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551004&o=json
            external_identifier: CBDB:551004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZUX9n19KPQ3S5wPjKh51z3
        subject_person_id: p_1Zeo7tnw9W5DfzHCvXDXcG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王光魯，清人物。籍贯江都，身份为戲曲作家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 551004）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ghUVBBocOjKjwZQFRxldz6
          claim_id: c_ZUX9n19KPQ3S5wPjKh51z3
          source_id: s_ydyzL3VFLtbJWEMcrWEmLy
          stance: supports
          locator: CBDB:551004
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

# 王光魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光魯 | accepted |
| bio.summary | 王光魯，清人物。籍贯江都，身份为戲曲作家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 551004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光魯（CBDB 551004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551004&o=json)
