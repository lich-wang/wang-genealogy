---
schema: wang-person/v1
id: p_GU11BmuZLATMLhkgQJ5AQG
status: active
merged_into: null
display_name: 王春治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1LoJ42TsRxnNqNJi9z3u7
        subject_person_id: p_GU11BmuZLATMLhkgQJ5AQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FeB4j2vj5ykYp1cCG9CZUS
          claim_id: c_m1LoJ42TsRxnNqNJi9z3u7
          source_id: s_QQRHL2VLwBgLk8DnA35wg6
          stance: supports
          locator: CBDB:638414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638414）
          source: &a1
            id: s_QQRHL2VLwBgLk8DnA35wg6
            source_type: api_record
            title: 中国历代人物传记资料库：王春治（CBDB 638414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638414&o=json
            external_identifier: CBDB:638414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kG9XN31LKiGM3n2deX2gDC
        subject_person_id: p_GU11BmuZLATMLhkgQJ5AQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春治，清人物。籍贯通州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_27l3meQm0Cnt2MF2aHQgIq
          claim_id: c_kG9XN31LKiGM3n2deX2gDC
          source_id: s_QQRHL2VLwBgLk8DnA35wg6
          stance: supports
          locator: CBDB:638414
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

# 王春治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春治 | accepted |
| bio.summary | 王春治，清人物。籍贯通州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春治（CBDB 638414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638414&o=json)
