---
schema: wang-person/v1
id: p_PsAWsfAvMzKWaeaTWxq6BV
status: active
merged_into: null
display_name: 王開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o65JXQG7ZG4QxmJRuConhx
        subject_person_id: p_PsAWsfAvMzKWaeaTWxq6BV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5M4bek4FDCP73UQxSzvbU3
          claim_id: c_o65JXQG7ZG4QxmJRuConhx
          source_id: s_oygsXxDNo57M3CRPDGqpt9
          stance: supports
          locator: CBDB:1833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1833）
          source: &a1
            id: s_oygsXxDNo57M3CRPDGqpt9
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 1833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1833&o=json
            external_identifier: CBDB:1833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rF1M9JS7UVGhFcGWBNoLkG
        subject_person_id: p_PsAWsfAvMzKWaeaTWxq6BV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開，宋人物。曾任轉運司判官。（中国历代人物传记资料库 CBDB 1833）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7_FImzkjWQsXf-7BtaqNNf
          claim_id: c_rF1M9JS7UVGhFcGWBNoLkG
          source_id: s_oygsXxDNo57M3CRPDGqpt9
          stance: supports
          locator: CBDB:1833
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

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| bio.summary | 王開，宋人物。曾任轉運司判官。（中国历代人物传记资料库 CBDB 1833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 1833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1833&o=json)
