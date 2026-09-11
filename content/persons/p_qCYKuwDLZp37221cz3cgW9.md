---
schema: wang-person/v1
id: p_qCYKuwDLZp37221cz3cgW9
status: active
merged_into: null
display_name: 王慶詒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1wkKsPDH1C1CptSG451t8G
        subject_person_id: p_qCYKuwDLZp37221cz3cgW9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶詒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mTE2fngT4iHxTkraUsmSE
          claim_id: c_1wkKsPDH1C1CptSG451t8G
          source_id: s_VwDwHqSTnQQLMkxkc5vNN2
          stance: supports
          locator: CBDB:637952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637952）
          source: &a1
            id: s_VwDwHqSTnQQLMkxkc5vNN2
            source_type: api_record
            title: 中国历代人物传记资料库：王慶詒（CBDB 637952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637952&o=json
            external_identifier: CBDB:637952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5bt7NL8k3uNzDyXQKLw4j3
        subject_person_id: p_qCYKuwDLZp37221cz3cgW9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶詒，清人物。籍贯壽光，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FTVmywUau3NqapKYL6mp3f
          claim_id: c_5bt7NL8k3uNzDyXQKLw4j3
          source_id: s_VwDwHqSTnQQLMkxkc5vNN2
          stance: supports
          locator: CBDB:637952
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

# 王慶詒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶詒 | accepted |
| bio.summary | 王慶詒，清人物。籍贯壽光，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶詒（CBDB 637952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637952&o=json)
