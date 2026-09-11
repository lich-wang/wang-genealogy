---
schema: wang-person/v1
id: p_zWiynXzguRZYEoB7dy2JD5
status: active
merged_into: null
display_name: 王晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mnyayMG2JdZH7WUNauAdnE
        subject_person_id: p_zWiynXzguRZYEoB7dy2JD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gM9qme1nZPjw3z2JyFKpvb
          claim_id: c_mnyayMG2JdZH7WUNauAdnE
          source_id: s_fSPt8UE2AYz6LsCg2QmsXh
          stance: supports
          locator: CBDB:452487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452487）
          source: &a1
            id: s_fSPt8UE2AYz6LsCg2QmsXh
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 452487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452487&o=json
            external_identifier: CBDB:452487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sdwRaExPHZygGZJ1TUqtE9
        subject_person_id: p_zWiynXzguRZYEoB7dy2JD5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 452487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3UwtAZx1UEdjcSWxRKN1Fo
          claim_id: c_sdwRaExPHZygGZJ1TUqtE9
          source_id: s_fSPt8UE2AYz6LsCg2QmsXh
          stance: supports
          locator: CBDB:452487
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

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| bio.summary | 王晉，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 452487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 452487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452487&o=json)
