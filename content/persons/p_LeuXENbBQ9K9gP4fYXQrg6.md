---
schema: wang-person/v1
id: p_LeuXENbBQ9K9gP4fYXQrg6
status: active
merged_into: null
display_name: 王夢兆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Z7VhHS74KKnNJRCM1WGPB
        subject_person_id: p_LeuXENbBQ9K9gP4fYXQrg6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HCikSKzvwRe9bbA9kFpfGq
          claim_id: c_6Z7VhHS74KKnNJRCM1WGPB
          source_id: s_vo93fJnQM8ng2khfbaRUAo
          stance: supports
          locator: CBDB:636860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636860）
          source: &a1
            id: s_vo93fJnQM8ng2khfbaRUAo
            source_type: api_record
            title: 中国历代人物传记资料库：王夢兆（CBDB 636860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636860&o=json
            external_identifier: CBDB:636860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8BmuzJfjaFiAKojgsfkQM4
        subject_person_id: p_LeuXENbBQ9K9gP4fYXQrg6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢兆，清人物。籍贯金鄉，曾任訓導。（中国历代人物传记资料库 CBDB 636860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O-c8ThuOGyhO1xFIip_93n
          claim_id: c_8BmuzJfjaFiAKojgsfkQM4
          source_id: s_vo93fJnQM8ng2khfbaRUAo
          stance: supports
          locator: CBDB:636860
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

# 王夢兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢兆 | accepted |
| bio.summary | 王夢兆，清人物。籍贯金鄉，曾任訓導。（中国历代人物传记资料库 CBDB 636860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢兆（CBDB 636860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636860&o=json)
