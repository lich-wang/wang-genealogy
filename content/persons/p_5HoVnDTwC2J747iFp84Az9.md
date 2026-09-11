---
schema: wang-person/v1
id: p_5HoVnDTwC2J747iFp84Az9
status: active
merged_into: null
display_name: 王處常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oawJQDFZ1jVbYosVFEyi3r
        subject_person_id: p_5HoVnDTwC2J747iFp84Az9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UoopSWma4KGb8aWoVhWu6L
          claim_id: c_oawJQDFZ1jVbYosVFEyi3r
          source_id: s_AZxZgsQDPKSTcGjkdrDCsx
          stance: supports
          locator: CBDB:694837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694837）
          source: &a1
            id: s_AZxZgsQDPKSTcGjkdrDCsx
            source_type: api_record
            title: 中国历代人物传记资料库：王處常（CBDB 694837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694837&o=json
            external_identifier: CBDB:694837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h3Dh1p26Reuw8vHze3D9Jk
        subject_person_id: p_5HoVnDTwC2J747iFp84Az9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處常，明人物。籍贯吳縣，曾任主事。（中国历代人物传记资料库 CBDB 694837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0oygExDzhkKyMSzdScj63R
          claim_id: c_h3Dh1p26Reuw8vHze3D9Jk
          source_id: s_AZxZgsQDPKSTcGjkdrDCsx
          stance: supports
          locator: CBDB:694837
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

# 王處常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處常 | accepted |
| bio.summary | 王處常，明人物。籍贯吳縣，曾任主事。（中国历代人物传记资料库 CBDB 694837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處常（CBDB 694837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694837&o=json)
