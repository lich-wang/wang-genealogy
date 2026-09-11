---
schema: wang-person/v1
id: p_224hGcRnAwShgpwZnShKx7
status: active
merged_into: null
display_name: 王永暄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJmyBCyBBChYGiSwQuQtog
        subject_person_id: p_224hGcRnAwShgpwZnShKx7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永暄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fci832dmQ79BHtPUg9Vpao
          claim_id: c_SJmyBCyBBChYGiSwQuQtog
          source_id: s_MT6oBfjyFwFgpgta6WKXvJ
          stance: supports
          locator: CBDB:638983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638983）
          source: &a1
            id: s_MT6oBfjyFwFgpgta6WKXvJ
            source_type: api_record
            title: 中国历代人物传记资料库：王永暄（CBDB 638983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638983&o=json
            external_identifier: CBDB:638983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQ39Wmr8Q38Tc4JxRAr8n3
        subject_person_id: p_224hGcRnAwShgpwZnShKx7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永暄，清人物。籍贯汝寧府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4OSiHXkSFOh14o2euGXAF5
          claim_id: c_JQ39Wmr8Q38Tc4JxRAr8n3
          source_id: s_MT6oBfjyFwFgpgta6WKXvJ
          stance: supports
          locator: CBDB:638983
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

# 王永暄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永暄 | accepted |
| bio.summary | 王永暄，清人物。籍贯汝寧府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永暄（CBDB 638983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638983&o=json)
