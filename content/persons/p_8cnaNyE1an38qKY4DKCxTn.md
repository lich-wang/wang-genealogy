---
schema: wang-person/v1
id: p_8cnaNyE1an38qKY4DKCxTn
status: active
merged_into: null
display_name: 王吏三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wqUm9i6QpiAz5HzC1XTEgk
        subject_person_id: p_8cnaNyE1an38qKY4DKCxTn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吏三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qt21bC2V925X99Ejgjbmwb
          claim_id: c_wqUm9i6QpiAz5HzC1XTEgk
          source_id: s_J5zixbNAhoaxWJktcvnYEY
          stance: supports
          locator: CBDB:636520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636520）
          source: &a1
            id: s_J5zixbNAhoaxWJktcvnYEY
            source_type: api_record
            title: 中国历代人物传记资料库：王吏三（CBDB 636520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636520&o=json
            external_identifier: CBDB:636520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VAHHerAebBsNJC1rBTm62r
        subject_person_id: p_8cnaNyE1an38qKY4DKCxTn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吏三，清人物。籍贯許州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MIHsA47BKfDNaXgRkGj2dM
          claim_id: c_VAHHerAebBsNJC1rBTm62r
          source_id: s_J5zixbNAhoaxWJktcvnYEY
          stance: supports
          locator: CBDB:636520
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

# 王吏三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吏三 | accepted |
| bio.summary | 王吏三，清人物。籍贯許州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吏三（CBDB 636520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636520&o=json)
