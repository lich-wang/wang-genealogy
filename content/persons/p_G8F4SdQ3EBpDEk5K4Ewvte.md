---
schema: wang-person/v1
id: p_G8F4SdQ3EBpDEk5K4Ewvte
status: active
merged_into: null
display_name: 王景藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jirt5495tyRhWcJ2Z6JNHt
        subject_person_id: p_G8F4SdQ3EBpDEk5K4Ewvte
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kNag1qZDx4BaHxQtT9fA6W
          claim_id: c_jirt5495tyRhWcJ2Z6JNHt
          source_id: s_guwNLV7SEd78rDR4CmJJ6F
          stance: supports
          locator: CBDB:638510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638510）
          source: &a1
            id: s_guwNLV7SEd78rDR4CmJJ6F
            source_type: api_record
            title: 中国历代人物传记资料库：王景藩（CBDB 638510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638510&o=json
            external_identifier: CBDB:638510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJ4tNwhoUnuGSTyD85ZktW
        subject_person_id: p_G8F4SdQ3EBpDEk5K4Ewvte
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景藩，清人物。籍贯婺源，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xVlrIPtpke2gvJ1xfP-ihz
          claim_id: c_uJ4tNwhoUnuGSTyD85ZktW
          source_id: s_guwNLV7SEd78rDR4CmJJ6F
          stance: supports
          locator: CBDB:638510
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

# 王景藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景藩 | accepted |
| bio.summary | 王景藩，清人物。籍贯婺源，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景藩（CBDB 638510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638510&o=json)
