---
schema: wang-person/v1
id: p_rQ8e5xYJuDLPe4mKPKRd9w
status: active
merged_into: null
display_name: 王正志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UtEbYGzyT8Aq838WPFc7VF
        subject_person_id: p_rQ8e5xYJuDLPe4mKPKRd9w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yB171gce9JXZKDWs4QCvo4
          claim_id: c_UtEbYGzyT8Aq838WPFc7VF
          source_id: s_kF88QBeHmqrzw4Cn7SdXeb
          stance: supports
          locator: CBDB:56974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56974）
          source: &a1
            id: s_kF88QBeHmqrzw4Cn7SdXeb
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 56974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56974&o=json
            external_identifier: CBDB:56974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pMd82fZsnusPBP1THvwtYp
        subject_person_id: p_rQ8e5xYJuDLPe4mKPKRd9w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1649年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B9L6sRrC2gsU9mvtu41N3A
          claim_id: c_pMd82fZsnusPBP1THvwtYp
          source_id: s_kF88QBeHmqrzw4Cn7SdXeb
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
        id: c_jqiYUXuhvPZkYPxermwqf2
        subject_person_id: p_rQ8e5xYJuDLPe4mKPKRd9w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志（卒于1649年），清人物。明清進士進士，籍贯靜海，入仕進士，曾任戶部右侍郎、戶部左侍郎、右僉都御史。（中国历代人物传记资料库 CBDB 56974）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rw4FcGvUlX0KaAxXbieKok
          claim_id: c_jqiYUXuhvPZkYPxermwqf2
          source_id: s_kF88QBeHmqrzw4Cn7SdXeb
          stance: supports
          locator: CBDB:56974
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

# 王正志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正志 | accepted |
| death.date | 1649年 | accepted |
| bio.summary | 王正志（卒于1649年），清人物。明清進士進士，籍贯靜海，入仕進士，曾任戶部右侍郎、戶部左侍郎、右僉都御史。（中国历代人物传记资料库 CBDB 56974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正志（CBDB 56974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56974&o=json)
