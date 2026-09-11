---
schema: wang-person/v1
id: p_3Ja96SMGgRPAvkCHhwGAXz
status: active
merged_into: null
display_name: 王道亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4JKiCYiipQALT2BskC5B82
        subject_person_id: p_3Ja96SMGgRPAvkCHhwGAXz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_24MgXgR7tLkiHiH4DBLws9
          claim_id: c_4JKiCYiipQALT2BskC5B82
          source_id: s_Sr47KCHCM22vbmkX33HNoB
          stance: supports
          locator: CBDB:489473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489473）
          source: &a1
            id: s_Sr47KCHCM22vbmkX33HNoB
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 489473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489473&o=json
            external_identifier: CBDB:489473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZXEQYFsZF16LWQEEZQufo
        subject_person_id: p_3Ja96SMGgRPAvkCHhwGAXz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王道亨，清人物。入仕貢生: 副貢，曾任知縣。（中国历代人物传记资料库 CBDB 489473）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UjPzclxJAyrB5Hvs0Wkr57
          claim_id: c_tZXEQYFsZF16LWQEEZQufo
          source_id: s_Sr47KCHCM22vbmkX33HNoB
          stance: supports
          locator: CBDB:489473
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

# 王道亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道亨 | accepted |
| bio.summary | 王道亨，清人物。入仕貢生: 副貢，曾任知縣。（中国历代人物传记资料库 CBDB 489473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道亨（CBDB 489473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489473&o=json)
