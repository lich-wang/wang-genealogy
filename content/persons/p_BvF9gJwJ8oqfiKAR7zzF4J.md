---
schema: wang-person/v1
id: p_BvF9gJwJ8oqfiKAR7zzF4J
status: active
merged_into: null
display_name: 王緝植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N1cCiELsoCgMqBTe733QWG
        subject_person_id: p_BvF9gJwJ8oqfiKAR7zzF4J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_etfBkpdXPa8s3umHLoYDXU
          claim_id: c_N1cCiELsoCgMqBTe733QWG
          source_id: s_9T7QokQDvWDo7DvSijmMZi
          stance: supports
          locator: CBDB:72099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72099）
          source: &a1
            id: s_9T7QokQDvWDo7DvSijmMZi
            source_type: api_record
            title: 中国历代人物传记资料库：王緝植（CBDB 72099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72099&o=json
            external_identifier: CBDB:72099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mCfbhenAABxiK3SfDbMcah
        subject_person_id: p_BvF9gJwJ8oqfiKAR7zzF4J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1651年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aiXnvNr9H8gz31Bfm1i4PF
          claim_id: c_mCfbhenAABxiK3SfDbMcah
          source_id: s_9T7QokQDvWDo7DvSijmMZi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hri4qE3Kfd77nxmvC625k9
        subject_person_id: p_BvF9gJwJ8oqfiKAR7zzF4J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝植（生于1651年），清人物。籍贯崑山。（中国历代人物传记资料库 CBDB 72099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W0dYcp-V1mCVemeRYVg9bL
          claim_id: c_Hri4qE3Kfd77nxmvC625k9
          source_id: s_9T7QokQDvWDo7DvSijmMZi
          stance: supports
          locator: CBDB:72099
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

# 王緝植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝植 | accepted |
| birth.date | 1651年 | accepted |
| bio.summary | 王緝植（生于1651年），清人物。籍贯崑山。（中国历代人物传记资料库 CBDB 72099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緝植（CBDB 72099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72099&o=json)
