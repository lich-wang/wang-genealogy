---
schema: wang-person/v1
id: p_hX16JDBbTXgiCxCYHyPcRN
status: active
merged_into: null
display_name: 王季友
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U1JvFo4FpAmq9e188hGLdX
        subject_person_id: p_hX16JDBbTXgiCxCYHyPcRN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xqf83z9NMbi1p2Rd5WuqN1
          claim_id: c_U1JvFo4FpAmq9e188hGLdX
          source_id: s_gMq4TfQ6SF4pRGc5ZWH1LY
          stance: supports
          locator: CBDB:92040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92040）
          source: &a1
            id: s_gMq4TfQ6SF4pRGc5ZWH1LY
            source_type: api_record
            title: 中国历代人物传记资料库：王季友（CBDB 92040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92040&o=json
            external_identifier: CBDB:92040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u9Zg6QHbXKp5a1oML9NQ4Y
        subject_person_id: p_hX16JDBbTXgiCxCYHyPcRN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季友，唐人物。身份为工於文，入仕進士。（中国历代人物传记资料库 CBDB 92040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__a8_FltNi70SQcgud3eqN_
          claim_id: c_u9Zg6QHbXKp5a1oML9NQ4Y
          source_id: s_gMq4TfQ6SF4pRGc5ZWH1LY
          stance: supports
          locator: CBDB:92040
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

# 王季友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季友 | accepted |
| bio.summary | 王季友，唐人物。身份为工於文，入仕進士。（中国历代人物传记资料库 CBDB 92040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王季友（CBDB 92040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92040&o=json)
