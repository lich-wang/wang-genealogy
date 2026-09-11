---
schema: wang-person/v1
id: p_72APJtdLZuHfTXyD1M2fP3
status: active
merged_into: null
display_name: 王文第
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NLKbukXzkm4kU9bkUF3NGm
        subject_person_id: p_72APJtdLZuHfTXyD1M2fP3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E3nZbNZcKpA53DJ6CnKn9Y
          claim_id: c_NLKbukXzkm4kU9bkUF3NGm
          source_id: s_wQbKJy5HkV5BxsjiScWG8R
          stance: supports
          locator: CBDB:638271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638271）
          source: &a1
            id: s_wQbKJy5HkV5BxsjiScWG8R
            source_type: api_record
            title: 中国历代人物传记资料库：王文第（CBDB 638271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638271&o=json
            external_identifier: CBDB:638271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9HDKeGsHYMtGMX6KCb3hsb
        subject_person_id: p_72APJtdLZuHfTXyD1M2fP3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文第，清人物。籍贯許州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638271）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aoDmBlb83STNIkQZQ4pfF_
          claim_id: c_9HDKeGsHYMtGMX6KCb3hsb
          source_id: s_wQbKJy5HkV5BxsjiScWG8R
          stance: supports
          locator: CBDB:638271
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

# 王文第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文第 | accepted |
| bio.summary | 王文第，清人物。籍贯許州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638271） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文第（CBDB 638271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638271&o=json)
