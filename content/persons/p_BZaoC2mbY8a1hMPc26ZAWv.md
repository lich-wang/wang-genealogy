---
schema: wang-person/v1
id: p_BZaoC2mbY8a1hMPc26ZAWv
status: active
merged_into: null
display_name: 王維祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HEsuFsqvnDk7hAAKS5PE99
        subject_person_id: p_BZaoC2mbY8a1hMPc26ZAWv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kw2vL6CsaG4SNfy4UKJbEb
          claim_id: c_HEsuFsqvnDk7hAAKS5PE99
          source_id: s_eZJqTW6Wr2CoHAkGx5v78k
          stance: supports
          locator: CBDB:72032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72032）
          source: &a1
            id: s_eZJqTW6Wr2CoHAkGx5v78k
            source_type: api_record
            title: 中国历代人物传记资料库：王維祺（CBDB 72032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72032&o=json
            external_identifier: CBDB:72032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2wHLhiQRwmRFnTSgxyrKpQ
        subject_person_id: p_BZaoC2mbY8a1hMPc26ZAWv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1779年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hRSdj6fyddcQx1LYBZx7Br
          claim_id: c_2wHLhiQRwmRFnTSgxyrKpQ
          source_id: s_eZJqTW6Wr2CoHAkGx5v78k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9msHKkN52QuiTvwTg4G41G
        subject_person_id: p_BZaoC2mbY8a1hMPc26ZAWv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J7FQdaB37jajBcHLszA4Uh
          claim_id: c_9msHKkN52QuiTvwTg4G41G
          source_id: s_eZJqTW6Wr2CoHAkGx5v78k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GWg9qcDRQvKyJfyyCGypQL
        subject_person_id: p_BZaoC2mbY8a1hMPc26ZAWv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維祺（1779年—1857年），清人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 72032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VPowbRdgbbJ7TnUi8PUZ9r
          claim_id: c_GWg9qcDRQvKyJfyyCGypQL
          source_id: s_eZJqTW6Wr2CoHAkGx5v78k
          stance: supports
          locator: CBDB:72032
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

# 王維祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維祺 | accepted |
| birth.date | 1779年 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | 王維祺（1779年—1857年），清人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 72032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維祺（CBDB 72032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72032&o=json)
