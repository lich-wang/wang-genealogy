---
schema: wang-person/v1
id: p_HYmdLuBBRgq18SK3BqngZj
status: active
merged_into: null
display_name: 王壎之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4iPp1BGUzq7JU39nXfB54J
        subject_person_id: p_HYmdLuBBRgq18SK3BqngZj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NJGQ9wGxvCaieuDzn7Nr84
          claim_id: c_4iPp1BGUzq7JU39nXfB54J
          source_id: s_fFcj7Fbuj6uFLEv81UPrfq
          stance: supports
          locator: CBDB:636787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636787）
          source: &a1
            id: s_fFcj7Fbuj6uFLEv81UPrfq
            source_type: api_record
            title: 中国历代人物传记资料库：王壎之（CBDB 636787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636787&o=json
            external_identifier: CBDB:636787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jMzry2ZKKJGnrC6TV81foV
        subject_person_id: p_HYmdLuBBRgq18SK3BqngZj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎之，清人物。籍贯武昌，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__6jPC1qRkFDQb2t50gcMiV
          claim_id: c_jMzry2ZKKJGnrC6TV81foV
          source_id: s_fFcj7Fbuj6uFLEv81UPrfq
          stance: supports
          locator: CBDB:636787
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

# 王壎之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壎之 | accepted |
| bio.summary | 王壎之，清人物。籍贯武昌，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壎之（CBDB 636787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636787&o=json)
