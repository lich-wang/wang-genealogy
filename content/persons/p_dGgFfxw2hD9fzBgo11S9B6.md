---
schema: wang-person/v1
id: p_dGgFfxw2hD9fzBgo11S9B6
status: active
merged_into: null
display_name: 王嶼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xn1ZXwrpWyXLWUkFxRFKkZ
        subject_person_id: p_dGgFfxw2hD9fzBgo11S9B6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yeZ5p2LGSpNXWJ9pNRpT4D
          claim_id: c_xn1ZXwrpWyXLWUkFxRFKkZ
          source_id: s_txyLnCoG7bYAH5b9c2WtBN
          stance: supports
          locator: CBDB:376106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376106）
          source: &a1
            id: s_txyLnCoG7bYAH5b9c2WtBN
            source_type: api_record
            title: 中国历代人物传记资料库：王嶼（CBDB 376106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376106&o=json
            external_identifier: CBDB:376106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMJVHAF7CZHFQ2iEWcp6S9
        subject_person_id: p_dGgFfxw2hD9fzBgo11S9B6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶼，唐人物。曾任道節度使、光祿寺少卿、節度使。（中国历代人物传记资料库 CBDB 376106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lA60YgONhqdmo1tkZWopm_
          claim_id: c_HMJVHAF7CZHFQ2iEWcp6S9
          source_id: s_txyLnCoG7bYAH5b9c2WtBN
          stance: supports
          locator: CBDB:376106
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

# 王嶼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶼 | accepted |
| bio.summary | 王嶼，唐人物。曾任道節度使、光祿寺少卿、節度使。（中国历代人物传记资料库 CBDB 376106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶼（CBDB 376106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376106&o=json)
