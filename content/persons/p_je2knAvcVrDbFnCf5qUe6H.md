---
schema: wang-person/v1
id: p_je2knAvcVrDbFnCf5qUe6H
status: active
merged_into: null
display_name: 王文濬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5to5PT6wvESiNfJ1x7UvQ
        subject_person_id: p_je2knAvcVrDbFnCf5qUe6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SDYB7xHiuSUFzWtrUnxT44
          claim_id: c_N5to5PT6wvESiNfJ1x7UvQ
          source_id: s_FDVbhZZbBwMEGMXSAKBBCC
          stance: supports
          locator: CBDB:638247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638247）
          source: &a1
            id: s_FDVbhZZbBwMEGMXSAKBBCC
            source_type: api_record
            title: 中国历代人物传记资料库：王文濬（CBDB 638247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638247&o=json
            external_identifier: CBDB:638247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1G7HBCY1wh7qJVUJCoQC3
        subject_person_id: p_je2knAvcVrDbFnCf5qUe6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文濬，清人物。籍贯紹興府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PumwCzjFtUzob7kwd-xF7E
          claim_id: c_t1G7HBCY1wh7qJVUJCoQC3
          source_id: s_FDVbhZZbBwMEGMXSAKBBCC
          stance: supports
          locator: CBDB:638247
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

# 王文濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文濬 | accepted |
| bio.summary | 王文濬，清人物。籍贯紹興府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文濬（CBDB 638247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638247&o=json)
