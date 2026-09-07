---
schema: wang-person/v1
id: p_4Hjde84UDSxNby7XrvDD1E
status: active
merged_into: null
display_name: 王寂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzT6dX92jgMdMhWqGYpCey
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂，宋人物。CBDB 记录其籍贯记录为歷城，曾任太子太傅、少傅。中国历代人物传记资料库（CBDB）以人物编号 17425 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BPkVvGjTFDYTZXRFFjgoL6
          claim_id: c_MzT6dX92jgMdMhWqGYpCey
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_MDUU8ZeKKTpran7Pd3YLow
          claim_id: c_MzT6dX92jgMdMhWqGYpCey
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: CBDB:17425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LYQVz212NDq8PUvaBty1BP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（17425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json
            external_identifier: CBDB:17425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.884Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDsNN7SHEKbqWabKDrz26P
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C7EBKSECZ5KCxQWNEGYQnT
          claim_id: c_KDsNN7SHEKbqWabKDrz26P
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: Q45386119
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_mL48zw6XbK6KwhnX3DJ1HQ
          claim_id: c_KDsNN7SHEKbqWabKDrz26P
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: Q45386119
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
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

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寂，宋人物。CBDB 记录其籍贯记录为歷城，曾任太子太傅、少傅。中国历代人物传记资料库（CBDB）以人物编号 17425 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王寂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [CBDB 中国历代人物传记资料库：王寂（17425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json)
