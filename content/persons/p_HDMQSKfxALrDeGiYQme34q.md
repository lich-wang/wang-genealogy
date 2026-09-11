---
schema: wang-person/v1
id: p_HDMQSKfxALrDeGiYQme34q
status: active
merged_into: null
display_name: 王有開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JNTJRAxPEgTsuBJjNnud9E
        subject_person_id: p_HDMQSKfxALrDeGiYQme34q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sBS2FTjJuiDaHZjnmbC5Jq
          claim_id: c_JNTJRAxPEgTsuBJjNnud9E
          source_id: s_BPLnm2DYUXD3CchYWuCYkV
          stance: supports
          locator: CBDB:533180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533180）
          source: &a1
            id: s_BPLnm2DYUXD3CchYWuCYkV
            source_type: api_record
            title: 中国历代人物传记资料库：王有開（CBDB 533180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533180&o=json
            external_identifier: CBDB:533180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Sr6NJB8BEXt6Yr11Sjdtk
        subject_person_id: p_HDMQSKfxALrDeGiYQme34q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有開，宋人物。籍贯平陽，入仕進士。（中国历代人物传记资料库 CBDB 533180）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFmLhAJusRNYSYqzo6P-Fy
          claim_id: c_5Sr6NJB8BEXt6Yr11Sjdtk
          source_id: s_BPLnm2DYUXD3CchYWuCYkV
          stance: supports
          locator: CBDB:533180
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

# 王有開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有開 | accepted |
| bio.summary | 王有開，宋人物。籍贯平陽，入仕進士。（中国历代人物传记资料库 CBDB 533180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有開（CBDB 533180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533180&o=json)
